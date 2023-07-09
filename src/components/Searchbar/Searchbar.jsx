import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchForm,
  Input,
  SearchFormBtn,
  SearchIcon,
  Wrapper,
} from './Searchbar.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  query: yup.string().trim(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.query === '') {
      toast.info("Sorry, the search string can't be empty. Please try again.");
      return;
    }

    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <SearchForm>
        <Wrapper>
          <SearchFormBtn type="submit">
            <SearchIcon />
          </SearchFormBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </Wrapper>
      </SearchForm>
    </Formik>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};