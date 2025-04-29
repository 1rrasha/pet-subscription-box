import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Cat, Dog, Shield, CheckCircle } from "lucide-react"

export default function SpecialNeedsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Special Needs Pet Solutions</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Tailored subscription options for pets with allergies, sensitivities, and other special requirements.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-white rounded-full p-3 border border-amber-200">
              <AlertCircle className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-amber-800">We Understand Special Needs</h2>
              <p className="text-amber-700 mt-1">
                Our research showed that 10% of pet owners have animals with allergies or special dietary requirements,
                but most subscription services don't adequately address these needs. We've created specialized options
                to ensure every pet gets exactly what they need.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="cat" className="mb-12">
          <TabsList className="mb-8 w-full justify-start">
            <TabsTrigger value="cat" className="flex items-center gap-2">
              <Cat className="w-4 h-4" /> Cat Special Needs
            </TabsTrigger>
            <TabsTrigger value="dog" className="flex items-center gap-2">
              <Dog className="w-4 h-4" /> Dog Special Needs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cat" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Food Allergies & Sensitivities</CardTitle>
                  <CardDescription>For cats with dietary restrictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Hypoallergenic Food Options</p>
                        <p className="text-sm text-gray-600">Limited ingredient diets with novel protein sources</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Grain-Free Formulas</p>
                        <p className="text-sm text-gray-600">For cats with grain sensitivities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Allergen-Free Treats</p>
                        <p className="text-sm text-gray-600">Single-ingredient treats with no common allergens</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/customize?persona=special-needs&pet=cat&issue=allergies" className="w-full">
                    <Button className="w-full">Create Allergy-Friendly Box</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Sensitive Digestion</CardTitle>
                  <CardDescription>For cats with digestive issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Easily Digestible Formulas</p>
                        <p className="text-sm text-gray-600">Gentle on sensitive stomachs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Probiotic Supplements</p>
                        <p className="text-sm text-gray-600">Support healthy gut flora</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Hairball Control</p>
                        <p className="text-sm text-gray-600">Specialized formulas to reduce hairballs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/customize?persona=special-needs&pet=cat&issue=digestion" className="w-full">
                    <Button className="w-full">Create Digestive Care Box</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Senior Cat Care</CardTitle>
                <CardDescription>For aging cats with special requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Joint Support</p>
                      <p className="text-sm text-gray-600">Supplements with glucosamine and chondroitin</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Soft Food Options</p>
                      <p className="text-sm text-gray-600">Easier to eat for cats with dental issues</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Gentle Grooming Tools</p>
                      <p className="text-sm text-gray-600">Designed for sensitive senior skin</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/customize?persona=special-needs&pet=cat&issue=senior" className="w-full">
                  <Button className="w-full">Create Senior Care Box</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="dog" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Food Allergies & Sensitivities</CardTitle>
                  <CardDescription>For dogs with dietary restrictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Limited Ingredient Diets</p>
                        <p className="text-sm text-gray-600">Simplified recipes with fewer potential allergens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Novel Protein Sources</p>
                        <p className="text-sm text-gray-600">Uncommon proteins like venison or duck</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Grain-Free Options</p>
                        <p className="text-sm text-gray-600">For dogs with grain sensitivities</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/customize?persona=special-needs&pet=dog&issue=allergies" className="w-full">
                    <Button className="w-full">Create Allergy-Friendly Box</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Skin & Coat Issues</CardTitle>
                  <CardDescription>For dogs with dermatological needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Omega-Rich Supplements</p>
                        <p className="text-sm text-gray-600">Support healthy skin and coat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Gentle Shampoos</p>
                        <p className="text-sm text-gray-600">Hypoallergenic formulas for sensitive skin</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Soothing Balms</p>
                        <p className="text-sm text-gray-600">For dry paws and hot spots</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/customize?persona=special-needs&pet=dog&issue=skin" className="w-full">
                    <Button className="w-full">Create Skin & Coat Box</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Joint & Mobility Support</CardTitle>
                <CardDescription>For senior dogs or those with mobility issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Joint Supplements</p>
                      <p className="text-sm text-gray-600">With glucosamine, chondroitin, and MSM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Orthopedic Bedding</p>
                      <p className="text-sm text-gray-600">Supportive comfort for aging joints</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Easy-Access Toys</p>
                      <p className="text-sm text-gray-600">Designed for dogs with limited mobility</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/customize?persona=special-needs&pet=dog&issue=mobility" className="w-full">
                  <Button className="w-full">Create Mobility Support Box</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-white border rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
                <h2 className="text-xl font-semibold">Our Special Needs Guarantee</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Veterinarian-Approved Products</p>
                    <p className="text-sm text-gray-600">
                      All special needs items are reviewed by veterinary professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium">100% Satisfaction Guarantee</p>
                    <p className="text-sm text-gray-600">If a product doesn't work for your pet, we'll replace it</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Personalized Consultation</p>
                    <p className="text-sm text-gray-600">
                      Get expert advice on choosing the right products for your pet's needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 p-8 flex items-center justify-center">
              <div className="max-w-xs text-center">
                <div className="bg-white rounded-full p-6 inline-block mb-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Veterinarian with pet"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team includes veterinary nutritionists who help curate products specifically for pets with special
                  needs.
                </p>
                <Button variant="outline" className="mt-4">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Specialized Box?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start your customized subscription today and give your pet the specialized care they deserve.
          </p>
          <Link href="/customize?persona=special-needs">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Build Your Special Needs Box
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
