"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = async () => {
    setIsConnecting(true)

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== "undefined") {
        // Request account access
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })

        // Get the first account
        const address = accounts[0]
        setWalletAddress(address)
        setIsConnected(true)
      } else {
        alert("Please install MetaMask to connect your wallet!")
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center gap-2">
          <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium hidden sm:block">
            {shortenAddress(walletAddress)}
          </div>
          <Button variant="outline" className="text-white border-white hover:bg-slate-700" onClick={disconnectWallet}>
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          className="text-white border-white hover:bg-slate-700"
          onClick={connectWallet}
          disabled={isConnecting}
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </div>
  )
}
