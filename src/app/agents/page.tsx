import React from "react";
import AgentsList from "@/components/agents/Agents";
import Icon from "../../assets/logo.svg";

export const metadata = {
  title: "Agents",
  description: "Welcome to Yariga",
  siteName: "Yariga",
  type: "website",
  icons: {
    icon: { url: Icon.src, type: "image/svg" },
  },
};

function Agents() {
  return (
    <section className="w-[86%] bg-gray-200 rounded-md p-3 flex flex-col gap-4">
      <h1 className="text-2xl font-medium text-zinc-800/90">Agents</h1>

      {/* @ts-ignore */}
      <AgentsList />
    </section>
  );
}

export default Agents;
