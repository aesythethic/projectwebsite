import Link from "next/link"
import Image from "next/image"
import { Building, MessageSquare, Dumbbell, PocketIcon as Pool, Users, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AmenitiesPage() {
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
            <Link href="/security" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Security
            </Link>
            <Link href="/amenities" className="text-sm font-medium">
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
              <h1 className="text-3xl font-bold tracking-tight">Building Amenities</h1>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Book Amenity
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Lobby & Common Areas</CardTitle>
                  <CardDescription>Building entrance and shared spaces</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="relative h-64 w-full mb-4">
                    <Image
                      src="/images/lobby-area.png"
                      alt="Building lobby area"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>
                      Our modern lobby features contemporary design elements, comfortable seating, and 24/7 access for
                      residents and guests.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Maintenance Schedule
                  </Button>
                  <Button size="sm">Report Issue</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fitness Center</CardTitle>
                  <CardDescription>Gym and wellness facilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border bg-muted/40 p-2 aspect-video flex items-center justify-center mb-4">
                    <Dumbbell className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Hours of Operation</p>
                      <p className="text-sm">5:00 AM - 11:00 PM Daily</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Current Status</p>
                      <div className="flex items-center">
                        <span className="inline-flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm">Open</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Current Occupancy</p>
                      <p className="text-sm">3/15 Residents</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Check Occupancy
                  </Button>
                  <Button size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Training Session
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Swimming Pool</CardTitle>
                  <CardDescription>Indoor heated pool and spa area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border bg-muted/40 p-2 aspect-video flex items-center justify-center mb-4">
                    <Pool className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Hours of Operation</p>
                      <p className="text-sm">6:00 AM - 10:00 PM Daily</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Current Status</p>
                      <div className="flex items-center">
                        <span className="inline-flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm">Open</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">Maintenance</p>
                      <p className="text-sm">Scheduled: Monday 7:00 AM - 9:00 AM</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Check Occupancy
                  </Button>
                  <Button size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Private Event
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Amenity Bookings</CardTitle>
                <CardDescription>Manage and view facility reservations</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="my-bookings">My Bookings</TabsTrigger>
                    <TabsTrigger value="availability">Availability</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming" className="space-y-4 pt-4">
                    <div className="rounded-md border p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Community Room</p>
                          <p className="text-sm text-muted-foreground">15 May 2025, 6:00 PM - 9:00 PM</p>
                          <p className="text-sm mt-1">
                            Booked by: David Nguyen (Unit 405) - Residents Committee Meeting
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Rooftop Terrace</p>
                          <p className="text-sm text-muted-foreground">20 May 2025, 7:00 PM - 10:00 PM</p>
                          <p className="text-sm mt-1">Booked by: Sarah Johnson (Unit 302) - Birthday Celebration</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">BBQ Area</p>
                          <p className="text-sm text-muted-foreground">28 May 2025, 12:00 PM - 3:00 PM</p>
                          <p className="text-sm mt-1">Booked by: Michael Chen (Unit 105) - Family Gathering</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="my-bookings" className="pt-4">
                    <div className="rounded-lg border p-4 text-center">
                      <p className="text-muted-foreground">Your bookings would appear here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="availability" className="pt-4">
                    <div className="rounded-lg border p-4 text-center">
                      <p className="text-muted-foreground">Amenity availability calendar would appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Make New Booking</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
