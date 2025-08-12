import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH_CONFIG = {

    providers: [
        CredentialsProvider({
            name: 'Credential',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },

            },
            async authorize(credentials: any) {
                return {
                    id: "123",
                    name: "sangam",
                    userId: "12343",
                    email: "sangam@gmail.com"
                };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        })


    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id || user.userId;;
            }
            return token;
        },
        session: ({ session, token }: any) => {
            if (session.user) {
                session.user.id = token.uid;
            }
            return session;
        }
    }

};
