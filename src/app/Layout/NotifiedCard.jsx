const NotificationCard = ({ status, iconColor, iconPath, buttonPath }) => (
    <div className="line p-4 bg-white rounded-lg text-lg font-normal flex justify-between">
      {status}
      <div className="flex items-center">
        <svg className="mr-4" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="13" fill={iconColor} />
          <path d={iconPath} fill="#333333" />
        </svg>
        <button className="hover:scale-125 ease-out duration-150">
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={buttonPath} fill="#333333" />
          </svg>
        </button>
      </div>
    </div>
  );
  