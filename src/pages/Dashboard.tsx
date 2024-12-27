import {useContext} from "react";
import {Customer} from "../models/Customer";
import {CustomerContext} from "../store/CustomerProvider";
import "./Dashboard.css"

export function Dashboard() {
    const [customers, dispatch] = useContext(CustomerContext);
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-left">Dashboard</h1>

            {/* Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section: Customers Table */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Customers</h1>
                    <table className="table-auto border-collapse w-full text-left">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="custom-table-thead">Name</th>
                            <th className="custom-table-thead">Email</th>
                            <th className="custom-table-thead">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer: Customer, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-blue-100 transition-colors`}
                            >
                                <td className="table-data">{customer.name}</td>
                                <td className="table-data text-gray-600">{customer.email}</td>
                                <td className="table-data">{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Right Section: Item Cards */}
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Items</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customers.map((customer: Customer, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 border border-gray-300 hover:shadow-xl transition-shadow"
                            >
                                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                                    {customer.name}
                                </h2>
                                <p className="text-gray-600 mb-1">{customer.email}</p>
                                <p className="text-gray-600">{customer.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
