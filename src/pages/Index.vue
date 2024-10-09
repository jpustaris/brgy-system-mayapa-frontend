<template>
  <q-page style="max-height: 90vh; overflow: auto;">
    <div v-if="loading">
      <q-spinner-tail
        style="display: block; margin-left: auto; margin-right: auto;"
        color="primary"
        size="5em"
      />
    </div>
    <div v-if="loading == false" style="text-align: center">
      <p class="title" v-html="homepage_title"></p>
      <p class="desc" v-html="homepage_desc"></p>



      <div class="home-buttons row justify-center" >
        <div class="row items-start q-pa-md">

          <div class="col-xs-12 col-sm-12 col-md-4">
            <q-btn class="home-button faq" @click="help_dialog=true">
              <img src="~assets/noun_FAQ.png" style="height: 125px">
              <span class="home-button-text">Help Guide</span>

            </q-btn>
          </div>

        </div>
      </div>
    </div>
    <q-dialog v-model="help_dialog">
      <q-card style="width: auto; max-width: 80vw; min-width:500px;">
        <q-card-section class="card-header">
          <div class="text-h6">Help Guide <q-btn class="text-red float-right" flat label="X" v-close-popup title="Close Help Guide"/></div>
        </q-card-section>
        <q-card-section class="q-pt-none items-center">
          <div id="pdfvuer">
            <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i" v-model:scale="scale" style="width:100%;margin:20px auto;"
                :annotation="true"
                :resize="true">
            </pdf>
          </div>
          <div class="float-right q-ma-md q-pa-md">
            <q-btn flat class="bg-secondary text-dark" label="Close" v-close-popup />
          </div>

        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>
<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import pdfvuer from 'pdfvuer'
import 'pdfjs-dist/build/pdf.worker.entry'

export default defineComponent({
  components: {
    pdf: pdfvuer
  },
  name: 'PageIndex',
  async beforeMount() {
    // await this.getHomepage()
    // await this.getCategory()
    this.homepage_title = this.homepage[0] ? this.homepage[0].homepage_title : ''
    this.homepage_desc = this.homepage[0] ? this.homepage[0].homepage_descriptions : ''
    this.categories = this.category ? this.category : ''
    this.url = this.backend_url

  },
  computed: {
    ...mapGetters('Homepage', {
      homepage: 'GET_HOMEPAGE',
      category: 'GET_CATEGORY',
      loading: 'GET_LOADING',
      backend_url: 'GET_URL'
    })
  },
  mounted () {
    this.getPdf()
  },
  methods: {
    ...mapActions('Homepage', [
      'getHomepage',
      'getCategory',
      'getHomepageContents'
    ]),
    getPdf () {
      var self = this;
      self.pdfdata = pdfvuer.createLoadingTask('McDelivery OFS 2.0 Help Guide - v5 final.docx.pdf');
      self.pdfdata.then(pdf => {
        self.numPages = pdf.numPages;}
      )}
  },
  data() {
    return {
      help_dialog:false,
      homepage_title: '',
      homepage_desc: '',
      categories: [],
      url: '',
      page: 1,
      numPages: 0,
      pdfdata: undefined,
      errors: [],
      scale: 'page-width',
    }
  }
})
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>

<style scoped>
body {
  height:300px
}
.content {
    padding: 16px;
  }
.title {
  margin-top: 40px;
  font-size: 30px;
}
.desc {
  font-size: 20px;
  font-weight: 300;;
}
</style>
