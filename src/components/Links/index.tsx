import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

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
        <div className="barra"></div>
      </Icons>
    </>
  )
}
