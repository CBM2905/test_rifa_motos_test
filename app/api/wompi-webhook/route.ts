import { NextResponse } from 'next/server';
import crypto from 'crypto';

const WOMPI_EVENTS_SECRET = process.env.WOMPI_EVENTS_SECRET;

export async function POST(request: Request) {
  try {
    const signature = request.headers.get('X-Wompi-Signature');
    let body = '';

    try {
      body = await request.text();
    } catch (readError) {
      console.error('Error reading request body:', readError);
      return NextResponse.json({ error: 'Failed to read request body' }, { status: 400 });
    }

    // Validate body is not empty
    if (!body || typeof body !== 'string' || body.trim() === '') {
      console.error('Empty or invalid request body. Received:', body);
      return NextResponse.json({ error: 'Empty request body' }, { status: 400 });
    }

    // Validate signature
    const hash = crypto
      .createHmac('sha256', WOMPI_EVENTS_SECRET!)
      .update(body)
      .digest('hex');

    if (hash !== signature) {
      console.error('Invalid signature. Expected:', hash, 'Received:', signature);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    let event;
    try {
      event = JSON.parse(body);
      console.log('Successfully parsed webhook event:', event);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      console.error('Body that failed to parse:', body);
      console.error('Body length:', body.length);
      console.error('Body first 100 chars:', body.substring(0, 100));
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const { data } = event;

    if (!data || !data.transaction) {
      return NextResponse.json({ error: 'Invalid event data' }, { status: 400 });
    }

    const { status, reference } = data.transaction;

    // Log the payment event
    console.log('Payment webhook received:', { status, reference, timestamp: new Date().toISOString() });

    if (status === 'APPROVED') {
      console.log('✅ Payment APPROVED for reference:', reference);
      // TODO: Save to database when ready
    } else if (status === 'DECLINED') {
      console.log('❌ Payment DECLINED for reference:', reference);
      // TODO: Update status when database is ready
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}