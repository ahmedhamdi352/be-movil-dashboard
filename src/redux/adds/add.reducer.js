import  AddActionType  from "./add.types";

const INITIAL_STATE = {
  AddData: [],
  RowData:{}
};

const addReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddActionType.SET_ADD_DATA:
      return {
        ...state,
        AddData: action.payload,
      };
      case AddActionType.SET_ROW_DATA:
        return {
          ...state,
          RowData: action.payload

        }
    
    default:
      return state;
  }
};

export default addReducer;
