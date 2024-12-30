import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {Modal} from "../components/Modal";
import "./CustomerForms.css";

export function Add() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({type:'ADD_CUSTOMER', payload:newCustomer});
        navigate('/');
    }

    return (
        <div className="customerForm">
            <header>
                <h2 className="formHeader">Add Customer</h2>
            </header>
            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Add
                Customer</Modal>
        </div>
    );
}