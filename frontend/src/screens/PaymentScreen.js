import React, {useState, useEffect} from 'react';
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import {Col} from "react-bootstrap";
import {savePaymentMethod} from "../actions/cartActions";

function PaymentScreen({ history }) {

    const  cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('CashOnDelivery')

    if (!shippingAddress.address){
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <Form onSubmit={submitHandler}>
                <Form.Label as='legend'>
                    Select Method
                </Form.Label>
                <Form.Group>
                    <Col>
                        <Form.Check
                        type = 'radio'
                        label = 'Cash on Delivery'
                        id='CashOnDelivery'
                        name='paymentMethod'
                        checked
                        onChange={(e)=>setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
}

export default PaymentScreen;