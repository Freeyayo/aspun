import {
    HOST,
    LOGIN,
    INSERT_STAGE_MASTER,
    GET_STAGE_MASTER,
    REQUEST_METHOD
} from './const'

export const CredentialService = {
    login: (username, password) => {
        return fetch(`${HOST}/${LOGIN}`, {
            method: REQUEST_METHOD.POST,
            body: JSON.stringify({ username, password }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
}

export const CRUDService = {
    getStageMaster: () => {
        return fetch(`${HOST}/${GET_STAGE_MASTER}`, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    insertStageMaster: (stage, sort, status) => {
        return fetch(`${HOST}/${INSERT_STAGE_MASTER}`, {
            method: REQUEST_METHOD.POST,
            body: JSON.stringify({ stage, sort, status }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
}