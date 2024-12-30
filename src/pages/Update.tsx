import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Modal} from "../components/Modal";
import {Customer} from "../models/Customer";

export function Update() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch({type:'UPDATE_CUSTOMER', payload:updatedCustomer});
        navigate('/');
    }

    return (
        <div className="customerForm">
            <header>
                <h2 className="formHeader">Update Customer</h2>
            </header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Update
                Customer</Modal>
        </div>
    );
}