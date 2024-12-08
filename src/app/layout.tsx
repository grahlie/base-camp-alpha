import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import {
    ClerkProvider,
    SignedIn,
} from '@clerk/nextjs';
import { CSPostHogProvider } from './_analytics/provider';
import Navigation from "./_components/navigation";

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
                <html lang="en" className={`${GeistSans.variable}`}>
                    <body>
                        <SignedIn>
                            <Navigation />
                        </SignedIn>
                        {children}
                    </body>
                </html>
            </CSPostHogProvider>
        </ClerkProvider>
    )
}
