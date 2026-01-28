import React from 'react';
import { CheckCircle, Circle } from "lucide-react";


const recentActivities = [
  {label:"AI booked appointment for iPhone 13 screen repair", min : 2},
  {label:"Warm transfer to technician - Software issue",min : 5},
  {label:"Quote provided for iPad battery replacement",min : 8},
  {label:"Call dropped after 12 seconds",min : 15},
];

const repairRequests = [
  { label:"Screen Repair", value: 156 },
  { label:"Battery Replacement", value: 89 },
  { label:"Back Glass Repair", value: 67 },
  { label:"Software Issues", value: 45 },
];

const BottomSection = () => {
    return (
        <div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Recent Activity */}
                <div className="bg-[#0F172B] rounded-xl p-6 shadow-lg border border-white/30">
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Recent Activity
                    </h3>

                    <ul className="space-y-3">
                        {recentActivities.map((item, index) => (
                            <li key={index} className="bg-white/10 p-5 flex items-start gap-2 text-sm text-slate-300">
                                <Circle size={14} className="text-emerald-400 mt-0.5" />
                                <div className='flex flex-col gap-2'>
                                    <span>{item.label}</span>
                                <span className='text-xs text-gray-400'>{item.min} min ago</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Top Repair Request */}
                <div className="bg-[#0F172B] rounded-xl p-6 shadow-lg border border-white/30">
                    <h3 className="text-white text-xl font-semibold mb-4">
                        Top Repair Requests
                    </h3>

                    <div className="space-y-4 ">
                        {repairRequests.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm text-white/80 mb-1">
                                    <span>{item.label}</span>
                                    <span>{item.value}%</span>
                                </div>

                                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                        style={{ width: `${item.value}%` }}
                                    />
                                    request
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BottomSection;