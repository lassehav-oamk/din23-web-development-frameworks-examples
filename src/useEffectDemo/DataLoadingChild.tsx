import { useEffect, useState } from 'react'

export default function DataLoadingChild() {

  const [quote, setQuote] = useState<string>('');

  useEffect(() => {

    // Notice that with async/await, you have to write a function inside useEffect    
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/quotes');
      const json = await response.json();
      const quotes = json.quotes.map((item) => item.quote);

      // get random quote
      const quoteCount = quotes.length;
      const randomIndex = Math.floor(Math.random() * quoteCount);
      setQuote(quotes[randomIndex]); 
    }

    fetchData();
  }, [])

  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>This is a child component which loads data with useEffect on mount</h1>
      <div>Random Quote</div>
      { quote.length != 0 && 
        <div style={{ margin: '20px', backgroundColor: 'blue', padding: '20px', color: 'white', fontSize: '20px', fontWeight: '700'}}>{quote}</div>
      }

    </div>
  )
}
