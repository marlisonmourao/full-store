import Image, { ImageProps } from 'next/image'

const PromoBanner = ({ alt, ...rest }: ImageProps) => {
  return (
    <Image
      width={0}
      height={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
      {...rest}
    />
  )
}

export default PromoBanner
