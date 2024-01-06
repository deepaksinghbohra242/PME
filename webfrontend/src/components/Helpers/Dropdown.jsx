import React, { useState } from 'react';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Menu } from '@headlessui/react';



function Dropdown({links , dropDownName}) {
  const [selectedItem, setSelectedItem] = useState(dropDownName);

  return (
    <>
      <Menu>
        <Menu.Button className="w-full flex justify-between text-xl items-center border font-medium font-serif border-solid border-gray-300 shadow-sm rounded-md p-1 px-4">
          {selectedItem}
          <IoIosArrowDropdownCircle  />
        </Menu.Button>
        <Menu.Items className="max-h-40 overflow-y-auto">
          {links.map((link) => (
            <Menu.Items
              key={link.label}
              onClick={() => setSelectedItem(link.label)}
              className="cursor-pointer hover:bg-blue-500 hover:text-white w-full items-center rounded-md p-3"
            >
              {link.label}
            </Menu.Items>
          ))}
        </Menu.Items>
      </Menu>
    </>
  );
}

export default Dropdown;
