import { NextResponse } from 'next/server'

const foods = ['apple', 'banana', 'cabbage', 'beetroot']

export async function GET(req: Request, res: Response) {
    console.log('food route fired')
    console.log(req.url)

    await new Promise((resolve) => setTimeout(resolve, 5000))
    return NextResponse.json(foods)
}
export async function POST(req: Request, res: Response) {
    console.log('food route fired')
    console.log(req.url)

    await new Promise((resolve) => setTimeout(resolve, 5000))
    return NextResponse.json(foods)
}
