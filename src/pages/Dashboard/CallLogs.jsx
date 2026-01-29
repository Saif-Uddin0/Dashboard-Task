import { ChevronDown, Search } from 'lucide-react';
import CallListItem from '../../components/CallLogs/CallListItem';
import CallDetails from '../../components/CallLogs/CallDetails';





const calls = [
    {
        id: 1,
        number: "+1 (555) 345-6789",
        duration: "05:23",
        date: 2025 - 12 - 16,
        time: "09:42",
        meta: "Quote Provided",
        status: "AI Resolved",
        statusColor: "bg-green-600/20 text-green-400",
        tag: "Screen",
        tagColor: "bg-blue-600/20 text-blue-400",
        border: "border-green-600"
    },
    {
        id: 2,
        number: "+1 (555) 345-6789",
        date: 2025 - 12 - 16,
        time: "09:42",
        duration: "05:23",
        meta: "Escalated to technician",
        status: "Warm Transfer",
        statusColor: "bg-orange-600/20 text-orange-400",
        tag: "Software",
        tagColor: "bg-blue-600/20 text-blue-400",
        border: "border-orange-600"

    },
    {
        id: 3,
        number: "+1 (555) 345-6789",
        date: 2025 - 12 - 16,
        time: "09:42",
        duration: "05:23",
        meta: "Appointment Booked",
        status: "Appointment",
        statusColor: "bg-blue-600/20 text-blue-400",
        tag: "Battery",
        tagColor: "bg-blue-600/20 text-blue-400",
        border: "border-blue-600"
    },
    {
        id: 4,
        number: "+1 (555) 345-6789",
        date: 2025 - 12 - 16,
        time: "09:42",
        duration: "05:23",
        meta: "Quote Provided",
        status: "Dropped",
        statusColor: "bg-red-600/20 text-red-400",
        tag: "Unknown",
        tagColor: "bg-blue-600/20 text-blue-400",
        border: "border-red-600"
    },
    {
        id: 5,
        number: "+1 (555) 345-6789",
        date: 2025 - 12 - 16,
        time: "09:42",
        duration: "05:23",
        meta: "Quote Provided",
        status: "AI Resolved",
        statusColor: "bg-green-600/20 text-green-400",
        tag: "Screen",
        tagColor: "bg-blue-600/20 text-blue-400",
        border: "border-green-600"
    }
];

const CallLogs = () => {


    const filters = ["All Type", "All Issues", "Today"];
    return (
        <div className="min-h-screen bg-[#0F172B]/80 p-6">

            {/* above the search bar and the sorting button */}
            <div className='px-10 flex flex-col lg:flex-row items-center justify-between gap-10 mb-6'>
                <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl w-80 lg:w-200 h-10 ">
                    <Search size={18} className="text-white/60 shrink-0" />
                    <input
                        placeholder="Search call"
                        className="max-w-sm bg-transparent outline-none text-sm text-white"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-5 mb-4">
                    {filters.map((item) => (
                        <button
                            key={item}
                            className='flex items-center  justify-center gap-3 px-10 py-2 border border-white/20 rounded-lg text-sm  text-gray-200 bg-[#0F172B]/50'
                        >
                            {item} <ChevronDown size={15} />
                        </button>
                    ))}
                </div>
            </div>



            {/* bottom content */}
            <div className='grid md:grid-cols-12 gap-8 justify-between p-5 md:p-10  w-full'>
                <div className="bg-[#0F172B] backdrop-blur rounded-2xl p-3 space-y-2 md:col-span-6">
                    <h1 className='text-2xl text-white p-5 border-b border-white/10'>Call List</h1>
                    {calls.map((call) => (
                        <CallListItem key={call.id} call={call} />
                    ))}
                </div> 
                <div className='md:col-span-6 bg-[#0F172B]/80 p-3 backdrop-blur rounded-2xl'>
                    <h1 className='text-2xl text-white p-5 border-b border-white/10'>Call Details</h1>
                    <CallDetails></CallDetails>
                </div>
            </div>
        </div>
    );
};

export default CallLogs;