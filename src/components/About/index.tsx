/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'

export function About() {
  return (
    <Container id="about">
      <Title>
        About
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/lukas.svg"
            alt="Imagem de perfil Evander"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
            I'm Lukas Domingos, Full Stack developer for 4 years and Designer from Brazil. 
            I graduated from CEFET/RJ where I studied software development in my high school for 3 years.
            </p>
            <p>
            I have rich experience in Web Development and am very experienced in WordPress.
            </p>
            <p>
            I currently work at Webera as a Full Stack Developer with a focus on WordPress.
            I am passionate about technology and I am a leader at Students for Liberty Brazil.
            </p>
          </div>
          <a href="/pdf/Evander-Curriculo.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
