import { PrismaClient } from '@prisma/client'
console.log('prisma client created');


declare global {
    var db: PrismaClient | undefined
}

const db = globalThis.db || new PrismaClient()
export default db
if (process.env.NODE_ENV !== 'production') globalThis.db = db