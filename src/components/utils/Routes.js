import React from 'react';
import { Route } from 'react-router-dom';
import Example from '../Example';

const Routes = () => {
    return (
        <>
            <Route path='/example' component={Example} />
        </>
    );
};

export default Routes;
