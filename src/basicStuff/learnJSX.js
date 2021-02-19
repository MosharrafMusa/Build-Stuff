import React from 'react'

export default function learnJSX(props) {
    const name = "Mosharraf Musa"
    const loading = false
    const showName = false
    return (
        <div>
            {loading?"loading..." :<h1>Hello {showName?name:null}</h1>}
        </div>
    )
}
