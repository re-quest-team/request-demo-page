import clsx from 'clsx'

type FeatureCardProps = {
  title: string
  color: string
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  children: React.ReactElement
  umamiTag?: string
}

const FeatureCard = ({
  title,
  color,
  icon,
  children,
  umamiTag,
}: FeatureCardProps) => {
  const Icon = icon

  return (
    <div
      className={`px-8 py-4 md:basis-1/2 lg:basis-1/3 xl:px-16 xl:py-8 umami--click--${umamiTag}`}
    >
      <div className="cursor-pointer rounded-lg bg-zinc-800 p-8 shadow-lg hover:bg-zinc-700 hover:shadow-2xl">
        <div className="mb-4 flex w-full items-center justify-between">
          <span className="text-lg font-semibold">{title}</span>
          <span className={clsx('ml-2 rounded-full p-2', color)}>
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default FeatureCard
