import { ButtonLink } from '@/components/ui/Button'
import { Seo } from '@/components/ui/PageHero'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section>
        <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <p className="text-8xl font-bold tracking-[-0.05em] text-plum-800 sm:text-9xl">404</p>
          <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">We can’t find that page</h1>
          <p className="mt-4 max-w-md text-lg leading-8 text-muted">
            The page you’re looking for may have moved or no longer exists. Let’s get you back home.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/" arrow>
              Back to home
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
