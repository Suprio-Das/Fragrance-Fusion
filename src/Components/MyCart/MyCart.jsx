import MyCartTable from "./MyCartTable";
import BdDistricts from '../../../public/bd-districts.json';
import { FaCartShopping } from "react-icons/fa6"
import { useState } from "react";

const MyCart = () => {
    const [showAddress, setShowAddress] = useState(false);
    const districts = BdDistricts.districts;
    // Address Controller
    const showUpdateAddress = () => {
        setShowAddress(!showAddress);
    }
    const updateAddress = () => {
        console.log("Update Address Function clicked!!");
    }
    return (
        <div className="w-[98%] mx-auto">
            <h1 className="lg:text-4xl text-xl font-bold my-5 flex items-center justify-center gap-2">My Cart <FaCartShopping></FaCartShopping> </h1>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 justify-items-center">
                {/* Product Section */}
                <div className="lg:col-span-3 w-full">
                    <MyCartTable></MyCartTable>
                </div>
                {/* Price and Checkout section */}
                <div className="lg:col-span-2 w-full">
                    <div className="border-2 border-gray-400 p-3">
                        <h1 className="lg:text-2xl font-semibold">Cart Totals</h1>
                        <div className="flex justify-between items-center mt-8">
                            <p className="text-xl font-semibold">Subtotal</p>
                            <p>950.0Tk</p>
                        </div>
                        <hr className="border-gray-300 my-3" />
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">Shipping</p>
                            <div className="text-right">
                                <p className="text-gray-500">Flat rate: <span className="text-black font-semibold">100.00Tk</span></p>
                                <p className="text-gray-500">Shipping to Dhaka</p>
                                <p className="text-blue-500 font-semibold cursor-pointer" onClick={showUpdateAddress}>Change Address</p>
                                {/* Change Address */}
                                {
                                    showAddress === true ? <div className="text-right address">
                                        <form action="">
                                            <div className="mt-2">
                                                <label>Country / Region<sup className="text-red-500 text-sm">*</sup></label>
                                                <select defaultValue="Select Country" className="select">
                                                    <option>Bangladesh</option>
                                                </select>
                                            </div>
                                            <div className="mt-2">
                                                <label>District<sup className="text-red-500 text-sm">*</sup></label>
                                                <select defaultValue="District" className="select">
                                                    <option disabled={true}>Select District</option>
                                                    {
                                                        districts.map(district => <option key={district.id}>{district.name}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div className="mt-2">
                                                <label>City / Town<sup className="text-red-500 text-sm">*</sup></label>
                                                <input type="text" className="input" placeholder="Type here" />
                                            </div>
                                            <div className="mt-2">
                                                <label>Local Address<sup className="text-red-500 text-sm">*</sup></label>
                                                <input type="text" className="input" placeholder="Type here" />
                                            </div>
                                            <button onClick={updateAddress} className="btn primary-btn my-2">Update</button>
                                        </form>
                                    </div> : ''
                                }
                            </div>
                        </div>
                        <hr className="border-gray-300 my-3" />
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">Total</p>
                            <p className="font-semibold">1050.00Tk</p>
                        </div>
                        <button className="btn w-full mt-6 mb-3 primary-btn">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;