export const mutations = {
    increment(state) {

        state.sessionStorage.anyValues++
    },

    mytxtpage(state, payload) {

        state.sessionStorage.txtFinal = payload

        // //console.log(payload);
        // //debugger

    },

    myimgpage(state, payload) {

        state.sessionStorage.imgFinal = payload

    },

    mynextpage(state, payload) {

        state.sessionStorage.anyValues = 900

        state.sessionStorage.storedBk = payload.keyBk
        state.sessionStorage.storedVer = payload.keyVer
        state.sessionStorage.storedVerse = payload.keyContent



    }


}