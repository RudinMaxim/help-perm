import { formatPhoneNumber } from '@/utils/phone';
import { NextRequest, NextResponse } from 'next/server';

const CMS_URL = process.env.CMS_INTERNAL_URL || 'http://localhost:1337';

interface RequestBody {
  name: string;
  phone: string;
  message: string;
  consentGiven: boolean;
  source?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();
    const {
      name,
      phone,
      message,
      consentGiven,
      source = '',
    } = body;

    if (!consentGiven) {
      return NextResponse.json(
        { message: 'Consent to personal data processing is required' },
        { status: 400 }
      );
    }

    const res = await fetch(`${CMS_URL}/api/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          name,
          phone: formatPhoneNumber(phone),
          message,
          source,
          consentGiven: true,
          consentAt: new Date().toISOString(),
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
