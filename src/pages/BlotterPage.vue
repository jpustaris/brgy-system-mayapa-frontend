
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <img src="~assets/blotters-banner.jpg" width="100%">
            <div class="q-pa-md row justify-end q-mx-md border-bottom" style="border-bottom: 2px solid #DEDEDE; ">
                  <div><b>Date: </b>{{this.todate}}</div>
            </div>
      </div>

      <!-- <div class="row justify-between">
        <div class="q-pa-md">
          <div class=" q-ma-sm" style="font-size: 15px">
            <b>Filters:</b>
          </div>
            <div class="items-start q-pa-md row">
                <div class="col-sm-6 col-xs-6 q-pa-sm">
                  <q-input class="textbox" rounded outlined v-model="filter" placeholder="Search" >
                    <template v-slot:append>
                      <q-avatar>
                          <q-icon name="search" />
                      </q-avatar>
                    </template>
                  </q-input>
                </div>
                <div class="col-sm-6 col-xs-6 q-pa-sm">
                  <div>
                    <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm q-pa-md" 
                    rounded  
                    color="green" 
                    icon-right="add" 
                    label="File a Blotter" 
                    @click="openAddBlotterForm()" />
                  </div>
                </div>
            </div> 
        </div>
        <div class="q-pa-md ">
          <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, rgb(53 255 241) 0%, rgb(1 136 92) 100%)"
            >
            <q-card-section>
              <div class="text-h1 text-center">{{ blotters.length }}</div>
              <div class="text-subtitle2">TOTAL BLOTTERS FILED</div>
            </q-card-section>
            </q-card>
        </div>
       
      </div> -->
      <div class="q-pa-md row">
        <div class="col-md-6">
          <div class=" q-ma-sm" style="font-size: 15px">
            <b>Filters:</b>
          </div>
            <div class="items-start q-pa-md row">
                <div class="col-sm-6 col-xs-6 q-pa-sm">
                  <q-input class="textbox" rounded outlined v-model="filter" placeholder="Search" >
                    <template v-slot:append>
                      <q-avatar>
                          <q-icon name="search" />
                      </q-avatar>
                    </template>
                  </q-input>
                </div>
                <div class="col-sm-6 col-xs-6 q-pa-sm">
                  <div>
                    <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm q-pa-md" 
                    rounded  
                    color="green" 
                    icon-right="add" 
                    label="Add Complaint" 
                    @click="openAddBlotterForm()" />
                  </div>
                </div>
            </div> 
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, rgb(53 255 241) 0%, rgb(1 136 92) 100%)"
            >
            <q-card-section>
              <div class="text-h1 text-center">{{ blotters.length }}</div>
              <div class="text-subtitle2">TOTAL BLOTTERS FILED</div>
            </q-card-section>
            </q-card>
        </div>
      </div>
      

        
          <div class="q-pa-md" style="padding-top:20px;">
              <q-table
                style="border-top:#006596 8px solid; border-bottom:#006596 4px solid"
                class="table"
                title="Blotter Management"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :pagination="pagination"
                :filter="filter"
              >
              <template v-slot:body-cell-active="props">
                  <q-td :props="props">
                    <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm bg-teal text-white" 
                    icon-right="edit" 
                    label="Edit Blotter" 
                    @click="openEditBlotterForm(props)" />

                    <!-- <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm bg-blue text-white" 
                    icon-right="fa-solid fa-eye" 
                    label="View Blotter" 
                    @click="openViewBlotterForm(props)" /> -->

                    <!-- <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm" 
                    color="red" 
                    icon-right="delete" 
                    label="Disable Blotter" 
                    @click="disableBlotterMethod(props)" /> -->
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

                
                <q-dialog v-model="addBlotterForm" transition-show="scale" transition-hide="scale">
                  <q-card  style="min-width: 600px">
                    <q-card-section class="bg-green text-white">
                      <div class="text-h6">Complaint Form</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="q-pt-md q-ma-md q-pt-none">
                      <q-form
                        class="q-gutter-md"
                      >
                      <h6>Please make sure that the details you encode is correct and without error. <i>Only the Complaint and the note is editable.</i></h6>
                      <q-separator></q-separator>
                      <q-select 
                        class="select text-no-wrap" 
                        v-model="complainant" 
                        :options="residents" 
                        option-value="id" 
                        option-label="display_name" 
                        label="Complainant" 
                        emit-value 
                        map-options 
                        borderless/>

                      <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="defendant"
                          placeholder="Defendant"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-user" />
                            </q-avatar>
                          </template>
                        </q-input>

                        <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="brgy_case_no"
                          placeholder="Brgy Case Number"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa fa-file" />
                            </q-avatar>
                          </template>
                        </q-input>
                        <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          type="text"
                          v-model="complaint"
                          placeholder="Complaint"
                          lazy-rules
                          color="dark"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                          autogrow
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-edit" />
                            </q-avatar>
                          </template>
                        </q-input>

                        <!-- <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="note"
                          placeholder="Note"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-add" />
                            </q-avatar>
                          </template>
                        </q-input> -->
                        <q-separator></q-separator>
                        <q-card-actions align="right" >
                          <q-btn
                          class="text-center bg-green text-white"
                          id="addSubmitBtn"
                          label="File Blotter" 
                          type="submit"
                          @click="addBlotter()"
                          />
                        </q-card-actions>
                      </q-form>
                    </q-card-section>
                  </q-card>
                </q-dialog>

                <q-dialog v-model="editBlotterForm">
                <q-card style="min-width: 600px">
                  <q-card-section class="bg-teal text-white text-h6">
                    <div >Edit Blotter Details</div>
                  </q-card-section>
                  <q-separator />

                  <q-card-section style="max-height: 50vh" class="scroll" >
                    <q-form
                      class="q-gutter-md"
                    >
                    <p class="text-black">Edit blotter details for Brgy case number {{ edit_brgy_case_number }}</p>
                    <q-separator></q-separator>  
                    <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_complaint"
                        label="Complaint"
                      />

                      <!-- <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_note"
                        label="Note"
                      /> -->
                      <div>
                        <q-btn 
                        @click="editBlotterMethod"
                        id="editSubmitBtn" 
                        label="Submit" 
                        type="submit" 
                        class="bg-teal text-white full-width"
                        />
                        </div>
                    </q-form>
                  </q-card-section>

                  <q-separator />

                  <q-card-actions align="right">
                    <q-btn flat label="Close" class="bg-teal text-white" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
          </div>
  </div>

  <q-dialog v-model="viewBlotterDialog">
    <q-card class="bg-blue text-white" style="min-width: 1080px">
      <q-card-section>
        <div class="text-h6">Blotter Details</div>
      </q-card-section>
      <q-separator />
      <q-card-section style="max-height: 82vh" class="scroll" >
        <div id="printableArea" class="q-pa-md bg-white text-black">
        <div class="text-center">
          <p class="text-black">Republic of the Philippines <br>
            Province of Laguna<br>
            Municipality of Calamba<br>
            Barangay Mayapa<br>
          </p>
          <p class="text-black q-mt-xl">Office of The Lupong Tagapamayapa
          </p>
        </div>

        <div class="q-pa-md">
          <table>
            <tr>
              <td><strong>Complainants : </strong> {{ complainant_name }}<br>
                -------Against-------<br>
                <strong>Defendant : </strong>{{ edit_defendant }}</td>
              <td><strong>Brgy. Case Number: : </strong>{{ edit_brgy_case_number }}<br>
                <strong>For: </strong></td>
            </tr>
          </table>
        </div>
          <div class="row q-pt-md q-px-md">
            <div class="col-md-12">
              <p class="text-center text-black"><strong>Complaint</strong></p>
              <p class="text-black"> We hereby complain against above named defendant 
                for violating our rights and interest in the following manners:<br>
                {{ edit_complaint }}
              </p>
              <p class="text-black q-pt-md" >Therefore, we pray that the following 
                reliefs be granted to us in accordance with the law and/or equity. <br>
                {{ edit_complaint }}
              </p>
              <p class="text-black q-pt-md" >Made this {{ blotter_created_at }} 
              </p>

              <p class="text-black q-pt-md" ><u> {{ complainant_name }} </u><br>Complainant  
              </p>

              <p class="text-black q-pt-md" ><u> {{ brgy_captain }} </u><br>Brgy. Captain  
              </p>
            </div>
          </div> 
          <div>
            <i>Note : {{ edit_note }} </i>
              <span style="float:right; font-size: 15px; text-align: right"><b>Date: </b>{{this.todate}}
              </span>
          </div>
          <!-- <div id="non-printable">
            <q-btn 
                :disabled="loading"
                :loading="loading" 
                class="q-mx-sm bg-teal text-white" 
                icon-right="edit" 
                label="Print" 
                @click="printDiv('printableArea')" />
          </div> -->
        </div>

      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Close" style="background-color: #006596" class="text-white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- <q-dialog v-model="response_dialog" backdrop-filter="blur(4px) saturate(150%)">
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
    </q-dialog> -->

