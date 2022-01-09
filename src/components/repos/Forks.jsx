import { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconFork from '../svgIcons/IconFork';

const Link = styled.a`
  text-decoration: none;
  color: #6c757d;

  &:hover {
    color: #58a6ff;
  }
`;

const Forks = ({ forks, username, repoName }) => (
  <Link
    href={`https://github.com/${username}/${repoName}/network/members.${repoName}`}
    target='_blank'
    rel='noreferrer'>
    <small className='ms-2'>
      <IconFork />
      {forks}
    </small>
  </Link>
);

Forks.props = {
  forks: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
};

export default memo(Forks);
