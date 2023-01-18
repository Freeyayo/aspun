import {
    HOST,
    LOGIN,
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
    }
}