type FooterProps = {
    t: {
    copyright: string
    }
}

export default function Footer({ t }: FooterProps) {
    return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} liassasel Developer. {t.copyright}</p>
        </div>
    </footer>
    )
}