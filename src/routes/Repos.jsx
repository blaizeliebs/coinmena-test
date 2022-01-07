import { useEffect, useState } from 'react';

function Repo() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/repositories', {
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => setError(error));
    }, []);

    if (error) return `Error: ${error.message}`;

    if (!post) return 'Loading...'

    return (
        <div>
            <h1>Repo</h1>
            {console.log('Repos', post)}
        </div>
    )
}

export default Repo;