import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  Calendar,
  DollarSign,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RoyaltyData {
  month: string;
  amount: number;
  source: string;
  streams: number;
  status: "uploaded" | "processed" | "distributed";
  uploadDate: string;
}

export function RoyaltyDataManagement() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [royaltyData] = useState<RoyaltyData[]>([
    {
      month: "February 2024",
      amount: 2450.75,
      source: "Spotify Premium",
      streams: 125000,
      status: "distributed",
      uploadDate: "2024-03-01"
    },
    {
      month: "January 2024", 
      amount: 2125.50,
      source: "Spotify Premium",
      streams: 108000,
      status: "distributed",
      uploadDate: "2024-02-01"
    },
    {
      month: "December 2023",
      amount: 2650.25,
      source: "Spotify Premium", 
      streams: 135000,
      status: "distributed",
      uploadDate: "2024-01-01"
    }
  ]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    
    toast({
      title: "Royalty Data Uploaded",
      description: `${selectedFile.name} has been processed and validated successfully.`,
    });
    setSelectedFile(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "distributed":
        return <Badge className="bg-success text-success-foreground"><CheckCircle2 className="h-3 w-3 mr-1" />Distributed</Badge>;
      case "processed":
        return <Badge variant="outline"><TrendingUp className="h-3 w-3 mr-1" />Processed</Badge>;
      default:
        return <Badge variant="outline"><FileText className="h-3 w-3 mr-1" />Uploaded</Badge>;
    }
  };

  const totalEarnings = royaltyData.reduce((sum, data) => sum + data.amount, 0);
  const totalStreams = royaltyData.reduce((sum, data) => sum + data.streams, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Royalty Data Management</h1>
        <p className="text-muted-foreground">Upload and process monthly royalty data for automated payouts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Last 3 months</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Streams</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totalStreams / 1000).toFixed(0)}K</div>
            <p className="text-xs text-muted-foreground">Across all platforms</p>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Upload Due</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">Mar 31</div>
            <p className="text-xs text-muted-foreground">March 2024 data</p>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Royalty Data Ingest Tool
          </CardTitle>
          <CardDescription>
            Upload standardized CSV files containing monthly royalty information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Ensure your CSV file follows the standard format: Date, Amount, Source, Streams, Currency. 
              All data will be cryptographically signed before submission to the smart contract.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div>
              <Label htmlFor="file-upload">Upload Royalty Data (CSV)</Label>
              <Input
                id="file-upload"
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                className="mt-1"
              />
            </div>

            {selectedFile && (
              <div className="p-4 bg-secondary rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{selectedFile.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Validate
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary"
                      onClick={handleUpload}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Process & Sign
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Data Format Guide
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Data */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Historical Royalty Data
          </CardTitle>
          <CardDescription>
            Previously uploaded and processed royalty information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Streams</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {royaltyData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{data.month}</TableCell>
                  <TableCell className="text-success font-semibold">
                    ${data.amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{data.source}</TableCell>
                  <TableCell>{data.streams.toLocaleString()}</TableCell>
                  <TableCell>{getStatusBadge(data.status)}</TableCell>
                  <TableCell className="text-muted-foreground">{data.uploadDate}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
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