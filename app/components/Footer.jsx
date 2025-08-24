import React from 'react'

function Footer() {
  return (
    <footer className="bg-black py-8 sm:py-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-gray-500 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} LÀFÙN. All rights reserved.</p>
         
        </div>
      </footer>
  )
}

export default Footer