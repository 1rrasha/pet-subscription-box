import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cat, Dog, Calendar, Package, Heart, Shield, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-emerald-500 py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Tailored Pet Supplies, Delivered Your Way
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Customized subscription boxes for cats and dogs that adapt to your pet's unique needs and your schedule.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Start Your Box
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute top-0 right-0 bg-white/90 rounded-full p-6 shadow-lg">
                  <Cat className="w-12 h-12 text-emerald-500" />
                </div>
                <div className="absolute bottom-0 left-0 bg-white/90 rounded-full p-6 shadow-lg">
                  <Dog className="w-12 h-12 text-emerald-500" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-full p-8 shadow-lg">
                  <Package className="w-16 h-16 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Pet Owners Like You</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Customization</h3>
                <p className="text-gray-600">
                  Choose exactly what goes in your box, from food to toys, based on your pet's preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Delivery</h3>
                <p className="text-gray-600">
                  Set your own schedule, pause, or adjust delivery dates to match your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  Vet-approved, natural products that meet the highest standards for your pet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Persona-Based Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Solutions for Every Pet Owner</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Based on our research with pet owners like you, we've created subscription options that solve real problems.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6">
                  <Calendar className="w-12 h-12 text-blue-500" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Busy Professionals</h3>
                <p className="text-gray-600 mb-4">
                  Never run out of supplies again. Set your schedule once and forget about it, with smart reminders and
                  easy adjustments when your routine changes.
                </p>
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
                <Link href="/customize?persona=enthusiast">
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">Create Your Premium Box</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-6">
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
                <h3 className="text-xl font-semibold mb-2">For Special Needs Pets</h3>
                <p className="text-gray-600 mb-4">
                  Hypoallergenic options, sensitive skin formulas, and specialized diets. Carefully selected products
                  for pets with unique requirements.
                </p>
                <Link href="/customize?persona=special-needs">
                  <Button className="w-full bg-green-500 hover:bg-green-600">Create Your Specialized Box</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Pet Care?</h2>
          <p className="text-gray-600 mb-8">
            Join 85% of pet owners who prefer the convenience of monthly deliveries tailored to their pet's needs.
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Start Your Personalized Subscription
          </Button>
        </div>
      </section>
    </div>
  )
}
