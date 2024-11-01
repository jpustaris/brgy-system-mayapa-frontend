
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
      

      <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          class="text-black"
          active-color="white"
          indicator-color="teal"
          active-bg-color="teal"
          align="justify"
          narrow-indicator
        >
          <q-tab icon="edit"  name="profiling_form" label="Form" />
          <q-tab icon="list"  name="profiling_list" label="List" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="profiling_form">
            <!-- <div class="text-h6">Mails</div> -->
            <div class="items-start q-pa-md row">
            <div class="col-sm-12 col-xs-12 q-pa-sm">
            <q-card  style="min-width: 400px">
                    <q-card-section class="bg-green text-white">
                      <div class="text-h6">Add Resident Form</div>
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                                  hint="Example: Mr. Ms. Mrs. Dr."
                                  :rules="[val => !!val || 'Field is required']"
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
                                  hint="Example: Jr. Sr. II III"
                                  
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                              :rules="[val => !!val || 'Field is required']"
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
                        </div>
                        <div class="row">
                          <div class="col-md-3 col-sm-6 q-pa-sm">
                            <p class="text-black login-input padding-left: 20px;">Profile Img:</p>
                            <input @change="onFileChange" 
                            type="file" 
                            accept="image/*" 
                            hint="1x1 Picture" 
                            required
                            />
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
                          type="submit"
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
          </q-tab-panel>

          <q-tab-panel name="profiling_list">
            <div class="row q-pa-md ">
               <div class="col">
                <!-- <q-card class="q-ma-md q-pa-xl">
                <q-form  class="q-gutter-md" >
                <div class="row">
                  <div class="col"> 
                      <p class="text-black login-input padding-left: 20px;">Gender: </p>
                      <q-option-group
                        style="font-size: larger"
                        class="login-input padding-left: 20px;"
                        size="md"
                        v-model="list_gender"
                        :options="list_genders"
                        type="radio"
                      />
                  </div>
                  <div class="col"> 
                      <p class="text-black login-input padding-left: 20px;">Is Alive: </p>
                      <q-option-group
                        style="font-size: larger"
                        class="login-input padding-left: 20px;"
                        size="md"
                        v-model="list_alive"
                        :options="list_alives"
                        type="radio"
                      />
                  </div>
                  <div class="col"> 
                      <p class="text-black login-input padding-left: 20px;">PWD: </p>
                      <q-option-group
                        style="font-size: larger"
                        class="login-input padding-left: 20px;"
                        size="md"
                        v-model="list_PWD"
                        :options="list_PWDs"
                        type="radio"
                      />
                  </div>
                  <div class="col"> 
                      <p class="text-black login-input padding-left: 20px;">Voter: </p>
                      <q-option-group
                        style="font-size: larger"
                        class="login-input padding-left: 20px;"
                        size="md"
                        v-model="list_voter"
                        :options="list_voters"
                        type="radio"
                      />
                  </div>

                  <div class="col"> 
                      <p class="text-black login-input padding-left: 20px;">Health Workers: </p>
                      <q-option-group
                        style="font-size: larger"
                        class="login-input padding-left: 20px;"
                        size="md"
                        v-model="list_HW"
                        :options="list_HWs"
                        type="radio"
                      />
                  </div>
                  
                    
                </div>
                <div class="row">
                  <div class="col-md-12">
                  <q-btn
                      class="q-mx-sm q-pa-md fullWidth" 
                      color="green" 
                      label="Search" 
                      @click="searchFilter()" />
                    </div>
                </div>
                </q-form>
              </q-card> -->
              </div>
            </div>
            
              <div class="items-start q-pa-md row">
              <div class="col-sm-12 col-xs-12 q-pa-sm">
                <q-card  
                style="min-width: 400px;border-top:#006596 8px solid; border-bottom:#006596 4px solid"
                >
                        <!-- <q-card-section class="bg-green text-white">
                          <div class="text-h6">Profiling List</div>
                        </q-card-section> -->
                        <!-- <div> {{ this.rows }} </div> -->
                        

                        <q-separator />
                        <q-card-section class="q-ma-md q-pt-none">
                          <q-table
                          
                            class="table"
                            title="Resident Profile List"
                            :rows="rows"
                            :columns="columns"
                            row-key="name"
                            :pagination="pagination"
                            :filter="filter"
                          >
                          <template v-slot:top-right>
                            <q-input class="textbox" 
                                rounded outlined v-model="filter"
                                label="Filter"
                                >
                                <template v-slot:append>
                                  <q-avatar>
                                      <q-icon name="search" />
                                  </q-avatar>
                                </template>
                              </q-input>
                              <q-btn 
                                outlined
                                class="q-ml-md bg-teal text-white" 
                                icon-right="add" 
                                label="Add Dead Form" 
                                @click="openDeathForm()" />
                          </template>
                          <template v-slot:body-cell-active="props">
                              <q-td :props="props">
                                <!-- <q-btn 
                                :disabled="loading"
                                :loading="loading" 
                                class="q-mx-sm bg-teal text-white" 
                                icon-right="edit" 
                                label="Edit Certificate" 
                                @click="openEditCertificateForm(props)" /> -->

                                <!-- <q-btn 
                                :disabled="loading"
                                :loading="loading" 
                                class="q-mx-sm bg-blue text-white" 
                                icon-right="fa-solid fa-eye" 
                                label="View Certificate" 
                                @click="openViewCertificateForm(props)" /> -->

                                <!-- <q-btn 
                                :disabled="loading"
                                :loading="loading" 
                                class="q-mx-sm" 
                                color="red" 
                                icon-right="delete" 
                                label="Disable Certificate" 
                                @click="disableCertificateMethod(props)" /> -->
                                <!-- <div>
                                    <div v-if="props.value == 1">
                                        <q-btn color="positive" icon="check" @click="clickToggle(props)" />
                                    </div>
                                    <div v-else>
                                        <q-btn color="secondary" icon="close" @click="clickToggle(props)" />
                                    </div>
                                </div> -->
                              </q-td>
                            </template>
                          </q-table>

                        </q-card-section>

                </q-card>
                </div>
              </div>
              
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

    </div>
  </div>
  
  </div>

  <q-dialog v-model="deathDeclarationForm" transition-show="scale" transition-hide="scale">
    <q-card  style="min-width: 600px">
      <q-card-section class="bg-green text-white">
        <div class="text-h6">Deatch Declaration Form</div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-md q-ma-md q-pt-none">
        <q-form
          class="q-gutter-md"
          @submit="addDeathDeclaration"
        >
        <p class="text-black login-input padding-left: 20px;">Resident:</p>
        <q-select 
          class="select text-no-wrap" 
          v-model="dead_id" 
          :options="residents" 
          option-value="id" 
          option-label="display_name" 
          label="Resident" 
          emit-value 
          map-options 
          borderless
          :rules="[val => !!val || 'Field is required']"
          />

          <p class="text-black login-input padding-left: 20px;">Reason of Death:</p>
          <q-input
            input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
            class="login-input"
            outlined
            type="text"
            v-model="death_reason"
            placeholder="Reason of Death"
            lazy-rules
            color="dark"
            bg-color="secondary"
            label-color="primary"
            no-error-icon
            autogrow
          >
        </q-input>

        <p class="text-black login-input padding-left: 20px;">Birthdate:</p>
        <q-input
          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
          class="login-input"
          outlined
          v-model="date_of_death"
          type="date"
          placeholder="Date of Death"
          lazy-rules
          color="black"
          bg-color="secondary"
          label-color="primary"
          :rules="[val => !!val || 'Field is required']"
        ></q-input>
 
            
          


          <q-separator></q-separator>
          <q-card-actions align="right" >
            <q-btn
            :disabled="loading"
            :loading="loading"
            class="text-center bg-green text-white"
            id="addSubmitBtn"
            type="submit"
            label="Create Certificate"
            />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>


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
      tab:'profiling_list',
      todate:date,
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
      filter:'',
      response_dialog:false,
      dialog_title:'',
      dialog_message:'',
      added_by:'',
      list_gender:'All',
      list_alive:'All',
      list_PWD:'All',
      list_voter:'All',
      list_HW:'All',
      deathDeclarationForm:false,
      dead_id:'',
      death_reason:'',
      date_of_death:'',
      list_genders: [
        { label: 'All', value: 'All' },
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'},
      ],

      list_HWs: [
        { label: 'All', value: 'All' },
        { label: 'HWs', value: 'HWs' },
        { label: 'Non-HWs', value: 'Non_HWs'},
      ],

      list_PWDs: [
        { label: 'All', value: 'All' },
        { label: 'PWDs', value: 'PWDs' },
        { label: 'Non-PWDs', value: 'Non_PWDs'},
      ],

      list_voters: [
        { label: 'All', value: 'All' },
        { label: 'Voters', value: 'Voters' },
        { label: 'Non-voters', value: 'Non_voters'},
      ],

      list_alives: [
        { label: 'All', value: 'All' },
        { label: 'Alive', value: 'Alive' },
        { label: 'Dead', value: 'Dead'},
      ],

      genders: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'},
      ],

      yes_no: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0},
      ],

      search_options:[
      { label: 'Alive', value: "Alive"},
      { label: 'PWD', value: "PWD"},
      { label: 'Health Worker', value: "HW"},
      { label: 'Voter', value: "Voter"},
      ],

      rows:[],
      status:0,
      pagination: {
        page: 1,
        rowsPerPage: 25
      },
      columns : [
          { name: 'salutation', label: 'Salutation',  
          field: row => row.salutation,
          align: 'left', 
          sortable: true },

          { name: 'fullname', label: 'Full Name',  
          field: row => row.first_name + ' ' +row.middle_name+ ' ' +row.last_name,
          align: 'left', 
          sortable: true },

          { name: 'email', label: 'Email',  
          field: row => row.email,
          align: 'left', 
          sortable: true },

          { name: 'contact_number', label: 'Contact Number',  
          field: row => row.contact_number,
          align: 'left', 
          sortable: true },

          { name: 'age', label: 'Age',  
          field: row => row.age,
          align: 'left', 
          sortable: true },

          { name: 'birthdate', label: 'Birthdate',  
          field: row => row.birthdate,
          align: 'left', 
          sortable: true },

          { name: 'gender', label: 'Gender',  
          field: row => row.gender,
          align: 'left', 
          sortable: true },

          { name: 'marital_status', label: 'Marital Status',  
          field: row => row.marital_status,
          align: 'left', 
          sortable: true },
          
          { name: 'marital_status', label: 'Address',  
          field: row => row.house_number + ' ' + row.building + ' ' + row.street,
          align: 'left', 
          sortable: true },

          { name: 'nationality', label: 'Nationality',  
          field: row => row.nationality,
          align: 'left', 
          sortable: true },

          { name: 'is_voter', label: 'Is a voter?',  
          field: row => row.is_voter == 1 ? "Registered" : "Non-Voter",
          align: 'left', 
          sortable: true },

          { name: 'is_HW', label: 'Is a Healthworker?',  
          field: row => row.is_HW == 1 ? "Healthworker" : "Non-HW",
          align: 'left', 
          sortable: true },

          { name: 'is_PWD', label: 'Is a PWD?',  
          field: row => row.is_PWD == 1 ? "Person with Disability" : "Non-PWD",
          align: 'left', 
          sortable: true },

          { name: 'is_deceased', label: 'Is alive?',  
          field: row => row.is_deceased == 1 ? "Alive" : "Deceased",
          align: 'left', 
          sortable: true },


          // {
          //   name: 'active',
          //   required: true,
          //   label: 'ACTION',
          //   align: 'center',
          //   field: row => row.id,
          //   format: val => `${val}`,
          //   sortable: true
          // },

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
      residents: 'GET_ALL_RESIDENTS',
    }),
    ...mapActions('ResidentManagement',[
      'getResidents',
      'searchResident',
      'declareDead',
    ]),
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


    async addDeathDeclaration(){
      let death_data = new FormData();
      death_data.append("dead_id", this.dead_id);
      death_data.append("death_reason", this.death_reason);
      death_data.append("date_of_death", this.date_of_death);
      this.declareDead(death_data).then((response => {
          console.log("Success!")
        }));
    },

    async searchFilter(){
      let search_data = new FormData();
      search_data.append("list_HW", this.list_HW);
      search_data.append("list_PWD", this.list_PWD);
      search_data.append("list_alive", this.list_alive);
      search_data.append("list_voter", this.list_voter);
      search_data.append("list_gender", this.list_gender);
      console.log(search_data);

      this.searchResident(search_data).then((response => {
          console.log("Success!")
        }));
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
          // console.log("Success!")
          // alert("Image uploaded successfully!");
          this.refresh();
        }));

      } catch (error) {
        console.error("Error uploading image", error);
      }
    },

    async openDeathForm(){
      console.log("Open Death Declaration Form");
      this.deathDeclarationForm = true;
    },

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
    await this.getResidents;
    this.rows = this.residents;
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
  