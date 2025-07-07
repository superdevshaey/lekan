"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, CheckCircle, Loader2 } from "lucide-react"
import { submitSignup } from "@/app/actions"

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [state, action, isPending] = useActionState(submitSignup, null)
  const [showThankYou, setShowThankYou] = useState(false)

  if (!isOpen) return null

  // Show thank you page if submission was successful
  if (state?.success && !showThankYou) {
    setShowThankYou(true)
  }

  const handleClose = () => {
    setShowThankYou(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-slate-100 rounded-lg shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-slate-600 hover:text-slate-800 transition-colors"
        >
          <X size={24} />
        </button>

        {showThankYou && state?.success ? (
          // Thank You Page
          <div className="p-8 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle className="text-green-600 w-16 h-16" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-slate-800">Thank You!</h3>

              <p className="text-slate-700 font-source-sans font-medium leading-relaxed">{state.message}</p>
            </div>

            <Button
              onClick={handleClose}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-source-sans font-semibold"
            >
              Close
            </Button>
          </div>
        ) : (
          // Signup Form
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-playfair font-bold text-slate-800 mb-2">Join the Exclusive List</h3>
              <p className="text-slate-600 font-source-sans font-medium">
                Be the first to experience the LEKAN AARE collection
              </p>
            </div>

            <form action={action} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-slate-700 font-source-sans font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isPending}
                  className="mt-1 font-source-sans"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-700 font-source-sans font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isPending}
                  className="mt-1 font-source-sans"
                  placeholder="Enter your email address"
                />
              </div>

              {state && !state.success && (
                <div className="text-red-600 text-sm font-source-sans font-medium">{state.message}</div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-source-sans font-bold py-3"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Join the Exclusive List"
                )}
              </Button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-4 font-source-sans">
              We respect your privacy. Your information will only be used to notify you about the collection launch.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
