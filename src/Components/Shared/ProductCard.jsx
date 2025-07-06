import { CiHeart } from "react-icons/ci";
const ProductCard = () => {
    const AddToFavourite = () => {
        console.log("Added to the Favourite");
    }
    return (
        <div className="w-64 product_card">
            {/* Product Image */}
            <div className="bg-[#f4f5f9] p-3">
                <div className="border-1 relative">
                    <CiHeart className="text-3xl absolute right-1 top-1" onClick={AddToFavourite}></CiHeart>
                    <img src='https://8ded8880.delivery.rocketcdn.me/themes/cosmecos-new/wp-content/uploads/2021/01/img_2-3-545x654.jpg' alt="" className="w-72 product_img" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;