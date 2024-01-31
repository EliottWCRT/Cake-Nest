import React from 'react'
import styled from "styled-components"
import Button from './Button'
import { theme } from '../../../theme/index'



export function Cards({id, title, imageSource, price}) {
  return (
    <CardsStyled>
      <img src={imageSource} alt='cupcake à acheter' />
      <h1>{title}</h1>
      <section>
        <p className='price'>{price}</p>
        <Button label={'Ajouter'} fontSize={theme.fonts.size.XS} width={'50%'} />
      </section>
    </CardsStyled>
  )
}

const CardsStyled = styled.div `
  width: 280px;
  background-color: white;
  margin: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

  img {
    height: 200px;
    margin-inline: auto;
  }

  h1 {
    margin-top: ${theme.spacing.lg};
    font-family: 'Pacifico', cursive;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.primary};
  }
    `
    





