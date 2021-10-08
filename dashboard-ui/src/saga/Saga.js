import { all, fork } from 'redux-saga/effects';
import { CreateClientSaga, GetClientSaga, UpdateClientSaga } from '../redux/client/Client.saga';


export default function* Saga() {
    yield all([
        fork(CreateClientSaga),
        fork(GetClientSaga),
        fork(UpdateClientSaga)
    ])
}