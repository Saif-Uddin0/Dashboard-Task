import React from 'react';
import { Pencil } from "lucide-react";

const EditProfile = () => {
    return (
        <div className="min-h-screen flex justify-center items-center  text-white">
            <div className=" w-full max-w-2xl rounded-2xl shadow-xl p-8">
                {/* Tabs */}
                <div className="flex border-b border-blue-700 mb-6">
                    <button className="text-white px-4 py-2 border-b-2 border-green-400 font-semibold">
                        Profile
                    </button>
                    <button className="text-gray-400 px-4 py-2">Password Settings</button>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative">
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-green-400 object-cover"
                        />
                        <button className="absolute bottom-0 right-0 bg-green-400 text-[#0D1B3D] p-2 rounded-full hover:scale-110 transition">
                            <Pencil className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-sm text-gray-300 mb-1 block">Full Name</label>
                            <input
                                type="text"
                                placeholder="Maimuna Mumu"
                                className="input input-bordered w-full bg-[#1B2A57] text-white border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300 mb-1 block">Email</label>
                            <input
                                type="email"
                                placeholder="jam@gmail.com"
                                className="input input-bordered w-full bg-[#1B2A57] text-white border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300 mb-1 block">Store Name</label>
                            <input
                                type="text"
                                placeholder="Umbrella Store"
                                className="input input-bordered w-full bg-[#1B2A57] text-white border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-300 mb-1 block">Store Address</label>
                            <input
                                type="text"
                                placeholder="123 Main Street, New York"
                                className="input input-bordered w-full bg-[#1B2A57] text-white border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-center mt-8">
                        <button className="btn bg-green-500 hover:bg-green-600 text-white px-10">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;