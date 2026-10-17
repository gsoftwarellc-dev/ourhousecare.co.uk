import { forwardRef, useId, type ComponentProps, type ReactNode } from 'react'
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Mail } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import type { SubmitResult } from '@/lib/submitForm'
import { site } from '@/config/site'

const control =
  'block w-full rounded-xl border bg-white px-4 text-[0.97rem] text-ink transition-[border-color,box-shadow] placeholder:text-muted/60 focus:outline-none focus:ring-4'

const controlState = (invalid?: boolean) =>
  invalid
    ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
    : 'border-plum-100 hover:border-plum-200 focus:border-plum-500 focus:ring-plum-100'

type FieldProps = {
  label: string
  error?: string
  hint?: string
  required?: boolean
  className?: string
}

function FieldShell({
  id,
  label,
  error,
  hint,
  required,
  className,
  children,
}: FieldProps & { id: string; children: ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[0.9rem] font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-0.5 text-plum-600" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-1.5 text-[0.8rem] font-normal text-muted">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-[0.82rem] leading-5 text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-[0.82rem] text-red-600">
          <CircleAlert aria-hidden className="size-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined
}

export const TextField = forwardRef<HTMLInputElement, FieldProps & ComponentProps<'input'>>(function TextField(
  { label, error, hint, required, className, ...props },
  ref,
) {
  const id = useId()
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <input
        ref={ref}
        id={id}
        aria-invalid={Boolean(error)}
        aria-required={required}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(control, controlState(Boolean(error)), 'h-12')}
        {...props}
      />
    </FieldShell>
  )
})

export const SelectField = forwardRef<
  HTMLSelectElement,
  FieldProps & ComponentProps<'select'> & { options: string[]; placeholder?: string }
>(function SelectField({ label, error, hint, required, className, options, placeholder = 'Please select', ...props }, ref) {
  const id = useId()
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} required={required} className={className}>
      <div className="relative">
        <select
          ref={ref}
          id={id}
          aria-invalid={Boolean(error)}
          aria-required={required}
          aria-describedby={describedBy(id, error, hint)}
          className={cn(control, controlState(Boolean(error)), 'h-12 appearance-none pr-11')}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
        />
      </div>
    </FieldShell>
  )
})

export const TextAreaField = forwardRef<HTMLTextAreaElement, FieldProps & ComponentProps<'textarea'>>(
  function TextAreaField({ label, error, hint, required, className, rows = 5, ...props }, ref) {
    const id = useId()
    return (
      <FieldShell id={id} label={label} error={error} hint={hint} required={required} className={className}>
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-required={required}
          aria-describedby={describedBy(id, error, hint)}
          className={cn(control, controlState(Boolean(error)), 'resize-y py-3 leading-6')}
          {...props}
        />
      </FieldShell>
    )
  },
)

export const ConsentField = forwardRef<
  HTMLInputElement,
  { error?: string; children: ReactNode } & ComponentProps<'input'>
>(function ConsentField({ error, children, ...props }, ref) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error)}
          className="mt-0.5 size-5 shrink-0 cursor-pointer rounded-md border-plum-200 accent-plum-700"
          {...props}
        />
        <span className="text-[0.88rem] leading-6 text-muted">{children}</span>
      </label>
      {error && (
        <p role="alert" className="mt-1.5 flex items-center gap-1.5 pl-8 text-[0.82rem] text-red-600">
          <CircleAlert aria-hidden className="size-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
})

export function SubmitButton({ loading, children }: { loading: boolean; children: ReactNode }) {
  return (
    <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto" arrow={!loading}>
      {loading && <LoaderCircle aria-hidden className="size-4 animate-spin" />}
      {loading ? 'Sending…' : children}
    </Button>
  )
}

export function FormStatus({
  result,
  error,
  onReset,
  sentTitle = 'Thank you, your message has been sent',
  sentText = 'A member of our team will be in touch as soon as possible.',
  email = site.email,
}: {
  result: SubmitResult | null
  error: boolean
  onReset: () => void
  sentTitle?: string
  sentText?: string
  email?: string
}) {
  if (error) {
    return (
      <div role="alert" className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-[0.92rem] text-red-800">
        <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0" />
        <p>
          Sorry, something went wrong sending your message. Please try again, or email us directly at{' '}
          <a href={`mailto:${email}`} className="font-semibold underline">
            {email}
          </a>
          .
        </p>
      </div>
    )
  }
  if (!result) return null
  return (
    <div role="status" className="rounded-3xl border border-plum-100 bg-plum-50 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-plum-700 text-white">
          {result === 'sent' ? <CircleCheck aria-hidden className="size-6" /> : <Mail aria-hidden className="size-6" />}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-ink">
            {result === 'sent' ? sentTitle : 'Your email app should now be open'}
          </h3>
          <p className="mt-1.5 text-[0.95rem] leading-7 text-muted">
            {result === 'sent' ? (
              sentText
            ) : (
              <>
                We've prepared your message. Just press send in your email app. If nothing opened, please email{' '}
                <a href={`mailto:${email}`} className="font-semibold text-plum-700 underline">
                  {email}
                </a>
                .
              </>
            )}
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-4 text-[0.9rem] font-semibold text-plum-700 underline-offset-4 hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    </div>
  )
}
