import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
const ProductCard = ({ button1, button2 }) => {
    const [favStatus, setFavStatus] = useState(false);
    const AddToFavourite = () => {
        setFavStatus(!favStatus);
    }
    return (
        <div className="w-64 product_card">
            {/* Product Image */}
            <div className="bg-[#f4f5f9] p-3">
                <div className="border-1 relative">
                    {
                        favStatus === true ? <CiHeart className="text-3xl absolute right-1 top-1 cursor-pointer" onClick={AddToFavourite}></CiHeart> :
                            <IoMdHeart className="text-2xl absolute right-1.5 top-1.5 text-dark cursor-pointer" onClick={AddToFavourite}></IoMdHeart>
                    }
                    <img src='https://8ded8880.delivery.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/img_2-3-545x654.jpg' alt="" className="w-72 product_img" />
                </div>
            </div>
            <h1 className="text-xl text-center my-2">Vampire Blood</h1>
            <p className="text-lg font-semibold text-center">$49.99 <strike className="font-light ms-2">$69.99</strike></p>
            {/* Product Actions */}
            <div className="grid grid-cols-2 border-1 my-3">
                <button className="btn border-r-1 border-r-black rounded-none product-action-btn">{button1}</button>
                <button className="btn product-action-btn rounded-none">{button2}</button>
            </div>
        </div>
    );
};

export default ProductCard;