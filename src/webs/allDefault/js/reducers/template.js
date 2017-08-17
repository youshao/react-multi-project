/**
 * reducer方法模板
 */
import {
    // CREATE_USER,
    // UPDATE_USER,
    // DELETE_USER,
} from '../actions/actionsTypes'

export default function user(state = {}, action) {
    switch (action.type) {
        case 'CREATE_USER':
            //创建用户
            return action.data
        case 'UPDATE_USER':
            //修改用户信息
            return Object.assign({}, state, action.data)
        case 'DELETE_USER':
            //删除用户
            return {}
        default:
            return state;
    }
}