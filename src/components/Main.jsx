import React, { useState } from "react";
import Sidebar from "./sidebar";
import Start from "./body/start";

export default function Main() {
  const [activeTab, setActiveTab] = useState(
    window.location.href.split("/").pop()
  );
  console.log(activeTab);
  return (
    <div className="reactMain">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "start" ? <Start /> : null}
    </div>
  );
}
