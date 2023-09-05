'use client'

// Inside the page you want to disable SSR.



import Name from '../componets/nameComponet'
import NameInfo from '../componets/nameInfoComponet';

import { useRouter } from 'next/navigation'
import { useState } from 'react';


export default function Home() {
  const router = useRouter()  
  return (
          
           <Name/>
        
    )
  }
  