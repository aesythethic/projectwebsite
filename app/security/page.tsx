import Link from "next/link"
import Image from "next/image"
import { Building, MessageSquare, Shield, Bell, Phone, UserPlus, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SecurityPage() {
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
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Maintenance
            </Link>
            <Link href="/security" className="text-sm font-medium">
              Security
            </Link>
            <Link href="/amenities" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Amenities
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
              <h1 className="text-3xl font-bold tracking-tight">Building Security</h1>
              <Button>
                <Shield className="mr-2 h-4 w-4" />
                Security Report
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Intercom System</CardTitle>
                  <CardDescription>Building entry and communication system</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/images/intercom-system.png"
                      alt="Building intercom system"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>
                      The building is equipped with a multi-unit intercom system allowing visitors to contact residents
                      directly.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Test System
                  </Button>
                  <Button size="sm">
                    <Settings className="mr-2 h-4 w-4" />
                    Manage Access
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Access Control</CardTitle>
                  <CardDescription>Manage building access and security</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="fobs" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="fobs">Key Fobs</TabsTrigger>
                      <TabsTrigger value="codes">Access Codes</TabsTrigger>
                      <TabsTrigger value="cards">Access Cards</TabsTrigger>
                    </TabsList>
                    <TabsContent value="fobs" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Active Key Fobs</h3>
                        <div className="rounded-md border p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Fob #A12345</p>
                              <p className="text-sm text-muted-foreground">Assigned to: Unit 302 - Sarah Johnson</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Deactivate
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-md border p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Fob #A12346</p>
                              <p className="text-sm text-muted-foreground">Assigned to: Unit 105 - Michael Chen</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Deactivate
                            </Button>
                          </div>
                        </div>
                        <div className="rounded-md border p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Fob #A12347</p>
                              <p className="text-sm text-muted-foreground">Assigned to: Unit 201 - Emma Wilson</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Deactivate
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="codes" className="pt-4">
                      <div className="rounded-lg border p-4 text-center">
                        <p className="text-muted-foreground">Access code management would appear here</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="cards" className="pt-4">
                      <div className="rounded-lg border p-4 text-center">
                        <p className="text-muted-foreground">Access card management would appear here</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Issue New Access
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Incidents</CardTitle>
                  <CardDescription>Recent security events and reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border p-3">
                      <div className="flex items-start gap-2">
                        <Bell className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Unauthorized Access Attempt</p>
                          <p className="text-sm text-muted-foreground">Main Entrance - 2 days ago</p>
                          <p className="text-sm mt-1">
                            Multiple failed access attempts at the main entrance between 2:00 AM and 2:30 AM.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-start gap-2">
                        <Bell className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Security System Maintenance</p>
                          <p className="text-sm text-muted-foreground">All Areas - 1 week ago</p>
                          <p className="text-sm mt-1">
                            Routine maintenance and testing of all security systems completed successfully.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex items-start gap-2">
                        <Bell className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Garage Door Malfunction</p>
                          <p className="text-sm text-muted-foreground">Parking Level 1 - 2 weeks ago</p>
                          <p className="text-sm mt-1">
                            Garage door remained open for 30 minutes due to sensor malfunction. Issue has been resolved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View All Incidents
                  </Button>
                  <Button size="sm">Report Incident</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
