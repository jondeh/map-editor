import React, { useState, useEffect } from 'react';

const MeTile = ({i, j, current, handleTileClick, mapColor}) => {
    const [update, setUpdate] = useState(false)
    const [color, setColor] = useState(mapColor ? mapColor : null)

    const handleTileClickLocal = (i,j,current) => {
        setColor(current)
        handleTileClick(i,j,current)
    }

    console.log("mapColor", mapColor)
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