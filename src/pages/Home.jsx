import React from 'react';

function Home({userfacade}) {

    return (
        <div>
            <h1>Home</h1>
            <p> Welcome {userfacade.getUserName()}</p>
            <h2>Quick guide on how to setup the startcode:</h2>
            <h4>test</h4>
        </div>
    );
}

export default Home;