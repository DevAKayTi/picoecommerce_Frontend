import React, { useEffect, useRef } from 'react'


const OutsideClickHandler = ({ onClickaway, children }) => {

    useEffect(() => {
        document.addEventListener("mousedown", onClickaway);

        return () => {
            document.removeEventListener("mousedown", onClickaway);
        }
    })

    return (
        <div>{children}</div>
    )
}

export default OutsideClickHandler