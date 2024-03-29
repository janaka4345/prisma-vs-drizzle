'use client'
import { Suspense, useEffect, useState } from 'react'
import Data from '../../components/customComponents/Data'

export default function page() {
    // const [food, setFood] = useState(['initial'])
    // const fetchdata = async () => {
    //     console.log('strted')
    //     const response = await fetch('http://localhost:3000/api/food')
    //     const fetchedData = await response.json()
    //     setFood(fetchedData)
    //     console.log('ended')
    // }

    // useEffect(() => {
    //     fetchdata()
    // }, [])

    return (
        <div>
            <h1>page</h1>
            {/* <button onClick={() => fetchdata()}>click</button> */}
            {/* <Suspense fallback={<h1>loading....</h1>}>
                <pre>{food}</pre>
            </Suspense> */}
            <Suspense fallback={<h1>loading....</h1>}>
                <Data />
            </Suspense>
        </div>
    )
}
