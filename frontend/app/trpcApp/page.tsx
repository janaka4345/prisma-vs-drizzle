'use client'

import { trpc } from '../../utils/trpc'

export default function page() {
    const list = trpc.getList.useQuery()
    const guests = trpc.guestControllerRouter.getAllGuests.useQuery()
    const guest = trpc.guestControllerRouter.getAGuestById.useQuery(
        '8c2a099a-4091-4951-8667-8e036e2b6748'
    )
    const createGuest = trpc.guestControllerRouter.createAGuest.useMutation()
    return (
        <div>
            <pre>{JSON.stringify(list, null, 2)}</pre>
            <pre>{JSON.stringify(guests, null, 2)}</pre>
            <pre>{JSON.stringify(guest, null, 2)}</pre>
            <br />
            <br />
            <button
                onClick={() => {
                    createGuest.mutate({
                        first_name: 'fgdgfg dgssf',
                        last_name: 'string',
                        email: 'string.ghf@er.com',
                        phone_no: 'fgfdgfdg',
                    })
                }}
            >
                click
            </button>
            <pre>{JSON.stringify(createGuest, null, 2)}</pre>
        </div>
    )
}
