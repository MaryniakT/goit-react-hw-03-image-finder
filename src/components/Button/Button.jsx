import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

export function Button({ loadMore, children }) {
  return (
    <LoadMore type="button" onClick={loadMore}>
      {children}
      {/* Load more */}
    </LoadMore>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};