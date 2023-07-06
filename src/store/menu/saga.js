import { put, takeLatest } from 'redux-saga/effects';
import { SHOW_CARD, HIDE_CARD } from './actionTypes';

// Worker saga that handles the SHOW_CARD action
function* showCardSaga() {
 // yield put({ type: 'SHOW_CARD' }); // Dispatches the SHOW_CARD action to the reducer
}

// Worker saga that handles the HIDE_CARD action
function* hideCardSaga() {
 // yield put({ type: 'HIDE_CARD' }); // Dispatches the HIDE_CARD action to the reducer
}

// Watcher saga that listens for specific actions and triggers the corresponding worker saga
function* watchCardActions() {
 // yield takeLatest(SHOW_CARD, showCardSaga); // Listens for SHOW_CARD action and calls showCardSaga
 // yield takeLatest(HIDE_CARD, hideCardSaga); // Listens for HIDE_CARD action and calls hideCardSaga
}
function* menuSaga() {
 // yield watchCardActions(); // Entry point for your saga, which starts the watcher saga
}


export default menuSaga


