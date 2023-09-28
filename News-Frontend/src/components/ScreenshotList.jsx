import React from 'react'
import ScreenshotCard from './ScreenshotCard'
import styled from 'styled-components'

const Wrapper = styled.section`
    margin-top: 1rem;
    h1{
        color: #242424;
        font-size: 1.7rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    .content-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`


export default function ScreenshotList({data}) {
    
    return (
        <Wrapper>
            <div className="content-container">
                {data.map((item) => {
                    return <ScreenshotCard key={item._id} {...item}/>
                })}
            </div>
        </Wrapper>
    )
}
