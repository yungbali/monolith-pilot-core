import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Music,
  BarChart3,
  CheckCircle2
} from "lucide-react";

export function CreatorDashboard() {
  const payoutHistory = [
    { month: "February 2024", amount: 490.15, date: "2024-03-01", status: "completed" },
    { month: "January 2024", amount: 425.10, date: "2024-02-01", status: "completed" },
    { month: "December 2023", amount: 530.05, date: "2024-01-01", status: "completed" },
  ];

  const totalEarnings = payoutHistory.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Asset Overview</h1>
        <p className="text-muted-foreground">Monitor your tokenized IP performance</p>
      </div>

      {/* Asset Header */}
      <Card className="shadow-premium border-2 border-accent/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-accent rounded-lg">
                <Music className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Sunset Boulevard Suite</CardTitle>
                <CardDescription className="text-base">
                  Jazz Composition • Created March 2024
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-success text-success-foreground text-sm px-3 py-1">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">$50,000</div>
              <div className="text-sm text-muted-foreground">Total Capital Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">50,000</div>
              <div className="text-sm text-muted-foreground">Total Token Supply</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">20%</div>
              <div className="text-sm text-muted-foreground">Creator Share (10,000 tokens)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Your 20% share</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Token Holders</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Verified investors</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Yield</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">4.2%</div>
            <p className="text-xs text-muted-foreground">Average return</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Apr 1</div>
            <p className="text-xs text-muted-foreground">Estimated: $510</p>
          </CardContent>
        </Card>
      </div>

      {/* Token Distribution */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Token Distribution
          </CardTitle>
          <CardDescription>
            How your asset tokens are allocated
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Investor Holdings</span>
              <span className="text-sm text-muted-foreground">40,000 tokens (80%)</span>
            </div>
            <Progress value={80} className="h-3" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Creator Holdings (You)</span>
              <span className="text-sm text-muted-foreground">10,000 tokens (20%)</span>
            </div>
            <Progress value={20} className="h-3" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-border">
            <div className="text-center">
              <div className="text-lg font-semibold">$1.00</div>
              <div className="text-xs text-muted-foreground">Token Price</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">$10,000</div>
              <div className="text-xs text-muted-foreground">Your Token Value</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payout History */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Payout Transaction Log
          </CardTitle>
          <CardDescription>
            Historical record of your royalty payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutHistory.map((payout, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{payout.month}</TableCell>
                  <TableCell className="text-success font-semibold">
                    ${payout.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{payout.date}</TableCell>
                  <TableCell>
                    <Badge className="bg-success text-success-foreground">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4 pt-4 border-t border-border flex justify-center">
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All Transactions on Polygon Explorer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}