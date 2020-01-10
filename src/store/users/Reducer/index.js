const initState ={
        tokenData : {},
        formsError:{
            errorState:false,
            errorFor : '',
            status : '',
            type : '',
            errorMessage:'',
            errorTitle :'',
            mainError:'',
            getAllCity : '',
            AllCity : '',
            cacheDriver :'',
        },
       userList :[],
}
const UsersReducer = (state=initState , action) => {
    let newState = state;
    switch (action.type) {
            case 'FETCH_USERS_DATA_SUCCESS':
                let {data} = action.payload
                newState ={
                    ...state,
                    userList : action.payload.data
                }
            break;
            case 'GET_USERS_DATA_ERROR':
                
                    newState ={
                        ...state,
                        formsError :{
                            errorState:true,
                            type : 'danger',
                            errorMessage:'داده مورد نظر دریافت نشد ',
                            errorTitel:'خطا',
                            mainError: action.payload.error.message
                            
                        }
                    }
            break;
            case 'FETCH_USERS_DATA_FAILED_END':
                
                    newState ={
                        ...state,
                        errorFor:"GetUsers",
                        formsError :{
                            errorState:true,
                            type : 'danger',
                            errorMessage:'داده مورد نظر دریافت نشد ',
                            errorTitel:'خطا',
                            mainError: action.payload.error.message
                            
                        }
                    }
            break;
            case 'CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_SUCCESS':

                    newState ={
                        ...state,
                        formsError :{
                            errorState:true,
                            errorFor : 'CreateDriver',
                            status : '200',
                            type : 'success',
                            errorMessage:'رمز عبور با موفقیت تغییر کرد.',
                            errorTitle:'ثبت موفق', 
                            mainError: action.payload.message
                            
                        }
                    }
            break;
            case 'CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_NOTFOUND':
                let {success,status,errors} = action.payload;

                const AllError = Object.values(errors.validation_errors)
                const newArray = AllError.map(itme =>{
                    return itme[0]
                });
                    newState ={
                        ...state,
                        formsError :{
                            errorState:true,
                            errorFor : 'CreateDriver',
                            status : status,
                            type : 'danger',
                            errorMessage:newArray,
                            errorTitle:"خطا در هنگام تغییر رمز عبور", 
                            mainError: errors,
                            stateCode : status,
                            
                        }
                    }
            break;
            case 'CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_FAILED':

                    newState ={
                        ...state,
                        formsError :{
                            errorState:true,
                            errorFor : 'CreateDriver',
                            status : action.payload.state,
                            type : 'danger',
                            errorMessage:"خطا در هنگام تغییر رمز عبور",
                            errorTitle:'خطا', 
                            mainError: action.payload.error
                            
                        }
                    }
            break;
            case 'CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_FORBIDDEN':

                newState ={
                    ...state,
                    formsError :{
                        errorState:true,
                        errorFor : 'CreateDriver',
                        status : action.payload.status,
                        type : 'danger',
                        errorMessage:'شما به این قسمت دسترسی ندارید',
                        errorTitle:'خطا', 
                        mainError: action.payload.errors
                        
                    }
                }
            break;

            case 'CHANGE_USER_PASSWORD_IN_CONTROL_PANEL_UNAUTHORIZED':

                    newState ={
                        ...state,
                        formsError :{
                            errorState:true,
                            errorFor : 'CreateDriver',
                            status : action.payload.status,
                            type : 'danger',
                            errorMessage:'شما معتبر نیست token',
                            errorTitle:'خطای token', 
                            mainError: action.payload.errors
                            
                        }
                    }
            break;
            default:
            newState = state;
            break;
    }
    return newState;
}
export default UsersReducer;