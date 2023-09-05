'use client'

import { useRouter } from 'next/navigation'
import { stringify } from 'querystring';
import { useEffect, useState } from 'react';
import { headers } from '../../next.config';
//import { error } from 'console';

export default function Home() {
  const router = useRouter()
  function getData(){
    
    
    let firstName = (document.getElementById("firstName").value);
    let lastName = (document.getElementById("lastName").value);
    sessionStorage.setItem('firstName', firstName)
    sessionStorage.setItem('lastName', lastName)

    if(firstName == '' || lastName == ''){
      alert("enter a name")
    }
    else{
      router.push('/info')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
      
      <p //Title
      className='font-bold text-4xl p-10'>
        Musical Foods - Name edition
      </p>
      
      <div className='flex flex-row justify-around w-2/5'>
        
        <input //Name Input Box
          type="text" 
          id="firstName" 
          className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white border text-sm basis-3/9 w-3/9 p-2.5" 
          placeholder="First Name" 
          required>
        </input>

        <input //Name Input Box
          type="text" 
          id="lastName" 
          className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white border text-sm basis-3/9 w-3/9 p-2.5" 
          placeholder="Last Name" 
          required>
        </input>

        <button 
          type='button'//Button
          className='bg-emerald-800 border-gray-600 placeholder-gray-400 text-white focus:bg-emerald-500 focus:font-bold border text-sm basis-2/9 w-2/9 p-2.5'
          id="button"
          onClick={() => getData()}>
          Yum Time
        </button>
        <script>
          
        </script>

      </div>
      
    </main>
  )
}
