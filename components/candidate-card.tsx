"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Candidate {
  id: number
  name: string
  party: string
  age: number
  experience: string
  image: string
  manifesto: string
}

interface CandidateCardProps {
  candidate: Candidate
}

export default function CandidateCard({ candidate }: CandidateCardProps) {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isVoting, setIsVoting] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = () => {
    setShowConfirmation(true)
  }

  const confirmVote = async () => {
    setIsVoting(true)

    try {
      // Simulate blockchain transaction
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Update state after successful vote
      setHasVoted(true)
      setShowConfirmation(false)
    } catch (error) {
      console.error("Error casting vote:", error)
      alert("Failed to cast vote. Please try again.")
    } finally {
      setIsVoting(false)
    }
  }

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="p-4 flex justify-center bg-slate-50">
          <Image
            src={candidate.image || "/placeholder.svg"}
            alt={candidate.name}
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <CardContent className="p-6 flex-1">
          <h3 className="text-xl font-bold mb-1">{candidate.name}</h3>
          <p className="text-emerald-600 font-medium mb-3">{candidate.party}</p>

          <div className="space-y-2 text-sm text-slate-600 mb-4">
            <p>
              <span className="font-medium">Age:</span> {candidate.age}
            </p>
            <p>
              <span className="font-medium">Experience:</span> {candidate.experience}
            </p>
            <p>
              <span className="font-medium">Key Policies:</span> {candidate.manifesto}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button
            className="w-full bg-slate-800 hover:bg-slate-700"
            onClick={handleVote}
            disabled={!window.ethereum || hasVoted}
          >
            {hasVoted ? "Voted" : "Vote for Candidate"}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Vote</DialogTitle>
            <DialogDescription>
              You are about to cast your vote for {candidate.name} of the {candidate.party}. This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center gap-4 py-4">
            <Image
              src={candidate.image || "/placeholder.svg"}
              alt={candidate.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold">{candidate.name}</h4>
              <p className="text-emerald-600">{candidate.party}</p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmation(false)} disabled={isVoting}>
              Cancel
            </Button>
            <Button onClick={confirmVote} disabled={isVoting}>
              {isVoting ? "Processing..." : "Confirm Vote"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
