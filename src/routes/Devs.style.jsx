import styled from 'styled-components';

export const CustomGrid = styled.div`
  display: grid;
  grid-template-columns: 5% 10% 20% 40% 25%;
  gap: 10px;
  padding: 16px;
  border-top-color: #21262d;
  border-top-style: solid;
  border-top-width: 1px;
  color: #8b949e;
`;

export const CustomCell = styled.div`
  grid-row: 1;
  ${({ floatRight }) =>
    floatRight &&
    `.col {
      display: inline-block;

      a {
        margin-right: 20px;
      }
    }
    justify-self: end;
  `};
`;

export const CustomImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

export const CustomHeader = styled.h3`
  line-height: 1.25;
  font-size: 20px;
  font-weight: 600;
`;

export const CustomSubHeader = styled.a`
  font-weight: 400;
  font-size: 16px;
  color: #8b949e;
  text-decoration: none;
`;

export const PopularRepo = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  color: #8b949e;
`;

export const RepoTitle = styled.a`
  max-width: 175px;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #58a6ff;
  text-decoration: none;
`;

export const RepoLink = styled.div`
  display: inline-block;
`;
