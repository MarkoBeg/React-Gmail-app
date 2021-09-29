import React from 'react'
import './SidebarStuff.css'

export default function SidebarStuff({Icon, title, number, selected, newColor}) {
    return (
        <div className='sidebarstuff'>
            <div className={`side-stuff ${selected && 'sidestuff-active'}`}>
                {Icon && <Icon style={{color: `${newColor}`}}></Icon>}
                <h3 style={{color: `${newColor}`}}>{title}</h3>
                <p style={{color: `${newColor}`}}>{number}</p>
            </div>
        </div>
    )
}
