"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignupModal } from "@/components/signup-modal"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lekan.jpeg"
          alt="Traditional African artwork background"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8 text-center flex justify-center">
          <Image src="/lekan.png" alt="Logo" width={100} height={100} />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 text-center">
          <div className="max-w-6xl space-y-10 md:space-y-16">
            {/* Coming Soon */}
            <p className="text-blue-300 text-2xl md:text-3xl tracking-[0.5em] font-source-sans font-bold uppercase">
              Coming Soon...
            </p>

            {/* Main Title */}
            <div className="space-y-6">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-blue-100 leading-tight tracking-wider">
                "LEKAN AARE"
              </h2>
              <p className="text-2xl md:text-3xl font-source-sans font-semibold text-slate-200 tracking-wide">
                — A King Has Rested
              </p>
            </div>

            {/* Description */}
            <div className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-xl border border-blue-400/30">
              <p className="text-slate-100 text-2xl md:text-3xl font-source-sans font-semibold leading-relaxed max-w-5xl mx-auto">
                A collection inspired by the regal spirit of Yoruba kingship
                <br className="hidden md:block" />
                and the vibrant traditions of the Ojude Oba Festival.
              </p>

              <div className="mt-8 pt-6 border-t border-blue-400/30">
                <p className="text-blue-300 text-xl md:text-2xl font-source-sans font-bold leading-relaxed max-w-5xl mx-auto">
                  Launching September 2025 at
                  <br className="hidden md:block" />
                  London Fashion Week, as part of the
                  <br className="hidden md:block" />
                  UDGN Cultural Threads Showcase.
                </p>
              </div>
            </div>

            <p className="text-slate-100 text-xl md:text-2xl font-playfair font-semibold leading-relaxed max-w-5xl mx-auto italic">
              This collection is a visual anthem of identity—where modern silhouettes echo ancestral pride.
            </p>

            {/* CTA Section */}
            <div className="space-y-8 pt-12">
              <p className="text-white text-2xl md:text-2xl font-source-sans font-bold">
                Want to be the first to experience the full collection?
              </p>

              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                size="lg"
                className="bg-transparent border-3 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-12 py-6 text-lg tracking-[0.4em] font-source-sans font-bold uppercase transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
              >
                CLICK HERE
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        
      </div>

      {/* Signup Modal */}
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
