import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  DollarSign, 
  TrendingUp, 
  Wallet, 
  ExternalLink,
  Music,
  CheckCircle2,
  Shield,
  Calendar
} from "lucide-react";

export function InvestorPortfolio() {
  const transactions = [
    { 
      date: "2024-03-01", 
      type: "Royalty Payment", 
      amount: 196.06, 
      hash: "0xabcd1234...",
      status: "completed"
    },
    { 
      date: "2024-02-01", 
      type: "Royalty Payment", 
      amount: 170.04, 
      hash: "0xefgh5678...",
      status: "completed"
    },
    { 
      date: "2024-01-01", 
      type: "Royalty Payment", 
      amount: 212.02, 
      hash: "0ijkl9012...",
      status: "completed"
    },
    { 
      date: "2024-03-01", 
      type: "Token Purchase", 
      amount: -2000, 
      hash: "0mnop3456...",
      status: "completed"
    },
  ];

  const totalReceived = transactions
    .filter(t => t.type === "Royalty Payment")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Investment Portfolio</h1>
        <p className="text-muted-foreground">Your tokenized IP holdings and earnings</p>
      </div>

      {/* Wallet Connection Status */}
      <Alert className="border-success/20 bg-success/5">
        <Shield className="h-4 w-4" />
        <AlertDescription className="flex items-center justify-between">
          <span>
            <strong>Wallet Connected:</strong> 0x742d...E456 (KYC Verified)
          </span>
          <Badge className="bg-success text-success-foreground">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Whitelisted
          </Badge>
        </AlertDescription>
      </Alert>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Token Holdings</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,000</div>
            <p className="text-xs text-muted-foreground">SBVD tokens (4% ownership)</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Received</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">${totalReceived.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All-time earnings</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yield Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">4.2%</div>
            <p className="text-xs text-muted-foreground">Monthly average</p>
          </CardContent>
        </Card>
      </div>

      {/* Asset Details */}
      <Card className="shadow-premium border-2 border-accent/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-accent rounded-lg">
                <Music className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Sunset Boulevard Suite</CardTitle>
                <CardDescription>
                  Jazz Composition • Your Investment: $2,000
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-success text-success-foreground">
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Your Position
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Token Balance:</span>
                  <span className="font-medium">2,000 SBVD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Ownership Share:</span>
                  <span className="font-medium">4.0%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Initial Investment:</span>
                  <span className="font-medium">$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Current Value:</span>
                  <span className="font-medium">$2,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Asset Performance
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Last Payout:</span>
                  <span className="font-medium text-success">$196.06</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Next Payment:</span>
                  <span className="font-medium">April 1, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Investors:</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Creator:</span>
                  <span className="font-medium">Marcus Chen</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <Button variant="outline" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Asset Contract on Polygon Explorer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Transaction History
          </CardTitle>
          <CardDescription>
            Complete record of your payments and token activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Transaction</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tx.date}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell className={tx.amount > 0 ? "text-success font-semibold" : "text-muted-foreground"}>
                    {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toLocaleString()}
                  </TableCell>
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

          <div className="mt-4 pt-4 border-t border-border text-center">
            <div className="text-sm text-muted-foreground mb-3">
              All transactions are cryptographically verified on the Polygon blockchain
            </div>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All on Blockchain Explorer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}