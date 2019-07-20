import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useOutput(initialState = '') {
  const [text, setText] = useState(initialState)

  const generateText = (value) => {
    setText(value)
  }

  const removeText = () => {
    setText('')
  }

  return {
    text,
    generateText,
    removeText
  }
}

const Output = createContainer(useOutput)

export default Output
