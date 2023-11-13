import React, { FC } from 'react'
import Logo from './Logo'
import { APP_VERSION } from '@/lib/config'

const Footer: FC = () => {
  return (
    <footer className='border-t'>
        <div className='layout-container flex flex-col gap-5 items-center  justify-center py-10'>
            <Logo />
            <p>App version {APP_VERSION}</p>
        </div>

    </footer>
  )
}

export default Footer