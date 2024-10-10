import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        residents:[],
        loading: false
    },
    getters: {
        GET_ALL_RESIDENTS (state) {
            return state.residents
        },
        GET_LOADING(state) {
            return state.loading;
        }
    },
    mutations: {
        SET_ALL_RESIDENTS (state, residents) {
            state.residents = residents
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        }
    },
    actions:{
        async getResidents(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/residents')
                .then(response => {
                    context.commit("SET_ALL_RESIDENTS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async saveResidentProfile(context, payload) {
            console.log(payload.added_by)
            context.commit("SET_LOADING", true)
            await this.$axios.post('/api/residents', {
                salutation: payload.salutation,
                first_name: payload.first_name,
                middle_name: payload.middle_name,
                last_name: payload.last_name,
                additional_name: payload.additional_name,
                nationality: payload.nationality,
                contact_number: payload.contact_number,
                email: payload.email,
                age: payload.age,
                is_voter: payload.is_voter,
                is_HW: payload.is_HW,
                is_PWD: payload.is_PWD,
                is_deceased: payload.is_deceased,
                birthdate: payload.birthdate,
                gender: payload.gender,                
                height_ft: payload.height_ft,
                weight_kg: payload.weight_kg,
                marital_status: payload.marital_status,
                unique_identity: payload.unique_identity,
                house_number: payload.house_number,
                street: payload.street,
                building: payload.building,
                other_location: payload.other_location,
                note: payload.note,
                added_by:payload.added_by
              }).then(response => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
            context.commit("SET_LOADING", false)
        },

        async editSingleResident(context, payload) {
            await this.$axios.put('/api/residents/'+ payload.selected_id , {
                salutation: payload.edit_salutation,
                first_name: payload.edit_first_name,
                middle_name: payload.edit_middle_name,
                last_name: payload.edit_last_name,
                additional_name: payload.edit_additional_name,
                nationality: payload.edit_nationality,
                contact_number: payload.edit_contact_number,
                email: payload.edit_email,
                is_voter: payload.edit_is_voter,
                is_HW: payload.edit_is_HW,
                is_deceased: payload.edit_is_deceased,
                age: payload.edit_age,
                birthdate: payload.edit_birthdate,
                gender: payload.edit_gender,                
                height_ft: payload.edit_height_ft,
                weight_kg: payload.edit_weight_kg,
                marital_status: payload.edit_marital_status,
                unique_identity: payload.edit_unique_identity,
                house_number: payload.edit_house_number,
                building: payload.edit_building,
                other_location: payload.edit_other_location,
                note: payload.edit_note,


            }).then(response => {
                    console.log(response.data)
                    context.commit("SET_ALL_RESIDENTS", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },

        async disableSingleResident(context, payload) {
            await this.$axios.delete('/api/residents/'+ payload.selected_id).then(response => {
                    console.log(response.data)
                    context.commit("SET_ALL_RESIDENTS", response.data.data)
            }).catch((error) => {
                    console.log(error)
                })
        },
    }
  }
  