"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Faisal Zaman. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
