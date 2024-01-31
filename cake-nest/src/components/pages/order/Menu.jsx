import React from 'react';
import styled from 'styled-components';
import { Cards } from '../../../components/pages/order/Cards';
import { fakeMenu } from '../../../utils/fakeMenu';


function Menu() {
  return (
    <MenuStyled>
      {fakeMenu.map(({  id, title, imageSource, price }) => (
        <Cards 
         key={id}
         title={title}
         imageSource={imageSource}
         price={price}
         className='menuItem' 
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.main`
  /* flex: 1; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap : 60px;
  /* flex-wrap: wrap; */
  /* justify-content: center; */

  overflow-y: scroll;
`;

export default Menu;