import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [
      {
        id: 0,
        userID: 2,
        player: 'darks',
        fraudes: 'Bots',
        date: '2020-05-12 17:56:00',
        game: '#500',
        status: 'analysing'
    },
      {
        id: 1,
        userID: 0,
        player: 'JJoNak',
        fraudes: 'Bots',
        date: '2020-05-12 17:59:00',
        game: '#501',
        status: 'reject',
        observations: ""
      },
      {
        id: 2,
        userID: 3,
        player: 'Crimsix',
        fraudes: 'Spoof Sites',
        date: '2020-05-13 17:59:00',
        game: '#a200',
        status: 'reject',
        observations: ""
      },
      {
        id: 3,
        userID: 3,
        player: 'Seagull',
        fraudes: 'Spoof Sites',
        date: '2020-05-14 17:59:00',
        game: '#a201',
        status: 'reject',
        observations: ""
      },
      {
        id: 4,
        userID: 4,
        player: 'xQc',
        fraudes: 'Arbitrage',
        date: '2020-05-12 17:59:00',
        game: '#cc6',
        status: 'reject',
        observations: ""
      },
      {
        id: 5,
        userID: 6,
        player: 'Scarlett',
        fraudes: 'Arbitrage',
        date: '2020-05-17 17:59:00',
        game: '#cc7',
        status: 'reject',
        observations: ""
      },
      {
        id: 6,
        userID: 7,
        player: 'JJu',
        fraudes: 'Account Takeover',
        date: '2020-05-18 17:59:00',
        game: '#a82',
        status: 'reject',
        observations: ""
      },
      {
        id: 7,
        userID: 5,
        player: 'Scarlett',
        fraudes: 'Arbitrage',
        date: '2020-05-19 17:59:00',
        game: '#501',
        status: 'reject',
        observations: ""
      },
      {
        id: 8,
        userID: 8,
        player: 'Heaton',
        fraudes: 'Arbitrage',
        date: '2020-05-20 17:59:00',
        game: '#bg2',
        status: 'reject',
        observations: ""
      },
      {
        id: 9,
        userID: 9,
        player: 'Xizt',
        fraudes: 'Account Takeover',
        date: '2020-05-21 17:59:00',
        game: '#cl2',
        status: 'reject',
        observations: ""
      },
      {
        id: 10,
        userID: 10,
        player: 'hhz',
        fraudes: 'Account Takeover',
        date: '2020-05-22 17:59:00',
        game: '#xs2',
        status: 'reject',
        observations: ""
      },
      {
        id: 11,
        userID:11,
        player: 'Ogre2',
        fraudes: 'Account Takeover',
        date: '2020-05-23 17:59:00',
        game: '#z400',
        status: 'reject',
        observations: ""
      },
      {
        id: 12,
        userID: 13,
        player: 'Gaigro',
        fraudes: 'Account Takeover',
        date: '2020-05-23 17:59:00',
        game: '#ab503',
        status: 'reject',
        observations: ""
      },
      {
        id: 13,
        userID: 14,
        player: 'Grubb',
        fraudes: 'Content abuse',
        date: '2020-05-24 17:59:00',
        game: '#ab501',
        status: 'reject',
        observations: ""
      },

      {
        id: 14,
        userID: 12,
        player: 'bds',
        fraudes: 'Account Takeover',
        date: '2020-05-25 17:59:00',
        game: '#ee20',
        status: 'reject',
        observations: ""
      },
      {
        id: 15,
        userID: 16,
        player: 'jully',
        fraudes: 'Content abuse',
        date: '2020-05-26 17:59:00',
        game: '#c300',
        status: 'reject',
        observations: "In this scenario, fraudsters target accounts with advanced capabilities, special strengths or powers, or large amounts of game currency and then sell those accounts over and over to unsuspecting, legitimate players."
      },
    ],
    existingFraudes: ['Account Takeover','Content abuse','Arbitrage', 'Bots', 'Spoof Sites'],
    players: [
      {
        id: 1,
        name: 'xQc'
      },
      {
        id: 2,
        name: 'juu'
      },
      {
        id:3,
        name: 'bds'
      }
    ]
  },
  mutations: {
    addReport(state, report){
      state.reports.push(report)
    },

    editReport(state, report){
      console.log(report)
      const index = state.reports.findIndex(item => item.id === report.id)
      Vue.set(state.reports,index,report)
    },

    deleteReport(state, id){
      const index = state.reports.findIndex(item => item.id === id)
      state.reports.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
