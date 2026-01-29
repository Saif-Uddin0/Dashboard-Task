import React from 'react';
import { Pencil } from "lucide-react";
import avatar from '../../assets/Avatar Style 6.png'
import profileIcon from '../../assets/Frame 2147228245.png'

const EditProfile = () => {
    return (
        <div className="min-h-screen bg-[#131E49] p-8 text-white">

            <div className="flex gap-8 mb-8 text-sm">
                <button className="text-lg text-white">
                    Profile
                </button>
                <button className="text-white text-lg">
                    Password Settings
                </button>
            </div>


<p className="mb-3 text-lg mt-10">Profile Image</p>
            <div className="relative w-20 h-20">
                

                <img
                    src={avatar}
                    alt="Profile"
                    className="h-20 w-20 object-cover rounded-full"
                />

                <img
                    src={profileIcon}
                    alt="Edit profile"
                    className="w-8 h-8 absolute bottom-0 right-0 rounded-full  "
                />
            </div>

            <div className=" w-full max-w-2xl rounded-2xl ">
                {/* tabs */}



                {/* form */}
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                        <div>
                            <label className="text-sm text-white mb-1 block">Full Name</label>
                            <input
                                type="text"
                                placeholder="Jane D."
                                className="input rounded-xl border border-white/20 w-full bg-[#0A0A0F80] text-white  focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-white mb-1 block">Email</label>
                            <input
                                type="email"
                                placeholder="jane@gmail.com"
                                className="input rounded-xl border border-white/20 w-full bg-[#0A0A0F80] text-white  focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-white mb-1 block">Store Name</label>
                            <input
                                type="text"
                                placeholder="Ubreakfix Store"
                                className="input rounded-xl border border-white/20  w-full bg-[#0A0A0F80] text-white  focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-white mb-1 block">Store Address</label>
                            <input
                                type="text"
                                placeholder="123 Main Street, New York"
                                className="input rounded-xl border border-white/20 w-full bg-[#0A0A0F80] text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                    </div>

                    {/* button */}
                    <div className="flex justify-center mt-8">
                        <button className="btn rounded-xl px-15 md:px-35 bg-green-500 hover:bg-green-600 text-white text-lg  border-none shadow-none">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;