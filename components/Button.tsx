'use client'

export default function Button() {
    const handleClick = () => {
        window.location.href = 'mailto:muhammadfirgan077@gmail.com'
      }
  return (
    <button className=' px-10 py-3 text-lg text-white rounded-full shadow-lg bg-primary hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600' onClick={handleClick}>Hire Me</button>
  )
}
