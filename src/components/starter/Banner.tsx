import siteMetada from '@/data/siteMetadata'
import { User2Icon } from 'lucide-react'
import React, { FC } from 'react'
import { Button } from '../ui/Button'

const Banner: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
    <a
      href="https://danielbilek.com"
      target="_blank"
      className="flex items-center border rounded-full px-10 py-2 gap-x-2 "
    >
      <User2Icon className="w-5 h-5 fill-primary" />
      <p>
        Created by <span className="font-bold ">{siteMetada.author}</span>
      </p>
    </a>
    <div className="text-center items-center flex flex-col gap-5">
      <h1 className="text-6xl lg:text-8xl tracking-tighter font-bold bg-gradient-to-br from-foreground via-secondary-foreground/90 to-muted-foreground bg-clip-text text-transparent drop-shadow-sm ">
        The Only Starter
        <br />
        You Will
        <br /> Ever Need
      </h1>
      <p className="h4 text-muted-foreground">
        NextDevKit: The Ultimate NextJS Starter App for Efficient Development
      </p>
      <Button size={'lg'} asChild className="w-fit">
        <a href="https://github.com/dvenomb98/next-app-starter">View on Github</a>
      </Button>
    </div>
  </section>
  )
}

export default Banner