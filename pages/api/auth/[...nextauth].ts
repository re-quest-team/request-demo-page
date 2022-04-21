import NextAuth from 'next-auth'
import CognitoProvider from 'next-auth/providers/cognito'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID || '',
      clientSecret: process.env.COGNITO_CLIENT_SECRET || '',
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  theme: {
    logo: require('@/assets/logos/request-logo.svg').default.src,
    colorScheme: 'dark',
    brandColor: '#EB5C37',
  },
})
