import React from 'react'

export default function Layout({children}) {
    return (
        <div style={{ width: "80%", padding: '1em' }}>
            {children}
        </div>
    )
}
