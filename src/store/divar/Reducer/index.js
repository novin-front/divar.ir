const initState = {
    seo_data: {},
    AllCategory:[],
    suggestion_list: [],
    AdvertisingList:[],
    BlogPosts: [],
    SingleBlogPosts: [],
    last_post_date:'',
    singlePostData:{},
    singleWidgetsData : {},
    tokenpost:''
}
const AdvertisingReducer = (state = initState, action) => {
    let newState = state;
    
    switch (action.type) {
        case 'FETCH_ADVERTISING_DATA_SUCCESS':
            let {
                seo_details,
                widget_list,
                suggestion_list,
                last_post_date,
            } = action.payload
            newState = {
                ...state,
                seo_data:seo_details,
                AdvertisingList: widget_list,
                suggestion_list,
                last_post_date
            }
            break;
        case 'GET_ADVERTISING_DATA_ERROR':

            newState = {
                ...state,
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;
        case 'FETCH_ADVERTISING_DATA_FAILED_END':

            newState = {
                ...state,
                errorFor: "GetUsers",
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;

            case 'GET_ALL_CATEGORYES_DATA_SUCCESS':
            newState = {
                ...state,
                AllCategory: action.payload.categories,
            }
            break;
            case 'GET_ALL_CATEGORYES_DATA_FAILED':

            newState = {
                ...state,
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;
            case 'GET_ALL_CATEGORYES_DATA_FAILED_END':

            newState = {
                ...state,
                errorFor: "GetUsers",
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;




             case 'GET_SINGLE_POST_DATA_SUCCESS':
             let {
                 data,
                 token,
                 widgets,
             } = action.payload
             newState = {
                 ...state,
                 tokenpost : token,
                 singlePostData: data,
                 singleWidgetsData: widgets,
             }
             break;
             case 'GET_SINGLE_POST_DATA_FAILED':

             newState = {
                 ...state,
                 formsError: {
                     errorState: true,
                     type: 'danger',
                     errorMessage: 'داده مورد نظر دریافت نشد ',
                     errorTitel: 'خطا',
                     mainError: action.payload.error.message

                 }
             }
             break;
             case 'GET_SINGLE_POST_DATA_FAILED_END':

             newState = {
                 ...state,
                 errorFor: "GetUsers",
                 formsError: {
                     errorState: true,
                     type: 'danger',
                     errorMessage: 'داده مورد نظر دریافت نشد ',
                     errorTitel: 'خطا',
                     mainError: action.payload.error.message

                 }
             }
             break;




            case 'GET_BLOG_POST_DATA_SUCCESS':
            newState = {
                ...state,
                BlogPosts: action.payload,
            }
            break;
            case 'GET_BLOG_POST_DATA_FAILED':

            newState = {
                ...state,
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;
            case 'GET_BLOG_POST_DATA_FAILED_END':

            newState = {
                ...state,
                errorFor: "GetUsers",
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;

            case 'GET_SINGLE_BLOG_POST_SUCCESS':
                const convertToArray =()=>{
                    let value = Object.values(action.payload);
                    return value
                }
            newState = {
                ...state,
                SingleBlogPosts: convertToArray(),
            }
            break;
            case 'GET_SINGLE_BLOG_POST_FAILED':

            newState = {
                ...state,
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;
            case 'GET_SINGLE_BLOG_POST_FAILED_END':

            newState = {
                ...state,
                errorFor: "GetUsers",
                formsError: {
                    errorState: true,
                    type: 'danger',
                    errorMessage: 'داده مورد نظر دریافت نشد ',
                    errorTitel: 'خطا',
                    mainError: action.payload.error.message

                }
            }
            break;

        default:
            newState = state;
            break;
            
    }
    return newState;
}
export default AdvertisingReducer;