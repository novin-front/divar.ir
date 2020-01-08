import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Wrapper from "components/wrapper";
import NotFound from "components/Error/NotFound";
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
