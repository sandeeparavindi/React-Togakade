import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Customer} from "../models/Customer";
import {Modal} from "../components/Modal";

export function Delete() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function handleSubmit() {
        const deleteCustomer = new Customer(name,email,phone);
        dispatch({type:'DELETE_CUSTOMER',payload:deleteCustomer});
        navigate('/');
    }

    return (
        <div className="customerForm">
            <header>
                <h2 className="formHeader">Delete Customer</h2>
            </header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>Delete
                Customer</Modal>
        </div>
    );
}