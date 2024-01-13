import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import logger from "redux-logger";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
//import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
  },
  //middleware: (getDefaultMiddleware) => getgetDefaultMiddleware().concact([logger])
});

console.log(store.getState());
