import Link from "next/link"
import { Button } from "@/components/ui/button"
import WalletConnect from "@/components/wallet-connect"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">VoteChain</h1>
          <WalletConnect />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Voting Dashboard</h2>
          <p className="mb-6">
            You are now logged in. To participate in the voting process, you need to connect your wallet first. Once
            connected, you can view the candidates and cast your vote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/vote">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Go to Voting Page</Button>
            </Link>
            <Link href="/results">
              <Button variant="outline">View Current Results</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Voting Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Election Name:</span>
                <span className="font-medium">General Election 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Voting Period:</span>
                <span className="font-medium">April 15 - April 25, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Your Constituency:</span>
                <span className="font-medium">Central District</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Voting Status:</span>
                <span className="font-medium text-amber-600">Not Voted</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Important Instructions</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Connect your wallet before attempting to vote</li>
              <li>Ensure you have enough gas fees for the transaction</li>
              <li>Your vote is anonymous and secured by blockchain</li>
              <li>You can only vote once in this election</li>
              <li>Review candidate information carefully before voting</li>
              <li>Contact support if you encounter any issues</li>
            </ul>
          </div>
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
