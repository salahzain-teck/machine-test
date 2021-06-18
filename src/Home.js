import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Home.css'
import Charts from './Charts'

function Home() {
    return (
        <div className='home'>
            <div className='sidebar_div'>
             <Sidebar/>
            </div>
            <div className='content_div'>
                <Navbar/>
                <Charts/>
            </div>
        </div>
    )
}

export default Home
