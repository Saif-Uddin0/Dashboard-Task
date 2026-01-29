import { Phone, Clock } from "lucide-react";

const CallListItem = ({ call }) => {
    return (
        <div
            className="
        flex justify-between items-start
        px-4 py-3
        rounded-xl
        bg-[#0F172B]/60
        hover:bg-[#0F172B]/90
        transition cursor-pointer
      "
        >
            {/* LEFT SIDE */}
            <div className="flex gap-3">
                {/* ICON */}
                <div className="flex bg-blue-500 items-center justify-center rounded-lg w-10 h-10  ">
                    <Phone size={18} className="text-white" />
                </div>

                {/* TEXT */}
                <div>
                    {/* NUMBER */}
                    <div className="flex  items-center justify-between">
                        <p className="text-sm font-medium text-white leading-tight">
                            {call.number}
                        </p>
                        <span
                    className={`
            text-[10px] font-medium
            px-2 py-0.5 rounded
            ${call.statusColor}
          `}
                >
                    {call.status}
                </span>
                    </div>

                    {/* META */}
                    <div className="flex items-center gap-3 text-[11px] text-white/50 mt-1">
                        <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {call.duration}
                        </span>
                        <span>{call.meta}</span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-end gap-1">
                {/* STATUS BADGE */}
                

                {/* TAG */}
                <span
                    className={`
            text-[10px]
            px-2 py-0.5 rounded
            ${call.tagColor}
          `}
                >
                    {call.tag}
                </span>
            </div>
        </div>
    );
};

export default CallListItem;
