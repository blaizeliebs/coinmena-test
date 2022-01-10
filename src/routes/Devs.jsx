import { useQuery } from 'react-query';
import Helmet from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import map from 'lodash/map';
import Loading from '../components/Loading';
import Title from '../components/Title';
import IpsumGen from '../components/IpsumGen';
import IconFlame from '../components/svgIcons/IconFlame';
import IconTitle from '../components/svgIcons/IconTitle';
import Buttons from '../components/Buttons';

import {
  CustomGrid,
  CustomCell,
  CustomImage,
  CustomHeader,
  CustomSubHeader,
  PopularRepo,
  RepoTitle,
  RepoLink,
} from './Devs.style';

/**
 * I used the `react-query` here unlike the basic js fetch in Repos.jsx
 */
function Devs() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/developers').then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  if (error) return 'An error has occurred: ' + error.message;

  /**
   * In this page, I will avoid using a css library / framework
   * I have experince with material-ui, semantic-ui, reactstrap as well as
   *
   * In this page I used made use of the default javascript map function.
   */
  return (
    <>
      <Helmet title='coinMENA | Trending Developers' />
      <Title header='Trending Developers' />
      {map(data, (dev) => (
        <CustomGrid key={uuidv4()}>
          <CustomCell smaller>{dev.rank}</CustomCell>
          <CustomCell>
            <a href={dev.url} title={dev.name} target='_blank' rel='noreferrer'>
              <CustomImage src={dev.avatar} alt={dev.name} />
            </a>
          </CustomCell>
          <CustomCell>
            <a href={dev.url} title={dev.name} target='_blank' rel='noreferrer'>
              <CustomHeader>{dev.name}</CustomHeader>
            </a>
            <CustomSubHeader
              href={dev.url}
              title={dev.username}
              target='_blank'
              rel='noreferrer'>
              {dev.username}
            </CustomSubHeader>
          </CustomCell>
          <CustomCell>
            <PopularRepo>
              <IconFlame /> POPULAR REPO
            </PopularRepo>
            {dev.popularRepository.repositoryName && (
              <RepoLink>
                <IconTitle />
                <RepoTitle href={dev.popularRepository.url}>
                  {dev.popularRepository.repositoryName}
                </RepoTitle>
              </RepoLink>
            )}
            {dev.popularRepository.description ? (
              <p>{dev.popularRepository.description}</p>
            ) : (
              /**
               * I used the `lorem-ipsum` here to generate random text for developers description
               * They are all set to NULL on the endpoint
               */
              <IpsumGen />
            )}
          </CustomCell>
          <CustomCell floatRight>
            <Buttons data={dev} />
          </CustomCell>
        </CustomGrid>
      ))}
    </>
  );
}

export default Devs;
