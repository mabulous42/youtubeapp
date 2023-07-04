import React from 'react'
import { subscription } from './Info'
import ContentData from './ContentData'
import SideNav from './SideNav'

function SubscriptionContent() {
    return (
        <>
        {/* <SideNav myBtnStyle='w-100 d-flex align-items-center rounded px-2 py-1 side-content-divB' /> */}
            <div className='d-flex flex-wrap'>
                {
                    subscription.map((items, index) => (
                        <div key={index}>
                            <ContentData
                                BtnStyle='video-btn me-3 mb-3'
                                img={items.image}
                                title={items.title}
                                author={items.author}
                            />
                        </div>

                    ))
                }
            </div>
        </>
    )
}

export default SubscriptionContent