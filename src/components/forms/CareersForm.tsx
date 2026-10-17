import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router'
import { ConsentField, FormStatus, SelectField, SubmitButton, TextAreaField, TextField } from './Fields'
import { phonePattern, useSubmit } from './useSubmit'

export const careerRoles = [
  'Residential Support Worker',
  'Senior Residential Support Worker',
  'Deputy Manager',
  'Bank Residential Support Worker',
  'Other / general interest',
]

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().regex(phonePattern, 'Please enter a valid phone number'),
  role: z.string().min(1, 'Please choose a role'),
  experience: z.string().min(1, 'Please choose your experience'),
  qualification: z.string().min(1, 'Please choose an option'),
  availability: z.string(),
  message: z.string().trim(),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please confirm before sending' }) }),
})

type Values = z.infer<typeof schema>

const labels: Record<keyof Values, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  role: 'Role of interest',
  experience: 'Experience with children & young people',
  qualification: 'Level 3 Diploma (Residential Childcare)',
  availability: 'Availability',
  message: 'About you',
  consent: 'Agreed to privacy notice',
}

export function CareersForm() {
  const { result, error, submit, reset: resetStatus } = useSubmit('Careers: expression of interest', labels)
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
        sentTitle="Thank you for your interest in joining us"
        sentText="Our recruitment team will review your details and be in touch about current and upcoming opportunities."
        onReset={() => {
          reset()
          resetStatus()
        }}
      />
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit((values) => submit(values))} className="grid gap-5 sm:grid-cols-2">
      <TextField
        label="Full name"
        required
        autoComplete="name"
        className="sm:col-span-2"
        error={errors.name?.message}
        {...register('name')}
      />
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
        required
        autoComplete="tel"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <SelectField label="Role you're interested in" required options={careerRoles} error={errors.role?.message} {...register('role')} />
      <SelectField
        label="Experience with children & young people"
        required
        options={['No experience yet', 'Less than 1 year', '1 to 3 years', '3 to 5 years', 'More than 5 years']}
        error={errors.experience?.message}
        {...register('experience')}
      />
      <SelectField
        label="Level 3 Diploma (Residential Childcare)"
        required
        options={['Yes, completed', 'Currently working towards it', 'Not yet']}
        error={errors.qualification?.message}
        {...register('qualification')}
      />
      <SelectField
        label="Availability"
        options={['Full-time', 'Part-time', 'Bank / flexible']}
        error={errors.availability?.message}
        {...register('availability')}
      />
      <TextAreaField
        label="Tell us a little about yourself"
        rows={5}
        className="sm:col-span-2"
        placeholder="What draws you to working with children and young people?"
        error={errors.message?.message}
        {...register('message')}
      />
      <div className="sm:col-span-2">
        <ConsentField error={errors.consent?.message} {...register('consent')}>
          I agree to Our House Care Group storing these details to contact me about vacancies, as described in the{' '}
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
        <SubmitButton loading={isSubmitting}>Register my interest</SubmitButton>
      </div>
    </form>
  )
}
