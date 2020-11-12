import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'

const SectionTech = () => (
  <S.Wrapper data-aos="fade-up" data-aos-delay="900">
    <Container>
      <Heading reverseColor>Tecnologias utilizadas</Heading>
      <S.IconsContainer>
        {icons.map(({ name, image }) => (
          <S.Icon key={name} data-aos="flip-left" data-aos-delay="900">
            <S.Icons src={`img/tech/${image}`} alt={name} loading="lazy" />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
