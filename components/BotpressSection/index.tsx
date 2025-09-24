'use client'
import React, { useState } from 'react'

type Props = {
  configUrl?: string
  className?: string
  style?: React.CSSProperties
  minHeight?: string // expanded iframe height
  width?: string // container width
  placeholder?: string
  preload?: boolean // if true loads iframe immediately
}

export default function BotpressSection({
  configUrl = 'https://files.bpcontent.cloud/2024/11/29/17/20241129171710-1VXYHQY4.json',
  className,
  style,
  minHeight = '420px',
  width = '640px',
  placeholder = 'Ask the assistant...',
  preload = false
}: Props) {
  const [open, setOpen] = useState<boolean>(preload)
  const [focused, setFocused] = useState(false)

  const src = `https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=${encodeURIComponent(
    configUrl
  )}`

  return (
    <div
      className={className}
      style={{
        width,
        maxWidth: 'calc(100% - 32px)',
        margin: '24px auto',
        ...style
      }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '10px 14px',
          borderRadius: 12,
          boxShadow: focused
            ? '0 6px 18px rgba(18, 18, 18, 0.12)'
            : '0 4px 10px rgba(18,18,18,0.06)',
          border: '1px solid rgba(0,0,0,0.06)',
          background: '#fff',
          cursor: 'text',
          userSelect: 'none'
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {/* search icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div style={{ flex: 1, color: 'rgba(0,0,0,0.65)', fontSize: 15 }}>
          {placeholder}
        </div>

        {/* open/close icon */}
        {open ? (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpen(false)
            }}
            aria-label="Close chat"
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              padding: 6
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ) : null}
      </div>

      {/* animated panel */}
      <div
        style={{
          overflow: 'hidden',
          transition: 'max-height 280ms ease, opacity 220ms ease, margin-top 220ms ease',
          maxHeight: open ? minHeight : 0,
          opacity: open ? 1 : 0,
          marginTop: open ? 12 : 0,
          borderRadius: 12,
          boxShadow: open ? '0 10px 30px rgba(18,18,18,0.08)' : 'none',
          border: open ? '1px solid rgba(0,0,0,0.06)' : 'none',
          background: open ? '#fff' : 'transparent'
        }}
      >
        {/* lazy load iframe when open or preload=true */}
        {(open || preload) && (
          <iframe
            title="Botpress Webchat"
            src={src}
            style={{
              border: 0,
              width: '100%',
              height: minHeight,
              borderRadius: 12
            }}
            allow="microphone; camera; autoplay; clipboard-write"
          />
        )}
      </div>
    </div>
  )
}



// 'use client'
// import React from 'react'

// type Props = {
//   configUrl?: string
//   className?: string
//   style?: React.CSSProperties
//   minHeight?: string
// }

// export default function BotpressSection({
//   configUrl = 'https://files.bpcontent.cloud/2024/11/29/17/20241129171710-1VXYHQY4.json',
//   className,
//   style,
//   minHeight = '260px'
// }: Props) {
//   const src = `https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=${encodeURIComponent(
//     configUrl
//   )}`

//   return (
//     <iframe
//       title="Botpress Webchat"
//       src={src}
//       className={className}
//       style={{
//         border: 0,
//         width: '100%',
//         height: '100%',
//         minHeight,
//         ...style
//       }}
//       allow="microphone; camera; autoplay; clipboard-write"
//     />
//   )
// }
