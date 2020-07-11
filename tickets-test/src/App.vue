<template>
  <div class="container">
      <div class="container-wrapper">
          <div class="tickets-page">
              <div class="ticket-page_icon pt-5">
                  <div class="row justify-content-center">
                      <div class="col-lg-6 col-md-6 col-sm-4 text-center">
                         <img alt="logo" src="../images/Logo.png" width="61px" height="61px" />
                      </div>
                  </div>
              </div>
              <div class="ticket-setting pt-4 pb-5">
                  <div class="row justify-content-center">
                      <div class="col-lg-4 col-md-4 pt-3 center">

                          <setting_ticket />

                      </div>
                      <div class="col-lg-8 col-md-12">

                          <ticket />

                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import "bootstrap/js/dist/util";
  import ticket from '@/components/Ticket.vue';
  import setting_ticket from '@/components/Setting-Ticket';

export default {
  name: 'App',
  data() {
      return {

      }
  },

  components: {
      ticket,
      setting_ticket
  }
}
</script>

<style>
 @import "css/app.css";


#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
}
</style>
