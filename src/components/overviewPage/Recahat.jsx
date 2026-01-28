import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Recahat = () => {
  const data = [
    { day: "Mon", call: 45 },
    { day: "Tue", call: 65 },
    { day: "Wed", call: 60 },
    { day: "Thu", call: 75 },
    { day: "Fri", call: 90 },
    { day: "Sat", call: 100 },
    { day: "Sun", call: 70 },
  ];

  return (
    <div className="w-full h-[320px] rounded-xl bg-gradient-to-b from-[#0E1B3F] to-[#0A1230] p-4 flex flex-col">

      {/* header part*/}
      <div className="my-3 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Call Trends - This Week
          </h2>
          <p className="text-xs my-2 text-white/60">
            Total: 472 calls
          </p>
        </div>

        <button className="rounded-md bg-white/10 px-3 py-1 text-xs text-white">
          This Week
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          
          <defs>
            <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* x Axis */}
          <XAxis
            dataKey="day"
            stroke="#94A3B8"
            fontSize={12}
          />

          {/* y Axis */}
          <YAxis
            stroke="#94A3B8"
            fontSize={12}
          />

          

          {/* Area */}
          <Area type="monotone" dataKey="call"  fill="url(#callGradient)" 
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Recahat;
