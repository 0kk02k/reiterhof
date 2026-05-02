import { NextResponse } from 'next/server';

/**
 * API Route: Contact Form Submission
 * Mock handler to demonstrate backend integration.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, you would send an email here (e.g. via Resend or Nodemailer)
    console.log('New Contact Submission:', body);

    // Simulate database/API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: 'Nachricht erfolgreich empfangen' 
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Fehler beim Senden der Nachricht' 
    }, { status: 500 });
  }
}
