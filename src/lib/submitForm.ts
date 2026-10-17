import { site } from '@/config/site'

export type SubmitResult = 'sent' | 'mailto'

type Fields = Record<string, string | boolean | undefined>

/**
 * Sends a website form.
 * - With VITE_FORM_ENDPOINT set, the data is POSTed as JSON (Formspree, Getform, your own API…).
 * - Without it, the visitor's email app opens with the message pre-filled, addressed to `to` (site.email by default).
 */
export async function submitForm(
  subject: string,
  data: Fields,
  labels: Record<string, string>,
  to: string = site.email,
): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim()

  const readable = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => [labels[key] ?? key, typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value] as const)

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: subject, form: subject, ...Object.fromEntries(readable) }),
    })
    if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`)
    return 'sent'
  }

  const body = readable.map(([label, value]) => `${label}: ${value}`).join('\n')
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mailto'
}
