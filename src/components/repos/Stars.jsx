import { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconStar from '../svgIcons/IconStar';

const Link = styled.a`
  text-decoration: none;
  color: #6c757d;

  &:hover {
    color: #58a6ff;
  }
`;

const Stars = ({ totalStars, username, repoName }) => (
  <Link
    href={`https://github.com/${username}/${repoName}/stargazers`}
    target='_blank'
    rel='noreferrer'>
    <small className='ms-2'>
      <IconStar />
      {totalStars}
    </small>
  </Link>
);

Stars.props = {
  totalStars: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
};

export default memo(Stars);
