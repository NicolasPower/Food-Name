'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
      <p //Title
      className=' 
      font-bold 
      text-4xl
      p-10'>
        Musical Foods - Name edition
      </p>
      <div className='
        flex
        flex-row
        justify-betweem
        w-2/5'>
        <input //Name Input Box
        type="text" 
        id="first_name" 
        className="
        bg-gray-700 
        border-gray-600 
        placeholder-gray-400 
        text-white 
        border 
        text-sm 
        basis-3/6
        w-3/6
        p-2.5" 
          
        placeholder="Name" 
        required>
        </input>
        <button 
        type='button'//Button
        className='
          bg-emerald-800 
          border-gray-600 
          placeholder-gray-400 
          text-white 
          focus:bg-emerald-500
          focus:font-bold
          border 
          text-sm 
          basis-2/6
          w-2/6
          p-2.5'
          onClick={() => router.push('/pages')}>
          Yum Time
        </button>
      </div>
      
    </main>
  )
}
