import React, { useState } from 'react'

export default function Blur({children}) {
    const [blur, setblur] = useState(true)
    let blurred = () => {
        setblur(!blur)
    }
    return (
        <div
        onDoubleClick={blurred}
        className={`${blur ? "blurredup" : "blurreddown"}`}
        style={{
            transition: '.3s all ease',
            cursor: 'pointer',
            userSelect: 'none'
            }}>
            {children}
        </div>
    )
}
