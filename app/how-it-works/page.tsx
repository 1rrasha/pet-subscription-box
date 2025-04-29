import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Calendar, Truck, Settings, CreditCard } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-emerald-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How PetBox Works</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Simple, flexible, and designed with you and your pet in mind. Here's how our subscription service delivers
            the perfect pet supplies right to your door.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Four Simple Steps</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-100 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right">
                  <div className="bg-emerald-100 inline-flex rounded-full p-3 mb-4">
                    <Settings className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Customize Your Box</h3>
                  <p className="text-gray-600 mb-4">
                    Tell us about your pet(s) and their preferences. Choose from a wide selection of food, treats, toys,
                    and accessories. Specify any allergies or special needs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-end gap-2">
                      <span>Select products that match your pet's needs</span>
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span>Adjust quantities and preferences</span>
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 md:pl-8 relative">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    1
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Customize your box"
                      width={300}
                      height={200}
                      className="rounded-md mx-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="mt-6 md:mt-0 md:pr-8 relative order-2 md:order-1">
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    2
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Set your schedule"
                      width={300}
                      height={200}
                      className="rounded-md mx-auto"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-emerald-100 inline-flex rounded-full p-3 mb-4">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Set Your Schedule</h3>
                  <p className="text-gray-600 mb-4">
                    Choose how often you want deliveries - weekly, bi-weekly, or monthly. Select your preferred delivery
                    dates and set up reminders.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>Flexible delivery frequencies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>Easy to pause or reschedule</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="md:text-right">
                  <div className="bg-emerald-100 inline-flex rounded-full p-3 mb-4">
                    <CreditCard className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Confirm & Subscribe</h3>
                  <p className="text-gray-600 mb-4">
                    Review your selections, see the total cost, and complete your subscription. No hidden fees or
                    long-term commitments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-end gap-2">
                      <span>Transparent pricing with no surprises</span>
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    </li>
                    <li className="flex items-center justify-end gap-2">
                      <span>Cancel or modify anytime</span>
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    </li>
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 md:pl-8 relative">
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    3
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Confirm subscription"
                      width={300}
                      height={200}
                      className="rounded-md mx-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="mt-6 md:mt-0 md:pr-8 relative order-2 md:order-1">
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold z-10 hidden md:flex">
                    4
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Receive and enjoy"
                      width={300}
                      height={200}
                      className="rounded-md mx-auto"
                    />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-emerald-100 inline-flex rounded-full p-3 mb-4">
                    <Truck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Receive & Enjoy</h3>
                  <p className="text-gray-600 mb-4">
                    Your customized box arrives at your doorstep on schedule. Adjust future deliveries based on what
                    your pet loves most.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>Track deliveries in real-time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>Provide feedback to improve future boxes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Management */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Managing Your Subscription</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We've designed our service to be as flexible as your life. Here's how you can manage your subscription with
            ease.
          </p>

          <Tabs defaultValue="dashboard" className="mb-12">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="modify">Modify Box</TabsTrigger>
              <TabsTrigger value="schedule">Adjust Schedule</TabsTrigger>
              <TabsTrigger value="pause">Pause or Cancel</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Your Subscription Dashboard</h3>
                  <p className="text-gray-600 mb-4">
                    Access your personal dashboard to view upcoming deliveries, track shipments, and manage all aspects
                    of your subscription in one place.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "See upcoming and past deliveries",
                      "Track shipments in real-time",
                      "View and update pet profiles",
                      "Access billing information and history",
                      "Get personalized recommendations",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/dashboard">
                      <Button className="bg-emerald-500 hover:bg-emerald-600">View Sample Dashboard</Button>
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dashboard interface"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="modify">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Modify box interface"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Modify Your Box Anytime</h3>
                  <p className="text-gray-600 mb-4">
                    Change the contents of your upcoming deliveries based on your pet's preferences or needs. Add or
                    remove items up to 3 days before shipping.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Swap out products your pet didn't enjoy",
                      "Add seasonal or special items",
                      "Adjust quantities as needed",
                      "Try new recommended products",
                      "Save favorite configurations for future use",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="schedule">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Flexible Delivery Scheduling</h3>
                  <p className="text-gray-600 mb-4">
                    Life changes, and so can your delivery schedule. Easily adjust when and how often you receive your
                    pet supplies.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Change from monthly to weekly (or vice versa)",
                      "Select specific delivery dates",
                      "Set up vacation mode for temporary changes",
                      "Get reminders before scheduled deliveries",
                      "Sync with your calendar app",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Schedule interface"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pause">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg shadow-md order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Pause subscription interface"
                    width={400}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Pause or Cancel With Ease</h3>
                  <p className="text-gray-600 mb-4">
                    We believe in flexibility, not contracts. Pause your subscription when you have excess supplies or
                    cancel anytime with no penalties.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Pause for a specific time period",
                      "Skip individual deliveries",
                      "Cancel with just a few clicks",
                      "Provide feedback to help us improve",
                      "Easily reactivate when you're ready",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions about our subscription service.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Can I change what's in my box each month?",
                answer:
                  "You can modify the contents of your box up to 3 days before your scheduled delivery date. Simply log into your account, go to 'Upcoming Deliveries,' and make your changes.",
              },
              {
                question: "What if my pet doesn't like something in the box?",
                answer:
                  "We offer a satisfaction guarantee. If your pet doesn't enjoy a product, let us know and we'll replace it in your next box with something else. Your feedback helps us improve future recommendations.",
              },
              {
                question: "How do you handle pets with allergies?",
                answer:
                  "During setup, you can specify any allergies or dietary restrictions your pet has. Our system will automatically filter out incompatible products and suggest hypoallergenic alternatives. We also offer specialized boxes for pets with common sensitivities.",
              },
              {
                question: "Can I skip a delivery if I have too many supplies?",
                answer:
                  "Yes! You can easily skip any delivery through your account dashboard. There's no limit to how many deliveries you can skip, and you can resume whenever you're ready.",
              },
              {
                question: "Is there a discount for multiple pets?",
                answer:
                  "Yes, we offer a multi-pet discount. When you add more than one pet to your account, you'll receive 10% off the additional pet's subscription. This applies to both cats and dogs.",
              },
              {
                question: "How do you ensure product quality?",
                answer:
                  "All products go through a rigorous selection process. We work directly with trusted manufacturers, and our team of veterinary consultants reviews products for quality and safety. We prioritize natural ingredients and durable, pet-safe materials.",
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

          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of pet owners who have simplified their pet care routine with our customized subscription
            boxes.
          </p>
          <Link href="/customize">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Create Your First Box
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
