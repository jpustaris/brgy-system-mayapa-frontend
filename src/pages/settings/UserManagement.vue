
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <!-- <img src="~assets/user-management-banner.jpg" width="100%"> -->
            <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <div style="font-size: 60px"><b> USER MANAGEMENT</b></div>
                </div>
                <div class="col-6">
                    <div style="font-size: 35px; text-align: right; margin-top: 20px;"><b>Date: </b>{{this.todate}}</div>
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
                <div class="col-sm-6 col-xs-6 q-pa-sm">
                  <div>
                    <q-btn 
                      :disabled="loading"
                      :loading="loading" 
                      class="q-mx-sm q-pa-md" 
                      rounded  
                      color="blue" 
                      icon-right="add" 
                      label="Add a User" 
                      @click="openAddUserForm()" />
                  </div>

                </div>
            </div> 
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <q-card
            class="my-card text-white"
            style="background: blue"
            >
            <q-card-section>
              <div class="text-h1 text-center">{{ users.length }}</div>
              <div class="text-subtitle2">TOTAL USERS</div>
            </q-card-section>
            </q-card>
        </div>
      </div>



        
          <div class="q-pa-md" style="padding-top:20px">
              <q-table
                style="border-top:rgb(2, 110, 124) 8px solid; border-bottom:rgb(2, 110, 124) 4px solid"
                class="table"
                title="User Management"
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
                    class="q-mx-sm bg-blue text-white" 
                    icon-right="edit" 
                    label="Edit User" 
                    @click="openEditUserForm(props)" />

                    <!-- <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm bg-blue text-white" 
                    icon-right="fa-solid fa-eye" 
                    label="View User" 
                    @click="openViewUserForm(props)" /> -->

                    <!-- <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm" 
                    color="red" 
                    icon-right="delete" 
                    label="Disable User" 
                    @click="disableUserMethod(props)" /> -->
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

                
                <q-dialog v-model="addUserForm" transition-show="scale" transition-hide="scale">
                  <q-card  style="min-width: 600px">
                    <q-card-section class="bg-blue text-white">
                      <div class="text-h6">Add a User</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="q-pt-md q-ma-md q-pt-none">
                      <q-form
                        ref="addForm"
                        class="q-gutter-md"
                      >
                      <q-select 
                        class="select text-no-wrap" 
                        v-model="role_id" 
                        :options="roles" 
                        option-value="id" 
                        option-label="role_name" 
                        label="Role" 
                        emit-value 
                        map-options 
                        borderless/>

                      <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="first_name"
                          placeholder="First Name"
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
                          v-model="middle_name"
                          placeholder="Middle Name"
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
                          v-model="last_name"
                          placeholder="Last Name"
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

                        <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          type="email"
                          v-model="email"
                          placeholder="Email"
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

                        
                        <q-separator></q-separator>
                        <q-card-actions align="right" >
                          <q-btn
                          class="text-center bg-blue text-white"
                          id="addSubmitBtn"
                          label="Create a New User" 
                          @click="addUser()"
                          />
                        </q-card-actions>
                      </q-form>
                    </q-card-section>
                  </q-card>
                </q-dialog>

                <q-dialog v-model="editUserForm">
                <q-card style="min-width: 600px">
                  <q-card-section class="bg-teal text-white text-h6">
                    <div >Edit User Details</div>
                  </q-card-section>
                  <q-separator />

                  <q-card-section style="max-height: 50vh" class="scroll" >
                    <q-form
                      ref="editForm"
                      class="q-gutter-md"
                    >
                    <!-- <p class="text-black">Edit user details for Brgy case number {{ edit_brgy_case_number }}</p> -->
                    <q-separator></q-separator>  
                    <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_first_name"
                        label="First Name"
                      />

                      <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_middle_name"
                        label="Middle Name"
                      />

                      <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_last_name"
                        label="Last Name"
                      />

                      <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_email"
                        label="Email"
                      />

                      <q-select 
                        class="select text-no-wrap" 
                        v-model="edit_role" 
                        :options="roles" 
                        option-value="id" 
                        option-label="role_name" 
                        label="Role" 
                        emit-value 
                        map-options 
                        borderless/>
                        <q-checkbox
                          v-model="edit_active"
                          label="Is Still Active?"
                          checked-icon="task_alt"
                          unchecked-icon="highlight_off"
                          color="green"
                          keep-color
                        />
                      <div>
                        <q-btn 
                        :loading="loading"
                        :disable="loading"
                        @click="editUserMethod"
                        id="editSubmitBtn" 
                        label="Submit" 
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

  <q-dialog v-model="viewUserDialog">
    <q-card class="bg-blue text-white" style="min-width: 1080px">
      <q-card-section>
        <div class="text-h6">User Details</div>
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
            <tr >
              <td><strong>Role : </strong> {{ edit_role }}</td>
              
            </tr>
          </table>
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
const addForm = ref(null);
const editForm = ref(null);
export default defineComponent({
  name: 'User Management',
  data: () => ({
      selected: ref([]),
      filter: ref(''),

      first_name:'',
      middle_name:'',
      last_name:'',
      email:'',
      role_id:'',

      edit_first_name:'',
      edit_middle_name:'',
      edit_last_name:'',
      edit_email:'',
      edit_role:'',
      edit_active:ref(false),

      user_created_at:'',
      user_role_name:'',   

      addUserForm:false,
      editUserForm:false,
      rows:[],
      status:0,
      todate:date,
      prodFilter:ref(''),
      viewUserDialog:false,
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
          { name: 'middle_name', label: 'Middle Name',  field: row => row.middle_name,align: 'left', sortable: true },
          { name: 'last_name', label: 'Last Name',  field: row => row.last_name,align: 'left', sortable: true },
          { name: 'email', label: 'Email',  field: row => row.email,align: 'center', sortable: true },
          { name: 'role', label: 'Role',  field: row => row.user_role.role_name,align: 'center', sortable: true },
          { name: 'is_active', label: 'Still Active?',  field: row => row.is_active == true ? "Yes":"No" ,align: 'center', sortable: true },
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
    ...mapGetters('UserManagement', {
      users: 'GET_ALL_USERS',
      loading: "GET_LOADING",
    }),

    ...mapGetters('RoleManagement', {
      roles: 'GET_ALL_ROLES',
    }),

    ...mapActions('UserManagement',[
      'getUsers',
      'addSingleUser',
      'editSingleUser',
      'disableSingleUser',
    ]),

    ...mapActions('RoleManagement',[
      'getRoles',
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

    async disableUserMethod(prop){
      console.log(prop);
      this.selected_id = prop.row.id;    
      await this.disableSingleUser({
        selected_id: this.selected_id,
      }).then(response => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async openAddUserForm(){
      this.addUserForm = true;
    },

    async addUser() {
      this.$refs.addForm.validate().then(success => {
        if (success) {
          try {
            let data = new FormData();
            data.append("role_id", this.role_id);
            data.append("first_name", this.first_name);
            data.append("first_name", this.middle_name);
            data.append("first_name", this.last_name);
            data.append("first_name", this.email);
            this.addSingleUser(data);
          } catch (error) {
            // console.error("Error uploading", error);
          }
            alert("Uploaded Successfully");
            this.refresh();
        }
        else {
          alert("Adding User Failed");
        }
      })
      this.$router.push('/');

      // await this.addSingleUser({
      //   role_id: this.role_id,
      //   first_name: this.first_name,
      //   middle_name: this.middle_name,
      //   last_name: this.last_name,
      //   email: this.email
      // }).then(response => {
      //     // console.log(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      //   this.refresh()
    },

    async editUserMethod(){


      this.$refs.editForm.validate().then(success => {
        if (success) {
          try {
            let edit_data = new FormData();
            edit_data.append("edit_first_name", this.edit_first_name);
            edit_data.append("edit_middle_name", this.edit_middle_name);
            edit_data.append("edit_last_name", this.edit_last_name);
            edit_data.append("edit_email", this.edit_email);
            edit_data.append("edit_role", this.edit_role);
            edit_data.append("edit_active", this.edit_active);
            this.editSingleUser(edit_data);
          } catch (error) {
            // console.error("Error uploading", error);
          }
            alert("User Editted Successfully");
            this.refresh();
        }
        else {
          alert("User Edit Failed");
        }
      })
      this.$router.push('/');

      // await this.editSingleUser({
      //   edit_first_name: this.edit_first_name,
      //   edit_middle_name: this.edit_middle_name,
      //   edit_last_name: this.edit_last_name,
      //   edit_email: this.edit_email,
      //   edit_role: this.edit_role,
      //   edit_active: this.edit_active,
        
      // }).then(response => {
      //     console.log(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      // this.refresh()
    },

    // async printDiv(divId) {
    //     var printContents = await document.getElementById(divId).innerHTML;
    //     var originalContents = await document.body.innerHTML;
    //     document.body.innerHTML = printContents;
    //     await window.print();
    //     this.viewUserDialog = false
    //     document.body.innerHTML = originalContents;
    // },

    async refresh(){
      await this.getUsers;
      await this.getRoles;
      this.rows = this.users;
      this.addUserForm = false;
      this.editUserForm = false;
    },

    async openViewUserForm(prop){
      await this.setSelected(prop);
      this.viewUserDialog = true;
    },

    async setSelected(prop){
      console.log(prop);
      this.selected_id = prop.row.id;
      this.edit_first_name = prop.row.first_name;
      this.edit_middle_name = prop.row.middle_name;
      this.edit_last_name = prop.row.last_name;
      this.edit_email = prop.row.email;
      this.edit_active = ref(prop.row.is_active);
      this.edit_role = prop.row.user_role.id;
      var temp = moment(prop.row.created_at);
      this.user_created_at =  temp.format('MMMM Do YYYY');
      this.user_role_name = prop.row.user_role.role_name;
      this.editUserForm = true;
    },

    async openEditUserForm(prop){
      console.log(prop);
      await this.setSelected(prop);
      
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
  