import { FileText, PlayCircle } from "lucide-react";
import fileIcon from '../../assets/Icon (5).png'

const CallDetails = () => {
  return (
    <div className=" rounded-2xl  p-5 text-white shadow-lg">

      {/* header */}
      <h2 className="text-sm font-semibold mb-4">Call Details</h2>

      {/* grid */}
      <div className="grid grid-cols-2 gap-y-4 text-white/80 gap-x-6 text-sm mb-5">
        <div>
          <p className="text-white/50 mb-1">Phone Number</p>
          <p className="font-medium text-lg">+1 (555) 123-4567</p>
        </div>

        <div>
          <p className="text-white/50 mb-1 ">Duration</p>
          <p className="font-medium text-lg">4:32</p>
        </div>

        <div>
          <p className="text-white/50 mb-1">Date & Time</p>
          <p className="font-medium text-lg">2025-12-16 10:45 AM</p>
        </div>

        <div>
          <p className="text-white/50 mb-1">Issue Type</p>
          <p className="font-medium text-lg">Screen</p>
        </div>

        <div className="flex flex-col gap-5">
            <div>
          <p className="text-white/50 mb-1">Call Type</p>
          <span className="inline-block rounded-full bg-green-500/20 px-3 py-1 text-[11px] text-green-400 border border-green-400/80">
            AI Resolved
          </span>
        </div>

        <div>
          <p className="text-white/50 mb-1">Outcome</p>
          <p className="font-medium">Quote provided</p>
        </div>
        </div>
      </div>

      {/* button */}
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#AD46FF50] to-[#F6339A50] py-3 text-xs font-medium text-[#C27AFF]  mb-5 ">
        <PlayCircle size={14} />
        Play Audio Recording
      </button>

      {/* transcript */}
      <div>
        <p className="text-lg font-semibold mb-3 flex items-center gap-2"><span><img src={fileIcon} className="w-5" alt="File Icon" /></span>Conversation Transcript</p>

        <div className="space-y-3 text-sm bg-[#1D293D80] p-5">
          <p>
            <span className="text-emerald-400 font-medium">AI Assistant:</span>{" "}
            Thank you for calling UBreakiFix! How can I help you today?
          </p>

          <p>
            <span className="text-blue-400 font-medium">Customer:</span>{" "}
            Hi, my iPhone 13 screen is cracked. How much would it cost to repair?
          </p>

          <p>
            <span className="text-emerald-400 font-medium">AI Assistant:</span>{" "}
            I can help with that! For an iPhone 13 screen repair, our price is
            $199. This includes parts, labor, and comes with a 90-day warranty.
            Would you like to book an appointment?
          </p>

          <p>
            <span className="text-blue-400 font-medium">Customer:</span>{" "}
            Yes, please! When are you available?
          </p>

          <p>
            <span className="text-emerald-400 font-medium">AI Assistant:</span>{" "}
            Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM.
            Which works better for you?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
