import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Plus, 
  Search, 
  ExternalLink,
  User,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Investor {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  kycStatus: "pending" | "approved" | "rejected";
  submittedAt: string;
  documents: string[];
}

export function KYCManagement() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [investors] = useState<Investor[]>([
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      walletAddress: "0x1234...5678",
      kycStatus: "approved",
      submittedAt: "2024-03-15",
      documents: ["ID", "Proof of Address"]
    },
    {
      id: "2", 
      name: "Bob Smith",
      email: "bob@example.com",
      walletAddress: "0xabcd...efgh",
      kycStatus: "pending",
      submittedAt: "2024-03-20",
      documents: ["ID", "Proof of Address", "Income Verification"]
    },
    {
      id: "3",
      name: "Carol Davis",
      email: "carol@example.com", 
      walletAddress: "0x9876...4321",
      kycStatus: "approved",
      submittedAt: "2024-03-10",
      documents: ["ID", "Proof of Address"]
    }
  ]);

  const handleKYCAction = (investorId: string, action: "approve" | "reject") => {
    toast({
      title: `KYC ${action === "approve" ? "Approved" : "Rejected"}`,
      description: `Investor ${investorId} has been ${action}d and wallet ${action === "approve" ? "whitelisted" : "removed"}.`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success text-success-foreground"><CheckCircle2 className="h-3 w-3 mr-1" />Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    }
  };

  const filteredInvestors = investors.filter(investor =>
    investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investor.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">KYC/AML Management</h1>
        <p className="text-muted-foreground">Manage investor verification and wallet whitelisting</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{investors.length}</div>
            <p className="text-xs text-muted-foreground">All time submissions</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {investors.filter(i => i.kycStatus === "approved").length}
            </div>
            <p className="text-xs text-muted-foreground">Wallets whitelisted</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {investors.filter(i => i.kycStatus === "pending").length}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      {/* KYC Table */}
      <Card className="shadow-elegant">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Investor Verification
              </CardTitle>
              <CardDescription>
                Review and manage KYC submissions
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Investor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Investor</DialogTitle>
                  <DialogDescription>
                    Manually add an investor for KYC verification
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div>
                    <Label htmlFor="wallet">Wallet Address</Label>
                    <Input id="wallet" placeholder="0x..." />
                  </div>
                  <Button className="w-full bg-gradient-primary">
                    Send KYC Invitation
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search investors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Wallet Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvestors.map((investor) => (
                <TableRow key={investor.id}>
                  <TableCell className="font-medium">{investor.name}</TableCell>
                  <TableCell className="text-muted-foreground">{investor.email}</TableCell>
                  <TableCell className="font-mono text-sm">{investor.walletAddress}</TableCell>
                  <TableCell>{getStatusBadge(investor.kycStatus)}</TableCell>
                  <TableCell className="text-muted-foreground">{investor.submittedAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {investor.kycStatus === "pending" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-success border-success hover:bg-success hover:text-success-foreground"
                            onClick={() => handleKYCAction(investor.id, "approve")}
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => handleKYCAction(investor.id, "reject")}
                          >
                            Reject
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
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