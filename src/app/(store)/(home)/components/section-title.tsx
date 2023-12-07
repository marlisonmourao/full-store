import { ComponentProps } from 'react'

const SectionTitle = ({ children, ...rest }: ComponentProps<'p'>) => {
  return (
    <p className="mb-2 pl-5 font-bold font-semibold uppercase" {...rest}>
      {children}
    </p>
  )
}

export { SectionTitle }
