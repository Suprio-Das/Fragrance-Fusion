import MyCartTable from "./MyCartTable";
import { FaCartShopping } from "react-icons/fa6"

const MyCart = () => {
    return (
        <div className="w-[98%] mx-auto">
            <h1 className="lg:text-4xl text-xl font-bold my-5 flex items-center justify-center gap-2">My Cart <FaCartShopping></FaCartShopping> </h1>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 justify-items-center">
                {/* Product Section */}
                <div className="lg:col-span-3 w-full">
                    <MyCartTable></MyCartTable>
                </div>
                {/* Price and Checkout section */}
                <div className="lg:col-span-2">
                    <div className="border-2 border-gray-400 p-3">
                        <h1 className="lg:text-2xl font-semibold">Cart Totals</h1>
                        <p className="text-xl font-semibold">Subtotal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;