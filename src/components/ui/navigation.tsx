import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, DollarSign, FileText, Settings, BarChart3 } from "lucide-react";

interface NavigationProps {
  activeView: string;
  onViewChange: (view: string) => void;
  userType: "admin" | "creator" | "investor";
}

export function Navigation({ activeView, onViewChange, userType }: NavigationProps) {
  const adminNavItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "kyc", label: "KYC/AML", icon: Users },
    { id: "assets", label: "Assets", icon: Building2 },
    { id: "royalties", label: "Royalty Data", icon: FileText },
    { id: "payouts", label: "Payouts", icon: DollarSign },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const creatorNavItems = [
    { id: "overview", label: "Asset Overview", icon: BarChart3 },
    { id: "payouts", label: "Payout History", icon: DollarSign },
  ];

  const investorNavItems = [
    { id: "portfolio", label: "Portfolio", icon: BarChart3 },
    { id: "transactions", label: "Transactions", icon: FileText },
  ];

  const navItems = userType === "admin" ? adminNavItems : 
                  userType === "creator" ? creatorNavItems : investorNavItems;

  return (
    <nav className="w-64 bg-card border-r border-border p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Monolith
        </h1>
        <div className="mt-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {userType === "admin" ? "Operations" : userType === "creator" ? "Creator" : "Investor"}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12 text-left font-medium",
                activeView === item.id 
                  ? "bg-primary text-primary-foreground shadow-elegant" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </div>

      {userType === "admin" && (
        <div className="mt-8 p-4 bg-gradient-subtle rounded-lg border">
          <div className="text-sm font-medium text-foreground mb-1">Pilot Status</div>
          <div className="text-xs text-muted-foreground">Single Asset Active</div>
          <div className="mt-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-xs text-success font-medium">Live</span>
          </div>
        </div>
      )}
    </nav>
  );
}