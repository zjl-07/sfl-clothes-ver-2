import { all, takeLatest, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.action";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err));
  }
}

export function* onfetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollections);
}

export function* shopSagas() {
  yield all([call(onfetchCollectionStart)]);
}
