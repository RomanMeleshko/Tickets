import data from "../../../tickets.json";

export default {
    state: {
        result_tickets: [],
        old_arr: []
    },
    actions: {
        infoTickets: async function(context) {

            let arr_tickets = data.tickets;

            arr_tickets.sort(function(a, b) {
               let price1 = a.price;
               let price2 = b.price;

               if(price2 > price1) {
                   return price1 - price2;
               }
            });

            arr_tickets.map(function (elem) {
                elem.price =  elem.price + " P";
            });

            console.log(arr_tickets);

            context.commit("updateTickets", arr_tickets);
        }
    },
    mutations: {

        updateTickets(state, arr) {
            state.result_tickets = arr;
            state.old_arr = arr;
        },

        changePositionTickets(state, count) {

        if(count == "Все") {

            state.result_tickets = state.old_arr;

        } else if(count == "Без пресадок") {

            let new_arr = state.result_tickets.filter(function(elem) {
                if(elem.stops == 0) return true;
            });

            state.result_tickets = new_arr;

        } else if(count == "Все") {

            state.result_tickets.sort(function(a, b) {
                let price1 = a.price;
                let price2 = b.price;

                if(price2 > price1) {
                    return price1 - price2;
                }
            });

            }

            else if(count == "1 пересадка") {

                let old_arr = state.result_tickets;

                let new_arr = state.result_tickets.filter(function(elem) {
                    if(elem.stops == 1) return true;
                });

                state.result_tickets = new_arr;

            }else if(count == "2 пересадки") {

                let new_arr = state.result_tickets.filter(function(elem) {
                    if(elem.stops == 2) return true;
                });

                state.result_tickets = new_arr;

            }else if(count == "3 пересадки") {

                let new_arr = state.result_tickets.filter(function(elem) {
                    if(elem.stops == 3) return true;
                });

                state.result_tickets = new_arr;

            }

        },

        changeCurrency(state, str) {

            let ruble = 0.3437;
            let dollar = 27.14;
            let euro = 30.61;

            if(str == "RUB") {

                state.result_tickets.map(function(elem) {

                      let sym = elem.price.charAt(elem.price.length - 1);

                      if(sym == "E") {
                          elem.price = parseFloat(elem.price);

                          elem.price = (elem.price / ruble * euro).toFixed(0) + " P";
                      }else if(sym == "$") {
                          elem.price = parseFloat(elem.price);

                          elem.price = (elem.price / ruble * dollar).toFixed(0) + " P";
                      }
                });
            }
            if(str == "USD") {

                state.result_tickets.map(function(elem) {

                    let sym = elem.price.charAt(elem.price.length - 1);

                    if(sym == "P") {

                        elem.price = parseFloat(elem.price);

                        elem.price = (elem.price * ruble / dollar).toFixed(2) + " $";
                    }else if(sym == "E") {

                        elem.price = parseFloat(elem.price);

                        elem.price = (elem.price * euro / dollar).toFixed(2) + " $";
                    }
                });
            }

            if(str == "EUR") {

                state.result_tickets.map(function(elem) {

                    let sym = elem.price.charAt(elem.price.length - 1);

                    if(sym == "P") {
                        elem.price = parseFloat(elem.price);

                        elem.price = (elem.price * ruble / euro).toFixed(2) + " E";

                    }else if(sym == "$") {

                        elem.price = parseFloat(elem.price);

                        elem.price = (elem.price / euro * dollar).toFixed(2) + " E";
                    }
                });
            }
        }
    },
    getters: {

        pullState(state) {
            return state.result_tickets;
        }
    }
}