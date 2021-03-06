import { all } from "redux-saga/effects";
import { tweetsSaga } from "./ducks/tweets/sagas";
import { TagsSaga } from "./tags/sagas";

export default function* rootSaga() {
    yield all([
        tweetsSaga(),
        TagsSaga()
    ]);
};