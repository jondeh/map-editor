import React from 'react';
import MeTile from './MeTile';
import '../SCSS/MapEditor.scss';

const MeMap = ({grid, gridStyle, current, handleTileClick}) => {
    return (
        <div className="grid-container" style={gridStyle}>
            {
                grid.map((e,i) => e.map((f,j) => {
                    return <MeTile key={j} i={i} j={j} grid={grid} current={current} handleTileClick={handleTileClick} />
                }))
            }
        </div>
    )
}

export default MeMap;