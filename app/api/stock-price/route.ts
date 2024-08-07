// app/api/stock-price/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/INTC?interval=1m');
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return NextResponse.json({ error: 'Error fetching stock data' }, { status: 500 });
  }
}