import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        certificates:[],
        loading: false,
        officials:[],
        new_certificate:[],
        message_ind:'',
        message_res:'',
        message_clr:'',
    },
    getters: {
        GET_NEW_CERT (state) {
            return state.new_certificate
        },
        GET_ALL_CERTIFICATES (state) {
            return state.certificates
        },
        GET_BRGY_OFFICIALS (state) {
            return state.officials
        },
        GET_LOADING(state) {
            return state.loading;
        },
        GET_MESSAGE_IND(state) {
            return state.message_ind;
        },
        GET_MESSAGE_RES(state) {
            return state.message_res;
        },
        GET_MESSAGE_CLR(state) {
            return state.message_clr;
        }
    },
    mutations: {

        SET_NEW_CERT (state, new_certificate) {
            state.new_certificate = new_certificate
        },
        SET_ALL_CERTIFICATES (state, certificates) {
            state.certificates = certificates
        },
        SET_BRGY_OFFICIALS (state, officials) {
            state.officials = officials
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_MESSAGE_IND(state, message_ind) {
            state.message_ind = message_ind;
        },
        SET_MESSAGE_RES(state, message_res) {
            state.message_res = message_res;
        },
        SET_MESSAGE_CLR(state, message_clr) {
            state.message_clr = message_clr;
        }
    },
    actions:{
        // async getCertificate(context) {
        //     context.commit("SET_LOADING", true)
        //     await this.$axios.get('/api/settings/certificates')
        //         .then(response => {
        //             context.commit("SET_ALL_CERTIFICATES", response.data.data)
        //         })
        //         .catch(error => {
        //         })
        //     context.commit("SET_LOADING", false)
        // },

        async getBRGYClearances(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/certificates/brgy-clearances')
                .then(response => {
                    context.commit("SET_ALL_CERTIFICATES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getBRGYOfficials(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-barangay-officials')
                .then(response => {
                    context.commit("SET_BRGY_OFFICIALS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getBRGYBusinessPermits(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/certificates/business-permits')
                .then(response => {
                    context.commit("SET_ALL_CERTIFICATES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getBRGYGoodMorals(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/certificates/good-moral')
                .then(response => {
                    context.commit("SET_ALL_CERTIFICATES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getBRGYIndigencies(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/certificates/indigencies')
                .then(response => {
                    context.commit("SET_ALL_CERTIFICATES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getBRGYResidencies(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/certificates/residencies')
                .then(response => {
                    context.commit("SET_ALL_CERTIFICATES", response.data.data)
                    context.commit("SET_LOADING", false)
                })
                .catch(error => {
                    context.commit("SET_LOADING", false)
                    console.log(error)
                })
        },


        async addBRGYIndigencyCertificate(context, payload) {
            context.commit("SET_LOADING", true);
            await this.$axios.post('/api/certificates/indigencies', {
                certificate_type_id: 2,
                resident_id: payload.resident_id,
                purpose: payload.purpose,
              }).then(response => {
                console.log(response)
                context.commit("SET_NEW_CERT", response.data.data)
                context.commit("SET_MESSAGE_IND", response.data.message_ind)
                context.commit("SET_LOADING", false)
                
              })
              .catch((error) => {
                console.log(error)
              })

        },

        async addBRGYResidencyCertificate(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/certificates/residencies', {
                certificate_type_id: 3,
                resident_id: payload.resident_id,
                purpose: payload.purpose,
              }).then(response => {
                // console.log(response)
                context.commit("SET_NEW_CERT", response.data.data)
                context.commit("SET_MESSAGE_RES", response.data.message_res)
                context.commit("SET_LOADING", false)
              })
              .catch((error) => {
                console.log(error)
              })
            
        },

        async addBRGYClearanceCertificate(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/certificates/brgy-clearances', {
                certificate_type_id: 1,
                resident_id: payload.resident_id,
                purpose: payload.purpose,
              }).then(response => {
                // console.log(response)
                context.commit("SET_NEW_CERT", response.data.data)
                context.commit("SET_MESSAGE_CLR", response.data.message_clr)
                context.commit("SET_LOADING", false)
              })
              .catch((error) => {
                console.log(error)
              })
        },

        // async editSingleCertificate(context, payload) {
        //     await this.$axios.put('/api/settings/certificates/'+ payload.selected_id , {
        //         name: payload.editName,
        //     }).then(response => {
        //             console.log(response.data)
        //             context.commit("SET_ALL_CERTIFICATES", response.data.data)
        //     }).catch((error) => {
        //             console.log(error)
        //         })
        // },

        // async disableSingleCertificate(context, payload) {
        //     await this.$axios.delete('/api/settings/certificates/'+ payload.selected_id).then(response => {
        //             console.log(response.data)
        //             context.commit("SET_ALL_CERTIFICATES", response.data.data)
        //     }).catch((error) => {
        //             console.log(error)
        //         })
        // },

    }
  }
  