import React, { createRef } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import * as S from './styles'

const url =
  'https://w7apps.us2.list-manage.com/subscribe/post?u=c0be835b33026100b2c54f7f6&amp;id=fa0084f938'

const Newsletter = () => {
  const emailRef = createRef(undefined)

  return (
    <div>
      <S.Text>Deseja receber um aviso quando lançar?</S.Text>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => {
          switch (status) {
            case 'sending':
              return <S.Thanks>Enviando...</S.Thanks>
            case 'success':
              return (
                <S.Thanks>
                  ✔️ Prontinho! Agora é só confirmar sua inscrição no email que
                  você vai receber em instantes.
                </S.Thanks>
              )
            case 'error':
              return (
                <S.Thanks
                  dangerouslySetInnerHTML={{ __html: `❌ ${message}` }}
                />
              )
            default:
              return (
                <S.Form
                  onSubmit={(event) => {
                    event.preventDefault()

                    subscribe({
                      EMAIL: emailRef.current.value
                    })
                  }}
                >
                  <input
                    id="email"
                    type="email"
                    ref={emailRef}
                    required
                    placeholder="seuemail@bemaqui.com"
                  />
                  <input type="submit" value="Me avise!" />
                </S.Form>
              )
          }
        }}
      />
    </div>
  )
}

export default Newsletter
