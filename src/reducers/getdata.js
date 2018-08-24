const getdata = (state = {}, action) => {
    switch (action.type) {
    case 'GET_NEWS':
        return { ...state, loading: true };
  
    case 'NEWS_RECEIVED':
        return {
            ...state,
            text : action.json,
            loading: false
        };
  
    default:
        return state;
    }
};

export default getdata;
  