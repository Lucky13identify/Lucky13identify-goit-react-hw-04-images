import PropTypes from 'prop-types';
import { AiFillBank } from 'react-icons/ai';
import { Header, Form, Button } from './Serchbar.styled';

export const Searchbar = ({ onSubmit, onChange }) => {
  return (
    <Header className="searchbar">
      <Form className="form" onSubmit={onSubmit}>
        <Button type="submit" className="button">
          <span className="button-label">
            <AiFillBank />
          </span>
        </Button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
