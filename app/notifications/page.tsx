import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Notifications and Updates</h1>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-16">
            <p className="text-gray-600 text-center text-xl">
              Notification settings and system updates will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
