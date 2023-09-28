import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.header`
        max-width: 85vw;
        margin: 0rem auto ;
    header{
        padding: 2rem 2rem 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        min-height: 3rem;
        background: radial-gradient(ellipse at left top,#FA4346,  #F4F8FC, #37ACFA);
        border-end-end-radius: 4rem 5rem;
        border-end-start-radius: 1rem;
    }
    .logo{
        font-size: 2rem;
        color: #1804c6;
        font-family: var(--logo-font-family);
        span{
            color: grey;
        }
    }
    .navbar{
        display: flex;
        gap: 2vw;
        text-decoration: none;
    }
    .nav{
        text-decoration: none;
        color: #242424;
        font-family: var(--primary-font-family);   
    }
    .active {
        color: #1804c6;
    }
    
` 



export default function Root() {
    return (
        <Wrapper>
            <header>
            <div className="logo">News<span>Compare</span></div>
            <nav className='navbar'>
                <NavLink to='/' className='nav home'>Home</NavLink>
                <NavLink to='archive/' className='nav archive'>Archive</NavLink>
                <NavLink to='about/' className='nav about'>About</NavLink>
            </nav>
            </header>
            <Outlet/>
        </Wrapper>
    )
}
