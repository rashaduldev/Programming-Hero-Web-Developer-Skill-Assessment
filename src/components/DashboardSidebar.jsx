import Link from "next/link";
import { MdDashboard, MdOutlineDarkMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiTelevisionLight } from "react-icons/pi";

const DashboardSidebar = () => {
  const dashboardMenuItem = [
    {
      id: 1,
      text: "Dashboard",
      link: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      id: 2,
      text: "Profile",
      link: "/userprofile",
      icon: <FaUser />,
    },
    {
      id: 3,
      text: "Project",
      link: "/project",
      icon: <PiTelevisionLight />,
    }
  ];

  return (
    <div className="overflow-y-scroll hidden lg:block max-w-[340px] bg-secondary h-screen fixed w-full py-10 px-6 custom-scrollbar bg-[#032D2C]">
      <div className="flex justify-center">
        <Link href="/users/dashboard">
            <h1 className="text-white text-3xl font-bold">Dashboard</h1>
        </Link>
      </div>

      <ul className="mt-[60px] mb-[100px]">
        {dashboardMenuItem.map((item) => (
          <li
            key={item.id}
            className="px-3 rounded-md py-3 bg-transparent hover:bg-white hover:text-black text-white hover:text-secondary  duration-300"
          >
            <Link
              href={item.link}
              className="flex items-center gap-4 text-base font-medium  "
            >
              {item.icon} {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
