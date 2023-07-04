import React from 'react'
import SideNav from './SideNav'
import ContentContainer from './ContentContainer'
import Home from './Home'

function DisplayHome() {
    return (
        <>
            <SideNav
                HomeStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-divB'
                HomeIcon="bi bi-house-door-fill fs-5"
                HomeText='ms-4 mt-1 textB'
                LibraryStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'
                LibraryIcon="bi bi-music-player fs-5"
                LibraryText='ms-4 mt-1 text'
                SubStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'
                SubIcon="bi bi-collection-play fs-5"
                SubText='ms-4 mt-1 text'
            />
            
            <ContentContainer Home={<Home />} />
        </>
    )
}

export default DisplayHome