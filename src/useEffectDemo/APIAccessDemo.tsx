import { useState, useEffect } from 'react'
import DataLoadingChild from './DataLoadingChild'

export default function APIAccessDemo() {
  const [data, setData] = useState<string[]>(['No', 'Data', 'Yet'])
  const [childVisible, setChildVisible] = useState<boolean>(false)

  return (
    <div>
      <h1>This is demo for loading data from an API </h1>
      <button onClick={() => {
        fetch('https://dummyjson.com/quotes')
          .then(response => response.json())
          .then(json => setData(json.quotes.map(item => item.quote)))
      }}>Get some Data</button>
      <div>
        {data.map((item: string, index: number) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>


      <div>
        <button onClick={() => setChildVisible(!childVisible)}>Display child component which loads data with useEffect</button>
        {childVisible && <DataLoadingChild />}

      </div>
    </div>
  )
}
