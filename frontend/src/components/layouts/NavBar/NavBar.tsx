import { useState } from "react";

const tabs = ["Summary", "Historial", "Transaction", "Análisis"];

export default function Navbar({
  onSelect,
}: {
  onSelect: (tab: string) => void;
}) {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <nav className="border-b bg-white px-6 py-3 flex gap-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-lg font-medium border-b-2 ${
            activeTab === tab
              ? "border-black text-black"
              : "border-transparent text-gray-500"
          }`}
          onClick={() => {
            setActiveTab(tab);
            onSelect(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
