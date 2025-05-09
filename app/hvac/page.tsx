import Link from "next/link"
import { Building, MessageSquare, Wind, AlertTriangle, CheckCircle, Clock, Filter, Thermometer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HVACPage() {
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
            <Link href="/plumbing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Plumbing
            </Link>
            <Link href="/electrical" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Electrical
            </Link>
            <Link href="/hvac" className="text-sm font-medium">
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
              <h1 className="text-3xl font-bold tracking-tight">HVAC Systems</h1>
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
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">1 high priority, 3 standard priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Scheduled Maintenance</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: Quarterly Filter Change (15 May)</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed This Month</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Total cost: $3,250.00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Annual Budget</CardTitle>
                  <Wind className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$18,000.00</div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-muted-foreground">Budget Used</div>
                      <div>35%</div>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current HVAC Issues</CardTitle>
                <CardDescription>Active heating, ventilation, and air conditioning problems</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="high">High Priority</TabsTrigger>
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="all">All Issues</TabsTrigger>
                  </TabsList>
                  <TabsContent value="high" className="space-y-4 pt-4">
                    <div className="rounded-md border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Main Cooling System Failure</p>
                          <p className="text-sm text-muted-foreground">Reported 1 day ago by Building Manager</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                            <span className="text-xs">High Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Central cooling system for floors 3-5 not functioning. Temperature readings showing 28°C in
                            affected areas. Multiple resident complaints received.
                          </p>
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
                  <TabsContent value="standard" className="space-y-4 pt-4">
                    <div className="rounded-md border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Gym Ventilation Issue</p>
                          <p className="text-sm text-muted-foreground">Reported 3 days ago by Residents</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            <span className="text-xs">Standard Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Poor air circulation in the gym area, especially during peak usage hours. Ventilation fans
                            appear to be running at reduced capacity.
                          </p>
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
                          <p className="font-medium">Lobby Temperature Fluctuations</p>
                          <p className="text-sm text-muted-foreground">Reported 4 days ago by Building Manager</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            <span className="text-xs">Standard Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Significant temperature fluctuations in the lobby area throughout the day. Thermostat may
                            need recalibration or replacement.
                          </p>
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
                          <p className="font-medium">Unit 405 Heating Issue</p>
                          <p className="text-sm text-muted-foreground">Reported 5 days ago by Unit Owner</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            <span className="text-xs">Standard Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Heating not functioning properly in Unit 405. Resident reports cold air coming from vents
                            when heat is turned on.
                          </p>
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
                  <TabsContent value="all" className="space-y-4 pt-4">
                    <div className="rounded-md border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Main Cooling System Failure</p>
                          <p className="text-sm text-muted-foreground">Reported 1 day ago by Building Manager</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                            <span className="text-xs">High Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Central cooling system for floors 3-5 not functioning. Temperature readings showing 28°C in
                            affected areas. Multiple resident complaints received.
                          </p>
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
                          <p className="font-medium">Gym Ventilation Issue</p>
                          <p className="text-sm text-muted-foreground">Reported 3 days ago by Residents</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            <span className="text-xs">Standard Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Poor air circulation in the gym area, especially during peak usage hours. Ventilation fans
                            appear to be running at reduced capacity.
                          </p>
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
                          <p className="font-medium">Lobby Temperature Fluctuations</p>
                          <p className="text-sm text-muted-foreground">Reported 4 days ago by Building Manager</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            <span className="text-xs">Standard Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Significant temperature fluctuations in the lobby area throughout the day. Thermostat may
                            need recalibration or replacement.
                          </p>
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
                          <p className="font-medium">Unit 405 Heating Issue</p>
                          <p className="text-sm text-muted-foreground">Reported 5 days ago by Unit Owner</p>
                          <div className="mt-2 flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                            <span className="text-xs">Standard Priority</span>
                          </div>
                          <p className="text-sm mt-2">
                            Heating not functioning properly in Unit 405. Resident reports cold air coming from vents
                            when heat is turned on.
                          </p>
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
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View All HVAC Issues</Button>
              </CardFooter>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>HVAC Maintenance Schedule</CardTitle>
                  <CardDescription>Upcoming system maintenance and inspections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Quarterly Filter Change</p>
                          <p className="text-sm text-muted-foreground">Scheduled: 15 May 2025, 9:00 AM - 3:00 PM</p>
                          <p className="text-sm mt-2">
                            Replacement of all HVAC filters throughout the building. Includes inspection of air handling
                            units.
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Annual Cooling System Maintenance</p>
                          <p className="text-sm text-muted-foreground">Scheduled: 1 June 2025, 8:00 AM - 5:00 PM</p>
                          <p className="text-sm mt-2">
                            Comprehensive maintenance of cooling towers, chillers, and associated equipment before
                            summer season.
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Duct Cleaning</p>
                          <p className="text-sm text-muted-foreground">Scheduled: 10 July 2025, 9:00 AM - 4:00 PM</p>
                          <p className="text-sm mt-2">
                            Cleaning of all ventilation ducts and air returns throughout the building. May cause
                            temporary system shutdown.
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Schedule New Maintenance</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HVAC Contractors</CardTitle>
                  <CardDescription>Approved service providers for HVAC repairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div>
                        <p className="font-medium">CoolAir Systems</p>
                        <p className="text-sm text-muted-foreground">Commercial HVAC specialists</p>
                        <div className="mt-1 flex items-center">
                          <p className="text-sm">Contact: (02) 9123 4567 | service@coolairsystems.com.au</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="available">
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Available</SelectItem>
                            <SelectItem value="busy">Busy</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div>
                        <p className="font-medium">Sydney Climate Control</p>
                        <p className="text-sm text-muted-foreground">Full-service HVAC maintenance</p>
                        <div className="mt-1 flex items-center">
                          <p className="text-sm">Contact: (02) 9876 5432 | info@sydneyclimate.com.au</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="scheduled">
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Available</SelectItem>
                            <SelectItem value="busy">Busy</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <div>
                        <p className="font-medium">AirFlow Experts</p>
                        <p className="text-sm text-muted-foreground">Ventilation and air quality specialists</p>
                        <div className="mt-1 flex items-center">
                          <p className="text-sm">Contact: (02) 9555 1234 | service@airflowexperts.com.au</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Select defaultValue="busy">
                          <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Available</SelectItem>
                            <SelectItem value="busy">Busy</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View Contractor History</Button>
                  <Button>Add New Contractor</Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Building Climate Control</CardTitle>
                <CardDescription>Monitor and adjust building temperature settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-medium">Common Areas</h3>
                      <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        System Active
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-5 w-5 text-blue-500" />
                            <p className="font-medium">Lobby</p>
                          </div>
                          <div className="text-xl font-bold">22°C</div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">Target: 22°C</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              -
                            </Button>
                            <Button variant="outline" size="sm">
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-5 w-5 text-red-500" />
                            <p className="font-medium">Gym</p>
                          </div>
                          <div className="text-xl font-bold">20°C</div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">Target: 19°C</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              -
                            </Button>
                            <Button variant="outline" size="sm">
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Thermometer className="h-5 w-5 text-blue-500" />
                            <p className="font-medium">Community Room</p>
                          </div>
                          <div className="text-xl font-bold">21°C</div>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">Target: 21°C</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              -
                            </Button>
                            <Button variant="outline" size="sm">
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-medium">System Status</h3>
                      <Button variant="outline" size="sm">
                        System Settings
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Mode</p>
                          <Select defaultValue="cooling">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue placeholder="Mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cooling">Cooling</SelectItem>
                              <SelectItem value="heating">Heating</SelectItem>
                              <SelectItem value="fan">Fan Only</SelectItem>
                              <SelectItem value="auto">Auto</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Fan Speed</p>
                          <Select defaultValue="auto">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue placeholder="Fan Speed" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="auto">Auto</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Schedule</p>
                          <Select defaultValue="normal">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue placeholder="Schedule" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="normal">Normal</SelectItem>
                              <SelectItem value="energy-save">Energy Save</SelectItem>
                              <SelectItem value="event">Event Mode</SelectItem>
                              <SelectItem value="custom">Custom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="rounded-md border p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">System Health</p>
                          <div className="flex items-center">
                            <span className="inline-flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                            <span>Good</span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-muted-foreground">Last maintenance: 15 Feb 2025</p>
                          <p className="text-sm text-muted-foreground">Next scheduled: 15 May 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to Default Settings</Button>
                <Button>Apply Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
