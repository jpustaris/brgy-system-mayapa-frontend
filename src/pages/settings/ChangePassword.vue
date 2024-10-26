
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <img src="~assets/change-password-banner.jpg" width="100%">
            <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <!-- <div style="font-size: 20px"><b> Mayapa > Brgy System > Settings > Change Password Page</b></div> -->
                </div>
                <div class="col-6">
                    <div style="font-size: 15px; text-align: right"><b>Date: </b>{{this.todate}}</div>
                </div>
            </div>
      </div>
      
      <div class="items-start q-pa-md row">
          <div class="col-sm-4 col-xs-6 q-pa-sm">
            <q-card  style="min-width: 400px">
                    <q-card-section class="bg-green text-white">
                      <div class="text-h6">Change Password </div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section class="q-pt-md q-ma-md q-pt-none">
                      <q-form
                        class="q-gutter-md"
                      >
                      <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="current_password"
                          id="current_password"
                          type="password" hint="Current Password" 
                          placeholder="Current Password"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-lock" />
                            </q-avatar>
                          </template>
                        </q-input>
                        <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="new_password"
                          id="new_password"
                          type="password" hint="New Password" 
                          placeholder="New Password"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-lock" />
                            </q-avatar>
                          </template>
                        </q-input>
              

                        <q-input
                          input-style="font-size: 18px; font-weight: 900; padding-left: 20px;"
                          class="login-input"
                          outlined
                          v-model="confirm_password"
                          id="confirm_password"
                          type="password" hint="Confirm Password" 
                          placeholder="Confirm Password"
                          lazy-rules
                          color="black"
                          bg-color="secondary"
                          label-color="primary"
                          no-error-icon
                        >
                          <template v-slot:append>
                            <q-avatar>
                              <q-icon color="dark" name="fa-solid fa-lock" />
                            </q-avatar>
                          </template>
                        </q-input>

                        
                        <q-separator></q-separator>
                        <q-card-actions align="right" >
                          <q-btn
                          class="text-center bg-green text-white"
                          id="addSubmitBtn"
                          label="Change Password" 
                        
                          @click="changePassword()"
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
 
import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue'
import { ref } from 'vue'
import moment from 'moment'
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export default defineComponent({
  name: 'User Management',
  data: () => ({
      todate:date,
      persistent: ref([false]),
      current_password:'',
      new_password:'',
      confirm_password:'',
      response_dialog:false,
      dialog_title:'',
      dialog_message:'',
     
      }),
  computed: {   
    ...mapActions('UserManagement',[
      'changeUserPassword',
    ]),
    ...mapActions('Auth', [
      'logout',
      'getProfile',
    ]),
    ...mapGetters('Auth', {
      user_profile_details: 'GET_PROFILE',
    }),
  },
  methods: {
    async changePassword() {
      if (this.new_password == this.confirm_password) {
        await this.changeUserPassword({
          current_password: this.current_password,
          new_password: this.new_password,
        }).then((response)=>{
          this.logout({
            user_id: this.user_profile_details.user_id,
          })
        })
          .catch((error) => {
            this.dialog_title = "Error!";
            this.dialog_message = error;
            this.response_dialog = true;
            this.current_password="";
            this.new_password = "";
            this.confirm_password = "";
          })
 
        } else {
        console.log("New Password and Confirm Password not the same!")
        this.dialog_title = "Error!";
        this.dialog_message = "New Password and Confirm Password not the same!";
        this.response_dialog = true;
        this.new_password = "";
        this.confirm_password = "";
      }
      
    },
  },


  async beforeMount(){
    if(!this.user_profile_details){
      // alert("Error retrieving profile details")
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
  