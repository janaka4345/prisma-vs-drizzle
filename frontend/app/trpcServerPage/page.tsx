import { serverClient } from "../../utils/serverClientTrpc"


export default async function page() {
    const data=await serverClient.getList()
  return (
    <div>{JSON.stringify(data,null,2)}</div>
  )
}