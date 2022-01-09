import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainHeader = styled.h1`
  color: white;
`;

const Sub = styled.p`
  color: white;
`;

const Title = ({ header, subHeader }) => (
  <>
    <MainHeader>{header}</MainHeader>
    {subHeader && <Sub>{subHeader}</Sub>}
  </>
);

Title.props = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
};

Title.defaultProps = {
  header: 'Header',
  subHeader: '',
};

export default Title;
