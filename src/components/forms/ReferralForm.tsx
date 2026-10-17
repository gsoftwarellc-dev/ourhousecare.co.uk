import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router'
import { site } from '@/config/site'
import { ConsentField, FormStatus, SelectField, SubmitButton, TextAreaField, TextField } from './Fields'
import { phonePattern, useSubmit } from './useSubmit'

const ages = Array.from({ length: 11 }, (_, i) => `${i + 8} years`)

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  role: z.string().trim().min(2, 'Please enter your role or job title'),
  organisation: z.string().trim().min(2, 'Please enter your local authority or organisation'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().regex(phonePattern, 'Please enter a valid phone number'),
  age: z.string().min(1, 'Please select the young person’s age'),
  gender: z.string(),
  placementType: z.string().min(1, 'Please select a placement type'),
  timescale: z.string().min(1, 'Please select a timescale'),
  needs: z.string().trim().min(20, 'Please give a brief summary of needs (at least 20 characters)'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm before sending' }) }),
})

type Values = z.infer<typeof schema>

const labels: Record<keyof Values, string> = {
  name: 'Referrer name',
  role: 'Role / job title',
  organisation: 'Local authority / organisation',
  email: 'Email',
  phone: 'Phone',
  age: 'Young person’s age',
  gender: 'Gender',
  placementType: 'Placement type',
  timescale: 'Timescale',
  needs: 'Summary of needs',
  consent: 'Confirmed no identifying details & agreed to privacy notice',
}

export function ReferralForm() {
  const { result, error, submit, reset: resetStatus } = useSubmit(
    'Placement referral enquiry',
    labels,
    site.referralsEmail,
  )
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) })

  if (result) {
    return (
      <FormStatus
        result={result}
        error={false}
        email={site.referralsEmail}
        sentTitle="Thank you, your referral enquiry has been received"
        sentText="Our Registered Manager will review the information and contact you to discuss the young person’s needs and arrange secure transfer of referral documents."
        onReset={() => {
          reset()
          resetStatus()
        }}
      />
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit((values) => submit(values))} className="space-y-9">
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
          About you
        </legend>
        <TextField label="Full name" required autoComplete="name" error={errors.name?.message} {...register('name')} />
        <TextField
          label="Role / job title"
          required
          autoComplete="organization-title"
          placeholder="e.g. Social Worker"
          error={errors.role?.message}
          {...register('role')}
        />
        <TextField
          label="Local authority or organisation"
          required
          autoComplete="organization"
          className="sm:col-span-2"
          error={errors.organisation?.message}
          {...register('organisation')}
        />
        <TextField
          label="Work email"
          type="email"
          required
          autoComplete="email"
          error={errors.email?.message}
          {...register('email')}
        />
        <TextField
          label="Phone number"
          type="tel"
          required
          autoComplete="tel"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </fieldset>

      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
          About the placement
        </legend>
        <SelectField label="Young person’s age" required options={ages} error={errors.age?.message} {...register('age')} />
        <SelectField
          label="Gender"
          options={['Female', 'Male', 'Non-binary', 'Prefer to discuss by phone']}
          error={errors.gender?.message}
          {...register('gender')}
        />
        <SelectField
          label="Placement type"
          required
          options={['Planned placement', 'Emergency placement']}
          error={errors.placementType?.message}
          {...register('placementType')}
        />
        <SelectField
          label="Preferred timescale"
          required
          options={['Immediately', 'Within 2 weeks', 'Within a month', '1 to 3 months', 'Flexible']}
          error={errors.timescale?.message}
          {...register('timescale')}
        />
        <TextAreaField
          label="Brief summary of needs"
          required
          rows={6}
          className="sm:col-span-2"
          placeholder="For example: presenting needs, education status, known risks, contact arrangements and what a successful placement would look like."
          hint="Please use initials only. Don't include names, dates of birth or addresses. We'll arrange secure transfer of full referral documents."
          error={errors.needs?.message}
          {...register('needs')}
        />
      </fieldset>

      <div className="flex gap-3 rounded-2xl border border-gold-200 bg-gold-50/70 p-4 text-[0.88rem] leading-6 text-ink-soft">
        <p>
          This form is for initial enquiries only. Every referral is reviewed by the Registered Manager and Responsible
          Individual, followed by a full matching and impact risk assessment before any offer is made.
        </p>
      </div>

      <ConsentField error={errors.consent?.message} {...register('consent')}>
        I confirm this enquiry contains no identifying details about the young person, and I agree to the{' '}
        <Link to="/privacy" className="font-medium text-plum-700 underline underline-offset-2">
          privacy notice
        </Link>
        .
      </ConsentField>

      {error && <FormStatus result={null} error email={site.referralsEmail} onReset={resetStatus} />}

      <SubmitButton loading={isSubmitting}>Send referral enquiry</SubmitButton>
    </form>
  )
}
