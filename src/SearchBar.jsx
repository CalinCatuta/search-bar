import React, { useState } from "react";
import { ReactComponent as LupeIcon } from "./icons/lupe.svg"; // Example paths to icons
import { ReactComponent as MapPinIcon } from "./icons/map-pin.svg";
import { ReactComponent as XIcon } from "./icons/x.svg";

const SearchBar = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const handleClearJobTitle = () => setJobTitle("");
  const handleClearLocation = () => setLocation("");

  const handleFocus = (input) => setFocusedInput(input);
  const handleBlur = () => setFocusedInput(null); // Optional, depending on whether you want to hide the dropdown when blurred

  const jobSuggestions = [
    "Relatii clineti",
    "Mecanic Auto",
    "Web Developer (somer)",
    "Back-end Developer PHP",
    "Relatii clineti",
    "Mecanic Auto",
    "Web Developer (somer)",
    "Back-end Developer PHP",
    "Relatii clineti",
    "Mecanic Auto",
    "Web Developer (somer)",
    "Back-end Developer PHP",
    "Relatii clineti",
    "Mecanic Auto",
    "Web Developer (somer)",
    "Back-end Developer PHP",
  ];
  const locationSuggestions = [
    "București",
    "Cluj",
    "Timișoara",
    "Iași",
    "București",
    "Cluj",
    "Timișoara",
    "Iași",
    "București",
    "Cluj",
    "Timișoara",
    "Iași",
  ];

  return (
    <div
      className={`relative w-[676px] mx-auto border  border-[#89969C] rounded-[40px] rounded-lg bg-white p-4 ${
        focusedInput === "jobTitle" ? "rounded-bl-none " : ""
      } ${focusedInput === "location" ? "rounded-br-none" : ""}`}
    >
      <div className="flex items-center justify-between">
        {/* Job Title Input */}
        <div className="flex items-center relative w-[522px]">
          <LupeIcon className="w-5 h-5 text-gray-500 ml-3" />
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            onFocus={() => handleFocus("jobTitle")}
            onBlur={handleBlur}
            placeholder="Cauta un loc de munca"
            className="w-full py-2 px-4 pl-10 bg-transparent outline-none border-none focus:outline-none focus:ring-0"
          />
          {jobTitle && (
            <XIcon
              className="w-4 h-4 text-gray-500 mr-3 cursor-pointer"
              onClick={handleClearJobTitle}
            />
          )}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-300 mx-4 "></div>

        {/* Location Input */}
        <div className="flex items-center relative w-[247px]">
          <MapPinIcon className="w-5 h-5 text-gray-500 ml-3" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => handleFocus("location")}
            onBlur={handleBlur}
            placeholder="Adauga o locatie"
            className="w-full py-2 px-4 pl-4 bg-transparent outline-none border-none focus:outline-none focus:ring-0"
          />
          {location && (
            <XIcon
              className="w-4 h-4 text-gray-500 mr-3 cursor-pointer"
              onClick={handleClearLocation}
            />
          )}
        </div>
      </div>

      {/* Dropdown for Job Title */}
      {focusedInput === "jobTitle" && (
        <ul className="absolute left-0 w-[25rem] bg-white border border-t-0 border-[#89969C] rounded-lg rounded-t-none pt-2 mt-4 max-h-48 overflow-y-auto custom-scrollbar">
          {jobSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-12 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setJobTitle(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Dropdown for Location */}
      {focusedInput === "location" && (
        <ul className="absolute right-0 w-[230px] bg-white border border-t-0 rounded-t-none  border-[#89969C] rounded-lg  mt-4 max-h-48 overflow-y-auto custom-scrollbar">
          {locationSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-12 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setLocation(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
