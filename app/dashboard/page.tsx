"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Package, Truck, Clock, Edit, PawPrint, AlertCircle, CheckCircle2 } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Pet Box Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your subscription and track deliveries</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Edit className="mr-2 h-4 w-4" /> Customize Next Box
          </Button>
        </div>

        {/* Subscription Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Next Delivery</CardTitle>
              <CardDescription>Arriving soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 rounded-full p-3">
                  <Truck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">May 15, 2025</p>
                  <p className="text-sm text-gray-500">5 days from now</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Processing</span>
                  <span>Shipped</span>
                  <span>Delivered</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="w-full flex justify-between">
                <Button variant="outline" size="sm">
                  Skip
                </Button>
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Subscription Plan</CardTitle>
              <CardDescription>Current details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">Monthly Delivery</p>
                    <p className="text-sm text-gray-500">Every 4 weeks</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full p-3">
                    <Package className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">Premium Box</p>
                    <p className="text-sm text-gray-500">$64.97/month</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                Manage Subscription
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Pet Profiles</CardTitle>
              <CardDescription>Your furry friends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Cat"
                      fill
                      className="object-cover rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-100 rounded-full p-1">
                      <PawPrint className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Whiskers</p>
                    <p className="text-xs text-gray-500">Cat • 3 years old</p>
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    <AlertCircle className="h-3 w-3 mr-1" /> Allergies
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dog"
                      fill
                      className="object-cover rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-100 rounded-full p-1">
                      <PawPrint className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Buddy</p>
                    <p className="text-xs text-gray-500">Dog • 2 years old</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                Edit Pet Profiles
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Deliveries & Products */}
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Upcoming Deliveries
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Past Deliveries
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <Package className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">May Box</h3>
                      <p className="text-sm text-gray-500">Arriving May 15, 2025</p>
                    </div>
                    <Badge className="bg-amber-500">Processing</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit Contents
                    </Button>
                    <Button variant="outline" size="sm">
                      Skip
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <PawPrint className="h-4 w-4" /> For Whiskers (Cat)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Premium Dry Food"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Premium Dry Food</p>
                          <p className="text-xs text-gray-500">2.5 lb bag</p>
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          Hypoallergenic
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Interactive Feather Toy"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Interactive Feather Toy</p>
                          <p className="text-xs text-gray-500">Stimulating play</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <PawPrint className="h-4 w-4" /> For Buddy (Dog)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Premium Kibble"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Premium Kibble</p>
                          <p className="text-xs text-gray-500">5 lb bag</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Durable Chew Toy"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Durable Chew Toy</p>
                          <p className="text-xs text-gray-500">Long-lasting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 rounded-full p-3">
                      <Package className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">June Box</h3>
                      <p className="text-sm text-gray-500">Arriving June 15, 2025</p>
                    </div>
                    <Badge className="bg-gray-500">Scheduled</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit Contents
                    </Button>
                    <Button variant="outline" size="sm">
                      Skip
                    </Button>
                  </div>
                </div>

                <div className="text-center py-6 text-gray-500">
                  <p>Contents will be finalized 7 days before shipping.</p>
                  <p className="text-sm mt-1">You can customize this box until June 8, 2025.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <Package className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">April Box</h3>
                      <p className="text-sm text-gray-500">Delivered April 15, 2025</p>
                    </div>
                    <Badge className="bg-emerald-500">Delivered</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <PawPrint className="h-4 w-4" /> For Whiskers (Cat)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Premium Dry Food"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Premium Dry Food</p>
                          <p className="text-xs text-gray-500">2.5 lb bag</p>
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          Hypoallergenic
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Catnip Mouse Set"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Catnip Mouse Set</p>
                          <p className="text-xs text-gray-500">Set of 3</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <PawPrint className="h-4 w-4" /> For Buddy (Dog)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Premium Kibble"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Premium Kibble</p>
                          <p className="text-xs text-gray-500">5 lb bag</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Interactive Puzzle"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Interactive Puzzle</p>
                          <p className="text-xs text-gray-500">Mental stimulation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <Package className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">March Box</h3>
                      <p className="text-sm text-gray-500">Delivered March 15, 2025</p>
                    </div>
                    <Badge className="bg-emerald-500">Delivered</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <PawPrint className="h-4 w-4" /> For Whiskers (Cat)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Premium Dry Food"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Premium Dry Food</p>
                          <p className="text-xs text-gray-500">2.5 lb bag</p>
                        </div>
                        <Badge variant="outline" className="ml-auto">
                          Hypoallergenic
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Puzzle Treat Dispenser"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Puzzle Treat Dispenser</p>
                          <p className="text-xs text-gray-500">Mental enrichment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <PawPrint className="h-4 w-4" /> For Buddy (Dog)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Premium Kibble"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Premium Kibble</p>
                          <p className="text-xs text-gray-500">5 lb bag</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 shrink-0">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Natural Biscuits"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="font-medium">Natural Biscuits</p>
                          <p className="text-xs text-gray-500">Grain-free treats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
