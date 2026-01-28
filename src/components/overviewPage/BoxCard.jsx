const BoxCard = ({ title, value, percent, icon, iconBg, positive }) => {
  return (
    <div
      className="
        relative rounded-xl p-5
        bg-[#131E49]
        shadow-lg border border-white/5
        transition-transform duration-200 ease-in-out
        hover:scale-[1.03]
      "
    >

      {/*   */}
      {/* Icon */}


      {/* Content */}
      <div className="flex items-center justify-center">
        <div className="mt-4">
          <p className="text-sm text-gray-400">{title}</p>

          <h2 className="text-2xl font-semibold text-white">
            {value}
          </h2>

          <p
            className={`mt-1 text-sm ${positive ? "text-green-400" : "text-red-400"
              }`}
          >
            {positive ? "↑" : "↓"} {percent}
          </p>
        </div>
        <div
          className={` rounded-lg w-10 h-10 ${iconBg}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
