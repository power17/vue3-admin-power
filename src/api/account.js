import request from './index'
export const addAccount = (data) => request.post('/account/addSteamAccount', data)