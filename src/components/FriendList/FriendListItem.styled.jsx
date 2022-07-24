import styled from 'styled-components';

export const ItemStyled = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  margin: 10px;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #fff;
`;

export const Span = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  margin-left: 15px;
  background-color: ${props => (props.isOnline ? 'red' : 'green')};
`;

export const Img = styled.img`
  width: 60px;
  display: block;
`;

export const Text = styled.p`
  font-size: 28px;
`;
