import {
  Phone,
  Headphones,
  Repeat,
  Calendar,
  PhoneMissed,
  Clock,
  X
} from "lucide-react";

import Recahat from "../../components/OverviewPage/Recahat";
import BottomSection from "../../components/OverviewPage/BottomSection";
import BoxCard from "../../components/overviewPage/boxCard";


const Overview = () => {
  return (
    <div className=" min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
        <BoxCard
          title="Total Calls Today"
          value="127"
          percent="+12%"
          pos
          icon={<Phone className="text-white" />}
          iconBg="bg-blue-500"
        />

        <BoxCard
          title="AI-Handled Calls"
          value="98"
          percent="+77%"
          pos
          icon={<Headphones className="text-white" />}
          iconBg="bg-pink-500"
        />

        <BoxCard
          title="Warm Transfer"
          value="23"
          percent="+18%"
          pos
          icon={<Repeat className="text-white" />}
          iconBg="bg-orange-500"
        />

        <BoxCard
          title="Appointments Booked"
          value="34"
          percent="+8%"
          pos
          icon={<Calendar className="text-white" />}
          iconBg="bg-green-500"
        />

        <BoxCard
          title="Missed / Failed Calls"
          value="6"
          percent="-3%"
          pos={false}
          
          icon={<X className="text-white" />}
          iconBg="bg-red-500"
        />

        <BoxCard
          title="Avg Call Duration"
          value="3:42"
          percent="+15%"
          pos
          icon={<Clock className="text-white" />}
          iconBg="bg-indigo-500"
        />

      </div>

      <div className="my-15">
        <Recahat></Recahat>
      </div>

      <div>
        <BottomSection></BottomSection>
      </div>
    </div>
  );
};

export default Overview;
