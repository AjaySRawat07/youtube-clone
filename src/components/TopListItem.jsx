import { useUtils } from "../context/UtilsProvider";

const TopListItem = () => {
    const {theme} = useUtils();
    const Items = [
        'All', 'Music', 'Science fiction', 'Computer Programming', 'Live', 'NBA',
        'Microsoft', 'React Router', 'c++', 'cricket', 'Avengers', 'Deadpool',
        'WWE', 'Delhi', 'Uttarakhand', 'Nike', 'Basketball', 'GYM'
    ];

    return (
        <div className="flex overflow-x-auto  custom-scrollbar-hide px-4">
            <div className="flex space-x-4 flex-nowrap">
                {Items.map((category) => {
                    return (
                        <div
                            key={category}
                            className={`mb-2 ml-2 flex-none whitespace-nowrap border-gray-200 border-2 rounded-lg py-1 px-4 hover:bg-gray-800 hover:text-white cursor-pointer font-medium ${theme ? "bg-gray-200 text-black":"bg-black text-white"}`}
                        >
                            {category}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopListItem;
