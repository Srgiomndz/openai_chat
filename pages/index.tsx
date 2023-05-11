import React, { useRef } from "react"

//Types
interface Conversation {
  role: string
  content: string
}

export default function Home() {

  // States
  const [value, setValue] = React.useState<string>("")
  const [conversation, setConversation] = React.useState<Conversation[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='w-full'>
      <div className='flex flex-col items-center justify-center mt-40 text-center'>
        <h1 className='text-6xl'>Hi there, I am 🤖</h1>
      </div>
    </div>
  )
}