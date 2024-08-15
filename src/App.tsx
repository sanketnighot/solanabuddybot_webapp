import React, { useEffect } from "react"

const App: React.FC = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready()
    // You can add more initialization logic here
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Telegram Web App</h1>
      <p className="text-lg">
        This is a basic setup for your Telegram mini app.
      </p>
    </div>
  )
}

export default App
