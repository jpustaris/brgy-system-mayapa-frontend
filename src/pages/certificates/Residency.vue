
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <!-- <img src="~assets/certificates-banner.jpg" width="100%"> -->
            <!-- <div class="q-pa-md row justify-end q-mx-md border-bottom" style="border-bottom: 2px solid #DEDEDE; ">
                  <div><b>Date: </b>{{this.todate}}</div>
            </div> -->
            <img src="~assets/img/certs-banner.jpg" width="100%">
            <!-- <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <div style="font-size: 20px"><b> Mayapa > Brgy System > Certificates > Barangay Residency</b></div>
                </div>
                <div class="col-6">
                    <div style="font-size: 15px; text-align: right"><b>Date: </b>{{this.todate}}</div>
                </div>
            </div> -->
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
                   
                    class="q-mx-sm q-pa-md" 
                    rounded  
                    color="green" 
                    icon-right="add" 
                    label="Create Certificate" 
                    @click="openAddCertificateForm()" />
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
              <div class="text-h1 text-center">{{ certificates.length }}</div>
              <div class="text-subtitle2">TOTAL CERTIFICATE OF RESIDENCY FILED</div>
            </q-card-section>
            </q-card>
        </div>
      </div>
      

        
          <div class="q-pa-md" style="padding-top:20px">
            
              <q-table
                style="border-top:rgb(2, 110, 124) 8px solid; border-bottom:rgb(2, 110, 124) 4px solid"
                class="table"
                title="Certificate of Residency Management"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :pagination="pagination"
                :filter="filter"
              >
              <template v-slot:body-cell-active="props">
                  <q-td :props="props">
                    <!-- <q-btn 
                    
                    class="q-mx-sm bg-teal text-white" 
                    icon-right="edit" 
                    label="Edit Certificate" 
                    @click="openEditCertificateForm(props)" /> -->

                    <q-btn 
                  
                    class="q-mx-sm bg-blue text-white" 
                    icon-right="fa-solid fa-eye" 
                    label="View Certificate" 
                    @click="openViewCertificateForm(props)" />

                    <!-- <q-btn 
                   
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

                <div v-if="viewCertificateDialog">
                  <q-card class="q-mt-xl" style="min-width: 1080px">
                    <q-card-section>
                      <div class="text-h6">Certificate Details</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section>
                      <div id="printableArea" class="q-pa-md bg-white">
                        <table style="width:100%">
                          <tr>
                            <td style="width:10%">
                              <div class="col-md-2"><img src="~assets/mayapa-logo.png" width="100%"></div>
                        
                            </td>
                            <td style="width:80%">
                              <div  class="text-center">
                              <p>REPUBLIKA NG PILIPINAS <br>
                                LALAWIGAN NG LAGUNA<br>
                                <b>SANGGUNIANG BARANGAY NG MAYAPA</b><br>
                                TEL Nos. (049) 543-0236<br><br>
                                E-MAIL Address: <u>barangaymayapa2013@gmail.com</u>
                              </p>
                            </div>
                            </td>
                            <td style="width:10%" class=" text-center">
                              <div class="col-md-2"><img src="~assets/mayapa-logo.png" width="100%"></div>
                        
                            </td>
                          </tr>
                        </table> 
                      <div>
                        
                        <p class="text-h4 text-center q-my-xl q-pt-lg" style="border-top: 5px solid rgb(243 164 42);">
                          <strong>PROOF OF RESIDENCY</strong>
                        </p>
                      </div>

                      <div class="q-pa-md q-mt-xl">
                        <p>
                          <b>TO WHOM IT MAY CONCERN:</b>
                        </p>

                        <p class="para">
                          This is to certify that <u> {{ edit_fullname }} </u> , <u> {{ edit_age }} </u> Years old
                          , <u> {{ edit_gender }} </u>, a resident of <u> {{ edit_address }} </u>, Barangay Mayapa Calamba City, 
                          is included in the Roster of Barangay since  <u> {{ edit_living_in_brgy_since }} </u> up to present.
                        </p>
                        <p class="para"> This certification is issued upon the request of the above mentioned name for  
                          <u> {{ edit_purpose }} </u> .
                        </p>
                        <p class="para"> Issued this <u> {{ day_now }} </u> day of <u> {{ month_now }} </u>  2024 at Barangay Mayapa, Calamba City.
                        </p>
                      </div><br>
                      <div class="q-mt-lg">
                        <table style="width:100%">
                          <tr>
                            <td style="width:60%"></td>
                            <td class=" text-center">
                              <p class="q-pt-md"><strong>VICTORIA T. SUMBILLO</strong><br>PUNONG BARANGAY</p>
                              <p><span class="text-red">Note</span>: This is invalid without official seal</p>
                            </td>
                          </tr>
                        </table>  
                      </div>
                      </div>

                    </q-card-section>
                    <q-separator />
                    <q-card-actions align="right">
                      <!-- <q-btn flat label="Close" style="background-color: #006596" class="text-white" v-close-popup /> -->
                      <q-btn 
                      
                        class="q-mx-sm bg-teal text-white" 
                        icon-right="print" 
                        label="Print" 
                        @click="print('printableArea')" />
                      <q-btn 
                       
                        class="q-mx-sm bg-pink text-white" 
                        icon-right="close" 
                        label="Close" 
                        @click="viewCertificateDialog = false" />
                      <!-- <q-btn flat label="Close" style="background-color: #006596" class="text-white" v-close-popup /> -->
                    </q-card-actions>
                  </q-card>
                </div>
                
                <q-dialog v-model="addCertificateForm" transition-show="scale" transition-hide="scale">
                  <q-card  style="min-width: 600px">
                    <q-card-section class="bg-green text-white">
                      <div class="text-h6">Create Certificate of Residency</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="q-pt-md q-ma-md q-pt-none">
                      <q-form
                        class="q-gutter-md"
                      >
                      <q-select 
                        class="select text-no-wrap" 
                        v-model="resident_id" 
                        :options="residents" 
                        option-value="id" 
                        option-label="display_name" 
                        label="Resident" 
                        emit-value 
                        map-options 
                        borderless/>
                                        
                        <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="purpose"
                          placeholder="Purpose"
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


                       
                        <q-separator></q-separator>
                        <q-card-actions align="right" >
                          <q-btn
                          class="text-center bg-green text-white"
                          id="addSubmitBtn"
                          label="Create Certificate"
                          type="submit"
                          @click="addCertificate()"
                          />
                        </q-card-actions>
                      </q-form>
                    </q-card-section>
                  </q-card>
                </q-dialog>

                <q-dialog v-model="editCertificateForm">
                <q-card style="min-width: 600px">
                  <q-card-section class="bg-teal text-white text-h6">
                    <div >Edit Certificate of Residency Details</div>
                  </q-card-section>
                  <q-separator />
                  <q-card-section style="max-height: 50vh" class="scroll" >
                    <q-form class="q-gutter-md" >
                    <p class="text-black">Edit certificate of residency details for control number {{ edit_control_number }}</p>
                    <q-separator></q-separator>  
                    <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_complaint"
                        label="Complaint"
                      />
                      <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_note"
                        label="Note"
                      />
                      <div>
                        <q-btn 
                        @click="editCertificateMethod"
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

  <!-- <q-dialog v-model="viewCertificateDialog">
    <q-card class="bg-blue text-white" style="min-width: 1080px">
      <q-card-section>
        <div class="text-h6">Certificate Details</div>
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
              <p class="text-black q-pt-md" >Made this {{ certificate_created_at }} 
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
        </div>

      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Close" style="background-color: #006596" class="text-white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog> -->

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
  name: 'Certificate of Residency',
  data: () => ({
      // response_dialog:false,
      // dialog_title:'',
      // dialog_message:'',
      selected: ref([]),
      complainant_name:'', 
      filter: ref(''),
      certificate_created_at:'',

      resident_id:'',

      purpose:'',

      day_now:'',
      month_now:'',

      edit_control_number:'',
      edit_fullname:'',
      edit_age:'',
      edit_gender:'',
      edit_address:'',
      edit_living_in_brgy_since:'',
      edit_purpose:'',

      brgy_captain:'Mr Barangay Mayapa',
      complainant:'',
      defendant:'',
      brgy_case_no:'',
      complaint:'',
      note:'',
      genders: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female'},
      ],

      

      addCertificateForm:false,
      editCertificateForm:false,
      rows:[],
      status:0,
      todate:date,
      prodFilter:ref(''),
      viewCertificateDialog:false,
      persistent: ref([false]),
      pagination: {
        page: 1,
        rowsPerPage: 25
      },
      columns : [
          {
            name: 'control_number',
            required: true,
            label: 'Control Number',
            align: 'left',
            field: row => row.control_number,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'fullname', label: 'Requestor',  
          field: row => row.resident_details == null ? "  " : 
          row.resident_details.first_name+' '+ row.resident_details.middle_name +' '+row.resident_details.last_name ,align: 'left', sortable: true },
          
          { name: 'age', label: 'Age',  
          field: row => row.resident_details == null ? "  " : 
          row.resident_details.age,align: 'center', sortable: true },
          
          { name: 'gender', label: 'Gender',  
          field: row => row.resident_details == null ? "  " : 
          row.resident_details.gender,align: 'center', sortable: true },
          
          { name: 'address', label: 'Address',  
          field: row => row.resident_details == null ? "  " : 
          row.resident_details.house_number+ ' ' + row.resident_details.street ,align: 'center', sortable: true },
          
          { name: 'living_in_brgy_since', label: 'Living in Brgy Since',  
          field: row => row.resident_details == null ? "  " : 
          row.resident_details.period_of_stay,align: 'center', sortable: true },
          
          { name: 'purpose', label: 'Purpose',  
          field: row => row.purpose,align: 'center', sortable: true },
          
          {
            name: 'active',
            required: true,
            label: 'ACTION',
            align: 'center',
            field: row => row.id,
            format: val => `${val}`,
            sortable: true
          },
        ]
      }),
  computed: {
    ...mapGetters('Certificate', {
      certificates: 'GET_ALL_CERTIFICATES',
      loading: "GET_LOADING",
    }),
    ...mapGetters('ResidentManagement', {
      residents: 'GET_ALL_RESIDENTS',
    }),
    ...mapActions('ResidentManagement',[
      'getResidents',
    ]),
    ...mapActions('Certificate',[
      'getBRGYResidencies',
      'addBRGYResidencyCertificate',
      // 'editSingleBlotter',
      // 'disableSingleBlotter',
    ]),

  },
  methods: {

    async clickToggle(prop){
      if(prop.row.is_active==1){
        this.status=0;
      }else{
        this.status=1;
      }
    },

    async disableCertificateMethod(prop){
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

    async openAddCertificateForm(){
      this.addCertificateForm = true;
    },

    async addCertificate() {
      await this.addBRGYResidencyCertificate({
        resident_id: this.resident_id,
        purpose: this.purpose,
      }).then(response => {
          console.log(response)
          this.refresh()
        })
        .catch((error) => {
          console.log(error)
        })
        this.refresh()
        location.reload();
    },

    async editCertificateMethod(){
      await this.editSingleBlotter({
        edit_control_number: this.edit_control_number,
        edit_fullname: this.edit_fullname,
        edit_age: this.edit_age,
        edit_gender: this.edit_gender,
        edit_address: this.edit_address,
        edit_living_in_brgy_since: this.edit_living_in_brgy_since,
        edit_purpose: this.edit_purpose,
      }).then(response => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      this.refresh()
    },

    async print(divId) {
        var printContents = await document.getElementById(divId).innerHTML;
        var originalContents = await document.body.innerHTML;
        document.body.innerHTML = printContents;
        await window.print();
        this.viewCertificateDialog = false
        document.body.innerHTML = originalContents;
    },

    async refresh(){
      await this.getBRGYResidencies;
      await this.getResidents;
      this.rows = this.certificates;
      this.addCertificateForm = false;
      this.editCertificateForm = false;
    },

    async openViewCertificateForm(prop){
      await this.setSelected(prop);
      this.viewCertificateDialog = true;
    },

    async setSelected(prop){
      console.log(prop);
      this.selected_id = prop.row.id;
      this.edit_control_number = prop.row.control_number;
      this.edit_fullname = prop.row.resident_details.first_name;
      this.edit_age = prop.row.resident_details.age;
      this.edit_gender = prop.row.resident_details.gender;
      this.edit_address = prop.row.resident_details.house_number + ', ' + prop.row.resident_details.building + ', ' + prop.row.resident_details.street;
      
      
      this.edit_purpose = prop.row.purpose;

      var temp1 = moment(prop.row.created_at);
      var temp2 = moment(prop.row.living_in_brgy_since);
      // this.edit_living_in_brgy_since = prop.row.living_in_brgy_since;
      this.certificate_created_at =  temp1.format('MMMM Do YYYY');
      this.edit_living_in_brgy_since =  temp2.format('Do of MMMM YYYY');

      this.day_now =  moment(this.todate).format('Do');
      this.month_now =  moment(this.todate).format('MMMM');

      // this.complainant_name = prop.row.complainant.first_name +" "+ prop.row.complainant.last_name;
    },

    async openEditCertificateForm(prop){
      console.log(prop);
      await this.setSelected(prop);
      this.editCertificateForm = true;
    },
  },
  // watch: { 

  // },
  async beforeMount(){
        this.refresh()

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
  