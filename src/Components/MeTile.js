import React, { useState, useEffect } from 'react';

const MeTile = ({i, j, current, handleTileClick, tileColor, grid}) => {
    const [update, setUpdate] = useState(false)
    const [color, setColor] = useState(tileColor ? tileColor : null)

    useEffect(() => {
        setColor(tileColor)
    }, [grid])

    const handleTileClickLocal = (i,j,current) => {
        setColor(current)
        handleTileClick(i,j,current)
    }

    return (
        <div className="me-tile-container">
            <div className="me-tile" key={j} onClick={() => handleTileClickLocal(i,j,current)} style={{background: color ? color : null}}>
                {/* {
                    current && <div className={current}></div>
                } */}
            </div>
        </div>
    )
}

export default MeTile;