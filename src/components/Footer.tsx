import UnderlineCenterText from "@/fancy/components/text/underline-center"

const socialLinks = [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", url: "https://twitter.com/yourusername" },
]

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <UnderlineCenterText
                            label="Portfolio"
                            className="text-xl font-bold text-primary"
                        />
                    </div>
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <UnderlineCenterText label={link.name} />
                            </a>
                        ))}
                    </div>
                    <div className="text-center md:text-right text-muted-foreground">
                        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 