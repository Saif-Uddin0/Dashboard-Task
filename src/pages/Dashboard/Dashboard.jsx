import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { GoBell } from "react-icons/go";
import homeIcon from '../../assets/line-md_home-twotone.png'
import callIcon from '../../assets/Icon.png'
import calederIcon from '../../assets/Icon (2).png'
import settingIcon from '../../assets/Icon (1).png'
import logo from '../../assets/Container.png'
import img from '../../assets/Avatar Style 6.png'

import logoutIcon from '../../assets/streamline-flex_logout-1-remix.png'





const Dashboard = () => {
    const location = useLocation()

    // dynamic title
    const switchTitlte = {
        '/dashboard': 'Dashboard Overview',
        '/dashboard/call-logs': 'Call Logs & History',
        '/dashboard/appointment': 'Appointments',
        '/dashboard/setting': 'Settings',
    };

    const title = switchTitlte[location.pathname] || "Dashboard";
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* navbar */}
                    <nav className="navbar w-full bg-[#111B3C]">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/*  icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="black" stroke="white" className="my-1.5 inline-block size-6"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="w-full flex items-center justify-between lg:px-10">
                            <h2 className='px-4 text-lg md:text-2xl text-white'>{title}</h2>
                            <div className='flex items-center justify-center gap-5'>
                                <GoBell size={22} color='white' />
                                <img src={img} alt="user image" className='h-12' />
                            </div>
                        </div>
                    </nav>
                    {/* outlet content page */}
                    <div className="p-4"><Outlet></Outlet></div>
                </div>



                {/* sidebar */}
                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className="flex min-h-full flex-col items-start bg-[#111B3C] is-drawer-close:w-14 is-drawer-open:w-64">
                        <div className=" px-6 py-10 w-full  flex items-center justify-center">
                            <img src={logo} alt="main logo" className="h-10 is-drawer-close:hidden" />
                        </div>
                        {/* sidebar content */}
                        <ul className="menu w-full grow gap-4">
                            {/* List item */}
                            <li>
                                <NavLink to={'/dashboard'} end className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-full  is-drawer-close:w-15 is-drawer-close:overflow-hidden
     is-drawer-open:w-60 is-drawer-open:overflow-visibleD 
     ${isActive
                                        ? "bg-transparent text-white  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40 is-drawer-close:overflow-hidden"
                                        : "text-gray-300 hover:text-white/50"
                                    }`
                                } data-tip="Homepage">
                                    {/* Home icon */}
                                    <img src={homeIcon} className='h-7' alt="Home Icon" />
                                    <span className='text-white is-drawer-close:hidden'>Dashboard Overview
                                    </span>
                                </NavLink>
                            </li>

                            {/* List item */}
                            <li>
                                <NavLink to={'/dashboard/call-logs'} className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-full  is-drawer-close:w-15 is-drawer-close:overflow-hidden
     is-drawer-open:w-60 is-drawer-open:overflow-visible
     ${isActive
                                        ? "bg-transparent text-white  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40"
                                        : "text-gray-300 hover:text-white/50"
                                    }`
                                } data-tip="Homepage">
                                    {/* Home icon */}
                                    <img src={callIcon} className='h-7' alt="Home Icon" />
                                    <span className='text-white'>Call Logs
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/appointment'} className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-full  is-drawer-close:w-15 is-drawer-close:overflow-hidden
     is-drawer-open:w-60 is-drawer-open:overflow-visible
     ${isActive
                                        ? "bg-transparent text-white  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40"
                                        : "text-gray-300 hover:text-white/50"
                                    }`
                                } data-tip="Homepage">
                                    {/* Home icon */}
                                    <img src={calederIcon} className='h-7' alt="Home Icon" />
                                    <span className='text-white'>Appointments
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/setting'} className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-full  is-drawer-close:w-15 is-drawer-close:overflow-hidden
     is-drawer-open:w-60 is-drawer-open:overflow-visible 
     ${isActive
                                        ? "bg-transparent text-white  shadow-[inset_0_1px_10px_white,1px_6px_12px_rgba(59,130,246,0.45)] border border-white/40"
                                        : "text-gray-300 hover:text-white/50"
                                    }`
                                } data-tip="Homepage">
                                    {/* Home icon */}
                                    <img src={settingIcon} className='h-7' alt="Home Icon" />
                                    <span className='text-white'>Settings
                                    </span>
                                </NavLink>
                            </li>

                        </ul>

                        {/* log out button */}
                        <div className='flex items-center gap-3 px-5 py-10'>
                            <img src={logoutIcon} alt="Icon" className='h-5' />
                            <button className="flex items-center gap-3 text-sm text-red-500 w-full">

                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;