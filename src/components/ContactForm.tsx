"use client"

import UnderlineCenterText from "@/fancy/components/text/underline-center"

export function ContactForm() {
    return (
        <form className="space-y-6 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name" className="block mb-2">
                    <UnderlineCenterText label="Name" className="text-accent-foreground" />
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2">
                    <UnderlineCenterText label="Email" className="text-accent-foreground" />
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="block mb-2">
                    <UnderlineCenterText label="Message" className="text-accent-foreground" />
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your message..."
                />
            </div>
            <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
                Send Message
            </button>
        </form>
    )
} 