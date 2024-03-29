import FoodList from '../../components/customComponents/FoodList'

export default async function page() {
    const response = await fetch('http://localhost:3000/api/food', {
        cache: 'no-cache',
    })
    const data = await response.json()
    return (
        <div>
            <h1>page</h1>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <FoodList food={data} />
        </div>
    )
}
