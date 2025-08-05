import { useState } from "react";
import users from "../data/user";
import MainCard from "./MainCard";
import MainTopNav from "./MainTopNav";
import SideCard from "./SideCard";

function Main() {
  const [selectedUser, setSelectedUser] = useState(users[0]); 

  return (
    <div className="w-full min-h-screen h-full bg-[#E4E2EA] pb-30">
      <div className="max-w-[1000px] mx-auto w-full">
        <MainTopNav />
        <div className="w-full flex mt-20 gap-10">
          <MainCard setSelectedUser={setSelectedUser} />
          <SideCard selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default Main;
