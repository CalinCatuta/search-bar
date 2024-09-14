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
    <div className={"relative w-[676px] bg-white"}>
      <div className="flex items-center justify-between relative h-[50px]">
        {/* Job Title Input */}
        <div className="flex items-center justify-between relative w-[522px]">
          <div
            className={`flex items-center relative w-full border border-[#89969C] border-r-0 rounded-tl-lg rounded-br-none divider
           ${
             focusedInput === "jobTitle"
               ? "border-b-[#eeeeee]"
               : "rounded-bl-lg"
           }`}
          >
            <LupeIcon className="w-5 h-5 text-gray-500 ml-3" />
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              onFocus={() => handleFocus("jobTitle")}
              onBlur={handleBlur}
              placeholder="Cauta un loc de munca"
              className="w-full py-2 px-2 pl-10 bg-transparent outline-none border-none focus:outline-none focus:ring-0"
            />
            {jobTitle && (
              <XIcon
                className="w-4 h-4 text-gray-700 mr-3 cursor-pointer"
                onClick={handleClearJobTitle}
              />
            )}
          </div>

          {/* Dropdown for Job Title */}
          {focusedInput === "jobTitle" && (
            <ul
              className={
                "absolute left-0 w-full border border-t-0 border-[#89969C] rounded-lg rounded-t-none pt-2 mt-4 max-h-48 overflow-y-scroll custom-scrollbar bottom-0 transform translate-y-full box-border"
              }
            >
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
        </div>
        {/* Location Input */}
        <div className="flex items-center justify-between relative w-[247px]">
          <div
            className={`flex items-center relative w-full border border-[#89969C] border-l-0 rounded-tr-lg
            ${
              focusedInput === "location"
                ? "border-b-[#eeeeee] rounded-br-none"
                : " rounded-br-lg "
            }`}
          >
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
          {/* Dropdown for Location */}
          {focusedInput === "location" && (
            <ul
              className={
                "absolute left-0 w-full border border-t-0 border-[#89969C] rounded-lg rounded-t-none pt-2 mt-4 max-h-48 overflow-y-scroll custom-scrollbar bottom-0 transform translate-y-full box-border"
              }
            >
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
      </div>
    </div>
  );
};

export default SearchBar;
