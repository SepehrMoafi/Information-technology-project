import React, {useEffect} from "react";
import Jumbotron from "../components/Jumbotron";
import {useMutation} from '@apollo/react-hooks';
import {ADD_ORDER} from "../utils/mutations";
import {idbPromise} from "../utils/helpers";

function Success() {

    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);
            if (products.length) {
                const {data} = await addOrder({variables: {products}});
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            setTimeout(() => {
                window.location.assign("/");
            }, 3000);
        }

        saveOrder();
    }, [addOrder]);


    return (
        <div>
            <Jumbotron>
                <h1>Success!</h1>
                <h2>
                    ممنون برای خرید!
                </h2>
                <h2>
                    شما به صفحه اصلی هدایت میشوید </h2>
            </Jumbotron>
        </div>
    );
};

export default Success;