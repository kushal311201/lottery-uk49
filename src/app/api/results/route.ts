import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mockResults } from '@/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const drawType = searchParams.get('drawType');

    // In production, this would be replaced with a real database query
    let filteredResults = [...mockResults];

    if (startDate) {
      filteredResults = filteredResults.filter(result => result.date >= startDate);
    }
    if (endDate) {
      filteredResults = filteredResults.filter(result => result.date <= endDate);
    }
    if (drawType) {
      filteredResults = filteredResults.filter(result => result.type === drawType);
    }

    const total = filteredResults.length;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedResults = filteredResults.slice(startIndex, endIndex);

    return NextResponse.json({
      data: paginatedResults,
      total,
      page,
      pageSize,
    });
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 