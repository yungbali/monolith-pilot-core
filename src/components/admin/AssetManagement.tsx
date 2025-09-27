import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Plus, 
  ExternalLink, 
  DollarSign, 
  Users, 
  Calendar,
  TrendingUp,
  FileText
} from "lucide-react";

export function AssetManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Asset Management</h1>
        <p className="text-muted-foreground">Configure and monitor tokenized IP assets</p>
      </div>

      {/* Current Asset */}
      <Card className="shadow-premium border-2 border-accent/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Building2 className="h-6 w-6 text-accent" />
                Sunset Boulevard Suite
              </CardTitle>
              <CardDescription>
                Jazz composition - Pilot asset for Monolith MVP
              </CardDescription>
            </div>
            <Badge className="bg-success text-success-foreground">Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Asset Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Total Raised</div>
              <div className="text-2xl font-bold text-foreground">$50,000</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Token Supply</div>
              <div className="text-2xl font-bold text-foreground">50,000</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Token Holders</div>
              <div className="text-2xl font-bold text-foreground">8</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Monthly Yield</div>
              <div className="text-2xl font-bold text-success">4.2%</div>
            </div>
          </div>

          {/* Distribution Progress */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-medium">Token Distribution</Label>
              <span className="text-sm text-muted-foreground">100% Allocated</span>
            </div>
            <Progress value={100} className="h-3" />
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Investors:</span>
                <span>80% (40,000 tokens)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Creator:</span>
                <span>20% (10,000 tokens)</span>
              </div>
            </div>
          </div>

          {/* Asset Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Asset Information
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Creator:</span>
                  <span>Marcus Chen</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Genre:</span>
                  <span>Jazz Composition</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created:</span>
                  <span>March 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Legal Entity:</span>
                  <span>SPV-001-2024</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Performance
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Payout:</span>
                  <span className="text-success">$2,450 (Feb 2024)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Paid:</span>
                  <span>$7,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Payout:</span>
                  <span>April 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Streams:</span>
                  <span>125,000+ (Spotify)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Contract
            </Button>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Legal Docs
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Payout
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Asset Onboarding Form */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Asset Onboarding Tool
          </CardTitle>
          <CardDescription>
            Configure a new tokenized IP asset (Post-MVP Feature)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Asset Title</Label>
              <Input id="title" placeholder="Enter asset title" disabled />
            </div>
            <div>
              <Label htmlFor="creator">Creator ID</Label>
              <Input id="creator" placeholder="Enter creator identifier" disabled />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Asset description and details" disabled />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="supply">Total Token Supply</Label>
              <Input id="supply" type="number" placeholder="50000" disabled />
            </div>
            <div>
              <Label htmlFor="price">Token Price (USD)</Label>
              <Input id="price" type="number" step="0.01" placeholder="1.00" disabled />
            </div>
            <div>
              <Label htmlFor="schedule">Payout Schedule</Label>
              <Input id="schedule" placeholder="Monthly" disabled />
            </div>
          </div>

          <div>
            <Label htmlFor="spv">Legal SPV ID</Label>
            <Input id="spv" placeholder="SPV identifier" disabled />
          </div>

          <div className="flex gap-3 pt-4">
            <Button disabled className="bg-gradient-primary">
              <Building2 className="h-4 w-4 mr-2" />
              Deploy Asset Contract
            </Button>
            <Button variant="outline" disabled>
              Save Draft
            </Button>
          </div>

          <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
            <strong>Note:</strong> Multi-asset support will be available post-MVP. The current pilot focuses on validating the core tokenization and payout infrastructure with a single asset.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}