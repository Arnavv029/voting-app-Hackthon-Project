import CandidateCard from "@/components/candidate-card"
import WalletConnect from "@/components/wallet-connect"

const candidates = [
  {
    id: 1,
    name: "Alex Johnson",
    party: "Progressive Party",
    age: 45,
    experience: "Former Mayor, State Senator",
    image: "/placeholder.svg?height=150&width=150",
    manifesto: "Focus on renewable energy and healthcare reform",
  },
  {
    id: 2,
    name: "Sarah Williams",
    party: "Conservative Alliance",
    age: 52,
    experience: "Business Leader, City Council",
    image: "/placeholder.svg?height=150&width=150",
    manifesto: "Economic growth and traditional values",
  },
  {
    id: 3,
    name: "Michael Chen",
    party: "Centrist Union",
    age: 48,
    experience: "Professor, Policy Advisor",
    image: "/placeholder.svg?height=150&width=150",
    manifesto: "Balanced approach to social and fiscal policies",
  },
  {
    id: 4,
    name: "Priya Patel",
    party: "Reform Movement",
    age: 39,
    experience: "Civil Rights Lawyer, Activist",
    image: "/placeholder.svg?height=150&width=150",
    manifesto: "Judicial reform and social justice",
  },
]

export default function VotePage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-800 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">VoteChain</h1>
          <WalletConnect />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Cast Your Vote</h2>
          <p className="text-slate-600 mb-4">
            Review the candidates below and select one to cast your vote. Make sure your wallet is connected before
            voting.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
            <p className="font-medium">Important:</p>
            <p>You can only vote once. Your choice cannot be changed after submission.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </main>

      <footer className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 VoteChain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
