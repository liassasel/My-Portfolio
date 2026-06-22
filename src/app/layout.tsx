import type { Metadata, Viewport } from 'next'
import "./globals.css";
import Providers from "../../components/Providers";
import WhatsAppFloat from "../../components/WhatsAppFloat";

const SITE_URL = "https://liassasel.dev";
const SITE_NAME = "Angel Useche — Backend Developer Portfolio";
const DESCRIPTION =
    "Backend Developer specialized in scalable APIs with TypeScript, NestJS, and PHP. Microservices S2S, MySQL, Prisma ORM, Docker. Open to opportunities.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_NAME,
        template: "%s | Angel Useche",
    },
    description: DESCRIPTION,
    keywords: [
        "Backend Developer",
        "TypeScript",
        "NestJS",
        "Node.js",
        "PHP",
        "MySQL",
        "Prisma ORM",
        "Microservices",
        "Docker",
        "API Developer",
        "Angel Useche",
        "liassasel",
        "Venezuela",
    ],
    authors: [{ name: "Angel Alessandro Useche Infante", url: SITE_URL }],
    creator: "Angel Alessandro Useche Infante",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: SITE_NAME,
        description: DESCRIPTION,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_NAME,
        description: DESCRIPTION,
        creator: "@liassasel",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
    width: "device-width",
    initialScale: 1,
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Angel Alessandro Useche Infante",
    alternateName: "liassasel",
    jobTitle: "Backend Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    email: "mailto:auseche2041@gmail.com",
    telephone: "+58-412-2041596",
    address: {
        "@type": "PostalAddress",
        addressCountry: "VE",
    },
    sameAs: [
        "https://github.com/liassasel",
        "https://www.linkedin.com/in/angel-useche-a0614a22a/",
    ],
    knowsAbout: [
        "TypeScript",
        "NestJS",
        "Node.js",
        "PHP",
        "Python",
        "MySQL",
        "Prisma ORM",
        "Docker",
        "Microservices Architecture",
        "REST APIs",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body>
            <Providers>
                {children}
                <WhatsAppFloat />
            </Providers>
        </body>
        </html>
    );
}
