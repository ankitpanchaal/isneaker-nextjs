import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51MhZufSIj52TTbR05hE3PVs4S2Z2PQxGY57BXCGn8fU9Sky8UtmC0QR66AfXgLlZWQNQBmkD4LWu9YkyS0DG2hiH00aPNazc5e');
    }

    return stripePromise;
}

export default getStripe;