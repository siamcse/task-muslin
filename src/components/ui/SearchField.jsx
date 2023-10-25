
const SearchField = () => {
    return (
        <div className='mt-5 w-5/6 mx-auto sm:mx-0 sm:w-1/2'>
            <div className='py-3 px-3 flex bg-white rounded shadow shadow-gray'>
                <input type="text" className='px-3 py-1 outline-none w-full' placeholder='Search Products' />
                <button className='bg-orange-600 text-white px-3 rounded'>Search</button>
            </div>
        </div>
    );
};

export default SearchField;