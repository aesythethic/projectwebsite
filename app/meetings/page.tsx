import Link from "next/link"
import { Building, Calendar, Filter, MessageSquare, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MeetingsPage() {
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
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Maintenance
            </Link>
            <Link href="/documents" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Documents
            </Link>
            <Link href="/meetings" className="text-sm font-medium">
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
              <h1 className="text-3xl font-bold tracking-tight">Meeting Management</h1>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search meetings..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/2"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Meeting Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Meetings</SelectItem>
                    <SelectItem value="agm">Annual General Meeting</SelectItem>
                    <SelectItem value="committee">Committee Meeting</SelectItem>
                    <SelectItem value="special">Special General Meeting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-4 pt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Annual General Meeting</CardTitle>
                        <CardDescription>15 May 2025, 7:00 PM - 9:00 PM</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                        AGM
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Location:</span> Building Common Room
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Organizer:</span> David Nguyen (Chairperson)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Annual general meeting to discuss budget approval, committee election, and major maintenance
                        projects for the upcoming year.
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Agenda
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Add to Calendar
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Committee Meeting</CardTitle>
                        <CardDescription>28 May 2025, 6:30 PM - 8:00 PM</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Committee
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Location:</span> Online (Zoom)
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Organizer:</span> David Nguyen (Chairperson)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Monthly committee meeting to discuss ongoing maintenance issues, financial updates, and resident
                        concerns.
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Agenda
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Add to Calendar
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="past" className="pt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Committee Meeting</CardTitle>
                        <CardDescription>10 April 2025, 6:30 PM - 8:00 PM</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        Committee
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Location:</span> Building Common Room
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Organizer:</span> David Nguyen (Chairperson)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Monthly committee meeting to discuss ongoing maintenance issues, financial updates, and resident
                        concerns.
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Minutes
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Minutes
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>Special General Meeting</CardTitle>
                        <CardDescription>15 March 2025, 7:00 PM - 9:00 PM</CardDescription>
                      </div>
                      <div className="flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                        Special
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Location:</span> Building Common Room
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Organizer:</span> David Nguyen (Chairperson)
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Special general meeting to discuss and vote on the lobby renovation project and associated
                        special levy.
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Minutes
                    </Button>
                    <Button variant="outline" size="sm">
                      Download Minutes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="all" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">All meetings would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
