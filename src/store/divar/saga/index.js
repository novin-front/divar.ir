import {
    takeEvery,
    takeLatest,
    put,
    call,
    all
} from 'redux-saga/effects';
import ServiceHttp from '../../../boot/HttpRequest/HttpService';
const http2 = new ServiceHttp()
const dataConfig = {"json_schema":{"category":{"value":"ROOT"}},"last-post-date":564151546529635}

// ************************** ADVERTISING data ***************************

export const advertisingDataWatcher = function* () {
    yield takeEvery('GET_ADVERTISING_DATA', advertisingDataWorker)
    console.log("this is saga wather 111 ");
}
const advertisingDataWorker = function* (action) {
    console.log("this is saga worker 333 ");

    try {
        const result = yield call(() => {
            return (
                // http2.httpRequst('POST', 'search/1/ROOT', {}, JSON.stringify(dataConfig))
                http2.httpRequst('GET', `web-search/${action.payload}`, {}, JSON.stringify(dataConfig))
                .then(response => {
                    return {
                        city : action.payload,
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });
        
        console.log("this is saga Result  ", result);
        console.log("this is saga hasOwnProperty  ", result.hasOwnProperty("widget_list"));

        if (result.hasOwnProperty("widget_list")) {

            yield put({
                type: "FETCH_ADVERTISING_DATA_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                // case result.status === 401:
                //     yield put({
                //         type: "FETCH_ADVERTISING_DATA_UNAUTHORIZED",
                //         payload: result,
                //     });
                //     break;
                // case result.status === 404:
                //     yield put({
                //         type: "FETCH_ADVERTISING_DATA_NOTFOUND",
                //         payload: result,
                //     });
                //     break;

                default:
                    yield put({
                        type: "FETCH_ADVERTISING_DATA_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "FETCH_ADVERTISING_DATA_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}


// ************************** get Categoryes data ***************************

export const getCategoryesDataWatcher = function* () {
    yield takeEvery('GET_ALL_CATEGORYES_DATA', getCategoryesDataWorker)
    console.log("this is saga getCategoryes wather 111 ");
}
const getCategoryesDataWorker = function* (action) {
    console.log("this is saga getCategoryes worker 333 ");

    try {
        const result = yield call(() => {
            return (
                http2.httpRequst('GET', 'categories?source=internal', {},)
                .then(response => {
                    return {
                        ...response.data
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log("this is saga GET_ALL_CATEGORYES_DATA error  33333 ", error);

                    return {
                        success: false,
                        error: error.response === undefined ? error : error.response,
                        status: error.response.status
                    }

                })
                .finally(function () {

                    // always executed 
                })
            );
        });

        console.log("this is saga Result GET_ALL_CATEGORYES_DATA ", result);

        if (result.result == "success") {

            yield put({
                type: "GET_ALL_CATEGORYES_DATA_SUCCESS",
                payload: result,
            });
        } else {

            switch (true) {
                default:
                    yield put({
                        type: "GET_ALL_CATEGORYES_DATA_FAILED",
                        payload: result,
                    });
                    break;
            }
        }

    } catch (error) {
        yield put({
            type: "GET_ALL_CATEGORYES_DATA_FAILED_END",
            payload: {
                success: false,
                error: "Error 500",
                status: "500"
            }
        });
    }
}