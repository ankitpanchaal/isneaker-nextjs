import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51MhZufSIj52TTbR0ANC1H0WNzaax7rJomynQYiIZJv2Jun45wez9KL2fI4nwomNulxqjYmNOrAyNjrUxFVDWyd2V00jPLbszK1");

let YOUR_URL = "https://isneaker-nextjs.vercel.app"

export default async function handler(req, res) {
  const img = req.body.image[0].asset._ref;
  const newImage = img.replace('image-', 'https://cdn.sanity.io/images/a3n51tfn/production/').replace('-webp', '.webp');

  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'inr',
              product_data: {
                name: req.body.name,
                images: [newImage],
              },
              unit_amount: req.body.price * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_URL}/success`,
        cancel_url: `${YOUR_URL}/cancel`,
      });

      res.json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}