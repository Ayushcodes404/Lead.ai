"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "Dashboard", href: "/dashboard", section: "Menu" },
  { name: "Import", href: "/import", section: "Menu" },
  { name: "Details", href: "/leads", section: "Menu" },
]

const generalItems = [
  { name: "Settings", href: "/settings" },
  { name: "Notifications and Updates", href: "/notifications" },
  { name: "Subscription", href: "/subscription" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-72 bg-gray-300 min-h-screen p-6">
      <div className="mb-12">
        <h1 className="text-xl font-bold text-gray-900">Lead AI (Logo)</h1>
      </div>

      <nav className="space-y-8">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-400 hover:text-gray-900",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6">General</h2>
          <div className="space-y-2">
            {generalItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-400 hover:text-gray-900",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
