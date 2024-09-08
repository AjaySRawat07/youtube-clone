const Loading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-12 my-1 mt-6">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="h-40 md:h-48 lg:h-56 xl:h-56 flex-none w-full bg-gray-400 animate-pulse rounded-xl"
                ></div>
            ))}
        </div>
    );
};

export default Loading;
