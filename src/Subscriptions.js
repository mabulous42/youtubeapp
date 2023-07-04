import React from 'react'
import Home from './Home'
import SideNav from './SideNav'
import SubscriptionContent from './SubscriptionContent'
import ContentContainer from './ContentContainer'

function Subscriptions() {
  return (
    <>
      <SideNav
        HomeStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'
        HomeIcon="bi bi-house-door fs-5"
        HomeText='ms-4 mt-1 text'
        LibraryStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'
        LibraryIcon="bi bi-music-player fs-5"
        LibraryText='ms-4 mt-1 text'
        SubStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-divB'
        SubIcon="bi bi-collection-play-fill fs-5"
        SubText='ms-4 mt-1 textB'
      />
      <ContentContainer Subscriptions={<SubscriptionContent />} />

    </>
  )
}

export default Subscriptions