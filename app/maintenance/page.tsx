import Link from "next/link"
import Image from "next/image"
import { Building, MessageSquare, Filter, Plus, Search, Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MaintenancePage() {
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
            <Link href="/finances" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Finances
            </Link>
            <Link href="/maintenance" className="text-sm font-medium">
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
              <h1 className="text-3xl font-bold tracking-tight">Maintenance Requests</h1>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Request
              </Button>
            </div>

            {/* Building Images Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Building Images</CardTitle>
                <CardDescription>Reference images for maintenance issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="relative h-64 w-full rounded-md overflow-hidden border">
                      <Image
                        src="/images/intercom-system.png"
                        alt="Building intercom system"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium text-center">Intercom System</p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative h-64 w-full rounded-md overflow-hidden border">
                      <Image
                        src="/images/water-leak.png"
                        alt="Water leak in basement"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="font-medium text-center">Basement Water Leak</p>
                  </div>

                  <div className="space-y-2">
                    <div className="relative h-64 w-full rounded-md overflow-hidden border">
                      <Image src="/images/lobby-area.png" alt="Building lobby area" fill className="object-cover" />
                    </div>
                    <p className="font-medium text-center">Lobby Area</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Camera className="mr-2 h-4 w-4" />
                  Upload New Image
                </Button>
              </CardFooter>
            </Card>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search maintenance requests..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/2"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="active">Active (7)</TabsTrigger>
                <TabsTrigger value="completed">Completed (12)</TabsTrigger>
                <TabsTrigger value="all">All (19)</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="space-y-4 pt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Lobby Light Fixture Broken</CardTitle>
                        <CardDescription>Reported by: Unit 302 - Sarah Johnson</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                        In Progress
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The main light fixture in the lobby is flickering and sometimes doesn't turn on at all. This is a
                      safety concern especially at night.
                    </p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <span>Reported: 2 days ago</span>
                      <span className="mx-2">•</span>
                      <span>Priority: Medium</span>
                      <span className="mx-2">•</span>
                      <span>Location: Common Area - Lobby</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Update Status
                      </Button>
                      <Button size="sm">Assign Contractor</Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Water Leak in Basement Parking</CardTitle>
                        <CardDescription>Reported by: Building Manager - John Smith</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                        High Priority
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      There is a significant water leak in the basement parking area near spaces 15-18. Water is pooling
                      and may be coming from a pipe in the ceiling.
                    </p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <span>Reported: 3 days ago</span>
                      <span className="mx-2">•</span>
                      <span>Priority: High</span>
                      <span className="mx-2">•</span>
                      <span>Location: Basement - Parking</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Update Status
                      </Button>
                      <Button size="sm">Assign Contractor</Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Intercom System Malfunction</CardTitle>
                        <CardDescription>Reported by: Unit 105 - Michael Chen</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Scheduled
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The intercom in unit 105 is not working properly. Visitors can't buzz in and the video display is
                      blank.
                    </p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <span>Reported: 5 days ago</span>
                      <span className="mx-2">•</span>
                      <span>Priority: Medium</span>
                      <span className="mx-2">•</span>
                      <span>Location: Unit 105</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Update Status
                      </Button>
                      <Button size="sm">View Schedule</Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="completed" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Completed maintenance requests would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="all" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">All maintenance requests would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
