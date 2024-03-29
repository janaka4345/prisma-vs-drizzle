export default async function Data() {
    console.log('started component')

    const response = await fetch('http://localhost:3000/api/food')
    const fetchedData = await response.json()
    console.log('ended component')

    return (
        <div>
            {JSON.stringify(fetchedData, null, 2)}
            <button
                onClick={async () => {
                    const response = await fetch(
                        'http://localhost:3000/api/food'
                    )
                    const fetchedData = await response.json()
                    console.log(fetchedData)
                }}
            >
                click
            </button>
        </div>
    )
}
