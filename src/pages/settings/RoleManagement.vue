
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <!-- <img src="~assets/role-management-banner.jpg" width="100%"> -->
            <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <div style="font-size: 60px"><b>ROLE MANAGEMENT</b></div>
                </div>
                <div class="col-6">
                    <div style="font-size: 35px; text-align: right; margin-top: 20px"><b> </b>{{this.todate}}</div>
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
                      label="Add Role" 
                      @click="openAddRoleForm()" />
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
              <div class="text-h1 text-center">{{ roles.length }}</div>
              <div class="text-subtitle2">ROLES COUNT</div>
            </q-card-section>
            </q-card>
        </div>
      </div>

        
          <div class="q-pa-md" style="padding-top:20px">
              <q-table
                style="border-top:rgb(2, 110, 124) 8px solid; border-bottom:rgb(2, 110, 124) 4px solid"
                class="table"
                title="Role Management"
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
                    label="Edit Role" 
                    @click="openEditRoleForm(props)" />

                    <q-btn 
                    :disabled="loading"
                    :loading="loading" 
                    class="q-mx-sm" 
                    color="red" 
                    icon-right="delete" 
                    label="Disable Role" 
                    @click="disableRoleMethod(props)" />
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

                
                <q-dialog v-model="addRoleForm" transition-show="scale" transition-hide="scale">
                  <q-card class="bg-blue text-white" style="min-width: 400px">
                    <q-card-section>
                      <div class="text-h6">Add Role Form</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                      <q-form
                        ref="addForm"
                        class="q-gutter-md"
                      >
                      <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="role_name"
                          placeholder="Role Name"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                        
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-edit" />
                            </q-avatar>
                          </template>
                        </q-input>

                        <q-card-actions align="right" >
                          <q-btn 
                          id="addSubmitBtn" 
                          class="text-center" 
                          label="Create New Role" 
                          @click="addRole()"
                          />
                        </q-card-actions>
                        
                      </q-form>
                    </q-card-section>

                    
                  </q-card>
                </q-dialog>

                <q-dialog v-model="editRoleForm">
                <q-card class="bg-teal text-white" style="min-width: 400px">
                  <q-card-section>
                    <div class="text-h6">Edit Role</div>
                  </q-card-section>
                  <q-separator />
                  <q-card-section style="max-height: 50vh" class="scroll" >
                    <q-form class="q-gutter-md" ref="editForm">
                      <q-input
                        color="black"
                        bg-color="secondary"
                        outlined
                        class="login-input"
                        v-model="edit_role_name"
                        label="Name"
                      />
                      <div>
                        <q-btn 
                        label="Submit" 
                        style="background-color: #006596"
                        @click="editRole()"
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

  <q-dialog v-model="viewProductDialog">
    <q-card class="bg-blue text-white" style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">Role Details</div>
      </q-card-section>
      <q-separator />
      <q-card-section style="max-height: 50vh" class="scroll" >
        <div>
          Role Name : {{ edit_role_name }}
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Close" style="background-color: #006596" class="text-white" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
 
import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue'
import { ref } from 'vue'
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const addForm = ref(null);
const editForm = ref(null);
export default defineComponent({
  name: 'User Management',
  data: () => ({
      selected: ref([]),
      filter: ref(''),
      role_name:'',
      edit_role_name:'',
      
      addRoleForm:false,
      editRoleForm:false,
      rows:[],
      status:0,
      todate:date,
      viewProductDialog:false,
      persistent: ref([false]),
      pagination: {
        page: 1,
        rowsPerPage: 25
      },
      columns : [
          { name: 'role_name', label: 'Role Name',  field: row => row.role_name,align: 'left', sortable: true },
          { name: 'is_active', label: 'Still Active?',  field: row => row.is_active == true ? "Yes":"No",align: 'center', sortable: true },
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
    ...mapGetters('Auth', {
      user: 'GET_PROFILE',
    }),    
    ...mapGetters('RoleManagement', {
      roles: 'GET_ALL_ROLES',
      loading:'GET_LOADING',
    }),
    ...mapActions('RoleManagement',[
      'getRoles',
      'addSingleRole',
      'editSingleRole',
      'disableSingleRole',
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

    async disableRoleMethod(prop){
      console.log(prop);
      this.selected_id = prop.row.id;    
      await this.disableSingleRole({
        selected_id: this.selected_id,
      }).then(response => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    async openAddRoleForm(){
      this.addRoleForm = true;
    },

    async addRole() {
      // await this.addSingleRole({
      //   role_name: this.role_name,
      // }).then(response => {
      //     console.log(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      //   this.refresh()

      this.$refs.addForm.validate().then(success => {
        if (success) {
          try {
            let data = new FormData();
            data.append("role_name", this.role_name);
            this.addSingleRole(data);
          } catch (error) {
            // console.error("Error uploading", error);
          }
            alert("Uploaded Successfully");
            this.refresh();
        }
        else {
          alert("Upload Failed");
        }
      })
      this.$router.push('/');
    },

    async editRole(){
      this.$refs.editForm.validate().then(success => {
        if (success) {
          try {
            let editData = new FormData();
            editData.append("edit_role_name", this.edit_role_name);
            this.editSingleRole(editData);
          } catch (error) {
            // console.error("Error uploading", error);
          }
            alert("Role Editted Successfully");
            this.refresh();
        }
        else {
          alert("Role Edit Failed");
        }
      })
      this.$router.push('/');

      // this.editSingleRole({
      //   edit_role_name: this.edit_role_name,
      // }).then(response => {
      //     console.log(response)
      //   })
      // this.refresh()
    },

    async refresh(){
      await this.getRoles;
      this.rows = this.roles;
      this.addRoleForm = false;
      this.editRoleForm = false;
    },

 
    async setSelected(prop){
      console.log(prop);
      this.selected_id = prop.row.id;
      this.edit_role_name = prop.row.role_name;
    },

    async openEditRoleForm(prop){
      console.log(prop);
      await this.setSelected(prop);
      this.editRoleForm = true;
    },
  },
  // watch: { 

  // },
  async beforeMount(){
        this.refresh()
  },
})
</script>