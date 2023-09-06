import { useState, useCallback } from 'react'

export default function useInput() {
  const [state, setState] = useState('')

  const handleChange = useCallback(
    (text) => {
      setState(text)
    },
    [setState]
  )

  return {
    state,
    handleChange,
  }
}
