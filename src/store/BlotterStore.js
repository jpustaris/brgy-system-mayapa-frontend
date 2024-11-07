import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        blotters:[],
        new_blotter:[],
        loading: false,
    },
    getters: {
        GET_ALL_BLOTTERS (state) {
            return state.blotters
        },
        
        GET_NEW_BLOTTER (state) {
            return state.new_blotter
        },
        GET_LOADING(state) {
            return state.loading;
        },
    },
    mutations: {
        SET_ALL_BLOTTERS (state, blotters) {
            state.blotters = blotters
        },
        SET_NEW_BLOTTER (state, new_blotter) {
            state.new_blotter = new_blotter
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
    },
    actions:{
        async getBlotters(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/blotters')
                .then(response => {
                    context.commit("SET_ALL_BLOTTERS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async addSingleBlotter(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/blotters', {
                complainant: payload.complainant,
                defendant: payload.defendant,
                brgy_case_no: payload.brgy_case_no,
                complaint: payload.complaint,
                note: payload.note,
              }).then(response => {
                // console.log(response.data)
                context.commit("SET_NEW_BLOTTER", response.data.data)
              })
              .catch((error) => {
                // console.log(error)
              })
            context.commit("SET_LOADING", false)
        },

        async editSingleBlotter(context, payload) {
            await this.$axios.put('/api/blotters/'+ payload.selected_id , {
                complaint: payload.edit_complaint,
                note: payload.edit_note,
            }).then(response => {
                    // console.log(response.data)
                    context.commit("SET_ALL_BLOTTERS", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },

        async disableSingleBlotter(context, payload) {
            await this.$axios.delete('/api/blotters/'+ payload.selected_id).then(response => {
                    // console.log(response.data)
                    context.commit("SET_ALL_BLOTTERS", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },
    }
  }
  