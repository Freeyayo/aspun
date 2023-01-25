import {
    HOST,
    LOGIN,
    INSERT_STAGE_MASTER,
    GET_STAGE_MASTER,
    GET_DROPDOWN_DATA,
    INSERT_CATEGORY,
    REQUEST_METHOD,
    GET_CATEGORY
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
    getCreateCategoryDropdown: () => {
        return fetch(`${HOST}/${GET_DROPDOWN_DATA}`, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    getCategoryList: () => {
        return fetch(`${HOST}/${GET_CATEGORY}`, {
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
    inserCategory: (
        category,
        categoryid,
        p_categoryid,
        sort,
        status,
        stagesIds,
        user_rolesIds
    ) => {
        return fetch(`${HOST}/${INSERT_CATEGORY}`, {
            method: REQUEST_METHOD.POST,
            body: JSON.stringify({
                category,
                categoryid,
                p_categoryid: p_categoryid === 'NIL' ? null : p_categoryid,
                sort,
                status,
                stagesIds,
                user_rolesIds
            }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}