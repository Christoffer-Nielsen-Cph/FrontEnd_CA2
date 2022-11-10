import React from 'react';

function Home({facade}) {

    return (
        <div>
            <h1>Home</h1>
            <p> Welcome {facade.getUserName()}</p>
            <h2>Quick guide on how to setup the startcode:</h2>
            <h4>test</h4>
        </div>
    );
}

export default Home;