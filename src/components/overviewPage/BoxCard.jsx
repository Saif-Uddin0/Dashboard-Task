const BoxCard = ({ title, value, percent, icon, iconBg, pos }) => {
  return (
    <div
      className="
        relative rounded-xl p-5
        bg-[#0F172B]
        shadow-lg border border-white/5
      "
    >
{/* content part */}
      <div className="flex items-center justify-between">
        <div className="mt-4">
          <p className="text-sm text-gray-400">{title}</p>

          <h2 className="text-2xl font-semibold text-white">
            {value}
          </h2>

          
      </div>
      {/* icon  */}
      <div
          className={`flex items-center justify-center rounded-lg w-10 h-10 ${iconBg}`}
        >
          {icon}
        </div>
        </div>
        {/* percent */}
        <p
            className={`mt-1 text-sm ${pos ? "text-green-400" : "text-red-400"
              }`}
          >
            {pos ? "↑" : "↓"} {percent}
          </p>
        
    </div>
  );
};

export default BoxCard;
