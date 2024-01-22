import "./App.css"
import RPGame from "./RPGame"
import Message from "./Message"
import Focusable from "./Focusable"
import { useState } from "react"
import Todo from "./Todo"
import Username from "./Username"
function App() {
  const [activeTab, setActiveTab] = useState("")
  const items = [
    { text: "Buy grocery", done: true },
    { text: "Play guitar", done: false },
    { text: "Romantic dinner", done: false },
  ]

  return (
    <>
      <h1 className="title">TestDome</h1>

      <a
        onClick={(e) => {
          e.preventDefault()
          setActiveTab("character")
        }}
      >
        RPG Game
      </a>

      <a
        onClick={(e) => {
          e.preventDefault()
          setActiveTab("message")
        }}
      >
        Message
      </a>

      <a
        onClick={(e) => {
          e.preventDefault()
          setActiveTab("focus")
        }}
      >
        Focusable
      </a>

      <a
        onClick={(e) => {
          e.preventDefault()
          setActiveTab("todo")
        }}
      >
        Todo-list
      </a>

      <a
        onClick={(e) => {
          e.preventDefault()
          setActiveTab("user")
        }}
      >
        Username
      </a>

      {activeTab === "character" && <RPGame totalPoints={15} />}

      {activeTab === "message" && <Message />}
      {activeTab === "focus" && <Focusable shouldFocus={true} />}
      {activeTab === "todo" && <Todo items={items} />}
      {activeTab === "user" && <Username />}
    </>
  )
}

export default App
