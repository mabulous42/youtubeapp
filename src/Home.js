import React from 'react'
import { myInfo } from './Info'
import ContentData from './ContentData'
import SideNav from './SideNav'
import ContentContainer from './ContentContainer'

function Home() {
    return (
        <>
            <div className='d-flex flex-wrap'>
                {
                    myInfo.map((items, index) => (
                        <div key={index} className='py-3'>
                            <ContentData
                                BtnStyle='video-btn me-3'
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

export default Home