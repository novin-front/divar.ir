import {takeEvery,takeLatest,put,call,all} from 'redux-saga/effects';
import HttpService from "../../../boot/httpRequests/HttpHandler";
import Axios from 'axios';
import config from '../../../boot/config/dotenv';
import ServiceHttp from '../../../boot/httpRequests/serviceHttp';
const http2 = new ServiceHttp()
const httpService = new HttpService();

// ***************** change user password in control panel ******************
export const ChangePasswordUserInDashboardWatcher = function* () {
    yield takeLatest('CHANGE_USER_PASSWORD_IN_CONTROL_PANEL', ChangePasswordUserInDashboardWorker);
};
const ChangePasswordUserInDashboardWorker = function* (action) {
    try {
        const saveDriversData = yield call(() => {
            return (
        http2.httpRequst('POST',`api/users/change_password`,{Authorization : `Bearer ${localStorage.getItem('token')}`},action.payload)
        .then(response => {
            return {
                ...response.data,
            }
        })
        .catch(function (error) {
            // handle error
            return{
                success: false,
                error : error.response === undefined ? error : error.response ,
                status : error.response.status
            }
           
        })
        .finally(function (error) {
            // always executed 

        })
        );
});

if(saveDriversData.success){
yield put({
    type: "CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_SUCCESS",
    payload: saveDriversData,
});
}else{
switch (true) {
    case saveDriversData.status === 401:
            yield put({
                type: "CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_UNAUTHORIZED",
                payload:{
                    success:false,
                    status: saveDriversData.status,
                    errors : saveDriversData.error.data

                }
            });
        break;
    case saveDriversData.status === 404:            
            yield put({
                type: "CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_NOTFOUND",
                payload:{
                    success:saveDriversData.success,
                    status: saveDriversData.status,
                    errors : saveDriversData.error.data,
                }
            });
        break;
    case saveDriversData.status === 403:
            yield put({
                type: "CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_FORBIDDEN",
                payload: {
                    success:saveDriversData.success,
                    status: saveDriversData.status,
                    errors : saveDriversData.error.data

                }
            });
        break;

    default:
            yield put({
                type: "CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_FAILED",
                payload: saveDriversData,
            });
        break;
}
}
} catch (error) {
    
    
        yield put({ type:'CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_FAILED', payload: error });
    }

};

// ************************** User data ***************************

export const userDataWatcher = function*(){
    yield takeEvery('GET_USERS_DATA',userDataWorker)
}
const userDataWorker= function*(action){
    try {
        const result = yield call(() => {
            return(
            http2.httpRequst('GET','api/users/',{},null)
            .then(response => {

                return {
                    ...response.data
                }
            })
            .catch(function (error) {
                // handle error
                return{
                    success: false,
                    error : error.response === undefined ? error : error.response ,
                    status : error.response.status
                }
               
            })
            .finally(function () {

                // always executed 
            })
            );
    });

if(result.success){
   
    yield put({
        type: "FETCH_USERS_DATA_SUCCESS",
        payload: result,
    });
}else{
   
    switch (true) {
        case result.status === 401:
                yield put({
                    type: "FETCH_USERS_DATA_UNAUTHORIZED",
                    payload: result,
                });
            break;
        case result.status === 404:
                yield put({
                    type: "FETCH_USERS_DATA_NOTFOUND",
                    payload: result,
                });
            break;
    
        default:
                yield put({
                    type: "FETCH_USERS_DATA_FAILED",
                    payload: result,
                });
            break;
    }
}

 } catch (error) {
yield put({
    type: "FETCH_USERS_DATA_FAILED_END",
    payload: {
        success: false,
        error : "Error 500",
        status : "500"
    }
});
}  
}        

