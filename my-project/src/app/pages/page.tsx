
import Link from 'next/link';
export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
        
        <div
        className="
        p-1">
          <div //name box 
          className="
          flex items-center justify-center
          bg-gray-500
          rounded
          content-center">
            <p className="p-1">FIRSTNAME LASTNAME</p>
          </div>
        </div>

        <div
        className=" p-1">
          <div //Name info
          className="
          bg-blue-800
          flex items-center justify-center
          rounded
          content-center">
            <p className="p-1">NAME INFO</p>
          </div>
        </div>
        
        <div className="p-1">
          <div //Music Info
            className="
            bg-emerald-600
            flex items-center justify-center
            rounded
            content-center">
              <p className="p-1">Song Recc</p>
          </div>
        </div>

        

        <div className="p-1">
          <div //Food Info
          className="
          bg-orange-500
          flex items-center justify-center
          rounded
          content-center">
            <p className="p-1">FOOD</p>
          </div>
        </div>
        
        
      </main>
    )
  }
  