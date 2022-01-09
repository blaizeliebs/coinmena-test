import { useQuery } from 'react-query';
import Loading from '../components/Loading';
import Title from '../components/Title';

function Devs() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/developers').then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <Title header='Trending Developers' />
      {console.log('PLEASE WORK ', data)}
    </div>
  );
}

export default Devs;
