import React from 'react'
import AllRoute from '../Router'
import DemoNavbar from './Navbars/DemoNavbar';
import { Switch,Router, Route} from "react-router-dom";
import NotFound from './Error/NotFound';
export default function Wrapper() {
    const RenderComponents = (routes)=>{
        return routes.map((prop, key) => {

            if (prop.render === true) {

                return (
                    <Route
                        exact
                        path={prop.path}
                        render={props => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {

                return null;
            }
        });
    }
    return (
        <>
        <DemoNavbar/>
            <Switch>
            {RenderComponents(AllRoute)}
            <Route component={NotFound} />
            </Switch>
        </>
    )
}
