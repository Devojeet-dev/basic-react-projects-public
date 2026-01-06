import { useState, useEffect } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(true)
  const [password, setPassword] = useState("")

  useEffect(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) chars += "0123456789"
    if (characterAllowed) chars += "!@#$%^&*()_+-={}[]|:;<>,.?/"

    let result = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      result += chars[randomIndex]
    }

    setPassword(result)
  }, [length, numberAllowed, characterAllowed])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-xl px-6 py-4 w-105 shadow-lg">

        <div className="flex items-center bg-white rounded-lg overflow-hidden mb-4">
          <input

            type="text"
            value={password}
            readOnly
            className="flex-1 px-3 py-2 text-orange-500 font-semibold outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            copy
          </button>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <input onChange={(e) => { setLength(Number(e.target.value)) }} type="range" min="4" max="32" className="flex-1 accent-blue-500" />
          <span className="text-orange-400 text-sm font-medium">
            Length ({length})
          </span>
        </div>

        <div className="flex gap-6 text-orange-400 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={(e) => { setNumberAllowed(e.target.checked) }} type="checkbox" className="accent-blue-500" />
            Numbers
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input onChange={(e) => { setCharacterAllowed(e.target.checked) }} defaultChecked type="checkbox" className="accent-blue-500" />
            Characters
          </label>
        </div>
      </div>
    </div>
  )
}

export default App
