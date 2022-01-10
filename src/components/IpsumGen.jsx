import { memo } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import styled from 'styled-components';

const RepoDesc = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #8b949e;
`;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const IpsumGen = () => (
  <RepoDesc>
    <b>Generate LoremIpsum if Description is NULL</b> -{' '}
    {lorem.generateParagraphs(1)}
  </RepoDesc>
);

export default memo(IpsumGen);
