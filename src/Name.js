import React from 'react';

function Name(props) {
    const {name} = props;
    return (
        <React.Fragment>
            My name is {name}
        </React.Fragment>
    );
}

  export default Name;