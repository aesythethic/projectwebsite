import Link from "next/link"
import { ArrowUpRight, Building, Download, MessageSquare, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <span className="text-xl font-bold">Strata Manager</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/residents" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Residents
            </Link>
            <Link href="/finances" className="text-sm font-medium">
              Finances
            </Link>
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Maintenance
            </Link>
            <Link href="/documents" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Documents
            </Link>
            <Link href="/meetings" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Meetings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="outline">Log Out</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="container">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Financial Management</h1>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Reports
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Transaction
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,685.00</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">Budget Utilization</div>
                      <div>42%</div>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$56,320.00</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">Budget Utilization</div>
                      <div>15%</div>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Outstanding Levies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,450.00</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">Collection Rate</div>
                      <div>78%</div>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Annual Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$120,000.00</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">Fiscal Year Progress</div>
                      <div>33%</div>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="levies">Levies</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Overview</CardTitle>
                    <CardDescription>Track your administration and capital works funds over time.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-muted-foreground">Financial chart would appear here</p>
                    </div>
                  </CardContent>
                </Card>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Latest financial activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-1">
                          <div className="font-medium">Quarterly Levy Collection</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">5 May 2025</span>
                            <span className="font-medium text-green-600">+$12,500.00</span>
                          </div>
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Plumbing Repairs - Common Area</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">2 May 2025</span>
                            <span className="font-medium text-red-600">-$850.00</span>
                          </div>
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Building Insurance Premium</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">28 Apr 2025</span>
                            <span className="font-medium text-red-600">-$4,250.00</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href="/finances/transactions" className="flex items-center">
                          View All Transactions
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Expenses</CardTitle>
                      <CardDescription>Scheduled payments and expenses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-1">
                          <div className="font-medium">Gardening Services</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">15 May 2025</span>
                            <span className="font-medium text-red-600">-$450.00</span>
                          </div>
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Elevator Maintenance</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">20 May 2025</span>
                            <span className="font-medium text-red-600">-$1,200.00</span>
                          </div>
                        </div>
                        <div className="grid gap-1">
                          <div className="font-medium">Building Manager Salary</div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">31 May 2025</span>
                            <span className="font-medium text-red-600">-$3,500.00</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Link href="/finances/expenses" className="flex items-center">
                          View All Expenses
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="transactions" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Transaction history would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="levies" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Levy management would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="budget" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Budget planning would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
