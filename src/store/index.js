import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users : localStorage.users ? JSON.parse(localStorage.users) : [
      {     
        first_name: "Test",
        last_name: "User",
        course: "multimedia",
        gender: "Masculino",
        email: "user@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "user",
        status: "active",
        profileImg: "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description: "Estudante teste",
        imgBg: 'https://media.istockphoto.com/photos/live-video-streaming-media-entertainment-technology-on-laptop-and-picture-id1218395365?b=1&k=20&m=1218395365&s=170667a&w=0&h=DNmqcjDzFNqFqHH0LjdscsDiTzbqOpddOeN4LfePFSE='

      },
      {
        first_name: "Test",
        last_name: "Admin",
        course: "tsiw",
        gender: "Masculino",
        email: "admin@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "admin",
        status: "active",
        profileImg: "https://c.tenor.com/wMM9ZJsWz-YAAAAC/bruno-very-funny.gif",
        description: "Administrador",
        imgBg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
      },
      {
        first_name: "João",
        last_name: "Silva",
        course: "tsiw",
        gender: "Masculino",
        email: "joao@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "user",
        status: "active",
        profileImg: "https://images.unsplash.com/photo-1521061972219-a1894a27a040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        description: "Aluno do 2 ano de tsiw",
        imgBg: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?b=1&k=20&m=537331500&s=170667a&w=0&h=-OawbbTR9TwfewLYKlaU-_cn1m_dq1WLpBK1qubFhGI='
      },
      {
        first_name: "Leonor",
        last_name: "Campos",
        course: "multimedia",
        gender: "Masculino",
        email: "leonor@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "user",
        status: "active",
        profileImg: "https://images.unsplash.com/photo-1529232356377-57971f020a94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        description: "Aluna do 3 ano de multimédia",
        imgBg: 'https://images.unsplash.com/photo-1485894608275-668ad1c2d34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
      {
        first_name: "Tiago",
        last_name: "Amaral",
        course: "tcav",
        gender: "Masculino",
        email: "tiago@esmad.ipp.pt",
        password: "Esmad_2122",
        role: "user",
        status: "active",
        profileImg: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description: "Aluno do primeiro ano de tcav",
        imgBg: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      },
    ],
    loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
    ads : localStorage.ads ? JSON.parse(localStorage.ads) :[
      {
        title: "Fotografias",
        description: "Preciso que alguém me empreste uma câmara por um dia.",
        course :  "multimedia",
        time : "24-50",
        email :"user@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://media.istockphoto.com/photos/live-video-streaming-media-entertainment-technology-on-laptop-and-picture-id1218395365?b=1&k=20&m=1218395365&s=170667a&w=0&h=DNmqcjDzFNqFqHH0LjdscsDiTzbqOpddOeN4LfePFSE=',
        id : 1,
        typeAd: { value: 'oferta', text: 'Oferta' }
      },
      {
        title: "Fotografias da faculdade",
        description: "Alguém consegue arranjar fotos da ESMAD?",
        course :  "tcav",
        time : "24-50",
        email :"tiago@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 2,
        typeAd: { value: 'procura', text: 'Procura' }
      },
      {
        title: "Programação",
        description: "Sou aluno do 3º ano de tsiw e posso ajudar alunos que precisem",
        course :  "tsiw",
        time : "24-50",
        email :"joao@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?b=1&k=20&m=537331500&s=170667a&w=0&h=-OawbbTR9TwfewLYKlaU-_cn1m_dq1WLpBK1qubFhGI=',
        id : 3,
        typeAd: { value: 'oferta', text: 'Oferta' }
      },
      {
        title: "Programação",
        description: "Estou disponivel para fazer sessões fotográficas",
        course :  "multimedia",
        time : "24-50",
        email :"leonor@esmad.ipp.pt",
        profileImg : "https://i.pinimg.com/originals/7c/19/75/7c197545ca20fab203abb8b415de34e2.gif",
        imgBg: 'https://images.unsplash.com/photo-1485894608275-668ad1c2d34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        id : 4,
        typeAd: { value: 'oferta', text: 'Oferta' }
      },
    ],
    favs : localStorage.favs ? JSON.parse(localStorage.favs) :[],
    avaliacoes : localStorage.avaliacoes ? JSON.parse(localStorage.avaliacoes) :[],
    activeAd:localStorage.activeAd ? JSON.parse(localStorage.activeAd):null, 
    activeProfile : localStorage.activeProfile ? JSON.parse(localStorage.activeProfile) : null,
  },
  getters: {
    isLoginValid: (state) => (email, password) => state.users.some((user) => user.email === email && user.password === password),
    isEmailRegistered: (state) => (email) => state.users.some((user) => user.email === email),
    getUsers: (state) => state.users,
    getLoggedUser: (state) => state.loggedUser,
    getAds : (state) => state.ads,
    getAdsId: (state) => state.ads ? state.ads[state.ads.length - 1].id + 1 : 0,
    getId:(state) => state.activeAd,
    getActiveProfile:(state) => state.activeProfile,
    getAdSpecific:(state) => (id) => state.ads.find((ad)=> ad.id == id),
    getFavs:(state) => state.favs,
    getThisAdFav:(state) => (id) => state.favs.find((fav) => fav.adId == id),
    ads: (state) => state.users,
    getAvaliacoes: (state) => state.avaliacoes
  },
  mutations: {
    SET_NEW_USER(state, payload) {
      state.users.push(payload)
      localStorage.users = JSON.stringify(state.users)},
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.email === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SIGNOUT_USER(state) {
      state.loggedUser = null
      localStorage.removeItem('loggedUser')
    },
    SET_USER_BLOCKED(state,payload) {
      state.users[payload].status = 'blocked'
      localStorage.users = JSON.stringify(state.users)
    },
    SET_USER_ACTIVE(state,payload) {
      state.users[payload].status = 'active'
      localStorage.users = JSON.stringify(state.users)
    },
    SET_ADS(state, payload) {
      state.ads.push(payload)
      localStorage.ads = JSON.stringify(state.ads)
    },
    SET_ACTIVE_AD(state,payload) {
      state.activeAd = state.ads.find((ad) => ad.id === payload);
      localStorage.activeAd = JSON.stringify(state.activeAd) 
    },
    ADD_FAV(state,payload) {
      state.favs.push(payload)
      localStorage.favs = JSON.stringify(state.favs)
    },
    REMOVE_FAV(state,payload) {
      state.favs.splice(payload,1)
      localStorage.favs = JSON.stringify(state.favs)
    },
    REMOVE_AD(state,payload) {
      state.ads.splice(payload,1)
      localStorage.ads = JSON.stringify(state.ads)
    },
    REMOVE_USER(state,payload) {
      state.users.splice(payload,1)
      localStorage.users = JSON.stringify(state.users)
    },
    SET_ACTIVE_AD_OUT(state){
      state.activeAd = null;
      localStorage.removeItem("activeAd")
    },

    SET_UPDATE_USER(state,payload){
      state.users.push(payload)
      localStorage.users.setItem(getLoggedUser.email, payload)
    },

    SET_ACTIVE_PROFILE(state,payload) {
      state.activeProfile = state.users.find((user) => user.email === payload);
      localStorage.activeProfile = JSON.stringify(state.activeProfile)
      
    },

    ADD_COMMENT(state,payload) {
      state.avaliacoes.push(payload)
      localStorage.avaliacoes = JSON.stringify(state.avaliacoes)
    },

  },
  actions: {
  },
  modules: {
  }
})
