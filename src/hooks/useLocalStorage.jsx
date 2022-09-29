import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (newValue) => {
    try {
      setStoredValue(newValue)
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
