import { NextResponse } from 'next/server';

// Verify admin authentication
export async function GET(request) {
  try {
    const token = request.cookies.get('admin-token')?.value;
    
    if (!token) {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      );
    }
    
    // In a real app, you'd verify the token against a database
    // For now, we'll just check if it exists and is valid format
    if (token && token.length === 64) {
      return NextResponse.json({
        success: true,
        authenticated: true
      });
    } else {
      return NextResponse.json(
        { success: false, authenticated: false },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth verification error:', error);
    return NextResponse.json(
      { success: false, authenticated: false },
      { status: 500 }
    );
  }
}
