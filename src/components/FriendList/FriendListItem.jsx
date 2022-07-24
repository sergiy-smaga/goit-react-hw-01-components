import PropTypes from 'prop-types';
import { ItemStyled, Span, Img, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ItemStyled>
    <Span isOnline={isOnline}></Span>
    <Img src={avatar} alt={name} width="48" />
    <Text>{name}</Text>
  </ItemStyled>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
