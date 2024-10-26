import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        blasts:[],
        loading: false,
        // indigencies:[],
    },
    getters: {
        GET_ALL_SMS_BLASTS (state) {
            return state.blasts
        },
        GET_LOADING(state) {
            return state.loading;
        }
    },
    mutations: {
        SET_ALL_SMS_BLAST (state, blasts) {
            state.blasts = blasts
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        }
    },
    actions:{
        async getBRGYSMSBlasts(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/blast-messages')
                .then(response => {
                    console.log(response)
                    context.commit("SET_ALL_SMS_BLAST", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async addBRGYSMSBlast(context, payload) {
            context.commit("SET_LOADING", true)
            console.log("Step2: ", payload.created_by_user_id)
            await this.$axios.post('/api/blast-messages', {
                member_ids: payload.member_ids,
                member_numbers: payload.member_numbers,
                message_content: payload.message_content,
              }).then(response => {
                console.log(response)
                context.commit("SET_LOADING", false)
              })
              .catch((error) => {
                console.log(error)
              })
        },

    }
  }
  