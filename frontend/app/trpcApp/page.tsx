'use client'

import { trpc } from '../../utils/trpc'

export default function page() {
    const list = trpc.getList.useQuery()
    return (
        <div>
            <pre>{JSON.stringify(list, null, 2)}</pre>
        </div>
    )
}
