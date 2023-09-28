import React from 'react'
import ScreenshotList from './ScreenshotList'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    color: #242424;
    .date {
        margin-top: 2rem;
    }
`


export default function ArchiveWrapper({data}) {
    const reversed = data.reverse()
    return (
        <Wrapper>
            {reversed.map((day)=>{
                console.log(day);
                return(<>
                <h1 className='date'>{day.date}</h1>
                <ScreenshotList data={day.data}/>
                </>
        )})}
        </Wrapper>
    )
}
