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
      <nav>
        <h1 className="text-3xl font-bold tracking-wide">
          {user?.name}'s Expense Analysis
        </h1>
      </nav>
      <div className="w-full">
        <Navbar onSelect={setSelectedTab} />
        <div className="p-6">
          {selectedTab === "Summary" && <Summary />}
          {selectedTab === "Transaction" && <Transaction />}
        </div>
      </div>
    </div>
  );
}

export default Home;
