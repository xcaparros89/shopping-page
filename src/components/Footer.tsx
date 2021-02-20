import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <div>
            <h1>Footer</h1>
            <div>Logos</div>
            <div><p>Cookies</p><p>Privacy</p><p>Terms and Conditions</p></div>
        </div>
    )
}
