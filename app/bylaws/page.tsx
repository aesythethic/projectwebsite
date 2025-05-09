import Link from "next/link"
import { Building, MessageSquare, Search, Filter, Download, Plus, Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function BylawsPage() {
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
            <Link href="/documents" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Documents
            </Link>
            <Link href="/bylaws" className="text-sm font-medium">
              By-laws
            </Link>
            <Link href="/meetings" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Meetings
            </Link>
            <Link href="/residents" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Residents
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
              <h1 className="text-3xl font-bold tracking-tight">Strata By-laws</h1>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Propose Amendment
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by-laws..."
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

            <Card>
              <CardHeader>
                <CardTitle>By-laws Overview</CardTitle>
                <CardDescription>
                  These by-laws govern the strata scheme in accordance with the Strata Schemes Management Act (2015) of
                  New South Wales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <p className="font-medium">Last Updated</p>
                    <p className="text-sm">10 January 2025</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium">Registered with NSW Land Registry</p>
                    <p className="text-sm">Yes (15 January 2025)</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium">Total By-laws</p>
                    <p className="text-sm">24</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium">Pending Amendments</p>
                    <p className="text-sm">2 (To be voted on at next AGM)</p>
                  </div>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                    <TabsTrigger value="all">All By-laws</TabsTrigger>
                    <TabsTrigger value="common">Common Property</TabsTrigger>
                    <TabsTrigger value="noise">Noise & Behavior</TabsTrigger>
                    <TabsTrigger value="pets">Pets & Animals</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-4 pt-4">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-medium">By-law 1: Definitions and Interpretation</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <p>1.1 In these by-laws, unless the context otherwise requires:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>
                                <strong>Act</strong> means the Strata Schemes Management Act 2015 (NSW).
                              </li>
                              <li>
                                <strong>Authority</strong> means any government, semi-government, statutory, public or
                                other authority having jurisdiction over the Strata Scheme.
                              </li>
                              <li>
                                <strong>Building</strong> means the building erected on the Strata Scheme.
                              </li>
                              <li>
                                <strong>Common Property</strong> means so much of the Strata Scheme as is not comprised
                                in any Lot.
                              </li>
                              <li>
                                <strong>Lot</strong> means a lot in the Strata Scheme.
                              </li>
                              <li>
                                <strong>Owner</strong> means the owner of a Lot.
                              </li>
                              <li>
                                <strong>Owners Corporation</strong> means the owners corporation created on registration
                                of the Strata Scheme.
                              </li>
                              <li>
                                <strong>Strata Committee</strong> means the strata committee of the Owners Corporation.
                              </li>
                              <li>
                                <strong>Strata Scheme</strong> means the strata scheme relating to the Building.
                              </li>
                            </ul>
                            <p>1.2 In these by-laws, unless the context otherwise requires:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Words importing the singular include the plural and vice versa.</li>
                              <li>Words importing a gender include any gender.</li>
                              <li>Words importing persons include corporations and vice versa.</li>
                              <li>
                                References to legislation include all amendments, replacements or re-enactments thereof.
                              </li>
                            </ul>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Propose Amendment
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-medium">By-law 2: Noise and Behavior</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <p>
                              2.1 An Owner or Occupier must not create any noise which might unreasonably interfere with
                              the peaceful enjoyment of another Owner or Occupier or any person lawfully using Common
                              Property.
                            </p>
                            <p>2.2 An Owner or Occupier must not:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>
                                Make or permit any noise that is likely to interfere with the peaceful enjoyment of
                                another Owner or Occupier or any person lawfully using Common Property.
                              </li>
                              <li>
                                Make or permit any noise from music or machinery which is likely to interfere with the
                                peaceful enjoyment of another Owner or Occupier or any person lawfully using Common
                                Property between the hours of 10:00 PM and 8:00 AM.
                              </li>
                              <li>
                                Create any noise or behave in a manner likely to interfere with the peaceful enjoyment
                                of another Owner or Occupier or any person lawfully using Common Property.
                              </li>
                            </ul>
                            <p>
                              2.3 The Strata Committee may take action against any Owner or Occupier who breaches this
                              by-law, including but not limited to issuing a Notice to Comply.
                            </p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Propose Amendment
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-medium">By-law 3: Vehicles and Parking</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <p>
                              3.1 An Owner or Occupier must not, except with the prior written approval of the Owners
                              Corporation:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Park or stand any vehicle on Common Property except in designated parking areas.</li>
                              <li>
                                Permit visitors to park or stand any vehicle on Common Property except in designated
                                visitor parking spaces.
                              </li>
                              <li>
                                Park or stand any vehicle in a manner that obstructs any entrance, exit, or driveway on
                                Common Property.
                              </li>
                            </ul>
                            <p>
                              3.2 The Owners Corporation may take steps to remove any vehicle parked in breach of this
                              by-law, including arranging for the vehicle to be towed at the expense of the owner of the
                              vehicle.
                            </p>
                            <p>
                              3.3 An Owner or Occupier must not use their designated parking space for any purpose other
                              than parking a vehicle without prior written approval from the Owners Corporation.
                            </p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Propose Amendment
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="font-medium">By-law 4: Keeping of Animals</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 text-sm">
                            <p>
                              4.1 An Owner or Occupier must not, without the prior written approval of the Owners
                              Corporation:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Keep any animal on their Lot or on Common Property.</li>
                              <li>Permit any visitor to bring any animal onto their Lot or Common Property.</li>
                            </ul>
                            <p>
                              4.2 The Owners Corporation must not unreasonably withhold approval for an Owner or
                              Occupier to keep an animal on their Lot or on Common Property.
                            </p>
                            <p>4.3 An Owner or Occupier who keeps an animal on their Lot or on Common Property must:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Keep the animal within their Lot.</li>
                              <li>Supervise the animal when on Common Property.</li>
                              <li>Clean up after the animal on Common Property.</li>
                              <li>Ensure the animal does not cause a nuisance to other Owners or Occupiers.</li>
                            </ul>
                            <p>
                              4.4 The Owners Corporation may withdraw approval for an Owner or Occupier to keep an
                              animal if the animal causes a nuisance, hazard, or unreasonable interference with the use
                              of another Lot or Common Property by another Owner or Occupier.
                            </p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" />
                              Propose Amendment
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  <TabsContent value="common" className="pt-4">
                    <div className="rounded-lg border p-4 text-center">
                      <p className="text-muted-foreground">Common property by-laws would appear here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="noise" className="pt-4">
                    <div className="rounded-lg border p-4 text-center">
                      <p className="text-muted-foreground">Noise and behavior by-laws would appear here</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="pets" className="pt-4">
                    <div className="rounded-lg border p-4 text-center">
                      <p className="text-muted-foreground">Pet and animal by-laws would appear here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Amendment History</Button>
                <Button>Download Complete By-laws</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
