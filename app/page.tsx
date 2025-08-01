"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberPassword, setRememberPassword] = useState(false)

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Login Form */}
      <div className="md:w-1/2 bg-white clip-left-banner relative p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md z-10">
          <h1 className="text-4xl font-bold tracking-widest text-blue-900 mb-4 uppercase">
            Welcome Back
          </h1>
          <p className="text-gray-700 mb-10 text-base">Enter your details</p>

          <form className="space-y-8">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium text-lg block mb-2">
                Email ID
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border border-gray-400 text-lg"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium text-lg block mb-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border border-gray-400 text-lg"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberPassword}
                  onCheckedChange={(checked) => setRememberPassword(Boolean(checked))}
                />
                <Label htmlFor="remember" className="text-gray-600">
                  Remember Password
                </Label>
              </div>
              <Link href="/forgot-password" className="text-blue-700 hover:underline">
                Forgot Password
              </Link>
            </div>

            <Link href="/dashboard" className="block">
              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white py-3 text-lg font-semibold">
                Sign In
              </Button>
            </Link>

            <Button
              variant="outline"
              className="w-full py-3 text-lg border border-gray-300 text-blue-900 font-medium hover:bg-gray-100"
            >
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side - Illustration & Branding */}
      <div className="md:w-1/2 bg-blue-900 text-white relative flex items-center justify-center p-4 md:p-8">
        <Image
          src="/images/Login_img.png"
          alt="Team collaboration illustration"
          layout="fill"
          objectFit="cover"
          className="w-auto h-full"
        />
      </div>
    </div>
  )
}
