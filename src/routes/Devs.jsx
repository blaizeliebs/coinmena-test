import { useQuery } from 'react-query'

function Devs() {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('/developers')
        .then(res => res.json())
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h1>Devs</h1>
            {console.log('PLEASE WORK ', data)}
        </div>
    )
}

export default Devs;