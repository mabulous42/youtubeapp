import React from 'react'
import ContentContainer from './ContentContainer'
import SideNav from './SideNav'
import LibraryContent from './LibraryContent'

function Library() {
  return (
    <>
        <SideNav 
    HomeStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'
    HomeIcon="bi bi-house-door fs-5"
    HomeText='ms-4 mt-1 text'
    LibraryStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-divB'
    LibraryIcon="bi bi-music-player-fill fs-5"
    LibraryText='ms-4 mt-1 textB'
    SubStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'
    SubIcon="bi bi-collection-play fs-5"
    SubText='ms-4 mt-1 text'
    />
    <ContentContainer Home={<LibraryContent />}/>
    </>
  )
}

export default Library