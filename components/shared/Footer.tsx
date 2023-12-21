import Image from "next/image"
import Link from "next/link"
import imgFooter from '@/public/assets/images/logo.svg'

const Footer = () => {
  return (
<footer className="border-t">
<div className="flex-center wrapper flex-between flex-col flex gap-4 p-5 text-center sm:flex-row">
  <Link href={'/'}>
    <Image
    src={imgFooter}
    width={128}
    height={38}
    alt="logo"
    />
  </Link>
</div>
</footer>
  )
}

export default Footer
