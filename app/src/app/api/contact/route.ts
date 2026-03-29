import { formatPhoneNumber } from '@/utils/phone';
import { NextRequest, NextResponse } from 'next/server';

const CMS_URL = process.env.CMS_INTERNAL_URL || 'http://localhost:1337';

interface RequestBody {
  name: string;
  phone: string;
  message: string;
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();
    const {
      name,
      phone,
      message,
      source = '',
      utm_source = '',
      utm_medium = '',
      utm_campaign = '',
    } = body;

    const userAgent = req.headers.get('user-agent') || '';
    const ipAddress =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'Unknown';
    const referer = req.headers.get('referer') || '';

    const res = await fetch(`${CMS_URL}/api/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          name,
          phone: formatPhoneNumber(phone),
          message,
          source,
          utmSource: utm_source,
          utmMedium: utm_medium,
          utmCampaign: utm_campaign,
          userAgent,
          ipAddress,
          referer,
        },
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error('CMS application create error:', error);
      return NextResponse.json(
        { message: 'Failed to submit application' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
