import Vue from 'vue';
import Vuex from 'vuex';
import Ticket from './module_frontend/home/Ticket';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Ticket

    }
})