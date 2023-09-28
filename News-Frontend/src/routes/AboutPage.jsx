import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  color: #242424;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p{
    max-width: 900px;
  }
`

export default function AboutPage() {
  return (
    <Wrapper>
      <h1>About the page</h1>
      <p>This is just a simple front-end for the displaying the screenshots collected with the Puppeteer library for Node.js and stored in a MongoDB database. It takes a screenshot of the front page of the given array of news outlets every day at 8 a.m. starting on 29.9.2023. 
      <br/>
      <br/>
      <h2>Project is not deplyed on Render, because the Cron Library is not suported on a free acount.</h2>
      <br/>
      <br/>
      It is a non-profitable, open source project.</p>
    </Wrapper>
  )
}
