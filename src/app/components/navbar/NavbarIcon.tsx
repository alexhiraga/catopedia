import Link from "next/link";
import { ReactNode } from "react";

interface NavbarIconProps {
  children: ReactNode
  href: string
}

export default function NavbarIcon({ children, href }: NavbarIconProps) {
  return (
    <Link href={href} className="flex items-center gap-2 m-auto xl:ml-0 hover:brightness-200 transition-all">
      {children}
    </Link>
  )
}