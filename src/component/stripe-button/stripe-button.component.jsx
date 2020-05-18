import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_G77Fc23nnTnDxWq8cbqqQxyH00xmcLuZKS';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');

    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Pigeon Hand-Craft Wear LTD.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            image='https://lh3.googleusercontent.com/XOBRfA-eyFUiZwfejMCFoDtXC5UWKuqGXxgnQg6I0BATz6iaSbpi1vXWSwTyQfG2uQQcgw=s85'
        />
    )

}

export default StripeCheckoutButton;