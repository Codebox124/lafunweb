import { NextResponse } from 'next/server';
import crypto from 'crypto';

// Simple admin authentication
export async function POST(request) {
  try {
    const { password } = await request.json();
    
    // Get admin password from environment or use default
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (password === adminPassword) {
      // Create a simple session token
      const token = crypto.randomBytes(32).toString('hex');
      
      // In a real app, you'd store this in a database or Redis
      // For now, we'll use a simple approach
      const response = NextResponse.json({
        success: true,
        message: 'Login successful',
        token: token
      });
      
      // Set HTTP-only cookie
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 hours
      });
      
      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    );
  }
}
