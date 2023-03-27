import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import Client from '../../utils/Client';
import { urlFor } from '../../Components/Products/Product/Product';
import Form from '../../Components/summry/form';
import { useRouter } from 'next/router';
import getStripe from '@/utils/getStripe';

const QUERYS = gql`
mutation($data:String!){
    addCard(orderObj:$data){
        orderObj
    }
}
`;

const Summry = () => {

    const Message = ({ message }) => (
        <section>
            <p>{message}</p>
        </section>
    );

    const [message, setMessage] = useState("");

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay />
    );
}

export default Summry

const ProductDisplay = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("+1 ")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")

    const [data, setData] = useState();
    const [currSize, setCurrSize] = useState(4.5);

    const router = useRouter();
    const id = router.query.summry

    const handleCheckout = () => {

    }

    useEffect(() => {
        Client
            .fetch(
                `*[_type == "product" && slug.current == '${id}']{
                    _id,
                    name,
                    image,
                    price,
                    slug,
                }`
            )
            .then((data) => setData(data))
            .catch(console.error);
    }, [id]);

    let currentProduct = data?.[0]

    let OrderData = `
    name : ${name},
    email: ${email},
    phone: ${phone},
    Zip: ${zipCode},
    city: ${city},
    addy: ${address},
    size: ${currSize},
    product id : ${currentProduct?._id}
    `;

    const [Add] = useMutation(QUERYS, {
        variables: { data: OrderData },
        refetchQueries: [{ query: QUERYS }],
    });


    const HadelMakePayment = async (e) => {
        // await Add(OrderData);

        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentProduct),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();
        // toast.loading('Redirecting...');
        // console.log("data", data);
        stripe.redirectToCheckout({ sessionId: data.id });
    }


    return (
        <div className='summryContainer' >
            <div className="summLayout">
                <h2>YOUR PRODUCT</h2>
                <div className="prodContainer">
                    <img
                        src={currentProduct?.image?.[0] && urlFor(currentProduct?.image?.[0])?.url()}
                        alt=""
                    />
                    <div className="prodText">
                        <h4>{currentProduct?.name} </h4>
                        <h4>Price : ${currentProduct?.price}</h4>
                    </div>
                </div>

                <h3>Select Your Size :</h3>
                <div className="sizeContainer">
                    <div className="box" onClick={() => setCurrSize(4.5)} style={{ background: currSize == 4.5 && '#AC96F6' }} >
                        4.5
                    </div>
                    <div className="box" onClick={() => setCurrSize(5.5)} style={{ background: currSize == 5.5 && '#AC96F6' }} >
                        5.5
                    </div>
                    <div className="box" onClick={() => setCurrSize(6.5)} style={{ background: currSize == 6.5 && '#AC96F6' }}>
                        6.5
                    </div>
                    <div className="box" onClick={() => setCurrSize(7.5)} style={{ background: currSize == 7.5 && '#AC96F6' }}>
                        7.5
                    </div>
                    <div className="box" onClick={() => setCurrSize(8.5)} style={{ background: currSize == 8.5 && '#AC96F6' }}>
                        8.5
                    </div>
                    <div className="box" onClick={() => setCurrSize(9.5)} style={{ background: currSize == 9.5 && '#AC96F6' }}>
                        9.5
                    </div>
                </div>
                <a href="https://www.relaxofootwear.com/size-guide" target="_blank">See Size Chart</a>

                <div className="form">
                    <Form
                        setName={setName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                        setAddress={setAddress}
                        setCity={setCity}
                        setZipCode={setZipCode}
                    />
                </div>

                <div
                    style={{ marginTop: 10 }}
                    className="cart-buttons secondBTN">
                    <button
                        className="add-to-cart-button"
                        onClick={HadelMakePayment}
                    >
                        Make Payment
                    </button>
                </div>
            </div>
        </div>
    )
}