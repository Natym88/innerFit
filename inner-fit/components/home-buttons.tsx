"use client"
import './components-styles.css';
import React, { ReactNode } from 'react'
import { PopupContentType } from '@/models/popup-content';
import Link from 'next/dist/client/link';


interface Props {
    shape: "square" | "circle" | "diamond",
    children: ReactNode,
    param: PopupContentType
}
const HomeButtons = ({shape, children, param}: Props) => {
  return (
    <Link href={`/step2?type=${param}`}><div className={`bg-semi-transparent sketch ${shape} m-5 flex justify-center items-center p-3 text-center`}><div>{children}</div></div></Link>
  )
}

export default HomeButtons