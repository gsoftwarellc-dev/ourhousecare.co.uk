import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router'
import { ConsentField, FormStatus, SelectField, SubmitButton, TextAreaField, TextField } from './Fields'
import { phonePattern, useSubmit } from './useSubmit'

export const enquiryTypes = [
  'General enquiry',
  'Placement or referral enquiry',
  'Request a copy of the Statement of Purpose',
  'Careers and recruitment',
  'Feedback, concern or complaint',
  'Other',
] as const

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .refine((v) => v === '' || phonePattern.test(v), 'Please enter a valid phone number'),
  organisation: z.string().trim(),
  enquiryType: z.string().min(1, 'Please choose the type of enquiry'),
  message: z.string().trim().min(10, 'Please tell us a little more (at least 10 characters)'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm you agree so we can respond' }) }),
})

type Values = z.infer<typeof schema>

const labels: Record<keyof Values, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  organisation: 'Organisation',
  enquiryType: 'Enquiry type',
  message: 'Message',
  consent: 'Consent to be contacted',
}

export function ContactForm({ defaultEnquiry = '' }: { defaultEnquiry?: (typeof enquiryTypes)[number] | '' }) {
  const { result, error, submit, reset: resetStatus } = useSubmit('Website enquiry', labels)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', phone: '', organisation: '', enquiryType: defaultEnquiry, message: '' },
  })

  if (result) {
    return (
      <FormStatus
        result={result}
        error={false}
        onReset={() => {
          reset()
          resetStatus()
        }}
      />
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit((values) => submit(values))} className="grid gap-5 sm:grid-cols-2">
      <TextField label="Full name" required autoComplete="name" error={errors.name?.message} {...register('name')} />
      <TextField
        label="Email address"
        type="email"
        required
        autoComplete="email"
        error={errors.email?.message}
        {...register('email')}
      />
      <TextField
        label="Phone number"
        type="tel"
        autoComplete="tel"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <TextField
        label="Organisation"
        autoComplete="organization"
        hint="For example, local authority or agency"
        error={errors.organisation?.message}
        {...register('organisation')}
      />
      <SelectField
        label="What is your enquiry about?"
        required
        options={[...enquiryTypes]}
        className="sm:col-span-2"
        error={errors.enquiryType?.message}
        {...register('enquiryType')}
      />
      <TextAreaField
        label="Your message"
        required
        rows={6}
        className="sm:col-span-2"
        hint="Please don't include a child's full name or other identifying details in this form."
        error={errors.message?.message}
        {...register('message')}
      />
      <div className="sm:col-span-2">
        <ConsentField error={errors.consent?.message} {...register('consent')}>
          I agree to Our House Care Group using these details to respond to my enquiry, as described in our{' '}
          <Link to="/privacy" className="font-medium text-plum-700 underline underline-offset-2">
            privacy notice
          </Link>
          .
        </ConsentField>
      </div>
      {error && (
        <div className="sm:col-span-2">
          <FormStatus result={null} error onReset={resetStatus} />
        </div>
      )}
      <div className="sm:col-span-2">
        <SubmitButton loading={isSubmitting}>Send message</SubmitButton>
      </div>
    </form>
  )
}
