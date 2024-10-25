import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        users:[],
        loading: false
    },
    getters: {
        GET_ALL_USERS (state) {
            return state.users
        },
        GET_LOADING(state) {
            return state.loading;
        }
    },
    mutations: {
        SET_ALL_USERS (state, users) {
            state.users = users
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        }
    },
    actions:{
        async getUsers(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/users')
                .then(response => {
                    context.commit("SET_ALL_USERS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async addSingleUser(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/users', {
                first_name: payload.first_name,
                middle_name: payload.middle_name,
                last_name: payload.last_name,
                email: payload.email,
                role_id: payload.role_id,
              }).then(response => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
            context.commit("SET_LOADING", false)
        },

        async editSingleUser(context, payload) {
            await this.$axios.put('/api/brgy-users/'+ payload.selected_id , {
                first_name: payload.edit_first_name,
                middle_name: payload.edit_middle_name,
                last_name: payload.edit_last_name,
                email: payload.edit_email,
                role_id: payload.edit_role,
                is_active: payload.edit_active,
                
            }).then(response => {
                    console.log(response.data)
                    context.commit("SET_ALL_USERS", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },

        async disableSingleUser(context, payload) {
            await this.$axios.delete('/api/users/'+ payload.selected_id).then(response => {
                    console.log(response.data)
                    context.commit("SET_ALL_USERS", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },

        async changeUserPassword(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/change-password', {
                current_password: payload.current_password,
                new_password: payload.new_password,
              }).then(response => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
            context.commit("SET_LOADING", false)
        },
    }
  }
  