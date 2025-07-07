/**
 * Route Handler that returns every signup as a simple
 * text file so it can be downloaded / shared.
 *
 * NOTE:  Because Next.js runs fully in-browser, this data
 *        will reset when the preview reloads.
 */
import type { NextRequest } from "next/server"

// reuse the same global array the Action stores into
const signups: { ts: string; name: string; email: string }[] = (globalThis as any).___motunrayoSignups ?? []

export async function GET(_req: NextRequest) {
  const header =
    "MOTÚNRÁYỌ̀ – OF WATER AND SPIRIT COLLECTION SIGN-UPS\n" +
    "===================================================\n" +
    "Timestamp | Name | Email\n" +
    "===================================================\n"

  const body = header + signups.map((s) => `${s.ts} | ${s.name} | ${s.email}`).join("\n") + "\n"

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
