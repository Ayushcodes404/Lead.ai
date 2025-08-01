import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const leadData = [
  { name: "xyz corp", platform: "Platform Name:", score: "Score", message: "View Last message" },
  { name: "xyz corp", platform: "Platform Name:", score: "Score", message: "View Last message" },
  { name: "xyz corp", platform: "Platform Name:", score: "Score", message: "View Last message" },
  { name: "xyz corp", platform: "Platform Name:", score: "Score", message: "View Last message" },
  { name: "xyz corp", platform: "Platform Name:", score: "Score", message: "View Last message" },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold mb-2">156</div>
                <div className="text-gray-600 text-lg">Total Leads</div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold mb-2">42</div>
                <div className="text-gray-600 text-lg">Hot Leads</div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold mb-2">78</div>
                <div className="text-gray-600 text-lg">Warm Leads</div>
              </CardContent>
            </Card>
            <Card className="bg-white rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold mb-2">36</div>
                <div className="text-gray-600 text-lg">Cold Leads</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Lead Score Chart */}
            <Card className="lg:col-span-2 bg-white rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8">Lead Score Chart</h3>
                <div className="h-80 flex items-end justify-center space-x-8 px-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: "80px" }}></div>
                    <span className="text-sm mt-3 font-medium">Week 1</span>
                    <span className="text-xs text-gray-500">5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: "120px" }}></div>
                    <span className="text-sm mt-3 font-medium">Week 2</span>
                    <span className="text-xs text-gray-500">10</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: "160px" }}></div>
                    <span className="text-sm mt-3 font-medium">Week 3</span>
                    <span className="text-xs text-gray-500">15</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 bg-blue-600 rounded-t-lg" style={{ height: "200px" }}></div>
                    <span className="text-sm mt-3 font-medium">Week 4</span>
                    <span className="text-xs text-gray-500">20</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leads List and Message */}
            <Card className="lg:col-span-3 bg-white rounded-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Leads List */}
                  <div className="lg:col-span-3">
                    <div className="space-y-4">
                      {leadData.map((lead, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-lg">{lead.name}</div>
                            <div className="text-gray-600">{lead.platform}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{lead.score}</div>
                            <div className="text-orange-500 text-sm">{lead.message}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Interface */}
                  <div className="lg:col-span-2">
                    <h3 className="font-bold text-xl mb-6">LEAD Message</h3>
                    <div className="border-2 border-gray-300 rounded-xl p-6 h-80 flex flex-col">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-gray-500 text-lg">Message</div>
                      </div>
                      <Input placeholder="Message" className="border-gray-300 h-12 rounded-lg" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
