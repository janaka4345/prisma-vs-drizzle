import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma || new PrismaClient()
export default prisma
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
///////////////
// import { PrismaClient } from '@prisma/client'

// declare global {
//     var prisma: PrismaClient | undefined
// }
// // Create a function to access the Prisma client in a type-safe manner:
// export default function prisma() {
//     if (process.env.NODE_ENV === 'production') {
//         // Ensure Prisma is initialized in production:
//         if (!global.prisma) {
//             throw new Error('Prisma client is not initialized in production')
//         }
//     } else {
//         // Use a type assertion for clarity in development:
//         globalThis.prisma = globalThis.prisma || new PrismaClient()
//     }

//     return globalThis.prisma
// }
