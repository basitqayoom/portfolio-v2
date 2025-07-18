"use client"
import { useState } from "react"
import { Phone, Mail, Github, Code2, Linkedin, Download, ChevronUp } from "lucide-react"

const actions = [
    {
        icon: <Phone className="w-5 h-5 text-gray-900" />, // Call
        label: "Call",
        href: "tel:+919682132612",
        color: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
        icon: <Mail className="w-5 h-5 text-gray-900" />, // Email
        label: "Email",
        href: "mailto:basitqayoomchowdhary@gmail.com",
        color: "bg-blue-700 hover:bg-blue-800 text-white",
    },
    {
        icon: <Github className="w-5 h-5 text-gray-900" />, // GitHub
        label: "GitHub",
        href: "https://github.com/basitqayoom",
        color: "bg-gray-900 hover:bg-gray-800 text-white",
    },
    {
        icon: <Code2 className="w-5 h-5 text-gray-900" />, // LeetCode
        label: "LeetCode",
        href: "https://leetcode.com/u/basitqayoomchowdhary/",
        color: "bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold",
    },
    {
        icon: <Linkedin className="w-5 h-5 text-gray-900" />, // LinkedIn
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/bqc/",
        color: "bg-blue-900 hover:bg-blue-700 text-white",
    },
    {
        icon: <Download className="w-5 h-5 text-gray-900" />, // Download CV
        label: "Download CV",
        href: "https://docs.google.com/document/d/1IFvyvIEd3dTraXOMphkI0wwZx_9W7ZYoud5vV6szSTs/edit?usp=sharing",
        color: "bg-white hover:bg-gray-200 text-gray-900 border border-gray-300 font-semibold",
    },
]

export default function SpeedDial() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col items-end gap-2">
            <div
                className={`flex flex-col items-end gap-3 mb-2 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                aria-hidden={!open}
            >
                {actions.map((action) => (
                    <a
                        key={action.label}
                        href={action.href}
                        target={action.href.startsWith('http') ? '_blank' : undefined}
                        rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex items-center gap-3 px-4 py-2 rounded-2xl font-semibold text-base transition-all duration-300 overflow-hidden w-48 backdrop-blur-md bg-white/30 shadow-2xl border border-white/40 hover:scale-105 active:scale-100 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] ${action.color}`}
                        title={action.label}
                        tabIndex={open ? 0 : -1}
                        style={{ boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)', minWidth: '2.5rem', maxWidth: '12rem', WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)', background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(245,245,255,0.18) 100%)' }}
                    >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full shadow-inner mr-2">
                            {action.icon}
                        </span>
                        <span
                            className="whitespace-nowrap sm:inline-block opacity-100 max-w-xs font-medium text-gray-900 drop-shadow"
                            style={{ transitionProperty: 'none', maxWidth: '8rem' }}
                        >
                            {action.label}
                        </span>
                    </a>
                ))}
            </div>
            <button
                aria-label={open ? "Close Speed Dial" : "Open Speed Dial"}
                onClick={() => setOpen((v) => !v)}
                className="bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center outline-none ring-0 focus:ring-0"
                style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
            >
                <ChevronUp className={`w-6 h-6 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
        </div>
    )
}
