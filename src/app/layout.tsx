import './global.css';

import { Metadata } from "next";
import { ReactNode } from "react";
import { RootLayoutProviders } from "./providers";
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Inter, Kaisei_Tokumin } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

const kaisei = Kaisei_Tokumin({
    subsets: ['latin'],
    weight: '800',
    variable: '--font-kaisei',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Al Joseph Condino - Developer and Writer',
    description: 'Personal blog by Al Joseph Condino',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        title: 'aljoseph.co',
        type: 'website',
        siteName: 'Al Joseph Condino',
        description: 'Personal blog by Al Joseph Condino'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@condino_aj',
        title: 'aljoseph.co',
        description: 'Personal blog by Al Joseph Condino',
    }
}

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <head>
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={clsx(inter.variable, kaisei.variable)}>
                <RootLayoutProviders>
                    <Container>
                        <Header />
                        {children}
                    </Container>
                </RootLayoutProviders>
            </body>
        </html>
    )
}