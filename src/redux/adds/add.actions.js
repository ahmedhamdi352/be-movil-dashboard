import  AddActionsTypes  from "./user.types";

export const setCurrentData = (data) => ({
  type: AddActionsTypes.SET_ADD_DATA,
  payload: data,
});

export const setRowData =(data)=>({
  typr:AddActionsTypes.SET_ROW_DATA,
  payload: data,
})


