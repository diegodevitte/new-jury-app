import React, { useState, useEffect } from "react";
import CardRepo from './CardRepo';

function GitHubRepos({ login }) {
    const [repos, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/diegodevitte/repos`, {
            method: "GET",
            headers: {
                Authorization: `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`
            }
        })
            .then(repos => repos.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [login]);
    if (loading) return <h1>loading...</h1>;
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!repos) return null;

    return (
        <React.Fragment>
            <div className="inline-grid grid-cols-3">
                {repos.length > 0 ?
                    (
                        repos.map(repo => <CardRepo
                            key={repo.name}
                            repo={repo}
                        />)
                    )
                    :
                    <h5>No data</h5>
                }

            </div>
        </React.Fragment>
    );
}

export default function App() {
    return <GitHubRepos login="GitHubUserName" />;
}