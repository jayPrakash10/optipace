import { Input, Avatar } from "@heroui/react";
import { SearchIcon, Menu, Bell, Info } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 h-16 shadow-sm">
        {/* Left Section - Hamburger & Logo */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="font-bold text-lg text-gray-800">LOGO</div>
        </div>

        {/* Center Section - Search */}
        <Search />

        {/* Right Section - Icons & Avatar */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
            <Info className="w-5 h-5" />
          </button>
          <div className="ml-2">
            <Avatar 
              name="O P"
              className="w-8 h-8 text-sm"
              classNames={{
                base: "bg-gray-200 text-gray-700"
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const Search = () => {
  return (
    <div className="w-full max-w-[450px] px-4">
      <Input
        placeholder="Search"
        className="w-full"
        classNames={{
          inputWrapper: "h-10 bg-white border border-gray-200 hover:bg-white focus-within:bg-white focus-within:border-blue-500",
          input: "text-sm"
        }}
        startContent={<SearchIcon className="w-4 h-4 text-gray-400" />}
      />
    </div>
  );
};

export default Header;
