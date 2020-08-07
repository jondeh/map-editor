import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MeTile from './MeTile';
import '../SCSS/Map.scss';

const SavedMaps = () => {
    const [maps, setMaps] = useState([])
    const [grid, setGrid] = useState([])
    const [gridStyle, setGridStyle] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/maps/')
        .then(res => {
            if(res.data.length > 1){
                console.log("res.data", res.data[res.data.length-1].map)
                setMaps(res.data)
                // setGrid(res.data[res.data.length-1].map)
                // setGridStyle(res.data[res.data.length-1].style)
            }
        })
    }, [])


    let newMap = grid && grid.map((e,i) => e.map((f,j) => {
        return <MeTile tileColor={f.color} key={j} grid={grid} />
    }))

    const handleNewMap = (i) => {
        let myMap = maps[i].map
        let myStyle = maps[i].style
        setGridStyle(myStyle)
        setGrid(myMap)
    }

        let mapsDivs = maps && maps.map((e,i) => {
            return <div className="map-picker-div" key={i} onClick={() => handleNewMap(i)}>
                <h3>{e._id}</h3>
            </div>
        })


        console.log("grid", grid)
        console.log("gridStyle", gridStyle)
    return (
        <div className="map-component-container">
                <header>Saved Maps</header>
            <div className="map-picker">
                {mapsDivs}
            </div>
            <div className="grid-container" style={gridStyle ? gridStyle : null}>
                {
                    newMap
                }
            </div>
        </div>
    )
}

export default SavedMaps;