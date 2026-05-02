import { NextResponse } from 'next/server';

/**
 * API Route: Contact Form Submission
 * Enhanced handler with validation and structured responses.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Bitte füllen Sie alle Pflichtfelder aus.' 
      }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' 
      }, { status: 400 });
    }

    // Logging for development (In production, use a service like Resend or Nodemailer)
    console.log('--- New Contact Submission ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message Length:', message.length);
    console.log('------------------------------');

    /**
     * PROD TIP:
     * To send real emails, use:
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({ ... });
     */

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return NextResponse.json({ 
      success: true, 
      message: 'Ihre Nachricht wurde erfolgreich gesendet.' 
    }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Ein technischer Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
    }, { status: 500 });
  }
}
