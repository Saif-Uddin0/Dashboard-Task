import { Phone, Clock, Tag } from "lucide-react";
import tagIcon from '../../assets/Icon (4).png'

const CallListItem = ({ call }) => {
    return (
        <div className="border-b border-white/10 px-4 py-3">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="h-11 w-11 rounded-xl bg-gradient-to-b from-blue-600 to-sky-400 flex items-center justify-center">
                        <Phone size={18} className="text-white" />
                    </span>
                    <div>
                        <h1 className="text-lg text-white"> {call.number}</h1>
                        <div>
                            <p className="text-xs text-white/50 mt-0.5">
                                2025-12-16 – {call.time} AM
                            </p>
                        </div>
                    </div>
                </div>
                <span
                    className={`
            text-[11px] font-medium
            px-2.5 py-1 rounded-full
            border ${call.border}
            ${call.statusColor}
          `}
                >
                    {call.status}
                </span>
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-white/60">
                <span className="flex items-center gap-1 text-sm">
                    <Clock size={12} />
                    <span>{call.duration}</span>
                </span>
                <span className="flex items-center gap-1 text-sm">
                    <img src={tagIcon} alt="Icon"  className="h-4 w-4"/>
                    {call.meta}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-blue-600/20 text-blue-400 text-sm ">
                    {call.tag}
                </span>
            </div>
        </div>
    );
};

export default CallListItem;
