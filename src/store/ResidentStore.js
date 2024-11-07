import { extendWith } from "lodash"

/* eslint-disable no-prototype-builtins */
export default {
    namespaced: true,
    state: {
        residents:[],
        males:[],
        females:[],
        voters:[],
        non_voters:[],
        alives:[],
        deads:[],
        loading: false,
        new_resident : [],
    },
    getters: {
        
        GET_NEW_RESIDENT (state) {
            return state.new_resident
        },
        GET_ALL_RESIDENTS (state) {
            return state.residents
        },
        GET_MALES (state) {
            return state.males
        },
        GET_FEMALES (state) {
            return state.females
        },
        GET_VOTERS (state) {
            return state.voters
        },
        GET_NON_VOTERS (state) {
            return state.non_voters
        },

        GET_LOADING(state) {
            return state.loading;
        },
        GET_ALIVE_RESIDENTS (state) {
            return state.alives
        },
        GET_DECEASED_RESIDENTS(state) {
            return state.deads;
        }
    },
    mutations: {
        SET_NEW_RESIDENT  (state, new_resident) {
            state.new_resident = new_resident
        },
        SET_ALL_RESIDENTS (state, residents) {
            state.residents = residents
        },
        SET_MALES (state, males) {
            state.males = males
        },
        SET_FEMALES (state, females) {
            state.females = females
        },
        SET_VOTERS (state, voters) {
            state.voters = voters
        },
        SET_NON_VOTERS (state, non_voters) {
            state.non_voters = non_voters
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_ALIVE_RESIDENTS(state,alives ) {
            state.alives = alives;
        },
        SET_DECEASED_RESIDENTS(state, deads) {
            state.deads = deads;
        },
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

        async getMales(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-resident-males')
                .then(response => {
                    context.commit("SET_MALES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getFemales(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-resident-females')
                .then(response => {
                    context.commit("SET_FEMALES", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getVoters(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-resident-voters')
                .then(response => {
                    context.commit("SET_VOTERS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getNonVoters(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-resident-non-voters')
                .then(response => {
                    context.commit("SET_NON_VOTERS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getAliveResidents(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-alive-residents')
                .then(response => {
                    context.commit("SET_ALIVE_RESIDENTS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async getDeceasedResidents(context) {
            context.commit("SET_LOADING", true)
            await this.$axios.get('/api/get-deceased-residents')
                .then(response => {
                    context.commit("SET_DECEASED_RESIDENTS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        async declareDead(context,payload){

            let death_data = new FormData();
            death_data.append("id", payload.dead_id);
            death_data.append("death_reason", payload.death_reason);
            death_data.append("date_of_death", payload.date_of_death);
            death_data.append("is_deceased", 1);
            await this.$axios.post('/api/declare-dead-resident',death_data)
            .then(response => {
                // console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
        },



        async searchResident(context,payload) {
            context.commit("SET_LOADING", true)
            let search_data = new FormData();
            search_data.append("list_HW", this.list_HW);
            search_data.append("list_PWD", this.list_PWD);
            search_data.append("list_alive", this.list_alive);
            search_data.append("list_voter", this.list_voter);
            search_data.append("list_gender", this.list_gender);

            await this.$axios.post('/api/search-residents',search_data)
                .then(response => {
                    context.commit("SET_ALL_RESIDENTS", response.data.data)
                })
                .catch(error => {
                })
            context.commit("SET_LOADING", false)
        },

        

        async saveResidentProfile(context, payload) {
            // console.log(payload.profile_pic)
            context.commit("SET_LOADING", true)
            let data = new FormData();
            data.append('salutation',payload.salutation);
            data.append('first_name',payload.first_name);
            data.append('middle_name',payload.middle_name);
            data.append('last_name',payload.last_name);
            data.append('additional_name',payload.additional_name);
            data.append('nationality',payload.nationality);
            data.append('contact_number',payload.contact_number);
            data.append('email',payload.email);
            data.append('age',payload.age);
            data.append('is_HW',payload.is_HW);
            data.append('is_PWD',payload.is_PWD);
            data.append('is_deceased',payload.is_deceased);
            data.append('is_voter',payload.is_voter);
            data.append('birthdate',payload.birthdate);
            data.append('birthplace',payload.birthplace);
            data.append('period_of_stay',payload.period_of_stay);
            data.append('street',payload.street);
            data.append('house_number',payload.house_number);
            data.append('building',payload.building);
            data.append('other_location',payload.other_location);
            data.append('height_ft',payload.height_ft);
            data.append('weight_kg',payload.weight_kg);
            data.append('gender',payload.gender);
            data.append('note',payload.note);
            data.append('marital_status',payload.marital_status);
            data.append('unique_identity',payload.unique_identity);
            data.append('added_by',payload.added_by);
            data.append('profile_pic', payload.profile_pic);
            // console.log("Debugging Here :",data)
            // formData.append('file', payload.profile_pic);
            await this.$axios.post('/api/residents',data, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }).then(response => {
                context.commit("SET_NEW_RESIDENT", response.data.data)
                // console.log(response.data.data)
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
  