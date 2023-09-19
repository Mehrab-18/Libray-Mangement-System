import React from 'react'
import Link from "next/link";
import { NavLinkProps } from '@/types';


const CustomLink = ({url, title, customStyles}:NavLinkProps) => {
  return (
    <Link href={url} className={`text-black hover:underline ${customStyles}`}>
      {title}
    </Link>
  )
}

export default CustomLink
