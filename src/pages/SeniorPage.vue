
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <img src="~assets/seniors-banner.jpg" width="100%">
            <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <!-- <div style="font-size: 20px"><b> Mayapa > Brgy System > Seniors Page</b></div> -->
                </div>
                <div class="col-6">
                    <div style="font-size: 15px; text-align: right"><b>Date: </b>{{this.todate}}</div>
                </div>
            </div>
      </div>
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
            </div> 
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, rgb(53 255 241) 0%, rgb(1 136 92) 100%)"
            >
            <q-card-section>
              <div class="text-h1 text-center">{{ seniors.length }}</div>
              <div class="text-subtitle2">SENIORS TOTAL COUNT</div>
            </q-card-section>

            <!-- <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section> -->
            </q-card>
        </div>
      </div>

        
          <div class="q-pa-md" style="padding-top:20px">
              <q-table
                class="table"
                title="Seniors Details"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :pagination="pagination"
                :filter="filter"
              >
              <template v-slot:body-cell-active="props">
                  <q-td :props="props">
                    <!-- <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm bg-teal text-white" 
                    icon-right="edit" 
                    label="Edit Senior" 
                    @click="openEditSeniorForm(props)" /> -->

                    <q-btn 
                    class="q-mx-sm bg-blue text-white" 
                    icon-right="fa-solid fa-eye" 
                    label="View Senior" 
                    @click="openViewSeniorForm(props)" />

                    <!-- <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm" 
                    color="red" 
                    icon-right="delete" 
                    label="Disable Senior" 
                    @click="disableSeniorMethod(props)" /> -->
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

            

          </div>
  </div>

  <q-dialog v-model="viewSeniorDialog">
    <q-card  style="min-width: 1080px">
      <q-card-section class="bg-blue text-white">
        <div class="text-h6">Senior Details</div>
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
          <table style="font-size: larger;"> 
            <q-separator></q-separator>
            <p class="q-pt-md text-black" > <strong>Resident Name Details</strong></p>
            <q-separator></q-separator>
            <tr>
              <td>Salutation :  <strong>{{ salutation }} </strong></td>
              <td>First Name :  <strong>{{ first_name }}</strong></td>
              <td>Middle Name : <strong>{{ middle_name }} </strong> </td>
              <td>Last Name: : <strong>{{ last_name }}</strong></td>
            </tr>

            <tr>
              <td>Age :  <strong>{{ age }} </strong></td>
              <td>Birthdate :  <strong>{{ birthdate }}</strong></td>
              <td>Gender : <strong>{{ gender }} </strong> </td>
              <td>Nationality: : <strong>{{ nationality }}</strong></td>
            </tr>
            <br><br>
            <q-separator></q-separator>
            <p class="q-pt-md text-black" > <strong> Resident Location Details</strong></p>
            <q-separator></q-separator>
            <tr>
              <td>House Number :  <strong>{{ house_number }} </strong></td>
              <td>Street :  <strong>{{ street }} </strong></td>
              <td>Building :  <strong>{{ building }}</strong></td>
              <td>Other Location :  <strong>{{ other_location }}</strong></td>
            </tr>
            <br><br>
            <q-separator></q-separator>
            <p class="q-pt-md text-black" > <strong> Resident Contact and Other Details</strong></p>
            <q-separator></q-separator>
            <tr>
              <td>Contact Number :  <strong>{{ contact_number }} </strong></td>
              <td>Email :  <strong>{{ email }}</strong></td>
            </tr>

            <tr>
              <td>Height in ft :  <strong>{{ height_ft }} </strong></td>
              <td>Weight in kg :  <strong>{{ weight_kg }}</strong></td>
            </tr>

            <tr>
              <td>Marital Status :  <strong>{{ marital_status }} </strong></td>
              <td>Unique Identity :  <strong>{{ unique_identity }}</strong></td>
            </tr>
           
          </table>
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
        <i class="text-black q-pt-md" >Resident Details Encoded this {{ resident_created_at }} 
        </i>
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
  name: 'Seniors Page',
  data: () => ({
      // response_dialog:false,
      // dialog_title:'',
      // dialog_message:'',
      selected: ref([]),
      complainant_name:'', 
      filter: ref(''),
      resident_created_at:'',

      first_name:'',
      salutation:'',
      middle_name:'',
      last_name:'',
      additional_name:'',

      age:'',
      gender:'',
      nationality:'',
      birthdate:'',
      height_ft:'',
      weight_kg:'',
      marital_status:'',
      unique_identity:'',
      other_location:'',
      street:'',
      building:'',
      house_number:'',
      contact_number:'',
      email:'',
      note:'',
      rows:[],
      status:0,
      todate:date,
      prodFilter:ref(''),
      viewSeniorDialog:false,
      persistent: ref([false]),
      pagination: {
        page: 1,
        rowsPerPage: 25
      },
      columns : [
      {
            name: 'first_name',
            required: true,
            label: 'First Name',
            align: 'left',
            field: row => row.first_name,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'last_name',
            required: true,
            label: 'Last Name',
            align: 'left',
            field: row => row.last_name,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'nationality', label: 'Nationality',  field: row => row.nationality,align: 'left', sortable: true },
          { name: 'contact_number', label: 'Contact Number',  field: row => row.contact_number,align: 'center', sortable: true },
          { name: 'email', label: 'Email',  field: row => row.email,align: 'center', sortable: true },
          { name: 'age', label: 'Age',  field: row => row.age,align: 'center', sortable: true },
          { name: 'birthdate', label: 'Birth Date',  field: row => row.birthdate,align: 'center', sortable: true },
          { name: 'gender', label: 'Gender',  field: row => row.gender,align: 'center', sortable: true },
          { name: 'street', label: 'Location Street',  field: row => row.street,align: 'center', sortable: true },
          { name: 'building', label: 'Location Building',  field: row => row.building,align: 'center', sortable: true },
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
    ...mapGetters('Senior', {
      seniors: 'GET_ALL_SENIORS',
      loading: "GET_LOADING",
    }),
    ...mapActions('Senior',[
      'getSeniors',
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

    async disableSeniorMethod(prop){
      console.log(prop);
      this.selected_id = prop.row.id;    
      await this.disableSingleSenior({
        selected_id: this.selected_id,
      }).then(response => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },


    async refresh(){
      await this.getSeniors;
      this.rows = this.seniors;
    },

    async openViewSeniorForm(prop){
      await this.setSelected(prop);
      this.viewSeniorDialog = true;
    },

    async setSelected(prop){
      console.log(prop);
      this.selected_id = prop.row.id;
      this.first_name = prop.row.first_name;
      this.salutation = prop.row.salutation;
      this.middle_name = prop.row.middle_name;
      this.last_name = prop.row.last_name;
      this.additional_name = prop.row.additional_name;

      this.age = prop.row.age;
      this.gender = prop.row.gender;
      this.birthdate = prop.row.birthdate;
      this.nationality = prop.row.nationality;

      this.marital_status = prop.row.marital_status;
      this.email = prop.row.email;
      this.contact_number = prop.row.contact_number;

      this.unique_identity = prop.row.unique_identity;
      this.height_ft = prop.row.height_ft;
      this.weight_kg = prop.row.weight_kg;

      this.house_number = prop.row.house_number;
      this.street = prop.row.street;
      this.building = prop.row.building;
      this.other_location = prop.row.other_location;

      this.note = prop.row.note;
      var temp = moment(prop.row.created_at);
      this.resident_created_at =  temp.format('MMMM Do YYYY');
      this.complainant_name = prop.row.first_name +" "+ prop.row.last_name;
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
};
tr{
  height: 50px;
}

  @media print
    {
        #non-printable { display: none; }
    }

</style>
  