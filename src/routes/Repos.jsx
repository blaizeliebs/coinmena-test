import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loading from '../components/Loading';
import Title from '../components/Title';
import IconTitle from '../components/svgIcons/IconTitle';
import IconStar from '../components/svgIcons/IconStar';
import IconHeart from '../components/svgIcons/IconHeart';
import Stars from '../components/repos/Stars';
import Forks from '../components/repos/Forks';
import BuiltBy from '../components/repos/BuiltBy';

function Repo() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/repositories', {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => setError(error));
  }, []);

  if (error) return `Error: ${error.message}`;

  if (!post) return <Loading />;

  return (
    <>
      <Title header='Trending Repositories' />
      {post.map((repo) => {
        return (
          <Row key={uuidv4()} className='p-2'>
            <Card bg='dark' text='white'>
              <Card.Body>
                <Row>
                  <Col xs={10}>
                    <Card.Title>
                      <IconTitle />{' '}
                      <a
                        href={repo.url}
                        title={repo.username + ' ' + repo.repositoryName}
                        target='_blank'
                        rel='noreferrer'>
                        {repo.username} / {repo.repositoryName}
                      </a>
                    </Card.Title>
                    <Card.Text>{repo.description}</Card.Text>
                  </Col>
                  <Col>
                    <Button variant='outline-secondary' size='sm'>
                      <IconHeart /> Sponsor
                    </Button>
                    <Button variant='outline-secondary' size='sm'>
                      <IconStar /> Star
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col xs={10}>
                    <small className='text-muted'>{repo.language}</small>{' '}
                    <Stars
                      totalStars={repo.totalStars}
                      username={repo.username}
                      repoName={repo.repositoryName}
                    />
                    <Forks
                      forks={repo.forks}
                      username={repo.username}
                      repoName={repo.repositoryName}
                    />
                    <BuiltBy builtBy={repo.builtBy} />
                  </Col>
                  <Col>
                    <small className='text-muted ms-auto'>
                      <IconStar />
                      {repo.starsSince} stars today
                    </small>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Row>
        );
      })}
    </>
  );
}

export default Repo;
