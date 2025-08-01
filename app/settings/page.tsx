import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Settings</h1>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-16">
            <ul className="space-y-8 text-xl">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-black rounded-full mr-6"></span>
                <span className="text-gray-900">Connect/Disconnect Platforms</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-black rounded-full mr-6"></span>
                <span className="text-gray-900">Manage API keys (if needed)</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-black rounded-full mr-6"></span>
                <span className="text-gray-900">Plan Info (if there's pricing tiers later)</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-black rounded-full mr-6"></span>
                <span className="text-gray-900">Language preference</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
