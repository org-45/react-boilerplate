import { useState, useEffect } from 'react'

function HeroSection() {
  const [backgroundGradient, setBackgroundGradient] = useState(
    getRandomGradient()
  )

  function getRandomGradient() {
    const color1 = getRandomColor()
    const color2 = getRandomColor()
    return `linear-gradient(45deg, ${color1}, ${color2})`
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundGradient(getRandomGradient())
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      style={{ background: backgroundGradient }}
      className="bg-cover bg-center h-screen relative"
    >
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Your Title Goes Here</h1>
        <div className="text-lg mb-6">
          <p>
            Write something about your project, app, or anything you want to
            showcase.
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-black text-white py-2 px-4 rounded-md flex items-center">
            <span className="mr-2">Button 1</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-md flex items-center">
            <span className="mr-2">Button 2</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
