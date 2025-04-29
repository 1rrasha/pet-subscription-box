import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Calendar, Package, Cat, Dog, Heart, Shield, Sparkles, Users } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Solutions Tailored to Pet Owners' Needs
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Based on our extensive research with pet owners, we've developed subscription solutions that address the
            real challenges you face.
          </p>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Research Findings</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Frequent Purchases</h3>
                <p className="text-gray-600 text-center">
                  <span className="font-bold text-emerald-600">85%</span> of pet owners buy supplies at least monthly,
                  with <span className="font-bold text-emerald-600">45%</span> shopping weekly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Customization Matters</h3>
                <p className="text-gray-600 text-center">
                  <span className="font-bold text-emerald-600">65%</span> rated choosing their own items as very
                  important (4 or 5 out of 5).
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Quality Focus</h3>
                <p className="text-gray-600 text-center">
                  <span className="font-bold text-emerald-600">70%</span> want natural, vet-approved products for their
                  pets.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Multi-Pet Households</h3>
                <p className="text-gray-600 text-center">
                  <span className="font-bold text-emerald-600">10%</span> of pet owners have both cats and dogs, but
                  existing services only cater to one type.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-emerald-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Special Needs</h3>
                <p className="text-gray-600 text-center">
                  <span className="font-bold text-emerald-600">10%</span> have pets with allergies or special dietary
                  needs that aren't addressed by current options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Solutions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Based on our research findings, we've developed these key solutions to address the challenges pet owners
            face with current subscription options.
          </p>

          <Tabs defaultValue="customization" className="mb-12">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger value="customization">Customization</TabsTrigger>
              <TabsTrigger value="quality">Quality</TabsTrigger>
              <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
              <TabsTrigger value="special">Special Needs</TabsTrigger>
            </TabsList>

            <TabsContent value="customization" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Full Customization Control</h3>
                  <p className="text-gray-600 mb-4">
                    Our research showed that 65% of pet owners want to choose their own items. Unlike competitors that
                    offer limited options, we give you complete control over what goes in your box.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Select specific food brands and flavors",
                      "Choose toys based on your pet's play style",
                      "Add or remove items each month",
                      "Adjust quantities based on your needs",
                      "Create separate sections for multiple pets",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/customize">
                      <Button className="bg-emerald-500 hover:bg-emerald-600">Build Your Custom Box</Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Customization interface"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <Badge className="justify-center">Food</Badge>
                    <Badge className="justify-center">Toys</Badge>
                    <Badge className="justify-center">Treats</Badge>
                    <Badge className="justify-center">Grooming</Badge>
                    <Badge className="justify-center">Accessories</Badge>
                    <Badge className="justify-center">+ More</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="quality" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Premium quality products"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                  <div className="mt-4 flex justify-center gap-4">
                    <Badge className="bg-amber-500">Vet Approved</Badge>
                    <Badge className="bg-blue-500">Natural Ingredients</Badge>
                    <Badge className="bg-green-500">Eco-Friendly</Badge>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Premium Quality Guarantee</h3>
                  <p className="text-gray-600 mb-4">
                    70% of pet owners prioritize quality, especially for food and treats. We source only the best
                    products that meet our strict standards.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "All food and treats are natural and vet-approved",
                      "Toys are tested for durability and safety",
                      "Eco-friendly and sustainable packaging",
                      "No artificial preservatives or fillers",
                      "Satisfaction guarantee on every product",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/quality-standards">
                      <Button className="bg-emerald-500 hover:bg-emerald-600">Learn About Our Standards</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="flexibility" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Flexible Delivery On Your Terms</h3>
                  <p className="text-gray-600 mb-4">
                    With 85% of pet owners buying supplies at least monthly, we've created a delivery system that adapts
                    to your schedule, not the other way around.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Choose weekly, bi-weekly, or monthly deliveries",
                      "Easily pause or skip deliveries when traveling",
                      "Change delivery dates with a single click",
                      "Get reminders before each shipment with option to modify",
                      "No long-term commitments or cancellation fees",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/delivery-options">
                      <Button className="bg-emerald-500 hover:bg-emerald-600">Explore Delivery Options</Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="text-center">
                      <Calendar className="h-10 w-10 text-emerald-500 mx-auto mb-2" />
                      <span className="text-sm font-medium">Weekly</span>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-10 w-10 text-emerald-500 mx-auto mb-2" />
                      <span className="text-sm font-medium">Bi-Weekly</span>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-10 w-10 text-emerald-500 mx-auto mb-2" />
                      <span className="text-sm font-medium">Monthly</span>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Delivery calendar interface"
                    width={400}
                    height={200}
                    className="rounded-md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="special" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-1">
                  <div className="flex justify-center mb-4">
                    <div className="bg-amber-50 rounded-full p-4 border border-amber-200">
                      <Heart className="h-10 w-10 text-amber-500" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-amber-200 rounded-md p-3 bg-amber-50">
                      <h4 className="font-medium text-amber-800">Hypoallergenic Options</h4>
                      <p className="text-sm text-amber-700">Limited ingredient diets for sensitive pets</p>
                    </div>
                    <div className="border border-amber-200 rounded-md p-3 bg-amber-50">
                      <h4 className="font-medium text-amber-800">Special Dietary Needs</h4>
                      <p className="text-sm text-amber-700">Options for weight management, senior care, and more</p>
                    </div>
                    <div className="border border-amber-200 rounded-md p-3 bg-amber-50">
                      <h4 className="font-medium text-amber-800">Veterinarian Consultation</h4>
                      <p className="text-sm text-amber-700">Expert guidance for pets with complex needs</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Special Needs Support</h3>
                  <p className="text-gray-600 mb-4">
                    10% of pet owners have animals with allergies or special dietary requirements, but most subscription
                    services don't address these needs. We've created specialized options to ensure every pet gets
                    exactly what they need.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Hypoallergenic food and treat options",
                      "Products for pets with sensitive skin",
                      "Special formulations for digestive issues",
                      "Age-appropriate items for senior pets",
                      "Consultation with veterinary nutritionists",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/special-needs">
                      <Button className="bg-emerald-500 hover:bg-emerald-600">Explore Special Needs Options</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Persona-Based Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Solutions for Every Pet Owner</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Based on our research with different types of pet owners, we've created subscription options that address
            your specific needs and challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6">
                  <Clock className="w-12 h-12 text-blue-500" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Busy Professionals</h3>
                <p className="text-gray-600 mb-4">
                  Never run out of supplies again. Set your schedule once and forget about it, with smart reminders and
                  easy adjustments when your routine changes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automatic deliveries on your schedule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Pre-selected quality essentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Easy pause/resume when traveling</span>
                  </li>
                </ul>
                <Link href="/customize?persona=busy">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Build Your Time-Saving Box</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6">
                  <Heart className="w-12 h-12 text-purple-500" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Pet Enthusiasts</h3>
                <p className="text-gray-600 mb-4">
                  Premium, natural products that meet your high standards. Discover new brands and toys that align with
                  your pet's unique personality.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Curated premium and organic products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Rotating selection of unique toys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Early access to new pet products</span>
                  </li>
                </ul>
                <Link href="/customize?persona=enthusiast">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Create Your Premium Box</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6 relative">
                  <Dog className="w-12 h-12 text-amber-500" />
                  <Cat className="w-12 h-12 text-amber-500 absolute top-6 left-6 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Multi-Pet Households</h3>
                <p className="text-gray-600 mb-4">
                  One box for all your pets. Customize sections for each of your cats and dogs, with no need for
                  multiple subscriptions.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Combined delivery for all pets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Separate sections labeled for each pet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Volume discount for multiple pets</span>
                  </li>
                </ul>
                <Link href="/customize?persona=multi-pet">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">Build Your Multi-Pet Box</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6">
                  <Shield className="w-12 h-12 text-green-500" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Budget-Conscious Owners</h3>
                <p className="text-gray-600 mb-4">
                  Quality essentials at affordable prices. Get the best value without compromising on what matters for
                  your pet's health and happiness.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Focus on essential quality items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bulk pricing options for staples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Flexible quantity adjustments</span>
                  </li>
                </ul>
                <Link href="/customize?persona=budget">
                  <Button className="w-full bg-green-500 hover:bg-green-600">Create Your Value Box</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison with Competitors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How We Compare</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Based on our competitive analysis of KitNipBox and Pooch Perks, we've addressed the key limitations of
            existing subscription services.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="p-4 text-left border">Features</th>
                  <th className="p-4 text-center border">
                    <div className="flex items-center justify-center gap-2">
                      <Package className="h-5 w-5 text-emerald-500" />
                      <span>PetBox</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border">
                    <div className="flex items-center justify-center gap-2">
                      <Cat className="h-5 w-5 text-gray-500" />
                      <span>KitNipBox</span>
                    </div>
                  </th>
                  <th className="p-4 text-center border">
                    <div className="flex items-center justify-center gap-2">
                      <Dog className="h-5 w-5 text-gray-500" />
                      <span>Pooch Perks</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium">Supports Both Cats & Dogs</td>
                  <td className="p-4 border text-center text-emerald-500">✓</td>
                  <td className="p-4 border text-center text-gray-500">Cats Only</td>
                  <td className="p-4 border text-center text-gray-500">Dogs Only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Full Customization</td>
                  <td className="p-4 border text-center text-emerald-500">✓</td>
                  <td className="p-4 border text-center text-gray-500">Limited</td>
                  <td className="p-4 border text-center text-gray-500">Limited</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Special Needs Options</td>
                  <td className="p-4 border text-center text-emerald-500">✓</td>
                  <td className="p-4 border text-center text-gray-500">Basic Allergy Box</td>
                  <td className="p-4 border text-center text-gray-500">✗</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Flexible Delivery Schedule</td>
                  <td className="p-4 border text-center text-emerald-500">✓</td>
                  <td className="p-4 border text-center text-gray-500">✗</td>
                  <td className="p-4 border text-center text-gray-500">Basic</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">One-Time Purchase Option</td>
                  <td className="p-4 border text-center text-emerald-500">✓</td>
                  <td className="p-4 border text-center text-gray-500">✗</td>
                  <td className="p-4 border text-center text-gray-500">✓</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Consistent Product Quality</td>
                  <td className="p-4 border text-center text-emerald-500">✓</td>
                  <td className="p-4 border text-center text-gray-500">Inconsistent</td>
                  <td className="p-4 border text-center text-gray-500">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join pet owners who have switched to our tailored subscription service designed based on real research and
            feedback.
          </p>
          <Link href="/customize">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Start Your Personalized Subscription
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
