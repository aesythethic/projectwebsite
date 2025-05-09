import Link from "next/link"
import { Building, Download, FileText, Filter, MessageSquare, Plus, Search, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentsPage() {
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
            <Link href="/documents" className="text-sm font-medium">
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
              <h1 className="text-3xl font-bold tracking-tight">Document Repository</h1>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Document
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Folder
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documents..."
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
                    <SelectValue placeholder="Document Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Documents</SelectItem>
                    <SelectItem value="bylaws">By-laws</SelectItem>
                    <SelectItem value="minutes">Meeting Minutes</SelectItem>
                    <SelectItem value="financial">Financial Reports</SelectItem>
                    <SelectItem value="insurance">Insurance Documents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 lg:w-[600px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="bylaws">By-laws</TabsTrigger>
                <TabsTrigger value="minutes">Minutes</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="insurance">Insurance</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 pt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <div>
                            <CardTitle className="text-base">Strata Scheme By-laws</CardTitle>
                            <CardDescription>PDF Document</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1 text-sm">
                        <div>
                          <span className="font-medium">Last Updated:</span> 10 Jan 2025
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> 2.4 MB
                        </div>
                        <div>
                          <span className="font-medium">Uploaded by:</span> David Nguyen
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-green-500" />
                          <div>
                            <CardTitle className="text-base">Annual General Meeting Minutes</CardTitle>
                            <CardDescription>PDF Document</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1 text-sm">
                        <div>
                          <span className="font-medium">Last Updated:</span> 15 Mar 2025
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> 1.8 MB
                        </div>
                        <div>
                          <span className="font-medium">Uploaded by:</span> Olivia Smith
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-yellow-500" />
                          <div>
                            <CardTitle className="text-base">Financial Statement 2024-2025</CardTitle>
                            <CardDescription>Excel Document</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1 text-sm">
                        <div>
                          <span className="font-medium">Last Updated:</span> 5 Apr 2025
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> 3.2 MB
                        </div>
                        <div>
                          <span className="font-medium">Uploaded by:</span> Olivia Smith
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-red-500" />
                          <div>
                            <CardTitle className="text-base">Building Insurance Policy</CardTitle>
                            <CardDescription>PDF Document</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1 text-sm">
                        <div>
                          <span className="font-medium">Last Updated:</span> 20 Feb 2025
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> 5.1 MB
                        </div>
                        <div>
                          <span className="font-medium">Uploaded by:</span> David Nguyen
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-purple-500" />
                          <div>
                            <CardTitle className="text-base">Maintenance Schedule 2025</CardTitle>
                            <CardDescription>PDF Document</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1 text-sm">
                        <div>
                          <span className="font-medium">Last Updated:</span> 12 Jan 2025
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> 1.5 MB
                        </div>
                        <div>
                          <span className="font-medium">Uploaded by:</span> James Taylor
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-green-500" />
                          <div>
                            <CardTitle className="text-base">Committee Meeting Minutes</CardTitle>
                            <CardDescription>PDF Document</CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1 text-sm">
                        <div>
                          <span className="font-medium">Last Updated:</span> 10 Apr 2025
                        </div>
                        <div>
                          <span className="font-medium">Size:</span> 1.2 MB
                        </div>
                        <div>
                          <span className="font-medium">Uploaded by:</span> David Nguyen
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="bylaws" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">By-laws documents would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="minutes" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Meeting minutes would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="financial" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Financial documents would appear here</p>
                </div>
              </TabsContent>
              <TabsContent value="insurance" className="pt-4">
                <div className="rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground">Insurance documents would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
