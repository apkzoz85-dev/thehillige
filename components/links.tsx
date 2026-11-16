"use client"

import { telLink, waLink } from "@/lib/site"
import { track } from "@/lib/track"

export function WaLink({
  msg,
  label,
  className,
  children,
}: {
  msg?: string
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener"
      aria-label={label}
      onClick={() => track("whatsapp", label)}
      className={className}
    >
      {children}
    </a>
  )
}

export function CallLink({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={telLink} aria-label={label} onClick={() => track("call", label)} className={className}>
      {children}
    </a>
  )
}
