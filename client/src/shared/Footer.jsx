import React from 'react'

const Footer = () => {
  return (
    <div><footer className="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-xl font-serif text-blue-400">Akbor Shanto</span></p>
    </aside>
  </footer></div>
  )
}

export default Footer