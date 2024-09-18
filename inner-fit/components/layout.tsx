import React, { ReactNode } from 'react'

interface Props {
    title: string,
    children: ReactNode
}

const Layout = ({ title, children }: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <div className='flex flex-center'>{children}</div>
    </div>
  )
}

export default Layout