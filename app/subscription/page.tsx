import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"

export default function SubscriptionPage() {
  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Subscription</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-600 text-white rounded-2xl">
              <CardContent className="p-8 h-96 flex items-end">
                <h3 className="text-3xl font-bold">Trial</h3>
              </CardContent>
            </Card>

            <Card className="bg-gray-600 text-white rounded-2xl">
              <CardContent className="p-8 h-96 flex items-end">
                <h3 className="text-3xl font-bold">Pro</h3>
              </CardContent>
            </Card>

            <Card className="bg-gray-600 text-white rounded-2xl">
              <CardContent className="p-8 h-96 flex items-end">
                <h3 className="text-3xl font-bold">Pro plus</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
