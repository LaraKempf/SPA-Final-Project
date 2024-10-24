import { useEffect, useState } from "react"

export const RandomQuote = () => {
    const [quote, setQuote] = useState({})
    const url = 'https://inspo-quotes-api.herokuapp.com/quotes/random'
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const randomQuote = data.quote
            if (!randomQuote) {
                console.log('try fetch again')
                return
            };
            setQuote(randomQuote)
            sessionStorage.setItem('savedQuote', JSON.stringify(randomQuote))
            console.log(randomQuote)
        }
        catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        const savedQuote = sessionStorage.getItem('savedQuote');

        if (savedQuote) {

            setQuote(JSON.parse(savedQuote));
        } else {

            fetchData();
        }
    }, []);
    return (<>
        <div className="greeting-quote">
            <h1>{quote.text}</h1>

            <h3>{quote.author}</h3>
        </div>
    </>

    )
}