const MyCartTable = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className="text-lg">x</th>
                            <td className="flex justify-center items-center">
                                <img src='https://perfumeshop.com.bd/wp-content/uploads/2025/03/1000048584-1.png' alt="" className="w-24" />
                                <h1 className="font-semibold">Dirham Silver Roll-On Perfume Oil - CPO 10ML by Ard Al Zaafaran</h1>
                            </td>
                            <td>400.00</td>
                            <td>
                                <div className="flex justify-center items-center">
                                    <span className="border-2 border-gray-400 w-5 py-2 px-2 flex items-center justify-center hover:bg-black hover:text-white hover:border-1">-</span>
                                    <input type="text" name="quantity" className="w-7 py-2 text-center outline-0 border-t-2 border-b-2 text-sm border-gray-400" />
                                    <span className="border-2 border-gray-400 w-5 py-2 px-1 flex items-center justify-center hover:bg-black hover:text-white hover:border-1">+</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCartTable;