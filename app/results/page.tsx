import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WalletConnect from "@/components/wallet-connect"

const results = [
  { id: 1, name: "Alex Johnson", party: "Progressive Party", votes: 1245, percentage: 32.5 },
  { id: 2, name: "Sarah Williams", party: "Conservative Alliance", votes: 1102, percentage: 28.7 },
  { id: 3, name: "Michael Chen", party: "Centrist Union", votes: 876, percentage: 22.8 },
  { id: 4, name: "Priya Patel", party: "Reform Movement", votes: 612, percentage: 16.0 },
]

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">VoteChain</h1>
          <WalletConnect />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Current Results</h2>
          <p className="text-slate-600">
            Live results from the blockchain. These results are updated in real-time as votes are cast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Votes Cast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">3,835</div>
              <p className="text-slate-500">Out of 12,500 registered voters</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voter Turnout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">30.7%</div>
              <p className="text-slate-500">Updated April 20, 2025 at 2:31 AM</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Candidate Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {results.map((candidate) => (
                <div key={candidate.id}>
                  <div className="flex justify-between mb-1">
                    <div>
                      <span className="font-medium">{candidate.name}</span>
                      <span className="text-slate-500 ml-2">({candidate.party})</span>
                    </div>
                    <div>
                      <span className="font-medium">{candidate.votes} votes</span>
                      <span className="text-slate-500 ml-2">({candidate.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                      className="bg-slate-800 h-2.5 rounded-full"
                      style={{ width: `${candidate.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 VoteChain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
