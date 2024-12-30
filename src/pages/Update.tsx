import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Modal} from "../components/Modal";
import {Customer} from "../models/Customer";
import {Item} from "../models/Item.ts";
import {ItemContext} from "../store/ItemProvider.tsx";

export function Update() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);
    const [items, item_dispatch] = useContext(ItemContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [item_code, setItemCode] = useState("");
    const [category, setCategory] = useState("");
    const[unit_price, setUnit_price] = useState("");
    const[qty, setQty] = useState("");

    function handleSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        dispatch({type:'UPDATE_CUSTOMER', payload:updatedCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const updatedItem = new Item(item_code,category,unit_price,qty);
        item_dispatch({type:'UPDATE_ITEM', payload:updatedItem});
        navigate('/');
    }

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
                <div className="form">
                    <header>
                        <h2 className="formHeader">Update Customer</h2>
                    </header>
                    <Modal
                        type="customer"
                        handleSubmit={handleSubmit}
                        setName={setName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                    >
                        Update Customer
                    </Modal>
                </div>
                <div className="form">
                    <header>
                        <h2 className="formHeader">Update Item</h2>
                    </header>
                    <Modal
                        type="item"
                        handleSubmit={handleItemSubmit}
                        setItem_code={setItemCode}
                        setCategory={setCategory}
                        setUnit_price={setUnit_price}
                        setQty={setQty}
                    >
                        Update Item
                    </Modal>
                </div>
            </div>
        </div>
    );
}