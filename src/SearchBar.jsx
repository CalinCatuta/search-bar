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
    <div className={"relative lg:w-[676px] bg-white"}>
      <div className="flex items-center justify-between relative flex-col gap-2 lg:gap-0 lg:flex-row lg:h-[50px] ">
        {/* Job Title Input */}
        <div className="flex items-center justify-between relative lg:w-[522px]">
          <div
            className={`flex items-center relative w-full border border-[#89969C] rounded-lg lg:border-r-0 lg:rounded-tl-lg lg:rounded-tr-none lg:rounded-br-none divider
           ${
             focusedInput === "jobTitle"
               ? "lg:border-b-[#eeeeee] lg:rounded-bl-none"
               : ""
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
                "hidden lg:block lg:absolute lg:left-0 lg:w-full lg:border lg:border-t-0 border-[#89969C] lg:rounded-lg lg:rounded-t-none lg:pt-2 lg:mt-4 lg:max-h-48 lg:overflow-y-scroll custom-scrollbar lg:bottom-0 lg:transform lg:translate-y-full lg:box-border"
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
        <div className="flex items-center justify-between relative lg:w-[247px]">
          <div
            className={`flex items-center relative w-full border border-[#89969C] rounded-lg lg:border-l-0 lg:rounded-tl-none lg:rounded-bl-none   lg:rounded-tr-lg
            ${
              focusedInput === "location"
                ? "lg:border-b-[#eeeeee] lg:rounded-br-none"
                : " "
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
                "hidden lg:block lg:absolute lg:left-0 lg:w-full lg:border lg:border-t-0 lg:border-[#89969C] lg:rounded-lg lg:rounded-t-none lg:pt-2 lg:mt-4 lg:max-h-48 lg:overflow-y-scroll custom-scrollbar lg:bottom-0 lg:transform lg:translate-y-full lg:box-border"
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
