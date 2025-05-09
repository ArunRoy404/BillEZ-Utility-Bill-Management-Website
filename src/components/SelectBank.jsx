const SelectBank = ({bank, setBank}) => {
    return (
        <details className="dropdown">
            <summary className="btn  m-1">
                {bank || 'Select bank card'}
            </summary>
            <ul className="text-black menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=>{setBank('DBBL')}} >DBBL</a></li>
                <li><a onClick={()=>{setBank('City bank')}} >City Bank</a></li>
                <li><a onClick={()=>{setBank('Bank Asia')}} >Bank Asia</a></li>
            </ul>
        </details>
    );
};

export default SelectBank;