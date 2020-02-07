import React,{useEffect} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios'
import Wrapper from "components/wrapper";
import NotFound from "components/Error/NotFound";
import Axios from 'axios';
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
                  await getApi()
                }
        getData();
        
    }, [])
    const getApi =()=>{
        Axios.get('http://roocket.org/api/products', {
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers' : 'Content-Type, Authorization, Authorizations, X-Authorization'
            },
            proxy: {
                host: '104.236.174.88',
                port: 3128
            }
        }).then(function (response) {
            console.log('response is :&&&&&&&&&&&&&&& ' , response);
        }).catch(function (error) {
            if (error.response) {
                console.log(" error.config -=>&&&&&&&&&&&&&&&&&&&&&",error.response.headers, );
            } else if (error.request) {
                console.log("error.request -=> &&&&&&&&&&&&&&&&", error.request);
            } else {
                console.log("error.message -=>&&&&&&&&&&&&&&&&", error.message);
            }
            console.log("error.config -=> &&&&&&&&&&&&&&", error.config);
        });
    }
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