
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <img src="~assets/profiling-banner.jpg" width="100%">
            <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <!-- <div style="font-size: 20px"><b> Mayapa > Brgy System > Profiling Page</b></div> -->
                </div>
                <div class="col-6">
                    <div style="font-size: 15px; text-align: right"><b>Date: </b>{{this.todate}}</div>
                </div>
            </div>
      </div>
      
      <div class="items-start q-pa-md row">
          <div class="col-sm-12 col-xs-12 q-pa-sm">
            <q-card  style="min-width: 400px">
                    <q-card-section class="bg-green text-white">
                      <div class="text-h6">Profiling Form</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="q-pt-md q-ma-md q-pt-none">
                      <q-form  class="q-gutter-md" >
                        <div class="row">
                          
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">First Name:</p>
                              <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="first_name"
                              type="text"
                              placeholder="First Name"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Middle Name:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="middle_name"
                              type="text"
                              placeholder="Middle Name"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Last Name:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="last_name"
                              type="text"
                              placeholder="Last Name"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <div class="row ">
                              <div class="col-md-6 col-sm-12 q-pa-xs">
                                <p class="text-black login-input padding-left: 20px;">Salutation:</p>
                                <q-input
                                  input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                                  class="login-input"
                                  outlined
                                  v-model="salutation"
                                  type="text"
                                  placeholder="Salutation"
                                  lazy-rules
                                  color="black"
                                  bg-color="secondary"
                                  label-color="primary"
                                ></q-input>
                                </div>
                              <div class="col-md-6 col-sm-12 q-pa-xs">
                                <p class="text-black login-input padding-left: 20px;">Additional Name:</p>
                                <q-input
                                  input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                                  class="login-input"
                                  outlined
                                  v-model="additional_name"
                                  type="text"
                                  placeholder="Additional Name"
                                  lazy-rules
                                  color="black"
                                  bg-color="secondary"
                                  label-color="primary"
                                ></q-input>

                              </div>
                            </div>
                            
                          </div>

                        </div>
                        
                        <div class="row">
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Nationality:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="nationality"
                              type="text"
                              placeholder="Nationality"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Contact Number:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="contact_number"
                              type="text"
                              placeholder="Contact Number"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Email Address:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="email"
                              type="email"
                              placeholder="Email"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Age:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="age"
                              type="number"
                              placeholder="Age"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Address Street:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="street"
                              type="text"
                              placeholder="Address Street"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Address Building:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="building"
                              type="text"
                              placeholder="Address Building"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Address House Number:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="house_number"
                              type="text"
                              placeholder="Address House Number"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Address Other Details:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="other_location"
                              type="text"
                              placeholder="Address Other Details"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>

                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Weight in KG:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="weight_kg"
                              type="number"
                              placeholder="Weight in kg."
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>

                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Height in FT:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="height_ft"
                              type="number"
                              placeholder="Height in ft."
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>

                          

                          


                        </div>


                        <div class="row">
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Marital Status:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="marital_status"
                              type="text"
                              placeholder="Marital Status"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Unique Identity:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="unique_identity"
                              type="text"
                              placeholder="Unique Identity"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Birthdate:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="birthdate"
                              type="date"
                              placeholder="Birthdate"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Birthplace:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="birthplace"
                              type="text"
                              placeholder="Birth place"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>

                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Period of Stay:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="period_of_stay"
                              type="date"
                              hint="In Mayapa Since..."
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>


                          </div>
                          <div class="row">
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Gender:</p>
                              <q-option-group
                                style="font-size: larger"
                                class="login-input padding-left: 20px;"
                                size="md"
                                v-model="gender"
                                :options="genders"
                                type="radio"
                              />
                          </div>

                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Is a Health Worker?</p>
                              <q-option-group
                                style="font-size: larger"
                                class="login-input padding-left: 20px;"
                                size="md"
                                v-model="is_HW"
                                :options="yes_no"
                                type="radio"
                              />
                          </div>


                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Is a voter?</p>
                              <q-option-group
                                style="font-size: larger"
                                class="login-input padding-left: 20px;"
                                size="md"
                                v-model="is_voter"
                                :options="yes_no"
                                type="radio"
                              />
                          </div>

                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Is alive?</p>
                              <q-option-group
                                style="font-size: larger"
                                class="login-input padding-left: 20px;"
                                size="md"
                                v-model="is_deceased"
                                :options="yes_no"
                                type="radio"
                              />
                          </div>
                          
                        
                        </div>


                        <div class="row">
                          
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Is a Person with Disability?</p>
                              <q-option-group
                                style="font-size: larger"
                                class="login-input padding-left: 20px;"
                                size="md"
                                v-model="is_PWD"
                                :options="yes_no"
                                type="radio"
                              />
                          </div>

                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Disability:</p>
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="disability"
                              type="text"
                              placeholder="Disability"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                              hint="Example: Blind, Crippled, Amputated"
                            ></q-input>
                          </div>
                          </div><div class="row">
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Profile Img:</p>
                            <input @change="onFileChange" type="file" accept="image/*" hint="1x1 Picture" />
                            <!-- <q-input         
                            id="profile_pic"                     
                                @update:model-value="val => { profile_pic = val[0] }"
                                filled
                                type="file"
                                accept="image/*"
                                hint="1x1 Picture"
                              /> -->
                          </div>


                          <!-- <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Right Thumb Mark Img:</p>
                            <q-input                              
                                @update:model-value="val => { thumb_pic = val[0] }"
                                filled
                                type="file"
                                accept="image/*"
                                hint="Thumb Mark Picture"
                              />
                          </div> -->
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Note/Remarks:</p>
                            
                            <q-input
                              input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                              class="login-input"
                              outlined
                              v-model="note"
                              type="text"
                              placeholder="Enter Resident note / remarks"
                              lazy-rules
                              color="black"
                              bg-color="secondary"
                              label-color="primary"
                            ></q-input>
                          </div>
                        </div>

                        <q-separator></q-separator>
                        <q-card-actions align="right" >
                          <q-btn
                          :loading="loading"
                          class="text-center bg-green text-white"
                          label="Save Resident Profile"
                         @click="uploadProfile()"
                          />
                        </q-card-actions>
                      </q-form>
                    </q-card-section>
                  </q-card>
          </div>
      </div> 

      
        
          <div class="q-pa-md" style="padding-top:20px">
             
           

              <!-- <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
                  <q-card class="bg-green text-white" style="width: 300px">
                    <q-card-section>
                      <div class="text-h6">Success</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        Updated Succesfully
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-black">
                      <q-btn flat label="OK" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog> -->


          </div>
  </div>


  <q-dialog v-model="response_dialog" backdrop-filter="blur(4px) saturate(150%)">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          {{ dialog_title }}
        </q-card-section>

        <q-card-section>
          {{ dialog_message }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue'
import { ref } from 'vue'
import moment from 'moment'
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export default defineComponent({
  name: 'Profiling',
  data: () => ({

      todate:date,
      persistent: ref([false]),
      salutation:'',
      first_name:'',
      middle_name:'',
      last_name:'',
      additional_name:'',
      nationality:'',
      contact_number:'',
      email:'',
      age:'',
      profile_pic:'',
      image:null,
      imageUrl:null,
      // thumb_pic:'',
      gender:'Male',
      street:'',
      building:'',
      other_location:'',
      house_number:'',
      height_ft:'',
      weight_kg:'',
      is_HW:0,
      is_PWD:0,
      is_deceased:0,
      is_voter:0,
      disability:'',
      note:'',
      unique_identity:'',
      marital_status:'',
      birthdate:'',
      birthplace:'',
      period_of_stay:'',
      
      response_dialog:false,
      dialog_title:'',
      dialog_message:'',
      added_by:'',
      genders: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'},
      ],

      yes_no: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0},
      ]
      
      }),
  computed: {   
    ...mapActions('ResidentManagement',[
      'saveResidentProfile',
    ]),    
    ...mapGetters('Auth', {
      user_profile_details: 'GET_PROFILE',
    }),
    ...mapGetters('ResidentManagement', {
      loading: 'GET_LOADING',
    }),
  },
  methods: {
    ...mapActions('Auth', [
        'getProfile',
    ]),

    onFileChange(e) {
      const file = e.target.files[0];
      this.profile_pic = file;
      // Preview the image
      this.imageUrl = URL.createObjectURL(file);
    },


    async uploadProfile() {
      if (!this.profile_pic) {
        alert("Please select an image.");
        return;
      }

      // Create form data object
      this.added_by = this.user_profile_details.user_id;
      console.log("Debugging: ", this.added_by)
      let data = new FormData();
      data.append("profile_pic", this.profile_pic);
      data.append('salutation',this.salutation);
      data.append('first_name',this.first_name);
      data.append('middle_name',this.middle_name);
      data.append('last_name',this.last_name);
      data.append('additional_name',this.additional_name);
      data.append('nationality',this.nationality);
      data.append('contact_number',this.contact_number);
      data.append('email',this.email);
      data.append('age',this.age);

      data.append('is_HW',this.is_HW);
      data.append('is_PWD',this.is_PWD);
      data.append('is_deceased',this.is_deceased);
      data.append('is_voter',this.is_voter);
      data.append('birthdate',this.birthdate);
      data.append('birthplace',this.birthplace);
      
      data.append('period_of_stay',this.period_of_stay);
      
      data.append('street',this.street);
      data.append('house_number',this.house_number);
      data.append('building',this.building);
      data.append('other_location',this.other_location);
      data.append('height_ft',this.height_ft);
      data.append('weight_kg',this.weight_kg);
      data.append('gender',this.gender);
      data.append('note',this.note);
      data.append('marital_status',this.marital_status);
      data.append('unique_identity',this.unique_identity);
      data.append('added_by',this.user_profile_details.user_id);
      // data.append('profile_pic',this.profile_pic);

      try {

        await this.saveResidentProfile(data).then((response => {
          console.log("Success!")
          alert("Image uploaded successfully!");
          this.refresh();
        }));


        // const token = localStorage.getItem('access_token');
        // const response = await axios.post("/api/residents", data, {
        //   headers: {
        //     'Authorization': `Bearer ${token}`,
        //     "Content-Type": "multipart/form-data",
        //   },
        // });
        // alert("Image uploaded successfully!");

        

        // Optionally, save image to local storage
        // const reader = new FileReader();
        // reader.onload = (e) => {
        //   localStorage.setItem("uploadedImage", e.target.result);
        // };
        // reader.readAsDataURL(this.image);

      } catch (error) {
        console.error("Error uploading image", error);
      }
    },

    // saveProfile() {
    //   this.added_by = this.user_profile_details.user_id;
    //   console.log("Debugging: ", this.added_by)
    //   let data = new FormData();
    //   data.append('salutation',this.salutation);
    //   data.append('first_name',this.first_name);
    //   data.append('middle_name',this.middle_name);
    //   data.append('last_name',this.last_name);
    //   data.append('additional_name',this.additional_name);
    //   data.append('nationality',this.nationality);
    //   data.append('contact_number',this.contact_number);
    //   data.append('email',this.email);
    //   data.append('age',this.age);

    //   data.append('is_HW',this.is_HW);
    //   data.append('is_PWD',this.is_PWD);
    //   data.append('is_deceased',this.is_deceased);
    //   data.append('is_voter',this.is_voter);
    //   data.append('birthdate',this.birthdate);
    //   data.append('street',this.street);
    //   data.append('house_number',this.house_number);
    //   data.append('building',this.building);
    //   data.append('other_location',this.other_location);
    //   data.append('height_ft',this.height_ft);
    //   data.append('weight_kg',this.weight_kg);
    //   data.append('gender',this.gender);
    //   data.append('note',this.note);
    //   data.append('marital_status',this.marital_status);
    //   data.append('unique_identity',this.unique_identity);
    //   data.append('added_by',this.added_by);
    //   data.append('profile_pic',this.profile_pic);
      
    //   // let temp = this.profile_pic;
    //   // console.log("Debugging Here :",temp)
    //   // if (temp) {
    //   //   data.append('profile_pic',temp);
    //   // }
    //     this.saveResidentProfile(data).then((response => {
    //     console.log("Success!")
    //     this.refresh();
    //   }));
        
    // },
    async refresh(){
      this.salutation = '';
      this.first_name = '';
      this.last_name = '';
      this.additional_name = '';
      this.contact_number = '';
      this.email = '';
      this.age = '';
      this.profile_pic = '';
      // this.thumb_pic = '';
      this.gender = '';
      this.street = '';
      this.building = '';
      this.other_location = '';
      this.house_number = '';
      this.height_ft = '';
      this.weight_kg = '';
      this.is_HW = '';
      this.is_PWD = '';
      this.is_deceased = '';
      this.is_voter = '';
      this.disability = '';
      this.note = '';
      this.unique_identity = '';
      this.marital_status = '';
      this.birthdate = '';
      this.birthplace = '';
      this.period_of_stay = '';      
      this.added_by = '';
  },
  },

  
  
  async beforeMount(){
    if(!this.user_profile_details){
      alert("Error retrieving profile details")
      await this.getProfile()
    }
  },

})
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
}
  @media print
    {
        #non-printable { display: none; }
    }

</style>
  