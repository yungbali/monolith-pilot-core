import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  Play, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Shield,
  TrendingUp,
  Users,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PayoutRecord {
  id: string;
  month: string;
  totalAmount: number;
  investors: number;
  status: "pending" | "processing" | "completed" | "failed";
  executedAt?: string;
  transactionHash?: string;
  gasUsed?: number;
}

export function PayoutExecution() {
  const { toast } = useToast();
  const [isExecuting, setIsExecuting] = useState(false);
  const [payoutRecords] = useState<PayoutRecord[]>([
    {
      id: "1",
      month: "February 2024",
      totalAmount: 2450.75,
      investors: 8,
      status: "completed",
      executedAt: "2024-03-01 14:30:00",
      transactionHash: "0xabcd1234...",
      gasUsed: 125000
    },
    {
      id: "2", 
      month: "January 2024",
      totalAmount: 2125.50,
      investors: 8,
      status: "completed",
      executedAt: "2024-02-01 14:30:00",
      transactionHash: "0xefgh5678...",
      gasUsed: 125000
    },
    {
      id: "3",
      month: "March 2024",
      totalAmount: 2650.25,
      investors: 8,
      status: "pending",
    }
  ]);

  const handleExecutePayout = async () => {
    setIsExecuting(true);
    
    // Simulate payout execution
    setTimeout(() => {
      setIsExecuting(false);
      toast({
        title: "Payout Executed Successfully",
        description: "March 2024 royalty distribution has been completed. All investor wallets have been credited.",
      });
    }, 3000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground"><CheckCircle2 className="h-3 w-3 mr-1" />Completed</Badge>;
      case "processing":
        return <Badge variant="outline"><Clock className="h-3 w-3 mr-1" />Processing</Badge>;
      case "failed":
        return <Badge variant="destructive"><AlertTriangle className="h-3 w-3 mr-1" />Failed</Badge>;
      default:
        return <Badge variant="outline"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    }
  };

  const pendingPayout = payoutRecords.find(p => p.status === "pending");
  const completedPayouts = payoutRecords.filter(p => p.status === "completed");
  const totalDistributed = completedPayouts.reduce((sum, p) => sum + p.totalAmount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Payout Execution</h1>
        <p className="text-muted-foreground">Execute automated royalty distributions to investor wallets</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Distributed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">${totalDistributed.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across {completedPayouts.length} payouts</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Verified wallets</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">100%</div>
            <p className="text-xs text-muted-foreground">All payouts successful</p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Payout Execution */}
      {pendingPayout && (
        <Card className="shadow-premium border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <DollarSign className="h-6 w-6 text-accent" />
              Execute March 2024 Payout
            </CardTitle>
            <CardDescription>
              Ready to distribute ${pendingPayout.totalAmount.toLocaleString()} to {pendingPayout.investors} verified investors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                This will execute the core sequence: 1) Fund payout contract with stablecoins, 
                2) Submit signed royalty data, 3) Trigger automated distribution to all whitelisted wallets.
              </AlertDescription>
            </Alert>

            {/* Pre-execution Checklist */}
            <div className="space-y-3">
              <h4 className="font-semibold">Pre-execution Checklist</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-sm">Royalty data uploaded and validated</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-sm">All investor wallets verified (KYC approved)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-sm">Payout contract funded with sufficient USDC</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-sm">Gas fees estimated and approved</span>
                </div>
              </div>
            </div>

            {/* Distribution Preview */}
            <div className="space-y-3">
              <h4 className="font-semibold">Distribution Preview</h4>
              <div className="bg-secondary p-4 rounded-lg space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Amount:</span>
                  <span className="font-medium">${pendingPayout.totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Per Token (1 SBVD):</span>
                  <span className="font-medium">${(pendingPayout.totalAmount / 50000).toFixed(4)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Estimated Gas:</span>
                  <span className="font-medium">~0.05 MATIC</span>
                </div>
              </div>
            </div>

            {isExecuting && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 animate-spin" />
                  <span className="text-sm font-medium">Executing payout...</span>
                </div>
                <Progress value={60} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Submitting transaction to Polygon network...
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button 
                className="bg-gradient-primary flex-1"
                onClick={handleExecutePayout}
                disabled={isExecuting}
              >
                <Play className="h-4 w-4 mr-2" />
                {isExecuting ? "Executing..." : "Execute Payout"}
              </Button>
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Preview on Explorer
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payout History */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Payout History
          </CardTitle>
          <CardDescription>
            Historical record of all executed royalty distributions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Investors</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Executed</TableHead>
                <TableHead>Transaction</TableHead>
                <TableHead>Gas Used</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell className="font-medium">{record.month}</TableCell>
                  <TableCell className="text-success font-semibold">
                    ${record.totalAmount.toLocaleString()}
                  </TableCell>
                  <TableCell>{record.investors}</TableCell>
                  <TableCell>{getStatusBadge(record.status)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {record.executedAt || "—"}
                  </TableCell>
                  <TableCell>
                    {record.transactionHash ? (
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    ) : "—"}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {record.gasUsed ? record.gasUsed.toLocaleString() : "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}