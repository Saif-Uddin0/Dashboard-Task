import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import icon from '../../assets/Icon (4).png'

const Appointment = () => {
    return (
        <section className="text-white   bg-[#101B43] min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6">
                <div className="p-4 border border-gray-600 rounded-md bg-[#111B3B]">
                    <div className="flex items-center gap-3">
                        <CiCalendar className="text-blue-400 text-xl" />
                        <p className="text-xs text-gray-300">Total Booked</p>
                    </div>
                    <p className="text-xl font-semibold mt-2">34</p>
                    <p className="text-xs text-green-500">+8 this week</p>
                </div>

                <div className="p-4 border border-gray-600 rounded-md bg-[#111B3B]">
                    <div className="flex items-center gap-3">
                        <FaRegCheckCircle className="text-green-500 text-xl" />
                        <p className="text-xs text-gray-300">AI Booked</p>
                    </div>
                    <p className="text-xl font-semibold mt-2">50</p>
                    <p className="text-xs text-green-500">+8 this week</p>
                </div>

                <div className="p-4 border border-gray-600 rounded-md bg-[#111B3B]">
                    <div className="flex items-center gap-3">
                        <MdErrorOutline className="text-yellow-600 text-xl" />
                        <p className="text-xs text-gray-300">Pending</p>
                    </div>
                    <p className="text-xl font-semibold mt-2">08</p>
                    <p className="text-xs text-green-500">+8 this week</p>
                </div>
            </div>
            <div className="px-6">
                <div className="bg-[#111B3C] px-4 py-4 rounded-xl border border-[#162354] w-full mx-auto">
                    <label className="text-gray-300 text-lg mb-2 block">
                        Booking Link
                    </label>

                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0B1120] p-2 rounded-lg border border-[#162354] text-white">
                        <input
                            type="text"
                            defaultValue={"https://techstore.com/book?id=store123"}
                            className="bg-transparent text-white text-sm w-full outline-none px-2 py-1"
                        />


                        <button className="bg-[#111B3C] hover:bg-[#1c2a5a] text-white px-6 py-2 rounded-md border border-blue-500/30 transition-all  text-sm flex items-center justify-center gap-2 whitespace-nowrap">
                            <img className="w-4 h-4" src={icon} alt="copy" />
                            Copy Link
                        </button>

                    </div>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className=" border border-blue-950">
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p>Client Name</p>
                        <p>Client Phone</p>
                        <p>Client Email</p>
                        <p>Device</p>
                        <p>Repair Type</p>
                        <p>Date</p>
                        <p>Slot No</p>
                        <p>Start Time</p>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p className="text-blue-500">Jane.D</p>
                        <p className="text-gray-300">01734499038</p>
                        <p className="text-gray-300">jane@gmail.com</p>
                        <p className="text-gray-300">Samsung</p>
                        <p className="text-gray-300">Screen</p>
                        <p className="text-gray-300">02/06/26</p>
                        <p className="text-gray-300">09</p>
                        <p className="text-gray-300">10:00</p>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p className="text-blue-500">Jane.D</p>
                        <p className="text-gray-300">01734499038</p>
                        <p className="text-gray-300">jane@gmail.com</p>
                        <p className="text-gray-300">Samsung</p>
                        <p className="text-gray-300">Screen</p>
                        <p className="text-gray-300">02/06/26</p>
                        <p className="text-gray-300">09</p>
                        <p className="text-gray-300">10:00</p>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p className="text-blue-500">Jane.D</p>
                        <p className="text-gray-300">01734499038</p>
                        <p className="text-gray-300">jane@gmail.com</p>
                        <p className="text-gray-300">Samsung</p>
                        <p className="text-gray-300">Screen</p>
                        <p className="text-gray-300">02/06/26</p>
                        <p className="text-gray-300">09</p>
                        <p className="text-gray-300">10:00</p>
                    </div>
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p className="text-blue-500">Jane.D</p>
                        <p className="text-gray-300">01734499038</p>
                        <p className="text-gray-300">jane@gmail.com</p>
                        <p className="text-gray-300">Samsung</p>
                        <p className="text-gray-300">Screen</p>
                        <p className="text-gray-300">02/06/26</p>
                        <p className="text-gray-300">09</p>
                        <p className="text-gray-300">10:00</p>
                    </div>
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p className="text-blue-500">Jane.D</p>
                        <p className="text-gray-300">01734499038</p>
                        <p className="text-gray-300">jane@gmail.com</p>
                        <p className="text-gray-300">Samsung</p>
                        <p className="text-gray-300">Screen</p>
                        <p className="text-gray-300">02/06/26</p>
                        <p className="text-gray-300">09</p>
                        <p className="text-gray-300">10:00</p>
                    </div>
                    <div className="grid grid-cols-8 gap-6 p-4 bg-[#111B3C] border border-[#162354] text-sm">
                        <p className="text-blue-500">Jane.D</p>
                        <p className="text-gray-300">01734499038</p>
                        <p className="text-gray-300">jane@gmail.com</p>
                        <p className="text-gray-300">Samsung</p>
                        <p className="text-gray-300">Screen</p>
                        <p className="text-gray-300">02/06/26</p>
                        <p className="text-gray-300">09</p>
                        <p className="text-gray-300">10:00</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Appointment;