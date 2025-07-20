const PageTitle = ({ title }) => {
    return (
        <div className="page-title w-full h-52 flex justify-center items-center text-white">
            <h1 className="lg:text-5xl font-bold">{title}</h1>
        </div>
    );
};

export default PageTitle;