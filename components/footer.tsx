import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Package className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold">PetBox</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Tailored subscription boxes for cats and dogs that adapt to your pet's unique needs and your schedule.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-500 hover:text-emerald-500" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-500 hover:text-emerald-500" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-500 hover:text-emerald-500" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-500 hover:text-emerald-500" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-emerald-500">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-emerald-500">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-emerald-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-emerald-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Pet Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/special-needs" className="text-gray-600 hover:text-emerald-500">
                  Special Needs Pets
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-emerald-500">
                  Pet Care Blog
                </Link>
              </li>
              <li>
                <Link href="/nutrition" className="text-gray-600 hover:text-emerald-500">
                  Nutrition Guide
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-emerald-500">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-emerald-500">
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for pet care tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 PetBox. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-emerald-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-emerald-500">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-emerald-500">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
