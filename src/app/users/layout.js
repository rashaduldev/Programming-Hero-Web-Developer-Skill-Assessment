import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardTopNavbar from '@/components/DashboardTopNavbar';
import React from 'react';

const Dashboard = ({ children }) => {
  return (
    
    <div className="flex gap-5 ">
    <DashboardSidebar />
    <div className="lg:ml-[340px] w-full bg-[#f4f4f4]">
      <>
      <DashboardTopNavbar/>
       {children}
      </>
      
       </div>
  </div>
  );
};

export default Dashboard;