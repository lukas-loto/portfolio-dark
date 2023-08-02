import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; 2023 Lukas Domingos</h4>
      <div className="links">
        <Link href={'https://github.com/lukas-loto/'}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/lukas-domingos/'}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
