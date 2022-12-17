import React, { useState } from 'react'
import logo from "../../images/logo.svg";
import "./SideBar.css";
import { RiDashboardFill } from "react-icons/ri"
import { BiFoodMenu } from "react-icons/bi";
import { ImBlogger2 } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom"
import Profile from '../../pages/profile/Profile';
const Card = () => {
    const [show,setShow]=useState(true);
    const closeSidebar=()=>{
        setShow(false)
    }
    const data = [
        {
            name1: 'Project',
            heading: "My First Project",
            to: '/',
        },
        {
            name: 'Dashboard',
            icon: <RiDashboardFill />,
            to: '/home',

        },
        {
            name: 'Recipes',
            icon: <BiFoodMenu />,
            to: '/home',

        },
        {
            name: 'Blog',
            icon: <ImBlogger2 />,
            to: '/home',
        },
        {
            name: 'Templates',
            icon: <ImBlogger2 />,
            to: '/home',
        },
        {
            name: 'Favourites',
            icon: <MdFavorite />,
            to: '/home',

        },
        {
            name: 'Custom templates',
            icon: <BiFoodMenu />,
            to: '/home',

        },
        {
            name: 'Integrations',
            icon: <BiFoodMenu />,
            to: '/home',

        },
        {
            name: 'Semrush',
            icon: <BiFoodMenu />,
            to: '/home',

        },
    ]
    let ActiveLink = 'activeLink'

    return (

        <>
      {  show?<div className='sidebar shadow-sm'>
            <div className='img'>
                <img src={logo} alt="logo" />
            </div>
            <div className='content overflow-auto'>
                {data.map((item, index) => (
                    <div>
                        {item.heading &&  <NavLink activeClassName="active"className = {({isActive}) => isActive? ActiveLink: 'tab'} to={item.to} ><div className='py-3 first'><p className='m-0 ' >{item.name1}</p><p className='p-0 m-0' style={{color:"black"}}>{item.heading}</p></div></NavLink>}
                        <NavLink activeClassName="active"className = {({isActive}) => isActive? ActiveLink: 'tab'} to={item.to}>{item.name && <div className='sidecontent gap-3 py-3'>
                            {item.icon && item.icon}
                            <p className='m-0'>{item.name}</p>
                        </div>}</NavLink>
                    </div>

                ))}</div>
                <Profile/>
                <div className='d-flex align-items-cente gap-3 my-3 justify-content-center mt-4'>
                    <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" style={{width:"20px",height:"20px"}} alt="cls"/><p onClick={closeSidebar}>Collapse</p>
                </div>
        </div>:<></>}</>
    )
}

export default Card;