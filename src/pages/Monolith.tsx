import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { AdminDashboard } from "@/components/admin/Dashboard";
import { KYCManagement } from "@/components/admin/KYCManagement";
import { AssetManagement } from "@/components/admin/AssetManagement";
import { RoyaltyDataManagement } from "@/components/admin/RoyaltyData";
import { PayoutExecution } from "@/components/admin/PayoutExecution";
import { CreatorDashboard } from "@/components/creator/CreatorDashboard";
import { InvestorPortfolio } from "@/components/investor/InvestorPortfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Monolith() {
  const [userType, setUserType] = useState<"admin" | "creator" | "investor">("admin");
  const [activeView, setActiveView] = useState("dashboard");

  const renderContent = () => {
    if (userType === "admin") {
      switch (activeView) {
        case "kyc":
          return <KYCManagement />;
        case "assets":
          return <AssetManagement />;
        case "royalties":
          return <RoyaltyDataManagement />;
        case "payouts":
          return <PayoutExecution />;
        default:
          return <AdminDashboard />;
      }
    } else if (userType === "creator") {
      return <CreatorDashboard />;
    } else {
      return <InvestorPortfolio />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* User Type Switcher - Demo Only */}
      <div className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium text-muted-foreground">Demo Mode:</h2>
            <div className="flex gap-2">
              <Button
                variant={userType === "admin" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setUserType("admin");
                  setActiveView("dashboard");
                }}
              >
                Admin View
              </Button>
              <Button
                variant={userType === "creator" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setUserType("creator");
                  setActiveView("overview");
                }}
              >
                Creator View
              </Button>
              <Button
                variant={userType === "investor" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setUserType("investor");
                  setActiveView("portfolio");
                }}
              >
                Investor View
              </Button>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            Monolith MVP • Single Asset Pilot
          </Badge>
        </div>
      </div>

      <div className="flex">
        <Navigation 
          activeView={activeView} 
          onViewChange={setActiveView}
          userType={userType}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}