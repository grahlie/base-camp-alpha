import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';
import { CSPostHogProvider } from './_analytics/provider';

export const metadata: Metadata = {
  title: "Base Camp Alpha",
  description: "Grahlie AB - Base Camp Alpha",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <CSPostHogProvider>
                <html lang="en" className={`${GeistSans.variable} bg-gray-50 dark:bg-gray-900`}>
                    <body>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        {children}
                    </body>
                </html>
            </CSPostHogProvider>
        </ClerkProvider>
    )
}
