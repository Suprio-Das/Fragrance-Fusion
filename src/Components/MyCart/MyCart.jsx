import MyCartTable from "./MyCartTable";
import { FaCartShopping } from "react-icons/fa6"

const MyCart = () => {
    return (
        <div className="w-[98%] mx-auto">
            <h1 className="lg:text-4xl text-xl font-bold text-center my-5">My Cart <FaCartShopping></FaCartShopping> </h1>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 justify-items-center">
                {/* Product Section */}
                <div className="col-span-3 w-full">
                    <MyCartTable></MyCartTable>
                </div>
                {/* Price and Checkout section */}
                <div className="col-span-2">
                    <h1>Price and Checkout section</h1>
                </div>
            </div>
        </div>
    );
};

export default MyCart;