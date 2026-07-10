"use client";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">
              Hubu-Inyass Food
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Delivering delicious meals from the best restaurants straight to
              your doorstep.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500 hover:text-white"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/restaurants">Restaurants</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Categories</h3>

            <ul className="space-y-3">
              <li>Pizza</li>
              <li>Burger</li>
              <li>Chicken</li>
              <li>Drinks</li>
              <li>Desserts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-bold text-white">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-orange-500" size={20} />
                <p>Osun, Nigeria</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-orange-500" size={20} />
                <p>+234 813 233 8284</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-orange-500" size={20} />
                <p>support@hubu-inyasstech.com</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p>
            © {new Date().getFullYear()} Hubu-Inyass Tech. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
