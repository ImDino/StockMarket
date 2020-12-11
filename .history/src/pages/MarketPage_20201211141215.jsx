import React, { useEffect , useState } from 'react'

export default function MarketPage() {

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        let url = 'https://market-data-collector.firebaseio.com/market-collector/markets.json'
        fetch(url)
        .then(res => res.json())
        .then(data => {setInfo(data)})
    }, [])

    return (
        <div>
            Market Page
            {info && Object.entries(info).map(market => {
                const key = market[0]
                const value = market[1]
                return <p key={key}>value</p>
            })}
        </div>
    )
}