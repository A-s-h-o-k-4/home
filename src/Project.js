import React from 'react'
import './Project.css'
import Miniproject from './Miniproject'

function Project() {
    return (
        <div className='promain'>
            <div className='project'>
            <h4>Project</h4>
            <h2>What I have made?</h2>
            </div>
            <div className='mainproject'>
                <Miniproject />
                <Miniproject />
                <Miniproject />
                <Miniproject />
            </div>
        </div>
    )
}

export default Project