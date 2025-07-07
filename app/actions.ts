"use server"

interface Signup {
  ts: string
  name: string
  email: string
}

/**
 * In-memory store that survives while the preview tab is open.
 * It cannot survive a full refresh because next-lite runs in the browser only.
 */
const signups: Signup[] = (globalThis as any).___motunrayoSignups ?? []

// keep the reference on globalThis so every import shares the same array
;(globalThis as any).___motunrayoSignups = signups

/**
 * Server Action – gets called by useActionState.
 *   param _prev   – previous state (ignored)
 *   param formData – the FormData sent by the form
 */
export async function submitSignup(
  _prev: unknown,
  formData: FormData,
): Promise<{ success: boolean; message: string; signupUrl?: string }> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()

  if (!name || !email) {
    return { success: false, message: "Name and email are required." }
  }

  signups.push({ ts: new Date().toISOString(), name, email })

  // tiny wait so the user sees a loader
  await new Promise((r) => setTimeout(r, 500))

  return {
    success: true,
    message: "Thank you for your interest! You will be the first to know when the collection launches.",
    signupUrl: "/api/signups",
  }
}