</template>

<script>
 
import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue'
import { ref } from 'vue'
import moment from 'moment'
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export default defineComponent({
  name: 'Blotter Management',
  data: () => ({
      // response_dialog:false,
      // dialog_title:'',
      // dialog_message:'',
      selected: ref([]),
      complainant_name:'', 
      filter: ref(''),
      blotter_created_at:'',
      edit_complainant:'',
      edit_defendant:'',
      edit_brgy_case_number:'',
      edit_complaint:'',
      edit_note:'',
      brgy_captain:'Mr Barangay Mayapa',
      complainant:'',
      defendant:'',
      brgy_case_no:'',
      complaint:'',
      note:'',

      addBlotterForm:false,
      editBlotterForm:false,
      rows:[],
      status:0,
      todate:date,
      prodFilter:ref(''),
      viewBlotterDialog:false,
      persistent: ref([false]),
      pagination: {
        page: 1,
        rowsPerPage: 25
      },
      columns : [
          {
            name: 'brgy_case_no',
            required: true,
            label: 'Barangay Case Number',
            align: 'left',
            field: row => row.brgy_case_no,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'complaint', label: 'Complainant',  field: row => row.complainant.first_name + " " + row.complainant.middle_name+ " " + row.complainant.last_name,align: 'left', sortable: true },
          { name: 'complaint', label: 'Case',  field: row => row.complaint,align: 'left', sortable: true },
          { name: 'defendant', label: 'Defendant',  field: row => row.defendant,align: 'left', sortable: true },
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
    ...mapGetters('Blotter', {
      blotters: 'GET_ALL_BLOTTERS',
      loading: "GET_LOADING",
      api_response: "GET_API_RESPONSE",
    }),
    ...mapGetters('UserManagement', {
      users: 'GET_ALL_USERS',
    }),
    ...mapGetters('ResidentManagement', {
      residents: 'GET_ALL_RESIDENTS',
    }),
    ...mapActions('Blotter',[
      'getBlotters',
      'addSingleBlotter',
      'editSingleBlotter',
      'disableSingleBlotter',
    ]),
    ...mapActions('UserManagement',[
      'getUsers',
    ]),
    ...mapActions('ResidentManagement',[
      'getResidents',
    ])
  },
  methods: {

    async clickToggle(prop){
      if(prop.row.is_active==1){
        this.status=0;
      }else{
        this.status=1;
      }
    },

    async disableBlotterMethod(prop){
      console.log(prop);
      this.selected_id = prop.row.id;    
      await this.disableSingleBlotter({
        selected_id: this.selected_id,
      }).then(response => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async openAddBlotterForm(){
      this.addBlotterForm = true;
    },

    async addBlotter() {
      await this.addSingleBlotter({
        complainant: this.complainant,
        defendant: this.defendant,
        brgy_case_no: this.brgy_case_no,
        complaint: this.complaint,
        note: this.note
      }).then(response => {
          // console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
        this.refresh()
    },

    async editBlotterMethod(){
      await this.editSingleBlotter({
        edit_complaint: this.edit_complaint,
        edit_note: this.edit_note,
      }).then(response => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      this.refresh()
    },

    async printDiv(divId) {
        var printContents = await document.getElementById(divId).innerHTML;
        var originalContents = await document.body.innerHTML;
        document.body.innerHTML = printContents;
        await window.print();
        this.viewBlotterDialog = false
        document.body.innerHTML = originalContents;
    },

    async refresh(){
      await this.getBlotters;
      await this.getResidents;
      this.rows = this.blotters;
      this.addBlotterForm = false;
      this.editBlotterForm = false;
    },

    async openViewBlotterForm(prop){
      await this.setSelected(prop);
      this.viewBlotterDialog = true;
    },

    async setSelected(prop){
      console.log(prop);
      this.selected_id = prop.row.id;
      this.edit_brgy_case_number = prop.row.brgy_case_no;
      this.edit_complaint = prop.row.complaint;
      this.edit_defendant = prop.row.defendant;
      this.edit_note = prop.row.note;
      var temp = moment(prop.row.created_at);
      this.blotter_created_at =  temp.format('MMMM Do YYYY');
      this.complainant_name = prop.row.complainant.first_name +" "+ prop.row.complainant.last_name;
    },

    async openEditBlotterForm(prop){
      console.log(prop);
      await this.setSelected(prop);
      this.editBlotterForm = true;
    },
  },
  // watch: { 

  // },
  async beforeMount(){
      // await this.getAllUsers;
        this.refresh()
        // console.log(this.users)
      
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
  