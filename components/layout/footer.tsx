import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Star,
  Twitter,
} from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSocialIcon from "@/components/ui/animated-social-icon";
import { imageConfig } from "@/lib/imageConfig";
export default function Footer() {
  return (
    <footer className="bg-[#190103] text-white">
      {/* Top Section */}
      <div className="pt-10 pb-6 container">
        <div className="flex flex-col md:gap-10 lg:flex-row lg:justify-between">
          {/* Left */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              4.9/5 Average Star Rating
            </div>

            <h3 className="mb-4 text-2xl md:text-4xl font-bold">Client Base</h3>

            <p className="text-sm leading-relaxed text-white">
              India, US, Canada, Germany, UK, France, Italy, Spain, Ukraine,
              Belgium, Qatar, Saudi Arabia, UAE, Dubai, Oman, Singapore,
              Nigeria, South Africa, Australia
            </p>
          </div>

          {/* Call Button & Navigation */}
          <div className="flex flex-col items-center lg:items-end gap-8 lg:gap-[60px]! justify-between mt-8 lg:mt-20">
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 text-sm rounded-sm bg-[#D00515] px-6 py-3 font-semibold overflow-hidden transition-all duration-300 hover:gap-3 hover:pr-5 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <Phone className="relative z-10 h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />

              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                Call Us : +91 8035694395
              </span>

              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </Link>

            {/* Navigation */}
            <nav>
              <ul className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3 text-sm md:text-base font-bold text-white">
                <li>
                  <Link
                    href="/"
                    className="hover:text-red-500 transition px-2 py-1 inline-block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about-us" as Route}
                    className="hover:text-red-500 transition px-2 py-1 inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-red-500 transition px-2 py-1 inline-block"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-red-500 transition px-2 py-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-red-500 transition px-2 py-1 inline-block"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="border-t border-white/40" />
      </div>

      {/* Middle Section */}
      <div className="container py-12">
        <div className="grid gap-6 md:gap-12 lg:grid-cols-4">
          {/* Logo + Text */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 flex justify-start">
              <Image
                src={imageConfig.url("/yourlogo.png")}
                alt="AJS Aura - Professional Web Solutions"
                width={200}
                height={60}
                className="rounded-lg bg-white p-2"
              />
            </div>

            <p className="mx-auto  md:mx-0 mb-6 text-sm leading-relaxed text-white max-w-lg">
              Every Item Is Packed And Handled With Extreme Care. Lorem Ipsum
              Dolor Sit Amet Consectetur. Varius Imperdiet Enim Donec Justo
              Ornare Imperdiet Sit A Pulvinar.
            </p>

            <div className="flex justify-start gap-4">
              <AnimatedSocialIcon href="#">
                <Facebook className="h-6 w-6 cursor-pointer hover:text-red-500" />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="#">
                <Instagram className="h-6 w-6 cursor-pointer hover:text-red-500" />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="#">
                <Twitter className="h-6 w-6 cursor-pointer hover:text-red-500" />
              </AnimatedSocialIcon>
              <AnimatedSocialIcon href="#">
                <Linkedin className="h-6 w-6 cursor-pointer hover:text-red-500" />
              </AnimatedSocialIcon>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 text-left">
            <h4 className="mb-3 md:mb-6 text-lg font-semibold uppercase tracking-wider">
              Web Solutions
            </h4>
            <ul className="space-y-3 text-sm text-white">
              <li className="hover:text-white transition cursor-pointer">
                CMS Website Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Ecommerce Website Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Responsive Web Design
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Website Maintenance Services
              </li>
              <li className="hover:text-white transition cursor-pointer">
                WordPress Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Website Development
              </li>
              <li className="hover:text-white transition cursor-pointer">
                E-Commerce Development
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-1 text-left">
            <h4 className="mb-3 md:mb-6 text-lg font-semibold uppercase tracking-wider">
              Address
            </h4>
            <p className="text-sm leading-relaxed text-white">
              Every Item Is Packed And Handled With Extreme Care. Lorem Ipsum
              Dolor Sit Amet Consectetur.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container flex items-center justify-between gap-2 md:gap-6 py-4 md:py-8 text-sm text-white md:flex-row xl:py-2">
          <div className="md:flex items-center text-center md:justify-between gap-2 w-full">
            <p>Copyright © 2021 All rights reserved.</p>
            <p>Website designed by arun</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              Terms & Conditions
              <span className="hidden sm:inline text-white/20">|</span>
              Privacy Policy
              <span className="hidden sm:inline text-white/20">|</span>
              Cookies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
