import Vue from 'vue'
import Vuex from 'vuex'

import modules from '@/store/modules/index'

const debug = process.env.NODE_ENV == 'production';

// console.log(debug, "DEBUG");

Vue.use(Vuex)

const store = () => { 
  return new Vuex.Store({
    modules,
    strict: debug,
    mutations: {
      setSetting(state, setting) {
          state.setting = setting;
      },
    },
    state: () => ({
      setting: {},
    }),
    getters: {
      domain: (state) => state.domain,
    },
    actions: {
      async nuxtServerInit(store, context) {
        // let domain = context.req.headers.host
        let domain = "dev.alkademi.id";
        if (domain == "dev.alkademi.id" || domain == "alkademi.id" || domain == "dev.alkamedia.id") {
          let url = context.req.url.split("/")[1].toLowerCase()
          if (url == 'pesilat') {
            if (domain == "dev.alkademi.id") domain = "pesilataws-dev.alkademi.id"
            if (domain == "dev.alkamedia.id") domain = "pesilat.alkamedia.id"
            if (domain == "alkademi.id") domain = "pesilat.alkademi.id"
          }
        }
        let date = new Date();
        let now = date.toISOString();
        var appSecret = process.env.appSecret;
        let hashText= now + "|" + domain + "|" + appSecret;
        let dAppToken = Buffer.from(hashText).toString('base64')
        let response = await fetch(process.env.sassURL + "v0/cms/app/settings", {
            headers: {
                "D-App-Authorization": dAppToken
            }
        })
        let data = await response.json()
        // console.log(data)
        store.commit('setSetting', data.data);
      },
    }
  })
}

export default store 
