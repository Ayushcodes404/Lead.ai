import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function LeadInfoPage() {
  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Lead Information</h1>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-16">
            <div className="text-center space-y-6 text-lg">
              <p className="text-gray-700 text-xl">this window will have details like</p>

              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <div>
                  <p className="font-bold text-xl text-gray-900">Lead Overview:</p>
                  <p className="text-gray-700 ml-4">Name, Platform, Score, Status (Hot/Warm/Cold)</p>
                </div>

                <div>
                  <p className="font-bold text-xl text-gray-900">
                    AI Summary (small description like "Highly interested, asked about pricing")
                  </p>
                </div>

                <div>
                  <p className="font-bold text-xl text-gray-900">Conversation View:</p>
                  <p className="text-gray-700 ml-4">Chat-style interface showing actual messages</p>
                </div>

                <div>
                  <p className="font-bold text-xl text-gray-900">Lead Actions:</p>
                  <p className="text-gray-700 ml-4">Re-classify lead manually</p>
                  <p className="text-gray-700 ml-4">Add to CRM or export as CSV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
