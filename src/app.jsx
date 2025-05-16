import { useState, useEffect } from "react"
import Confetti from "react-confetti"
import { motion } from "framer-motion"

export default function App() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [audio, setAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const newAudio = new Audio("/glue-song.mp3")
    newAudio.loop = true
    newAudio.volume = 0.5
    setAudio(newAudio)
  }, [])

  const toggleMusic = () => {
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 text-center p-4">
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}
      <img
        src="/logo.jpeg"
        alt="TeenIndia Logo"
        className="mx-auto w-40 rounded-full shadow-xl"
      />
      <h1 className="text-4xl mt-4 font-bold">TeenIndia Wrapped: 200k kids 1 braincell</h1>
      <button
        onClick={toggleMusic}
        className="mt-4 px-4 py-2 bg-pink-400 rounded text-white font-semibold"
      >
        {isPlaying ? "🔇 mute glue song" : "🔊 play glue song"}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 grid gap-4 md:grid-cols-3"
      >
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold">Top Commenter</h2>
          <p>u/Low-Principle-1539</p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold">Top Lurker</h2>
          <p>The Watcher 👀</p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold">Karma Farmer</h2>
          <p>u/veryorignalguy</p>
        </div>
      </motion.div>

      <p className="mt-10 text-sm text-gray-700">more chaos coming soon...</p>
    </div>
  )
}
