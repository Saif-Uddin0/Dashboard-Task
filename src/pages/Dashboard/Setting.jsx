import React from 'react';
import avatar from '../../assets/Avatar Style 6.png'
import { NavLink } from 'react-router-dom';

const Setting = () => {
    return (
        <div>
            <div className="min-h-screen bg-[#131E49] p-8 text-white"> 

      {/* tabs */}
      <div className="flex gap-8 mb-8 text-sm">
        <NavLink to={'/dashboard/edit'} className="text-lg text-white">
          Profile
        </NavLink>
        <button className="text-white text-lg">
          Password Settings
        </button>
      </div>

      {/* content */}
      <div className="max-w-3xl">

        {/* image */}
        <div className="mb-8">
          <p className="mb-3 text-lg">Profile Image</p>

          <div className="flex flex-col md:flex-row items-end gap-4">
            <img
              src={avatar}
              alt="Profile"
              className="h-20 w-20  object-cover"
            />
{/* navlink buton for editing page */}
            <button className="px-4  rounded-full bg-transparent text-white  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40 ">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Info Fields */}
        <div className="space-y-5 text-sm">

          <div className="flex text-md items-center gap-30 border-b border-white/10 pb-3">
            <p className="text-white mb-1">Full Name:</p>
            <p className='text-lg'>Jane D.</p>
          </div>

          <div className="flex text-md items-center gap-36 border-b border-white/10 pb-3">
            <p className="text-white mb-1">Email:</p>
            <p className='text-md'>jane@gmail.com</p>
          </div>

          <div className="flex text-md items-center gap-25 border-b border-white/10 pb-3">
            <p className="text-white mb-1">Store Name:</p>
            <p className='text-md'>Ubreakifix Store</p>
          </div>

          <div className="flex text-md items-center gap-23 border-b border-white/10 pb-3">
            <p className="text-white mb-1">Store Address:</p>
            <p className='text-md'>123 Main Street, New York, NY 10001</p>
          </div>

        </div>
      </div>
    </div>
        </div>
    );
};

export default Setting;