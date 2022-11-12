import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; 2022 Lukas Domingos</h4>
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
        <Link href={'https://api.whatsapp.com/send?phone=5521998497373'}>
          <a target="_blank" aria-label="Link to contact via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
