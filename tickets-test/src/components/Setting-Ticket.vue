<template>
    <div class="block-setting border">
        <div class="button-course p-3">
            <div class="row">
                <div class="col">
                    <p>Валюта</p>
                </div>
            </div>
            <div class="row justify-content-center pl-3 pr-3">
                <div class="col-4 currency border rounded-left" v-on:click="setColor($event), getCurrency($event)">
                   rub
                </div>
                <div class="col-4 p-2 currency border" v-on:click="setColor($event), getCurrency($event)">
                   usd
                </div>
                <div class="col-4 p-2 currency border rounded-right" v-on:click="setColor($event), getCurrency($event)">
                   eur
                </div>
            </div>
        </div>
        <div class="account-pass p-3">
            <div class="row">
                <div class="col">
                    <p class="mb-2">Колличество пересадок</p>
                </div>
            </div>
            <div class="block-radio-button">
                <div class="row">

                    <div class="col-12 pt-1 pb-2 active-form">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"

                            >
                            <label class="form-check-label" for="inlineCheckbox1"
                                   v-on:click="getCount($event)"
                            >Все</label>
                        </div>
                    </div>

                    <div class="col-12 pt-1 pb-1 active-form">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1">
                            <label class="form-check-label" for="inlineCheckbox2" v-on:click="getCount($event)">Без пресадок</label>
                        </div>
                    </div>

                    <div class="col-12 pt-1 pb-2 active-form">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1">
                            <label class="form-check-label" for="inlineCheckbox3" v-on:click="getCount($event)">1 пересадка</label>
                        </div>
                    </div>

                    <div class="col-12 pt-1 pb-2 active-form">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1">
                            <label class="form-check-label" for="inlineCheckbox4" v-on:click="getCount($event)">2 пересадки</label>
                        </div>
                    </div>

                    <div class="col-12 pt-1 pb-2 active-form">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1">
                            <label class="form-check-label" for="inlineCheckbox5" v-on:click="getCount($event)">3 пересадки</label>
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
        name: "Setting-Ticket",
        data() {
            return {
               count: "",
               currency: ""
            }
        },
        methods: {

            ...mapMutations(["changePositionTickets", "changeCurrency"]),

            setColor(e){
               e.target.classList.add("active-buttton");

            },

            getCount(e, count) {

                this.count = e.target.innerText;

                this.changePositionTickets(this.count);

            },

            getCurrency(e, currency) {

                this.currency = e.target.innerText;

                this.changeCurrency(this.currency);
            }
        }
    }
</script>

<style scoped>
    .block-setting {
        width: 232px;
        height: 331px;
        border-radius: 5px;
        background: #ffffff;
        box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
    }
    p {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
    }
    .currency {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #2196F3;
        width: 68px;
        height: 40px;
        font-weight: 600;
        font-size: 12px;
        text-transform: uppercase;
        transition: 0.3s;
    }
    .currency:hover {
        background: #F2FCFF;
        border: 1px solid #2196F3;
    }

    .active-buttton {
        background: #2196F3 !important;
        color: #ffffff;

    }

    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label:before {
        content: "\2714";
        color: transparent;
        display: inline-block;
        font-size: 15px;
        line-height: 17px;
        margin: -5px 10px 0 0;
        height: 19px;
        width: 19px;
        text-align: center;
        vertical-align: middle;
        transition: color ease .3s;
        border: 1px solid #D2D5D6;
        border-radius: 3px;
    }

    input[type=checkbox]:checked + label:before {
        color: #2196F3;
        cursor: pointer;
        border: 1px solid #2196F3;
    }

    label {
         font-size: 13px;
         cursor: pointer;
     }
     .active-form:hover {
         background: #F2FCFF;
         cursor: pointer;
     }
     .active-form:hover:before {
         content: "только";
         position: absolute;
         margin-left: 150px;
         margin-top: 2px;
         font-weight: 600;
         font-size: 14px;
         color: #2196F3;
     }






</style>