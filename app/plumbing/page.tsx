import Link from "next/link"
import Image from "next/image"
import { Building, MessageSquare, Droplet, AlertTriangle, CheckCircle, Clock, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function PlumbingPage() {
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
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Maintenance
            </Link>
            <Link href="/plumbing" className="text-sm font-medium">
              Plumbing
            </Link>
            <Link href="/electrical" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Electrical
            </Link>
            <Link href="/hvac" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              HVAC
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
              <h1 className="text-3xl font-bold tracking-tight">Plumbing Management</h1>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Issues
                </Button>
                <Button>
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Report Issue
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">3 high priority, 4 standard priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Scheduled Repairs</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">Next: Basement Leak (Tomorrow, 9:00 AM)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed This Month</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Total cost: $3,450.00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Annual Budget</CardTitle>
                  <Droplet className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$15,000.00</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">Budget Used</div>
                      <div>38%</div>
                    </div>
                    <Progress value={38} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Current Plumbing Issues</CardTitle>
                  <CardDescription>Active plumbing problems in the building</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="high" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="high">High Priority</TabsTrigger>
                      <TabsTrigger value="standard">Standard</TabsTrigger>
                      <TabsTrigger value="all">All Issues</TabsTrigger>
                    </TabsList>
                    <TabsContent value="high" className="space-y-4 pt-4">
                      <div className="rounded-md border p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">Water Leak in Basement Parking</p>
                            <p className="text-sm text-muted-foreground">Reported 3 days ago by Building Manager</p>
                            <div className="mt-2 flex items-center">
                              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                              <span className="text-xs">High Priority</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Schedule Repair</Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">Main Water Line Pressure Issue</p>
                            <p className="text-sm text-muted-foreground">Reported 1 day ago by Building Manager</p>
                            <div className="mt-2 flex items-center">
                              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                              <span className="text-xs">High Priority</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Schedule Repair</Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium">Hot Water System Failure</p>
                            <p className="text-sm text-muted-foreground">Reported 2 days ago by Multiple Residents</p>
                            <div className="mt-2 flex items-center">
                              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                              <span className="text-xs">High Priority</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Schedule Repair</Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="standard" className="pt-4">
                      <div className="rounded-lg border p-4 text-center">
                        <p className="text-muted-foreground">Standard priority issues would appear here</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="all" className="pt-4">
                      <div className="rounded-lg border p-4 text-center">
                        <p className="text-muted-foreground">All plumbing issues would appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View All Plumbing Issues</Button>
                </CardFooter>
              </Card>

              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle>Basement Water Leak</CardTitle>
                  <CardDescription>High priority issue in parking area</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/images/water-leak.png"
                      alt="Water leak in basement"
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="font-medium">Location</p>
                        <p className="text-sm">Basement Parking, near spaces 15-18</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium">Reported By</p>
                        <p className="text-sm">John Smith (Building Manager)</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium">Date Reported</p>
                        <p className="text-sm">6 May 2025</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium">Status</p>
                        <div className="flex items-center">
                          <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                          <span className="text-sm">Scheduled for Repair</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-medium">Scheduled Repair</p>
                        <p className="text-sm">10 May 2025, 9:00 AM</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Description</p>
                      <p className="text-sm text-muted-foreground">
                        Significant water leak from ceiling pipe in the basement parking area. Water is pooling on the
                        floor and may be causing damage to the concrete. Appears to be coming from a joint in the main
                        water supply pipe.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <Clock className="mr-2 h-4 w-4" />
                    Reschedule
                  </Button>
                  <Button>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark as Resolved
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
