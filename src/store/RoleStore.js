import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        roles:[],
        loading: false
    },
    getters: {
        GET_ALL_ROLES (state) {
            return state.roles
        },
        GET_LOADING(state) {
            return state.loading;
        }
    },
    mutations: {
        SET_ALL_ROLES (state, roles) {
            state.roles = roles
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        }
    },
    actions:{
        async getRoles(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/settings/roles')
                .then(response => {
                    context.commit("SET_ALL_ROLES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async addSingleRole(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/settings/roles', {
                role_name: payload.role_name,
               }).then(response => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
            context.commit("SET_LOADING", false)
        },

        async editSingleRole(context, payload) {
            await this.$axios.put('/api/settings/roles/'+ payload.selected_id , {
                role_name: payload.edit_role_name,
            }).then(response => {
                    console.log(response.data)
                    context.commit("SET_ALL_ROLES", response.data.data)
            }).catch((error) => {
                    console.log(error)
            })
        },

        async disableSingleRole(context, payload) {
            await this.$axios.delete('/api/settings/roles/'+ payload.selected_id).then(response => {
                    console.log(response.data)
                    context.commit("SET_ALL_ROLES", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },
    }
  }
  