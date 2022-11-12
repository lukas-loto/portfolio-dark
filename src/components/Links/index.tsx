import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/lukas-loto'}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/lukas-domingos/'}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://www.instagram.com/lukasdomingoss/'}>
          <a target="_blank" aria-label="Link to Instagram">
            <FiInstagram />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=5521998497373'}>
          <a target="_blank" aria-label="Link to contact via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
