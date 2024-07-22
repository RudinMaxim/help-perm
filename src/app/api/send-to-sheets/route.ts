// app/api/send-to-sheets/route.ts

import fs from 'fs';
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    const credentialsPath = path.join(process.cwd(), 'sheets.json');
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'list!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, phone, message]],
      },
    });

    return NextResponse.json({ message: 'Data sent to Google Sheets successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    return NextResponse.json({ message: 'Failed to send data to Google Sheets' }, { status: 500 });
  }
}