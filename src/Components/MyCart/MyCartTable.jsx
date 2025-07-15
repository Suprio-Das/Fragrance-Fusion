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
                                <div className="join join-vertical lg:join-horizontal">
                                    <button className="btn join-item text-lg btn-sm hover:bg-black hover:text-white">-</button>
                                    <input className="input input-sm join-item w-11 text-center border-1 focus:outline-0 focus:border-gray-400" defaultValue='1'></input>
                                    <button className="btn join-item text-lg btn-sm hover:bg-black hover:text-white">+</button>
                                </div>
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCartTable;