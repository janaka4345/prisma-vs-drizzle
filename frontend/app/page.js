'use client'
import createBooking from "../serverAction/prismaActions/createBooking"
import createGuest from "../serverAction/prismaActions/createGuest";
import createRoom from "../serverAction/prismaActions/createRoom";
import server from "../serverAction/server";
import Link from "next/link";

export default function Home() {
  async function handleClick() {
    const user = await createGuest()
    console.log({ user });

  }
  async function handleClick2() {
    const user = await createBooking()
    console.log({ user });

  }
  async function handleClick3() {
    const user = await createRoom()
    console.log({ user });

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hi
      <button onClick={() => server()}>click me</button>
      <button onClick={handleClick}>click me to create user</button>
      <button onClick={handleClick2}>click me to create booking</button>
      <button onClick={handleClick3}>click me to create room</button>
      <Link href='testall/test'>test faker</Link>
    </main>
  );
}
