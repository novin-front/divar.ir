import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Wrapper from "components/wrapper";
import NotFound from "components/Error/NotFound";
import Landing from 'views/examples/Landing';
import Profile from 'views/examples/Profile';
import Index from 'views/Index';
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                <Route path = "/" render = {
                    (props) => <Wrapper {
                        ...props
                    }
                    />} / >
                }
                />
                </Switch>
            </BrowserRouter>
        </>
    )
}
