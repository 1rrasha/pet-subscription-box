"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Cat, Dog, Package, ArrowRight, Calendar, AlertCircle } from "lucide-react"

export default function CustomizePage() {
  const searchParams = useSearchParams()
  const persona = searchParams.get("persona") || "default"

  const [petType, setPetType] = useState<"cat" | "dog" | "both">("both")
  const [step, setStep] = useState(1)
  const [hasAllergies, setHasAllergies] = useState(false)

  // Determine default values based on persona
  const getDefaultFrequency = () => {
    switch (persona) {
      case "busy":
        return "monthly"
      case "enthusiast":
        return "bi-weekly"
      case "budget":
        return "monthly"
      default:
        return "monthly"
    }
  }

  const [frequency, setFrequency] = useState(getDefaultFrequency())

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Customize Your Subscription Box</h1>
          <p className="mt-2 text-gray-600">
            {persona === "busy" &&
              "Designed for your busy schedule - set it up once and never worry about pet supplies again."}
            {persona === "enthusiast" &&
              "Premium products for the pet parent who wants only the best for their furry family member."}
            {persona === "multi-pet" && "One subscription to handle all your pets' needs - convenient and customized."}
            {persona === "special-needs" &&
              "Specialized products for pets with allergies or other special requirements."}
            {persona === "budget" && "Quality essentials at affordable prices - no compromise on what matters."}
            {persona === "default" && "Tailored to your pet's unique needs and your preferences."}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === stepNumber
                      ? "bg-emerald-500 text-white"
                      : step > stepNumber
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > stepNumber ? "✓" : stepNumber}
                </div>
                <span className="text-xs mt-1 text-gray-500">
                  {stepNumber === 1 && "Pet Info"}
                  {stepNumber === 2 && "Products"}
                  {stepNumber === 3 && "Schedule"}
                  {stepNumber === 4 && "Review"}
                </span>
              </div>
            ))}
            <div className="absolute left-0 right-0 h-0.5 bg-gray-200 -z-10" aria-hidden="true"></div>
          </div>
        </div>

        {/* Step 1: Pet Information */}
        {step === 1 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-6">Tell us about your pet(s)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">What type of pet(s) do you have?</h3>
                  <RadioGroup
                    defaultValue={petType}
                    onValueChange={(value) => setPetType(value as "cat" | "dog" | "both")}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cat" id="cat" />
                      <Label htmlFor="cat" className="flex items-center gap-2">
                        <Cat className="w-5 h-5" /> Cat Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dog" id="dog" />
                      <Label htmlFor="dog" className="flex items-center gap-2">
                        <Dog className="w-5 h-5" /> Dog Only
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both" className="flex items-center gap-2">
                        <Cat className="w-5 h-5" /> <Dog className="w-5 h-5" /> Both
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {(petType === "cat" || petType === "both") && (
                  <div className="p-4 border rounded-md bg-gray-50">
                    <h3 className="text-sm font-medium mb-3">Cat Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="catName">Name</Label>
                        <Input id="catName" placeholder="Cat's name" />
                      </div>
                      <div>
                        <Label htmlFor="catAge">Age</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kitten">Kitten (0-1 year)</SelectItem>
                            <SelectItem value="young">Young Adult (1-3 years)</SelectItem>
                            <SelectItem value="adult">Adult (3-10 years)</SelectItem>
                            <SelectItem value="senior">Senior (10+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="catAllergies"
                            checked={hasAllergies}
                            onCheckedChange={(checked) => setHasAllergies(checked as boolean)}
                          />
                          <Label htmlFor="catAllergies" className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            My cat has allergies or special dietary needs
                          </Label>
                        </div>
                      </div>

                      {hasAllergies && (
                        <div className="md:col-span-2 p-3 bg-amber-50 rounded border border-amber-200">
                          <Label htmlFor="allergiesDetails">Please specify allergies or special needs:</Label>
                          <Input
                            id="allergiesDetails"
                            placeholder="E.g., grain-free, chicken allergy, sensitive stomach"
                            className="mt-1"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {(petType === "dog" || petType === "both") && (
                  <div className="p-4 border rounded-md bg-gray-50">
                    <h3 className="text-sm font-medium mb-3">Dog Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dogName">Name</Label>
                        <Input id="dogName" placeholder="Dog's name" />
                      </div>
                      <div>
                        <Label htmlFor="dogAge">Age</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="puppy">Puppy (0-1 year)</SelectItem>
                            <SelectItem value="young">Young Adult (1-3 years)</SelectItem>
                            <SelectItem value="adult">Adult (3-8 years)</SelectItem>
                            <SelectItem value="senior">Senior (8+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="dogSize">Size</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (up to 20 lbs)</SelectItem>
                            <SelectItem value="medium">Medium (21-50 lbs)</SelectItem>
                            <SelectItem value="large">Large (51-90 lbs)</SelectItem>
                            <SelectItem value="xlarge">X-Large (91+ lbs)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="activity">Activity Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select activity level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - Couch Potato</SelectItem>
                            <SelectItem value="moderate">Moderate - Daily Walks</SelectItem>
                            <SelectItem value="high">High - Very Active</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="dogAllergies" />
                          <Label htmlFor="dogAllergies" className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500" />
                            My dog has allergies or special dietary needs
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <Button onClick={nextStep} className="bg-emerald-500 hover:bg-emerald-600">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Product Selection */}
        {step === 2 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-6">Select Products for Your Box</h2>

              <Tabs defaultValue={petType === "both" ? "cat" : petType}>
                <TabsList className="mb-6">
                  {(petType === "cat" || petType === "both") && (
                    <TabsTrigger value="cat" className="flex items-center gap-2">
                      <Cat className="w-4 h-4" /> Cat Products
                    </TabsTrigger>
                  )}
                  {(petType === "dog" || petType === "both") && (
                    <TabsTrigger value="dog" className="flex items-center gap-2">
                      <Dog className="w-4 h-4" /> Dog Products
                    </TabsTrigger>
                  )}
                </TabsList>

                {(petType === "cat" || petType === "both") && (
                  <TabsContent value="cat" className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Food & Treats</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: "cat-food-1",
                            name: "Premium Dry Food",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$24.99",
                          },
                          {
                            id: "cat-food-2",
                            name: "Wet Food Variety Pack",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$18.99",
                          },
                          {
                            id: "cat-treats-1",
                            name: "Natural Cat Treats",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$12.99",
                          },
                        ].map((product) => (
                          <div key={product.id} className="border rounded-md p-3 flex items-start space-x-3">
                            <Checkbox id={product.id} />
                            <div>
                              <Label htmlFor={product.id} className="font-medium">
                                {product.name}
                              </Label>
                              <div className="mt-1 flex items-center space-x-2">
                                <div className="w-12 h-12 relative">
                                  <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <span className="text-sm text-gray-500">{product.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Toys & Enrichment</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: "cat-toy-1",
                            name: "Interactive Feather Toy",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$9.99",
                          },
                          {
                            id: "cat-toy-2",
                            name: "Catnip Mouse Set",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$7.99",
                          },
                          {
                            id: "cat-toy-3",
                            name: "Puzzle Treat Dispenser",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$14.99",
                          },
                        ].map((product) => (
                          <div key={product.id} className="border rounded-md p-3 flex items-start space-x-3">
                            <Checkbox id={product.id} />
                            <div>
                              <Label htmlFor={product.id} className="font-medium">
                                {product.name}
                              </Label>
                              <div className="mt-1 flex items-center space-x-2">
                                <div className="w-12 h-12 relative">
                                  <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <span className="text-sm text-gray-500">{product.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {hasAllergies && (
                      <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                        <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                          Special Dietary Products
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            {
                              id: "cat-special-1",
                              name: "Hypoallergenic Dry Food",
                              image: "/placeholder.svg?height=100&width=100",
                              price: "$29.99",
                            },
                            {
                              id: "cat-special-2",
                              name: "Limited Ingredient Treats",
                              image: "/placeholder.svg?height=100&width=100",
                              price: "$15.99",
                            },
                          ].map((product) => (
                            <div
                              key={product.id}
                              className="border border-amber-200 bg-white rounded-md p-3 flex items-start space-x-3"
                            >
                              <Checkbox id={product.id} />
                              <div>
                                <Label htmlFor={product.id} className="font-medium">
                                  {product.name}
                                </Label>
                                <div className="mt-1 flex items-center space-x-2">
                                  <div className="w-12 h-12 relative">
                                    <Image
                                      src={product.image || "/placeholder.svg"}
                                      alt={product.name}
                                      fill
                                      className="object-cover rounded"
                                    />
                                  </div>
                                  <span className="text-sm text-gray-500">{product.price}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </TabsContent>
                )}

                {(petType === "dog" || petType === "both") && (
                  <TabsContent value="dog" className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Food & Treats</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: "dog-food-1",
                            name: "Premium Kibble",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$34.99",
                          },
                          {
                            id: "dog-food-2",
                            name: "Freeze-Dried Raw Toppers",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$22.99",
                          },
                          { id: 'dog-treats  price: "$22.99' },
                          {
                            id: "dog-treats-1",
                            name: "Natural Biscuits",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$14.99",
                          },
                        ].map((product) => (
                          <div key={product.id} className="border rounded-md p-3 flex items-start space-x-3">
                            <Checkbox id={product.id} />
                            <div>
                              <Label htmlFor={product.id} className="font-medium">
                                {product.name}
                              </Label>
                              <div className="mt-1 flex items-center space-x-2">
                                <div className="w-12 h-12 relative">
                                  <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <span className="text-sm text-gray-500">{product.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Toys & Accessories</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            id: "dog-toy-1",
                            name: "Durable Chew Toy",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$12.99",
                          },
                          {
                            id: "dog-toy-2",
                            name: "Interactive Puzzle",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$19.99",
                          },
                          {
                            id: "dog-acc-1",
                            name: "Eco-Friendly Poop Bags",
                            image: "/placeholder.svg?height=100&width=100",
                            price: "$8.99",
                          },
                        ].map((product) => (
                          <div key={product.id} className="border rounded-md p-3 flex items-start space-x-3">
                            <Checkbox id={product.id} />
                            <div>
                              <Label htmlFor={product.id} className="font-medium">
                                {product.name}
                              </Label>
                              <div className="mt-1 flex items-center space-x-2">
                                <div className="w-12 h-12 relative">
                                  <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded"
                                  />
                                </div>
                                <span className="text-sm text-gray-500">{product.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep} className="bg-emerald-500 hover:bg-emerald-600">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Delivery Schedule */}
        {step === 3 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-6">Set Your Delivery Schedule</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">How often would you like to receive your box?</h3>
                  <RadioGroup
                    defaultValue={frequency}
                    onValueChange={setFrequency}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <div className="border rounded-md p-4 flex flex-col items-center text-center">
                      <RadioGroupItem value="weekly" id="weekly" className="mb-2" />
                      <Label htmlFor="weekly" className="font-medium">
                        Weekly
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Best for households with multiple pets</p>
                    </div>
                    <div className="border rounded-md p-4 flex flex-col items-center text-center">
                      <RadioGroupItem value="bi-weekly" id="bi-weekly" className="mb-2" />
                      <Label htmlFor="bi-weekly" className="font-medium">
                        Bi-Weekly
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Perfect for regular treats and supplies</p>
                    </div>
                    <div className="border rounded-md p-4 flex flex-col items-center text-center">
                      <RadioGroupItem value="monthly" id="monthly" className="mb-2" />
                      <Label htmlFor="monthly" className="font-medium">
                        Monthly
                      </Label>
                      <p className="text-sm text-gray-500 mt-1">Our most popular option</p>
                    </div>
                  </RadioGroup>
                </div>

                <div className="p-4 border rounded-md bg-gray-50">
                  <h3 className="text-sm font-medium mb-3">Delivery Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">When would you like your first box?</Label>
                      <Input type="date" id="startDate" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="preferredDay">Preferred delivery day</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any day</SelectItem>
                          <SelectItem value="weekday">Weekdays only</SelectItem>
                          <SelectItem value="weekend">Weekends only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-emerald-50">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="text-sm font-medium">Flexible Scheduling Options</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        You can pause, skip, or reschedule deliveries anytime through your account. Perfect for when
                        you're traveling or have excess supplies.
                      </p>
                      <div className="mt-3 flex items-center space-x-2">
                        <Checkbox id="reminders" defaultChecked />
                        <Label htmlFor="reminders">Send me reminders before each delivery</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep} className="bg-emerald-500 hover:bg-emerald-600">
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review & Confirm */}
        {step === 4 && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-6">Review Your Subscription</h2>

              <div className="space-y-6">
                <div className="p-4 border rounded-md bg-gray-50">
                  <h3 className="text-sm font-medium mb-3">Subscription Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pet Type:</span>
                      <span className="font-medium">
                        {petType === "cat" && "Cat"}
                        {petType === "dog" && "Dog"}
                        {petType === "both" && "Cat & Dog"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Frequency:</span>
                      <span className="font-medium">
                        {frequency === "weekly" && "Weekly"}
                        {frequency === "bi-weekly" && "Every 2 Weeks"}
                        {frequency === "monthly" && "Monthly"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">First Delivery:</span>
                      <span className="font-medium">May 15, 2025</span>
                    </div>
                    {hasAllergies && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Special Requirements:</span>
                        <span className="font-medium text-amber-600">Allergy-Friendly Products</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="text-sm font-medium mb-3">Selected Products</h3>
                  <div className="space-y-3">
                    {petType !== "dog" && (
                      <>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <Cat className="w-4 h-4" /> Cat Products
                        </div>
                        <div className="pl-6 space-y-2">
                          <div className="flex justify-between">
                            <span>Premium Dry Food</span>
                            <span>$24.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Interactive Feather Toy</span>
                            <span>$9.99</span>
                          </div>
                          {hasAllergies && (
                            <div className="flex justify-between text-amber-600">
                              <span>Hypoallergenic Dry Food</span>
                              <span>$29.99</span>
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    {petType !== "cat" && (
                      <>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mt-4">
                          <Dog className="w-4 h-4" /> Dog Products
                        </div>
                        <div className="pl-6 space-y-2">
                          <div className="flex justify-between">
                            <span>Premium Kibble</span>
                            <span>$34.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Durable Chew Toy</span>
                            <span>$12.99</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-gray-50">
                  <h3 className="text-sm font-medium mb-3">Price Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>{petType === "both" ? "$112.95" : "$64.97"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="text-emerald-600">FREE</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="font-medium">Total per delivery:</span>
                      <span className="font-medium">{petType === "both" ? "$112.95" : "$64.97"}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md bg-emerald-50">
                  <div className="flex items-start space-x-3">
                    <Package className="w-6 h-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="text-sm font-medium">Subscription Benefits</h3>
                      <ul className="text-sm text-gray-600 mt-1 space-y-1 list-disc pl-5">
                        <li>Free shipping on all deliveries</li>
                        <li>Pause, skip, or cancel anytime</li>
                        <li>Adjust products in your box as needed</li>
                        <li>10% savings compared to one-time purchases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                <Button variant="outline" onClick={prevStep}>
                  Back
                </Button>
                <Button className="bg-emerald-500 hover:bg-emerald-600">Confirm Subscription</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
