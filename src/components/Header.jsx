import React from 'react';

const Header = () => {
  const getCurrentShift = () => {
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const shift1Start = 8 * 60 + 30; // 8:30 AM
    const shift1End = 19 * 60; // 7:00 PM
    const shift2Start = 20 * 60 + 30; // 8:30 PM
    const shift2End = 7 * 60; // 7:00 AM

    if (currentTime >= shift1Start && currentTime <= shift1End) {
      return 'Shift 1';
    } else if (currentTime >= shift2Start || currentTime <= shift2End) {
      return 'Shift 2';
    } else {
      return 'Shift 2';
    }
  };

  const currentDate = new Date().toLocaleDateString('en-GB');

  return (
    <div className="bg-white px-4 py-2 flex justify-between items-center shadow-md border-b border-[#E97451]">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logo Upload Section */}
        <div className="flex items-center gap-1.5 text-gray-500">
          <div className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
          <span className="text-xs">Upload Logo</span>
        </div>


        {/* Divider */}
        <div className="h-5 w-px bg-[#E97451] opacity-30"></div>

        {/* Title and Description */}
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-800]">DASHBOARD TITLE</h1>
          <p className="text-xs text-gray-800">Some dummy description text</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-r from-[#8B4513] to-[#E97451] text-white text-sm px-4 py-2 rounded-lg shadow-lg">
          {`Date: ${currentDate} | ${getCurrentShift()}`}
        </div>
      </div>
    </div>
  );
};

export default Header; 