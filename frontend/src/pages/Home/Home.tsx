import { useState } from "react";
//Components
import Navbar from "@/components/layouts/NavBar/NavBar";
import Summary from "@/components/Summary/Summary";
import Transaction from "@/components/Transaction/Transaction";

//Api hooks
import useUserProfile from "../../hooks/useUserProfile";
//Interfaces

function Home() {
  const [selectedTab, setSelectedTab] = useState("Summary");
  const { user } = useUserProfile();

  return (
    <div className="w-full">
      <div className="w-full top-10 fixed mb-30">
        <h1 className="text-3xl font-bold tracking-wide mb-2">
          {user?.name}'s Economy
        </h1>
        <div className="mb-30 ">
          <div className="bg-white ">
            <Navbar onSelect={setSelectedTab} />
          </div>
        </div>
      </div>
      <div className="p-6">
        {selectedTab === "Summary" && <Summary />}
        {selectedTab === "Transaction" && <Transaction />}
      </div>
    </div>
  );
}

export default Home;
