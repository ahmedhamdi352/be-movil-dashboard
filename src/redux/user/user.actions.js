import  UserActionsTypes  from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user,
});

export const SetConfig =(config)=>({
  type: UserActionsTypes.SET_CONFIG,
  payload: config
})
