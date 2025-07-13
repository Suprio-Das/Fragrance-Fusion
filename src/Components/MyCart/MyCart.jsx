import MyCartTable from "./MyCartTable";

const MyCart = () => {
    return (
        <div className="w-[94%] mx-auto">
            <div className="grid lg:grid-cols-5 grid-cols-1">
                {/* Product Section */}
                <div className="col-span-3">
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