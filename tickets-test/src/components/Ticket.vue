<template>
    <div class="block-ticket">
        <div class="row pt-3" v-for="item in pullState" :key="item.id">
            <div class="col">
                <div class="ticket">
                    <div class="row">
                        <div class="col-4 p-4">
                            <div class="logo pl-4">
                               <img alt="logo" src="../../images/Logo2.png" width="120px" height="35px" />
                            </div>
                            <div class="block-price pl-2 pt-4">
                                <div class="price">
                                   <div class="text text-center pt-1">
                                       <label class="m-0">Купить</label><br/>
                                       <label>за {{item.price}}</label>
                                   </div>
                                </div>
                            </div>
                            <div class="vertical-line">

                            </div>
                        </div>
                        <div class="col-8">
                            <div class="info-ticket">
                                <div class="row">
                                    <div class="col-3 pt-3 pl-4">
                                        <label class="time-start pl-3">
                                            {{ item.departure_time }}
                                        </label>
                                    </div>
                                    <div class="col-5">
                                        <div class="row">
                                            <div class="col m-0 p-0">
                                                <label class="count"> {{ item.stops }}</label>
                                                <label class="transfer pl-3">пересадки</label>
                                            </div>

                                        </div>
                                        <div class="row justify-content-center">
                                            <div class="col-9 block-horizontal pt-1 pl-4">
                                                <label class="horizontal-line"></label>
                                            </div>
                                            <div class="col-1 block-fly p-0">
                                                <img class="fly" alt="fly" src="../../images/Air-plane.png" width="13px" height="14px"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 pt-3 pl-2">
                                       <label class="time-end">
                                          {{ item.arrival_time }}
                                       </label>
                                    </div>
                                </div>
                                <div class="row justify-content-around">
                                    <div class="col-4 p-0 ml-3">
                                        <div class="location text-left">
                                            <label class="m-0"><b>{{ item.origin }},</b> </label>
                                            <label class="m-0"><b>{{ item.origin_name }}</b></label>
                                        </div>
                                        <div class="date text-left">
                                            <label class="m-0">{{ item.departure_date }}</label>
                                        </div>
                                    </div>
                                    <div class="col-4 p-0 mr-3">
                                        <div class="location text-right">
                                            <label class="m-0"><b>{{ item.destination_name }}</b></label>
                                            <label class="m-0"><b>, {{ item.destination }}</b></label>
                                        </div>
                                        <div class="date text-right">
                                            <label class="m-0">{{ item.arrival_date }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters, mapActions, mapMutations} from "vuex";


    export default {
        name: "Ticket.vue",
        data() {
            return {

            }
        },

        computed: mapGetters(["pullState"]),

        methods: {
            ...mapActions(["infoTickets"]),
        },

        async mounted() {

            this.infoTickets();

        },
    }
</script>

<style scoped>
    .ticket {
        width: 566px;
        height: 161px;
        background: #ffffff;
        border-radius: 5px;
    }
    .price {
        width: 160px;
        height: 56px;
        cursor: pointer;
        background: #FF6D00;
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 0px #D64D08;
        border-radius: 5px;
    }
    .vertical-line {
        top: 0px;
        left: 210px;
        width: 1px;
        height: 161px;
        border: 1px solid #ECEFF1;
        position: absolute;
    }
    .horizontal-line {
        line-height: 12px;
        width: 96px;
        height: 1px;
        border: 1px solid #ECEFF1;

    }
    .time-start, .time-end {
        font-size: 32px;
        font-weight: 600;
    }

    .count, .transfer {
        font-weight: 600;
        font-size: 10px;
        text-transform: uppercase;
        color: #8B9497;
        margin-top: 25px;
        margin-left: 50px;
        position: absolute;
    }
    .block-horizontal, .block-fly {
        margin-top: 32px;
    }
    .location, .date {
        font-size: 12px;
    }
    .text label {
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
    }
</style>