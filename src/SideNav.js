import React from 'react'
import { Link } from 'react-router-dom'

function SideNav(props) {
    return (
        <>
            <div className='position-absolute side-nav-div bg-white overflow-auto'>
                <div className='side-bar-inner mx-auto py-2'>
                    <Link to={"/"} className='link'>
                        <button className={props.HomeStyle}>
                            <div><i className={props.HomeIcon}></i></div>
                            <div className={props.HomeText}>Home</div>
                        </button>
                    </Link>
                    <button className='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'>
                        <div><i className="bi bi-file-play fs-5"></i></div>
                        <div className='ms-4 mt-1 text'>Shorts</div>
                    </button>
                    <Link to={'/subscriptions'} className='link'>
                        <button className={props.SubStyle}>
                            <div><i className={props.SubIcon}></i></div>
                            <div className={props.SubText}>Subscriptions</div>
                        </button>
                    </Link>
                    <hr />
                    <Link to={"/library"} className='link'>
                        <button className={props.LibraryStyle}>
                            <div><i className={props.LibraryIcon}></i></div>
                            <div className={props.LibraryText}>Library</div>
                        </button>
                    </Link>
                    <button className='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'>
                        <div><i className="bi bi-collection-play fs-5"></i></div>
                        <div className='ms-4 mt-1 text'>History</div>
                    </button> <button className='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'>
                        <div><i className="bi bi-collection-play fs-5"></i></div>
                        <div className='ms-4 mt-1 text'>Your videos</div>
                    </button>
                    <button className='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'>
                        <div><i className="bi bi-collection-play fs-5"></i></div>
                        <div className='ms-4 mt-1 text'>Watch later</div>
                    </button>
                    <button className='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'>
                        <div><i className="bi bi-collection-play fs-5"></i></div>
                        <div className='ms-4 mt-1 text'>Liked videos</div>
                    </button>
                    <button className='w-100 d-flex align-items-center rounded px-2 py-1 side-content-div'>
                        <div><i className="bi bi-collection-play fs-5"></i></div>
                        <div className='ms-4 mt-1 text'>Mix - Tiwa 'n' Tiwa</div>
                    </button>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default SideNav