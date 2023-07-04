import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import SideNav from './SideNav'

function ContentContainer(props) {
    return (
        <>
            {/* <SideNav HomeStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-divB'/> */}
            <div className='position-absolute content-container overflow-auto px-2'>
                {props.Home}
                {props.Subscriptions}
            </div>
        </>
    )
}

export default ContentContainer