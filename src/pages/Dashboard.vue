
<template>
  <div style="overflow: auto; height: 86vh;">
      <div>
        <img src="~assets/dashboard-banner.jpg" width="100%">
            <!-- <div class="q-pa-md row" style="margin-left: 15px; margin-right: 15px; padding-left: 0px; border-bottom: 2px solid #DEDEDE; ">
                <div class="col-6">
                    <div style="font-size: 20px"><b> Mayapa > Brgy System > Dashboard</b></div>
                </div>
                <div class="col-6">
                    <div style="font-size: 15px; text-align: right"><b>Date: </b>{{this.todate}}</div>
                </div>
            </div> -->
      </div>
      <!-- <div style="margin-left: 15px; margin-top: 15px; font-size: 15px">
        <b>Filters:</b>
      </div> -->
      <!-- <div class="items-start q-pa-md row">
          <div class="col-sm-3 col-xs-6 q-pa-sm">
            <q-input class="textbox" rounded outlined v-model="filter" placeholder="Search" >
              <template v-slot:append>
                <q-avatar>
                    <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </div>  
      </div>  -->
      <div class="q-pa-md row">
        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle,  rgb(5 52 92) 0%, rgb(4 136 183) 100%)"
            >
            <q-card-section>
              <div class="text-subtitle1">TOTAL RESIDENTS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.residents }}</div>
              
            </q-card-section>

            <q-card-section class="q-pt-none column">
              <q-btn 
                    to="/profiling" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle,  rgb(6 98 58) 0%, rgb(49 185 114) 100%)"
            >
            <q-card-section>
              <div class="text-subtitle1">TOTAL SENIORS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.seniors }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/seniors" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Seniors" 
                    />
            </q-card-section>
            </q-card>
        </div>
        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle, rgb(97 1 136) 0%, rgb(219 53 255) 100%)"
            >
            <q-card-section>
              <div class="text-subtitle1">HEALTH WORKERS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.healthworkers }}</div>
              
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/health-workers" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Health Workers" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle, rgb(136 45 1) 0%,  rgb(255 132 53)100%);"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">PERSONS WITH DISABILITY</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.pwds }}</div>
              
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/person-with-disabilities" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Person With Disability" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle,  rgb(5 26 92) 0%, rgb(4 45 183) 100%)"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">TOTAL MALE RESIDENTS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.males }}</div>
              
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/dashboard/male-residents" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Male Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle,  rgb(92 5 5) 0%, rgb(183 4 4) 100%)"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">TOTAL FEMALE RESIDENTS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.females }}</div>
              
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/dashboard/female-residents" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Female Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle, rgb(136 1 110) 0%, rgb(255 53 185) 100%)"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">TOTAL VOTERS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.voters }}</div>
              
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/dashboard/voter-residents" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Voter Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle, rgb(137 102 13) 0%, rgb(255 199 53) 100%);"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">TOTAL NON-VOTERS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.non_voters }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/dashboard/non-voter-residents" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Non-Voter Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle, rgb(13 25 137) 0%, rgb(53 115 255) 100%);"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">ALIVE RESIDENTS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.non_voters }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/dashboard/alive-residents" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Alive Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>

        <div class="col-md-3 q-pa-md" style="min-width:400px">
          <q-card
            class="my-card text-white"
            style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background: radial-gradient(circle, rgb(137 67 13) 0%, rgb(255 100 53) 100%);"
            >
            <!-- style="background: radial-gradient(circle, rgb(255 132 53) 0%, rgb(136 45 1) 100%)" -->
            <q-card-section>
              <div class="text-subtitle1">DECEASED RESIDENTS</div>
              <div class="text-h1 text-center q-pa-lg">{{ dashboard_data.non_voters }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none column">
                <q-btn 
                    to="/dashboard/deceased-residents" clickable v-ripple exact
                    class="q-mx-sm bg-teal text-white col self-end" 
                    label="View Deceased Residents" 
                    />
            </q-card-section>
            </q-card>
        </div>
        
      </div>
          
          <!-- <div class="q-pa-md" style="padding-top:20px">
              <q-table
                flat bordered
                color="primary"
                class="table"
                title="All Products"
                :rows="rows"
                :columns="columns"
                row-key="name"
                :pagination="pagination"
                :filter="filter"
                :loading="loading"
              >
              <template v-slot:body-cell-active="props">
                  <q-td :props="props">
                    <div>
                        <div v-if="props.value == 1">
                            <q-btn color="positive" icon="check" @click="clickToggle(props)" />
                        </div>
                        <div v-else>
                            <q-btn color="secondary" icon="close" @click="clickToggle(props)" />
                        </div>
                    </div>
                  </q-td>
                </template>
              </q-table>
                <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
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
                </q-dialog>
          </div> -->
  </div>

</template>

<script>
 
import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue'
import { ref } from 'vue'
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export default defineComponent({
  name: 'All Products',
  data: () => ({
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    total_residents:356,
    total_HWs:58,
    total_PWD:28,
    total_seniors:85,

      selected: ref([]),
       filter: ref(''),
      rows:[],
      status:0,
      todate:date,
      prodFilter:ref(''),
      persistent: ref([false]),
      pagination: {
        page: 1,
        rowsPerPage: 25
      },
      columns : [
          {
            name: 'name',
            required: true,
            label: 'Product Name',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'Description', label: 'Description',  field: row => row.description, sortable: true,align: 'left' },
          { name: 'Price', label: 'Price',  field: row => row.price, sortable: true },
          { name: 'Category', label: 'Category',  field: row => row.category.name, sortable: true },
          {
            name: 'active',
            required: true,
            label: 'ACTION',
            align: 'left',
            field: row => row.is_active,
            format: val => `${val}`,
            sortable: true
          },
        ]
      }),
  computed: {
    ...mapGetters('Dashboard', {
      dashboard_data: 'GET_DASHBOARD_DATA'
    }),

  },
  methods: {
     ...mapActions('Dashboard', [
      'getData',
    ]),
    async clickToggle(prop){
      if(prop.row.is_active==1){
        this.status=0;
      }else{
        this.status=1;
      }
       console.log(prop.row.is_active);
        this.updateProductStatus({
            store_id: this.user.store_id,
            productID: prop.row.id,
            status: this.status
        }).then(async() => {
          this.persistent=true;
          //  await this.getStoreItems({
          //   store_id: this.user.store_id
          // }).then(() => {
          //   this.rows = this.storeProducts
          //   console.log(this.storeProducts)
          // })
              
        })
    },
    async toggleFilter(){
      console.log(this.prodFilter);

      if(this.prodFilter.value==1 || this.prodFilter.value==0 ){
        await this.getStoreItemsWithStatus({
        store_id: this.user.store_id,
        status: this.prodFilter.value
        }).then(() => {
          this.rows = this.storeProducts
        })

      }else{  
          // await this.getStoreItems({
          //   store_id: this.user.store_id
          // }).then(() => {
          //   this.rows = this.storeProducts
          //   console.log(this.storeProducts)
          // })
      }
    }
  },
  watch: { 
    user: {
      async handler(val){
        // do stuff
        // await this.getStoreItems({
        //   store_id: this.user.store_id
        // }).then(() => {
        //   this.rows = this.storeProducts
        //   console.log(this.storeProducts)
        // })
        },
      deep: true
    }
  },
  async beforeMount(){
      await this.getData();
     
  },
})
</script>

<style scoped>
</style>