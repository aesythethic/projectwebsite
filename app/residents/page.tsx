import Link from "next/link"
import { Building, Filter, MessageSquare, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResidentsPage() {
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
            <Link href="/residents" className="text-sm font-medium">
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
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Resident Directory</h1>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Resident
              </Button>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search residents..."
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
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Residents</SelectItem>
                    <SelectItem value="owners">Owners</SelectItem>
                    <SelectItem value="tenants">Tenants</SelectItem>
                    <SelectItem value="committee">Committee Members</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="owners">Owners</TabsTrigger>
                <TabsTrigger value="tenants">Tenants</TabsTrigger>
                <TabsTrigger value="committee">Committee</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Sarah Johnson</CardTitle>
                          <CardDescription>Unit 302</CardDescription>
                        </div>
                        <div className="flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                          Owner
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="text-sm">
                          <span className="font-medium">Email:</span> sarah.j@example.com
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Phone:</span> (02) 9123 4567
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Move-in Date:</span> 15 Jan 2020
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Michael Chen</CardTitle>
                          <CardDescription>Unit 105</CardDescription>
                        </div>
                        <div className="flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                          Owner
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="text-sm">
                          <span className="font-medium">Email:</span> michael.c@example.com
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Phone:</span> (02) 9876 5432
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Move-in Date:</span> 3 Mar 2019
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Emma Wilson</CardTitle>
                          <CardDescription>Unit 201</CardDescription>
                        </div>
                        <div className="flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                          Tenant
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="text-sm">
                          <span className="font-medium">Email:</span> emma.w@example.com
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Phone:</span> (02) 9555 1234
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Move-in Date:</span> 10 Jul 2022
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>David Nguyen</CardTitle>
                          <CardDescription>Unit 405</CardDescription>
                        </div>
                        <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Committee
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="text-sm">
                          <span className="font-medium">Email:</span> david.n@example.com
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Phone:</span> (02) 9888 7777
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Role:</span> Chairperson
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Olivia Smith</CardTitle>
                          <CardDescription>Unit 103</CardDescription>
                        </div>
                        <div className="flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          Committee
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="text-sm">
                          <span className="font-medium">Email:</span> olivia.s@example.com
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Phone:</span> (02) 9222 3333
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Role:</span> Treasurer
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>James Taylor</CardTitle>
                          <CardDescription>Unit 308</CardDescription>
                        </div>
                        <div className="flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                          Owner
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="text-sm">
                          <span className="font-medium">Email:</span> james.t@example.com
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Phone:</span> (02) 9444 5555
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Move-in Date:</span> 22 Sep 2021
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Contact</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="owners" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Owner directory would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="tenants" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Tenant directory would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="committee" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Committee members would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
