import { formatPhoneNumber } from '@/utils/phone';
import fs from 'fs';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

interface RequestBody {
  name: string;
  phone: string;
  message: string;
  email?: string;
  source?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
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

    // Получаем информацию о запросе
    const userAgent = req.headers.get('user-agent') || '';
    const ipAddress =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'Unknown';
    const referer = req.headers.get('referer') || '';

    const credentialsPath = path.join(process.cwd(), 'sheets.json');
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Форматируем данные для записи
    const rowData = [
      'Новая', // Статус заявки
      name, // Имя
      formatPhoneNumber(phone), // Отформатированный телефон
      message, // Сообщение
      getCurrentDateTime(), // Дата и время заявки
      source, // Источник заявки (например, "contact_form", "callback_request")
      utm_source, // UTM-метка источника
      utm_medium, // UTM-метка канала
      utm_campaign, // UTM-метка кампании
      userAgent, // User Agent браузера
      ipAddress, // IP адрес
      referer, // Реферер
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'list!A:M',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json(
      { message: 'Data sent to Google Sheets successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return NextResponse.json(
      {
        message: 'Failed to send data to Google Sheets',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
