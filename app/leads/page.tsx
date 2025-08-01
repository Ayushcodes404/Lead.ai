import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const leads = [
  { id: 1, name: "Lead Name", email: "Lead Mail" },
  { id: 2, name: "Lead Name", email: "Lead Mail" },
  { id: 3, name: "Lead Name", email: "Lead Mail" },
  { id: 4, name: "Lead Name", email: "Lead Mail" },
  { id: 5, name: "Lead Name", email: "Lead Mail" },
  { id: 6, name: "Lead Name", email: "Lead Mail" },
]

export default function LeadsPage() {
  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Leads</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leads.map((lead) => (
              <Card key={lead.id} className="bg-white overflow-hidden rounded-2xl">
                <div className="h-40 bg-gradient-to-b from-blue-200 via-blue-100 to-green-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-16 bg-white rounded-xl opacity-90 flex items-center justify-center">
                      <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-green-500"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{lead.name}</h3>
                  <p className="text-gray-600 text-lg mb-6">{lead.email}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg">
                    Know More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
