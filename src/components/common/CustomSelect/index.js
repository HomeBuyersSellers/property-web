import React, { useState,useEffect } from 'react';

const CustomSelect = ({ options, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState( defaultValue || []);
  const [toggleDrop, setToggleDrop] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setToggleDrop(false)
  };
  useEffect(() => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchInput, options]);

  return (
    <div className="text-left select-none">
      <button
        onClick={() => setToggleDrop(!toggleDrop)}
        className="flex items-center py-1 font-medium text-gray-700 dark:text-gray-700 xs:text-xs text-sm border-0 border-b-2 border-green-600 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary-color"
      >
        <span className='flex-1'>{selectedOption}</span>
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {toggleDrop &&
        <div className="absolute left-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <label htmlFor="country-search" className="sr-only">Search</label>
        <div className="relative w-full px-2 py-2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-3 h-3 m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          <span className="sr-only">Search</span>
            </div>
            <input 
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            id="country-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-color focus-visible:none focus:border-primary-color block w-full pl-7 p-2  dark:placeholder-gray-400 " 
             />
        </div>
          <div className="py-1 scrollbar-options" data-te-perfect-scrollbar-init>
            {filteredOptions.length > 0 && filteredOptions.map((val, i) => (
              <div
                className="text-gray-700 block p-2 text-sm cursor-pointer hover:bg-gray-200 hover:text-primary-color hover-bg-opacity-70"
                key={i}
                onClick={() => handleOptionSelect(val)}
              >
                {val.label}
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default CustomSelect;
