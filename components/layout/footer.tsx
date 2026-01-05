import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Star,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { imageConfig } from "@/lib/imageConfig";
export default function Footer() {
  return (
    <footer className="bg-[#190103] text-white">
      {/* Top Section */}
      <div className="pt-4 pb-2 container">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              4.9/5 Average Star Rating
            </div>

            <h2 className="mb-4 text-4xl font-bold">Client Base</h2>

            <p className="text-sm leading-relaxed text-white">
              India, US, Canada, Germany, UK, France, Italy, Spain, Ukraine,
              Belgium, Qatar, Saudi Arabia, UAE, Dubai, Oman, Singapore,
              Nigeria, South Africa, Australia
            </p>
          </div>

          {/* Call Button */}
          <div className="flex flex-col  items-end gap-[60px]! justify-between mt-20">
            <Link
              href="tel:+919578707920"
              className="inline-flex items-center gap-2 text-sm rounded-sm bg-[#D00515] px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              <Phone className="h-5 w-5" />
              Call Us : +91 9578707920
            </Link>

            {/* Navigation */}
            <div>
              <ul className="space-y-3 text-md text-white flex gap-15 text-bold">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Team</li>
                <li>Reviews</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
      </div>
      <div className="container">
        <div className="border-t border-white/40" />
      </div>
      {/* Middle Section */}
      <div className="container py-8">
        <div className="grid gap-16 md:grid-cols-4">
          {/* Logo + Text */}
          <div className="col-span-2">
            <Image
              src={imageConfig.url("/yourlogo.png")}
              alt="Logo"
              width={250}
              height={250}
              className="mb-6 inline-block rounded-lg bg-white"
            />

            <p className="mb-6 text-sm leading-relaxed text-white max-w-lg">
              Every Item Is Packed And Handled With Extreme Care.Lorem Ipsum
              Dolor Sit Amet Consectetur. Varius Imperdiet Enim Donec Justo
              Ornare Imperdiet Sit A Pulvinar.
            </p>

            <div className="flex gap-4">
              <Facebook className="h-7 w-7 cursor-pointer hover:text-red-500" />
              <Instagram className="h-7 w-7 cursor-pointer hover:text-red-500" />
              <Twitter className="h-7 w-7 cursor-pointer hover:text-red-500" />
              <Linkedin className="h-7 w-7 cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="mb-4 text-lg font-semibold uppercase">
              Interactive Web Solutions
            </h4>
            <ul className="space-y-3 text-sm text-white">
              <li>CMS Website Development</li>
              <li>Ecommerce Website Development</li>
              <li>Responsive Web Design</li>
              <li>Website Maintenance Services</li>
              <li>WordPress Development</li>
              <li>Website Development / Maintenance</li>
              <li>E-Commerce Development</li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-1">
            <h4 className="mb-4 text-lg font-semibold">Address</h4>
            <p className="text-sm leading-relaxed text-white">
              Every Item Is Packed And Handled With Extreme Care.Lorem Ipsum
              Dolor Sit Amet Consectetur.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 px-40">
        <div className="container flex  flex-col items-center justify-between gap-4 px-6 py-1 text-sm text-white md:flex-row">
          <p>Copyright © 2021 All rights reserved.</p>
          <p>
            website designed by <Link href="https://zinavo.com">zinavo</Link>
          </p>
          <div className="flex gap-4">
            <span>Terms and conditional</span>
            <span>|</span>
            <span>Privacy policy</span>
            <span>|</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
