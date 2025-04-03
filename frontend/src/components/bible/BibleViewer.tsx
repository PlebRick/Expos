import React, { useEffect, useState } from 'react'
import bibleData from '../../data/web_bible_structured.json'

type VerseMap = { [verseNumber: string]: string }
type Chapter = { heading: string; verses: VerseMap }
type Book = { [chapterNumber: string]: Chapter }
type Bible = { [bookName: string]: Book }

const BibleViewer = () => {
  const [book, setBook] = useState<string>('Genesis')
  const [chapter, setChapter] = useState<string>('1')
  const [data, setData] = useState<Bible>({} as Bible)

  useEffect(() => {
    setData(bibleData as Bible)
  }, [])

  const currentChapter = data?.[book]?.[chapter]

  return (
    <div className="bible-viewer p-4 overflow-y-scroll h-screen w-full border-l">
      <h1 className="text-2xl font-bold">{book} {chapter}</h1>
      {currentChapter?.heading && (
        <h2 className="text-lg font-semibold mt-2 mb-4 italic text-gray-600">
          {currentChapter.heading}
        </h2>
      )}
      {currentChapter?.verses &&
        Object.entries(currentChapter.verses).map(([verseNum, text]) => (
          <p key={verseNum} className="mb-2">
            <span className="text-sm font-bold text-gray-500 mr-1">{verseNum}</span>
            {text}
          </p>
        ))}
    </div>
  )
}

export default BibleViewer
