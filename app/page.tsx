import Link from "next/link"
import { Building, FileText, Users, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <span className="text-xl font-bold">Strata Manager</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
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
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Strata Management Made Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Streamline your strata committee responsibilities with our comprehensive management portal.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button size="lg">Committee Dashboard</Button>
                </Link>
                <Link href="/resident-portal">
                  <Button variant="outline" size="lg">
                    Resident Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  NSW Strata Schemes Management Act (2015)
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Compliant with NSW Strata Legislation
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to help your committee fulfill all responsibilities under the Strata Schemes
                  Management Act (2015), including financial management, maintenance, and governance.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Committee Management</h3>
                  <p className="text-muted-foreground">
                    Manage roles including Chairperson, Secretary, and Treasurer with up to 9 committee members.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Financial Oversight</h3>
                  <p className="text-muted-foreground">
                    Track administration fund and capital works fund levies with transparent reporting.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Maintenance Coordination</h3>
                  <p className="text-muted-foreground">
                    Streamline maintenance requests and track common property repairs and improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 mb-2" />
                  <CardTitle>Resident Directory</CardTitle>
                  <CardDescription>
                    Maintain an up-to-date directory of all owners and residents in your building.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Contact information</li>
                    <li>Unit ownership details</li>
                    <li>Access permissions</li>
                    <li>Emergency contacts</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 mb-2" />
                  <CardTitle>Document Repository</CardTitle>
                  <CardDescription>Store and organize all strata documents in one secure location.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>By-laws and regulations</li>
                    <li>Meeting minutes</li>
                    <li>Financial statements</li>
                    <li>Insurance policies</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wrench className="h-10 w-10 mb-2" />
                  <CardTitle>Maintenance Tracking</CardTitle>
                  <CardDescription>
                    Efficiently manage maintenance requests and track resolution progress.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Request submission</li>
                    <li>Contractor management</li>
                    <li>Work order tracking</li>
                    <li>Maintenance history</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              <span className="text-lg font-bold">Strata Manager</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive solution for strata committee management in NSW.
            </p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-sm font-medium">Quick Links</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link href="/residents" className="text-muted-foreground hover:text-foreground">
                Residents
              </Link>
              <Link href="/finances" className="text-muted-foreground hover:text-foreground">
                Finances
              </Link>
              <Link href="/maintenance" className="text-muted-foreground hover:text-foreground">
                Maintenance
              </Link>
            </nav>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-sm font-medium">Legal</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/compliance" className="text-muted-foreground hover:text-foreground">
                NSW Strata Compliance
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
