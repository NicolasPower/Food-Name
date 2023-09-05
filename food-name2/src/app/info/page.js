'use client'

// Inside the page you want to disable SSR.



import Name from '../componets/nameComponet'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

// function nameInfo(){
//   const[nameData, setNameData] = useState(null);
//   var firstName = sessionStorage.getItem('firstName')
//   var lastName = sessionStorage.getItem('lastName')

//   //useEffect(() => {
//     fetch('https://v2.namsor.com/NamSorAPIv2/api2/json/origin/'+firstName+'/'+lastName, {
//       method: 'GET',
//       headers: {'X-API-KEY': '2332cfd4e8ddf0ebfe675cee251d65e9'}
//     })
//     .then(response => response.json)
//     .then(json => setNameData(json))
//     .catch(err => console.error(err))
//   //}, []);

//   sessionStorage.setItem('name', firstName + " " + lastName)
//   sessionStorage.setItem('nameData', nameData)
// }


export default function Home() {
  const router = useRouter()  
  //nameInfo();
  return (
      <htnml>
          <head>

          </head>
          <body className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
        
            
            <div className="p-1">
              <div //name box 
                className="flex items-center justify-center bg-gray-500rounded content-center">

                <Name/>
                
                <button 
                  type='button'//Button
                  className='bg-emerald-800 border-gray-600 placeholder-gray-400 text-white focus:bg-emerald-500 focus:font-bold border text-sm basis-2/6 w-2/6 p-2.5'
                  onClick={() => router.push('/')}>
                  Back
                </button>
              </div>
            </div>

            <div
            className=" p-1">
              <div //Name info
              className="bg-blue-800 flex items-center justify-center rounded content-center">
                <p className="p-1">NAME INFO</p>
              </div>
            </div>
            
            <div className="p-1">
              <div //Music Info
                className="bg-emerald-600 flex items-center justify-center rounded content-center">
                  <p className="p-1">
                    Song Recc
                  </p>
              </div>
            </div>

            <div className="p-1">
              <div //Food Info
              className="bg-orange-500 flex items-center justify-center rounded content-center">
                <p className="p-1">
                  FOOD
                </p>
              </div>
            </div>
          
          </body>
      </htnml>
      
    )
  }
  