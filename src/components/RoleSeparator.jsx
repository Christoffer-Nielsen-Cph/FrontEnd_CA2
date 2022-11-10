import React from 'react';

function RoleSeparator(props) {
    return props.roles.map((role) => {
        return (
            <>
                {role + " "}
            </>

        )
    })
}

export default RoleSeparator;