import { User } from "../../type";


export const SET_CURRENT_USER: string = "SET_CURRENT_USER";

export const setCurrentUser = (user: User | null) => ({
  type: SET_CURRENT_USER,
  payload: user
});
