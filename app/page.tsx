import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">VoteChain</h1>
          <Link href="/login">
            <Button variant="outline" className="text-white border-white hover:bg-slate-700">
              Login
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Secure Blockchain Voting</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vote securely and transparently using blockchain technology. Your vote matters and is immutable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Login to Vote
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-slate-800">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Login with Voter ID</h3>
                <p className="text-slate-600">
                  Verify your identity using your government-issued Voter ID card and personal details.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Your Wallet</h3>
                <p className="text-slate-600">
                  Connect your Web3 wallet to sign and verify your vote on the blockchain.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Cast Your Vote</h3>
                <p className="text-slate-600">
                  Review candidate information and cast your vote securely and anonymously.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 VoteChain. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
