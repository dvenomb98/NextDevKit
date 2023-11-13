import React, { FC } from 'react'
import Logo from './Logo'

const Footer: FC = () => {
  return (
    <footer className='border-t'>
        <div className='layout-container flex items-center  justify-center py-10'>
            <Logo />
        </div>

    </footer>
  )
}

export default Footer