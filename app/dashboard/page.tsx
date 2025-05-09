import Link from "next/link"
import { ArrowUpRight, Building, Calendar, DollarSign, MessageSquare, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <span className="text-xl font-bold">Strata Manager</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/residents" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Residents
            </Link>
            <Link href="/finances" className="text-sm font-medium text-muted-foreground hover:text-foreground">
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
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Committee Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline">Export</Button>
                <Button>New Announcement</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,685.00</div>
                  <p className="text-xs text-muted-foreground">+$2,500.00 from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$56,320.00</div>
                  <p className="text-xs text-muted-foreground">+$5,000.00 from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
                  <Wrench className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">3 pending, 4 in progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: Annual General Meeting (15 May)</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
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
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Levy Collection Status</CardTitle>
                  <CardDescription>Current quarter levy collection progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Administration Fund</div>
                      <div>85%</div>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Capital Works Fund</div>
                      <div>78%</div>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Special Levy (Lobby Renovation)</div>
                      <div>62%</div>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Link href="/finances/levies" className="flex items-center">
                      View All Levies
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Maintenance Requests</CardTitle>
                  <CardDescription>Latest maintenance issues reported by residents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-1">
                      <div className="font-medium">Lobby Light Fixture Broken</div>
                      <div className="text-sm text-muted-foreground">Unit 302 - Reported 2 days ago</div>
                      <div className="mt-1 flex items-center">
                        <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500"></span>
                        <span className="ml-2 text-xs text-muted-foreground">In Progress</span>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">Water Leak in Basement Parking</div>
                      <div className="text-sm text-muted-foreground">Building Manager - Reported 3 days ago</div>
                      <div className="mt-1 flex items-center">
                        <span className="inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                        <span className="ml-2 text-xs text-muted-foreground">High Priority</span>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <div className="font-medium">Intercom System Malfunction</div>
                      <div className="text-sm text-muted-foreground">Unit 105 - Reported 5 days ago</div>
                      <div className="mt-1 flex items-center">
                        <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="ml-2 text-xs text-muted-foreground">Scheduled</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Link href="/maintenance" className="flex items-center">
                      View All Maintenance Requests
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Upcoming Meetings</CardTitle>
                  <CardDescription>Schedule and details for upcoming strata meetings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="upcoming">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="past">Past</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="space-y-4 pt-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Annual General Meeting</h3>
                            <p className="text-sm text-muted-foreground">15 May 2025, 7:00 PM</p>
                            <p className="text-sm text-muted-foreground">Building Common Room</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Agenda
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Committee Meeting</h3>
                            <p className="text-sm text-muted-foreground">28 May 2025, 6:30 PM</p>
                            <p className="text-sm text-muted-foreground">Online (Zoom)</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Agenda
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="past" className="space-y-4 pt-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Committee Meeting</h3>
                            <p className="text-sm text-muted-foreground">10 April 2025, 6:30 PM</p>
                            <p className="text-sm text-muted-foreground">Building Common Room</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Minutes
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium">Special General Meeting</h3>
                            <p className="text-sm text-muted-foreground">15 March 2025, 7:00 PM</p>
                            <p className="text-sm text-muted-foreground">Building Common Room</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Minutes
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Link href="/meetings" className="flex items-center">
                      Manage Meetings
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
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
