import React from 'react'
import { SocialBar } from '../'
import * as S from './styled'

const Footer = () => (
  <S.Container>
    <S.Content>
      <div>
        <a href='/'>
            <img src="https://res.cloudinary.com/wwebdev/image/upload/q_auto,w_100/v1585149959/logo_szao9n.png" alt="wweb.dev Logo" />
        </a>
        <S.Copyright>
          © {new Date().getFullYear()} - wweb.dev
        </S.Copyright>
      </div>

      <S.RightFooter>
        <SocialBar />

        <S.FooterLinks>
          <li><a href="/privacy">Privacy Policy</a></li>
        </S.FooterLinks>
      </S.RightFooter>
    </S.Content>
  </S.Container>
)

export default Footer
