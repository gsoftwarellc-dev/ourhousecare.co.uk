import { values } from '@/data/content'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'

export function ValuesGrid() {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((v, i) => (
        <StaggerItem
          key={v.title}
          as="article"
          className="rounded-3xl border border-line bg-white p-7 sm:p-8"
        >
          <span className="text-sm font-semibold tabular-nums text-plum-700">0{i + 1}</span>
          <h3 className="mt-3 text-xl font-semibold">{v.title}</h3>
          <p className="mt-3 text-[0.97rem] leading-7 text-ink-soft">{v.text}</p>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
