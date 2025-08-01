import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="bg-gray-400 p-4 flex items-center justify-between">
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5" />
          <Input placeholder="Search Leads" className="pl-12 h-12 bg-gray-300 border-gray-500 text-lg rounded-full" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-blue-200 text-blue-800 text-lg font-semibold">AB</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <div className="font-medium text-gray-900">Abc@gyzmail.com</div>
          <div className="text-gray-700">Username</div>
        </div>
      </div>
    </header>
  )
}
