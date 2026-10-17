import { cn } from '@/lib/cn'

/**
 * A photo frame that stays a plain grey box until a real photo is supplied.
 * To add the photo, put the file in public/images and pass it as `src`,
 * e.g. src={img('bridgeway-exterior')}. The `label` names the photo that belongs there.
 */
export function PhotoSlot({
  src,
  alt,
  label,
  className,
  priority,
}: {
  src?: string
  alt: string
  label: string
  className?: string
  priority?: boolean
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className={cn('object-cover', className)}
      />
    )
  }
  return (
    <div aria-hidden className={cn('flex items-center justify-center bg-neutral-200 p-4 text-center', className)}>
      <span className="text-[0.85rem] font-medium text-muted">{label}</span>
    </div>
  )
}
