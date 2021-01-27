import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import SweetAlert from 'sweetalert2-react';

const StripeCheckoutButton = ({ price }) => {
  const [show, setShow] = useState(false);
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51ICdr9LN7HUSK1rupJjaRUWHkAcm1ziP0aQV9WYt4Wj2113gLnU2AAqWPHObKeBpdz8cNXhwEs59BsHw01cTpusD007eOhoGu5';

  const onToken = (token) => {
    //console.log(token);
    //alert('Payment Succesful!');
    setShow(true);
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="GG Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
      <SweetAlert
        show={show}
        title="Success!"
        text="Your payment was successful."
        onConfirm={() => setShow(false)}
      />
    </div>
  );
};

export default StripeCheckoutButton;
