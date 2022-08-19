import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-about.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          HOMESPACE was founded by Ingvar Kamprad in 1943 and came to life as a mail order 
          catalogue business in the forested town of Älmhult, Sweden. 
          Today, it’s a global home furnishing brand that brings affordability, design and comfort 
          to people all over the world. We may have come a long way since our humble beginnings, but
          our vision remains the same: to create a better everyday life for the many people. 
          Explore the HOMESPACE story here, to learn more about our heritage, what drives us today and 
          the ways we seek to positively impact people and planet.</p>

          <p>One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, 
          we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life 
          for the many people. This, together with our straightforward business idea, shared values, and a culture 
          based on the spirit of togetherness, guides us in everything we do.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: #333333;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
