import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../SCSS/MapEditor.scss';
import {terrains} from '../terrain';
import {tileVariables} from '../tileVariables';
import MeMap from './MeMap';

const MapEditor = () => {
    const [height, setHeight] = useState('')
    const [width, setWidth] = useState('')
    const [grid, setGrid] = useState([])
    const [gridStyle, setGridStyle] = useState(null)
    const [terrain, setTerrain] = useState(terrains)
    const [current, setCurrent] = useState(null)
    const [changes, setChanges] = useState([])

    const handleSubmit = () => {
        setGrid(() => {
            return [...Array(+height)].map((e,i) => [...Array(+width)].map((f,j) => {
                return {
                    type: "empty",
                    elevation: "0"
                }
            }))
        })
        setGridStyle({
            gridTemplateColumns: `repeat(${+width}, 50px)`,
            gridTemplateRows: `repeat(${+height}, 50px)`,
        })
    }

    const handleTileClick = (i,j,color) => {
        // let newGrid = [...grid]
        // let myGrid = newGrid[i][j] = {
        //     current
        // }
        console.log("color", color)
        let newChanges = [...changes]
        newChanges.push({i,j,color})
        setChanges(newChanges)
    }

    const handleSave = () => {
        let newGrid = [...grid]
        changes.forEach((e,i) => {
            newGrid[e.i][e.j] = e
        })
        console.log("grid", grid)
        console.log("changes", changes)
        let style = gridStyle
        
        axios.post("http://localhost:5000/maps/add", {grid, style}).then(res => {
            console.log("ding", res.data)
        })
    }

    // console.log("current", current)
    return (
        <div className="map-editor-container">
            <div className="me-header">
                <div className="terrain-menu">
                    {
                        terrain.map((e,i) => {
                            return <div className="terrain" key={i} style={{background: e.color}} onClick={() => setCurrent(e.color)}>
                            </div>
                        })
                    }
                </div>
            <input type="number" placeholder="Height" 
            onChange={(e) => setHeight(e.target.value)} />
            <input type="number" placeholder="Width" onChange={(e) => setWidth(e.target.value)} />
            <button onClick={handleSubmit}>SUBMIT</button>
            </div>
            <div className="me-body">
                {
                grid && <MeMap {...{grid, gridStyle, current, handleTileClick}}/>
                }   
            </div>
            <div className="me-footer">
                <button onClick={handleSave}>SAVE</button>
            </div>
        </div>
    )
}

export default MapEditor;