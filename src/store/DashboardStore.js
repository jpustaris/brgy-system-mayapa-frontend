import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        dashboard:[],
        loading: false
    },
    getters: {
        GET_DASHBOARD_DATA (state) {
            return state.dashboard
        },
        GET_LOADING(state) {
            return state.loading;
        }
    },
    mutations: {
        SET_DASHBOARD_DATA (state, dashboard) {
            state.dashboard = dashboard
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        }
    },
    actions:{
        async getData(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-dashboard-data')
                .then(response => {
                    context.commit("SET_DASHBOARD_DATA", response.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        
    }
  }
  