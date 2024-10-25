import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        certificates:[],
        loading: false,
        officials:[],
        // indigencies:[],
    },
    getters: {
        GET_ALL_CERTIFICATES (state) {
            return state.certificates
        },
        GET_BRGY_OFFICIALS (state) {
            return state.officials
        },
        GET_LOADING(state) {
            return state.loading;
        }
    },
    mutations: {

        SET_ALL_CERTIFICATES (state, certificates) {
            state.certificates = certificates
        },
        SET_BRGY_OFFICIALS (state, officials) {
            state.officials = officials
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
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
            context.commit("SET_LOADING", true)
            console.log("Step2: ", payload.created_by_user_id)
            await this.$axios.post('/api/certificates/indigencies', {
                certificate_type_id: 4,
                resident_id: payload.resident_id,
                purpose: payload.purpose,
              }).then(response => {
                console.log(response)
                context.commit("SET_LOADING", false)
              })
              .catch((error) => {
                console.log(error)
              })

        },

        async addBRGYResidencyCertificate(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/certificates/residencies', {
                certificate_type_id: 5,
                resident_id: payload.resident_id,
                purpose: payload.purpose,
              }).then(response => {
                console.log(response)
                context.commit("SET_LOADING", false)
              })
              .catch((error) => {
                console.log(error)
              })
            
        },

        async addBRGYClearanceCertificate(context, payload) {
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/certificates/brgy-clearances', {
                certificate_type_id: 2,
                resident_id: payload.resident_id,
                purpose: payload.purpose,
              }).then(response => {
                console.log(response)
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
  