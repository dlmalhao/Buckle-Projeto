<template>
  <div class="addPage">
    <b-container>
      <b-row>
        <b-col col lg="7">
          <img class="adImage" :src="getActiveProfile.imgBg" />
        </b-col>
        <b-col col lg="5">
          <div class="specificAdInfo">
            <div class="text">
              <p class="adType">Projeto</p>
              <h3 class="specificAdTitle">{{projectEspecific.title}}</h3>
              <div class="secondLine">
                <p class="announcerName">{{users.find((user) => user.email == projectEspecific.email).first_name + " " + users.find((user) => user.email == projectEspecific.email).last_name}}</p>
                <div class="containerFavourites" v-if="getLoggedUser">
                  <a @click="removeFavourite()"  v-if="favs.find((fav) => fav.userEmail == loggedUser.email && fav.adId == projectEspecific.id)"><i class="fas fa-bookmark" style="color: var(--orange);"></i></a>
                  <a v-else @click="addFavourite()"><i class="far fa-bookmark"></i></a>
                </div>
              </div>
              <div class="userContent">
                <div class="adSpecificSummary">
                  <p class="announcerDescription">Descrição</p>
                  <p>
                    {{projectEspecific.description}}
                  </p>
                </div>
                <div class="announcerCourse">
                  <p class="courseWritten">Curso</p>
                  <p class="courseName">{{users.find((user) => user.email == projectEspecific.email).course}}</p>
                </div>
                <div class="announcerLink">
                  <p class="linkWritten">Link</p>
                  <a :href="'//' + projectEspecific.link" target="_blank">{{projectEspecific.link}}</a>
                </div>
                <div class="announcerTime">
                  <p class="timeWritten">Data</p>
                  <p class="timeNeeded">{{projectEspecific.data}}</p>
                </div>
              </div>
            </div>
            <div class="button">
              <b-button type="button" @click="goProfileOtherPerson">Contactar</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <div class="slideBg">
        <div class="userImg">
          <img :src="users.find((user) => user.email == projectEspecific.email).profileImg" alt="">
        </div>
        <div class="userInfo">
          <div class="header">
            <h3>Sobre o criador</h3>
          </div>
          <div class="content">
            <p>{{users.find((user) => user.email == projectEspecific.email).description}}</p>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"

export default {
  data () {
    return {
      projectEspecific: {},
      loggedUser: {},
      users: [],
      favs: [],
      userEmail: "",
      idAd: ""
    }
  },
  computed: {
    ...mapGetters(["getProjectSpecific", "getUsers","getFavs","getLoggedUser", "getActiveProfile"]),
  },
  created() {
    this.projectEspecific = this.getProjectSpecific(this.$route.params.id)
    this.users = this.getUsers
    this.favs = this.getFavs
    if(this.getLoggedUser) {
      this.loggedUser = this.getLoggedUser
    }
    this.SET_ACTIVE_PROFILE(this.projectEspecific.email);
    
    this.SET_ACTIVE_AD(this.projectEspecific.id)
  },
  methods: {
    ...mapMutations(["ADD_FAV","REMOVE_FAV", "SET_ACTIVE_PROFILE", "SET_ACTIVE_AD"]),

    addFavourite () {
      const favData = {
        userEmail: this.loggedUser.email,
        adId: parseInt(this.$route.params.id),
        activeProfile : this.getActiveProfile
      }
      this.ADD_FAV(favData)
    },
    removeFavourite() {
      let idx = this.favs.indexOf(this.favs.find((fav) => fav.userEmail == this.loggedUser.email && fav.adId == this.projectEspecific.id))
      this.REMOVE_FAV(idx)
    },

    goProfileOtherPerson(){
      this.SET_ACTIVE_PROFILE(this.projectEspecific.email);
      this.$router.push({name: 'perfil'}) 
    },

    
  }
};
</script>

<style scoped>
.specificAdInfo {
  text-align: left;
  width: 100%;
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.specificAdInfo p {
  margin: 0;
}

button {
  margin: 0;
}

.row {
  margin-top: 30px;
  margin-bottom: 80px;
}

.adImage {
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 451px;
  border-radius: 15px;
}

.adType {
  font-size: 18px;
  line-height: 21px;
  font-family: var(--lightFont);
  color: #353535;
}

.specificAdTitle {
  font-size: 45px;
  line-height: 65px;
  font-family: var(--mediumFont);
  color: #353535;
}

.announcerName {
  margin: 0;
  font-size: 20px;
  color: #353535;
  font-family: var(--regularFont);
}


.secondLine {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 7px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--black);
}

.containerFavourites {
  display: flex;
    align-items: flex-end;
}

.containerFavourites i {
  font-size: 25px;
  margin-right: 10px;
  transition: 0.3s ease;
}

.containerFavourites a {
  text-decoration: none;
  color: #353535;
  cursor: pointer;
}

.containerFavourites a:hover i {
  text-decoration: none;
  color: var(--orange);
}

.containerFavourites p {
  font-weight: bold;
  margin: 0;
  cursor:default;
}

.courseWritten {
  font-weight: bold;
}

.announcerCourse {
  margin-top: 15px;
}

.announcerLink {
  margin-top: 15px;
}

.announcerDescription {
  font-weight: bold;
}

.announcerTime {
  margin-top: 15px;
}

.announcerTime .timeWritten {
  font-weight: bold;
}

.announcerLink .linkWritten {
  font-weight: bold;
}

.button button {
  background-color: var(--orange);
  border: none;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s ease;
}

.button button:hover {
  background-color: var(--black);
}

.userContent {
  margin-top: 30px;
}

.slideBg {
  background: rgb(255,231,219);
  background: linear-gradient(90deg, rgba(255,231,219,1) 0%, rgba(255,144,92,1) 100%);
  color: rgb(83, 83, 83);
  border-radius: 15px;
  height: 135px;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;
}

.userImg img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  left: 40px;
}

.userImg {
  width: 33%;
}

.userInfo {
  text-align: left;
  width: 67%;
  margin-right: 30px;
}

.userInfo .header h3 {
  font-size: 24px;
  font-weight: bold;
}

.userInfo .content p {
  font-size: 16px;
  font-weight: light;
}

</style>
