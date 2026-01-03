import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const WOMPI_API_URL = process.env.NEXT_PUBLIC_WOMPI_ENV || 'https://sandbox.wompi.co';
const WOMPI_PRIVATE_KEY = process.env.WOMPI_PRIVATE_KEY;
const WOMPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received body:', body);
    
    const { ticketId, amount, email } = body;

    if (!ticketId || !amount || !email) {
      console.error('Missing fields:', { ticketId, amount, email });
      return NextResponse.json({ 
        error: 'Missing required fields',
        received: { ticketId, amount, email }
      }, { status: 400 });
    }

    // Generate unique reference
    const reference = `ticket-${ticketId}-${uuidv4()}`;
    
    console.log('Creating payment with:', { reference, amount, email });

    // Create Wompi transaction link (simplified - just a payment link)
    const response = await fetch(`${WOMPI_API_URL}/v1/payment_links`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${WOMPI_PRIVATE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Boleta #${ticketId}`,
        description: `Compra de boleta para rifa`,
        single_use: false,
        collect_shipping: false,
        currency: 'COP',
        amount_in_cents: amount * 100,
        reference: reference,
      }),
    });

    const responseText = await response.text();
    
    console.log('Wompi response status:', response.status);
    console.log('Wompi response text:', responseText);
    
    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText) as { data: { id: string; permalink: string } };
    } catch (parseError) {
      console.error('Failed to parse Wompi response as JSON:', parseError);
      console.error('Response status:', response.status);
      console.error('Response text:', responseText);
      return NextResponse.json({ 
        error: 'Invalid response from payment gateway',
        status: response.status 
      }, { status: 502 });
    }

    console.log('Parsed Wompi data:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('Wompi API error:', data);
      return NextResponse.json({ error: 'Failed to create payment', details: data }, { status: 500 });
    }

    // Wompi returns the payment link ID, we need to construct the full URL
    const paymentLinkId = data.data?.id;
    
    if (!paymentLinkId) {
      console.error('Missing payment link ID in response. Full data:', data);
      return NextResponse.json({ error: 'No payment link ID in response', fullResponse: data }, { status: 500 });
    }

    // Construct the Wompi checkout URL
    const paymentLink = `https://checkout.wompi.co/l/${paymentLinkId}`;
    
    console.log('Payment link created:', paymentLink);

    return NextResponse.json({ payment_link: paymentLink }, { status: 200 });
  } catch (error) {
    console.error('Error creating payment:', error);
    return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
  }
}