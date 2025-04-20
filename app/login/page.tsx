import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <header className="bg-slate-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">VoteChain</h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Voter Login</h2>
            <LoginForm />
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
