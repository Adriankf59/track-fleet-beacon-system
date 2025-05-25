
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MainContent } from "@/components/MainContent";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <AppSidebar activeView={activeView} setActiveView={setActiveView} />
        <MainContent activeView={activeView} />
      </div>
    </SidebarProvider>
  );
};

export default Index;
