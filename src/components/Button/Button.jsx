import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';
export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn onClick={onClick} type="button">
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};