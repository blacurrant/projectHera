import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-[100vh]'> 
      <Hero/>
    </div>
  )
}

