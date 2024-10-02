import React, { useEffect, useState } from 'react'

export default function Ex101QuoteFetcher() {

    const [quote, setQuote] = useState('');

    useEffect(getMeTheQuote, []);

    function getMeTheQuote() {
        console.log('Fetching a quote...');
        fetch('https://api.quotable.io/random') 
            .then(response => response.json()) 
            .then(data => { 
                // your data is ready to use at data.content, do something with it 
                console.log(data.content);
                setQuote(data.content);
            }); 
    }

    return (
        <div>
            <h1>Ex 10.1 Quote Fetcher</h1>
            <div>
                Here is the quote: <i>{ quote }</i>
            </div>
        </div>
    )
}
