import React, { createContext, useContext, useState } from "react"

interface NewWord {
  word: string
  translation: string
  english: boolean
}

export interface WordsContextProps {
  newWords: NewWord[]
  setNewWords: React.Dispatch<React.SetStateAction<NewWord[]>>
} 

interface WordsContextProviderProps extends WordsContextProps {
  children: React.ReactNode
}

export const WordsContext = createContext<WordsContextProps>({
  newWords: [],
  setNewWords: () => {},
})

export const WordsProvider: React.FC<WordsContextProviderProps> = ({children}) => {
  const [newWords, setNewWords] = useState<NewWord[]>([
    {
      word: 'Rice',
      translation: 'Arroz',
      english: true
    },
    {
      word: 'Walk',
      translation: 'Andar',
      english: true
    },
    {
      word: 'Try',
      translation: 'Tentar',
      english: true
    },
    {
      word: 'Love',
      translation: 'Amar',
      english: true
    },
  ])
  
  return (
    <WordsContext.Provider
      value={{newWords, setNewWords}}
    >
      {children}
    </WordsContext.Provider>
  )
}

export const useWords = () => {
  return useContext(WordsContext)
}