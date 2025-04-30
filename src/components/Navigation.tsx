import UnderlineCenterText from "@/fancy/components/text/underline-center"

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
]

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-primary font-bold text-xl">
                        Portfolio
                    </a>
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="relative group">
                                    <UnderlineCenterText
                                        label={item.label}
                                        className="text-primary-foreground hover:text-primary transition-colors"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
} 