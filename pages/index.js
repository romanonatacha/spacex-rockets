import React from 'react'
import 'isomorphic-fetch'

const Home = ({ data }) => (
    <div>
       Hello
    </div>
)

Home.getInitialProps = async () => {
    const res = await fetch('https://api.spacexdata.com/v2/launches')
    const data = await res.json()

    console.log(data)

    return { data }
    
}

export default Home