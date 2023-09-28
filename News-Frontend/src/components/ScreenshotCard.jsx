import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

  .link{
    padding: 1rem .5rem;
    margin: .5rem;
    display: flex;
    background: linear-gradient(0deg,  #F4F8FC, #37ACFA);
    flex-direction: column;
    border-radius: .5rem;
    align-items: center;
    transition: all .2s linear;
    text-decoration: none;
  }
  .name{
    color: #242424;
    font-weight: 600;
    padding-bottom: .5rem;
  }
  img{
    border-radius: .5rem;
    width: 330px;
    object-fit: cover;
  }
  .link:hover{
    transform: scale(1.2);
  }
`

export default function ScreenshotCard({name, url, newScreenshot}) {
  return (
    <Wrapper>
      <a href={url} className='link'>
      <div className="name">{name}</div>
      <img src={newScreenshot} alt={name}  />
      </a>
    </Wrapper>
  )
}
