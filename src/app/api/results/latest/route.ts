import { NextResponse } from 'next/server';
import { mockResults } from '@/data/mockData';

export async function GET() {
  try {
    // In production, this would be replaced with a real database query
    const latestDate = mockResults[0].date;
    const latestResults = mockResults.filter(result => result.date === latestDate);

    const response = {
      lunchtime: latestResults.find(result => result.type === 'lunchtime') || null,
      teatime: latestResults.find(result => result.type === 'teatime') || null,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching latest results:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 