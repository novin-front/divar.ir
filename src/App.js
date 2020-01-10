import React,{useEffect} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import Wrapper from "components/wrapper";
import NotFound from "components/Error/NotFound";
function App({
    fetchAdvertise,
    fetchCategories,
    widgetList,
    Categoryes,
}) {
    useEffect(() => {
          const getData = async () => {
                  await fetchAdvertise("tehran");
                  await fetchCategories();
                }
        getData();
        
    }, [])
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAdvertise: (payload) => {
            dispatch({
                type: "GET_ADVERTISING_DATA",
                payload
            })
        },
        fetchCategories: (payload) => {
            dispatch({
                type: "GET_ALL_CATEGORYES_DATA",
                payload
            })
        }
    }
}

const mapStateToProps = (state) => {
    let {
        DivarApi
    } = state;
    return {
        widgetList: DivarApi.AdvertisingList,
        Categoryes: DivarApi.AllCategory
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)