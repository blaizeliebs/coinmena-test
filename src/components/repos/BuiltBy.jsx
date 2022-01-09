import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.a`
  display: inline-block;
  margin-left: 2px;

  img {
    border-radius: 50%;
  }
`;

const BuiltBy = ({ builtBy }) => (
  <small className='text-muted ms-2'>
    Built by
    {builtBy.map((user) => {
      return (
        <Image
          key={uuidv4()}
          href={user.url}
          target='_blank'
          title={user.username}>
          <img
            className='avatar mb-1 avatar-user'
            src={user.avatar}
            width='20'
            height='20'
            alt={user.username}></img>
        </Image>
      );
    })}
  </small>
);

BuiltBy.props = {
  builtBy: PropTypes.array.isRequired,
};

export default memo(BuiltBy);
