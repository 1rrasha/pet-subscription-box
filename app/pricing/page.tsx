import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, X } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Simple, Transparent Pricing</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Choose the plan that works best for you and your pet. No hidden fees, no long-term commitments.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="cat" className="mb-12">
            <div className="flex flex-col items-center mb-8">
              <TabsList>
                <TabsTrigger value="cat">Cat Plans</TabsTrigger>
                <TabsTrigger value="dog">Dog Plans</TabsTrigger>
                <TabsTrigger value="both">Multi-Pet Plans</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="cat">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Basic Cat Box</CardTitle>
                    <CardDescription>Essential supplies for your feline friend</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$29.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Premium dry food (2.5 lb bag)",
                        "2 toys per month",
                        "1 bag of treats",
                        "Basic customization options",
                        "Monthly delivery",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {["Special needs options", "Premium toy selection"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=cat-basic" className="w-full">
                      <Button className="w-full">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-emerald-500 relative">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Cat Box</CardTitle>
                    <CardDescription>Elevated essentials for discerning cats</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$44.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Premium dry food (5 lb bag)",
                        "1 wet food variety pack",
                        "3-4 toys per month",
                        "2 types of treats",
                        "Full customization options",
                        "Flexible delivery schedule",
                        "Special needs options",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {["Premium toy selection"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=cat-premium" className="w-full">
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Deluxe Cat Box</CardTitle>
                    <CardDescription>The ultimate feline experience</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$59.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Premium dry food (7.5 lb bag)",
                        "2 wet food variety packs",
                        "4-5 premium toys per month",
                        "3 types of gourmet treats",
                        "Full customization options",
                        "Flexible delivery schedule",
                        "Special needs options",
                        "Premium toy selection",
                        "Quarterly surprise gift",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=cat-deluxe" className="w-full">
                      <Button className="w-full">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dog">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Basic Dog Box</CardTitle>
                    <CardDescription>Essential supplies for your canine companion</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$39.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Premium kibble (5 lb bag)",
                        "2 toys per month",
                        "1 bag of treats",
                        "Basic customization options",
                        "Monthly delivery",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {["Special needs options", "Durable toy selection", "Dental care items"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=dog-basic" className="w-full">
                      <Button className="w-full">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-emerald-500 relative">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Dog Box</CardTitle>
                    <CardDescription>Elevated essentials for active dogs</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$54.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Premium kibble (10 lb bag)",
                        "3-4 toys per month",
                        "2 types of treats",
                        "1 dental care item",
                        "Full customization options",
                        "Flexible delivery schedule",
                        "Special needs options",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {["Durable toy selection"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=dog-premium" className="w-full">
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Deluxe Dog Box</CardTitle>
                    <CardDescription>The ultimate canine experience</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$69.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Premium kibble (15 lb bag)",
                        "Freeze-dried raw toppers",
                        "4-5 premium toys per month",
                        "3 types of gourmet treats",
                        "2 dental care items",
                        "Full customization options",
                        "Flexible delivery schedule",
                        "Special needs options",
                        "Durable toy selection",
                        "Quarterly surprise gift",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=dog-deluxe" className="w-full">
                      <Button className="w-full">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="both">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Basic Multi-Pet Box</CardTitle>
                    <CardDescription>Essential supplies for your cat and dog</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$59.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Cat: Premium dry food (2.5 lb bag)",
                        "Dog: Premium kibble (5 lb bag)",
                        "2 toys per pet per month",
                        "1 bag of treats per pet",
                        "Basic customization options",
                        "Monthly delivery",
                        "10% multi-pet discount applied",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {["Special needs options", "Premium toy selection"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=multi-basic" className="w-full">
                      <Button className="w-full">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-emerald-500 relative">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Multi-Pet Box</CardTitle>
                    <CardDescription>Elevated essentials for your furry family</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$89.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Cat: Premium dry food (5 lb bag) + wet food",
                        "Dog: Premium kibble (10 lb bag)",
                        "3-4 toys per pet per month",
                        "2 types of treats per pet",
                        "Full customization options",
                        "Flexible delivery schedule",
                        "Special needs options",
                        "10% multi-pet discount applied",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {["Premium toy selection"].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-400">
                          <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=multi-premium" className="w-full">
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle>Deluxe Multi-Pet Box</CardTitle>
                    <CardDescription>The ultimate experience for all your pets</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">$119.99</span>
                      <span className="text-gray-500 ml-1">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Cat: Premium dry food (7.5 lb) + wet food variety",
                        "Dog: Premium kibble (15 lb) + toppers",
                        "4-5 premium toys per pet per month",
                        "3 types of gourmet treats per pet",
                        "Full customization options",
                        "Flexible delivery schedule",
                        "Special needs options",
                        "Premium toy selection",
                        "Quarterly surprise gifts for each pet",
                        "10% multi-pet discount applied",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/customize?plan=multi-deluxe" className="w-full">
                      <Button className="w-full">Choose Plan</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Additional Options</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Customize your subscription with these add-ons and special options.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Special Needs Package</CardTitle>
                <CardDescription>For pets with allergies or dietary restrictions</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold">+$10.00</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Hypoallergenic food options",
                    "Limited ingredient treats",
                    "Specialized toys for sensitive pets",
                    "Consultation with pet nutritionist",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/special-needs" className="w-full">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grooming Essentials</CardTitle>
                <CardDescription>Keep your pet looking and feeling their best</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold">+$15.00</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Premium shampoo and conditioner",
                    "Brushes and combs for your pet's coat type",
                    "Nail care tools",
                    "Dental hygiene products",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/customize" className="w-full">
                  <Button variant="outline" className="w-full">
                    Add to Your Box
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Surprises</CardTitle>
                <CardDescription>Special themed items throughout the year</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold">+$8.00</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Holiday-themed toys and treats",
                    "Seasonal accessories",
                    "Limited edition items",
                    "Birthday celebration package",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/customize" className="w-full">
                  <Button variant="outline" className="w-full">
                    Add to Your Box
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Pricing FAQs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Common questions about our pricing and subscription options.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I change my plan after subscribing?",
                answer:
                  "Yes, you can upgrade, downgrade, or modify your plan at any time. Changes will take effect on your next billing cycle.",
              },
              {
                question: "Is shipping included in the price?",
                answer: "Yes, all our subscription plans include free shipping within the continental United States.",
              },
              {
                question: "How does the multi-pet discount work?",
                answer:
                  "When you subscribe to a multi-pet box, we automatically apply a 10% discount compared to purchasing separate boxes for each pet.",
              },
              {
                question: "Can I customize what goes in my box?",
                answer:
                  "All plans allow for some level of customization, with Premium and Deluxe plans offering the most flexibility to choose specific items.",
              },
              {
                question: "Are there any hidden fees?",
                answer:
                  "No, the price you see is the price you pay. We believe in transparent pricing with no surprise charges.",
              },
              {
                question: "What if I want to cancel my subscription?",
                answer:
                  "You can cancel your subscription at any time with no cancellation fees. Simply log into your account and follow the cancellation process.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Treat Your Pet?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your furry friend and start receiving tailored pet supplies delivered to your
            door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/customize">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                Start Your Subscription
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
