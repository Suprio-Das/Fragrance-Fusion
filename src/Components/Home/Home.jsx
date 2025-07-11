import ProductCard from "../Shared/ProductCard";

const Home = () => {
    return (
        <div className="w-[94%] mx-auto">
            <header className="hero min-h-[calc(100vh-100px)] mt-4 rounded-md flex flex-col justify-center items-start p-11">
                <h1 className="lg:text-5xl text-2xl font-bold">Fragrance Fusion</h1>
                <p className="text-xl mt-2">Elegance in Every Drop.</p>
                <button className="primary-btn btn mt-3">Shop Now</button>
            </header>
            {/* Top Products */}
            <section className="my-11">
                <h1 className="text-2xl uppercase text-center">Client Selected</h1>
                <h1 className="lg:text-5xl text-3xl font-bold uppercase text-center my-3">Top product</h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-7 justify-items-center my-11">
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                    <ProductCard></ProductCard>
                </div>
            </section>
        </div>
    );
};

export default Home;