import { useState } from 'react'
import { site } from '@/config/site'
import { submitForm, type SubmitResult } from '@/lib/submitForm'

export function useSubmit(subject: string, labels: Record<string, string>, to: string = site.email) {
  const [result, setResult] = useState<SubmitResult | null>(null)
  const [error, setError] = useState(false)

  async function submit(data: Record<string, string | boolean | undefined>) {
    setError(false)
    try {
      setResult(await submitForm(subject, data, labels, to))
    } catch {
      setError(true)
    }
  }

  function reset() {
    setResult(null)
    setError(false)
  }

  return { result, error, submit, reset }
}

export const phonePattern = /^[+()\d\s-]{7,20}$/
