<template>
  <div class="generalContainer">
    <header class="masthead">
      <picture>
        <source type="image/webp" srcset="../assets/img/projectosMain.webp">
        <source type="image/jpg" srcset="../assets/img/projectosMain.jpg">
        <img src="../assets/img/projectosMain.jpg" class="imageBox">
      </picture>
      <div class="intro-body">
        <b-container>
          <b-row>
            <b-col col mx="auto" class="headerText">
              <h1 class="headerTitle">Projetos</h1>
              <p class="headerSubTitle">
                Mostra às empresas aquilo que tens para oferecer.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </header>
    <section>
      <b-row class="filterRow">
        <div class="filterRectangle">
          <div class="div">
            <div class="filterHeader">
              <p>Filtrar por:</p>
            </div>
            <b-col cols="2">
              <div class="pesquisa">
                <p>Pesquisa</p>
                <b-form-input type="text" v-model="search"></b-form-input>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="licenciatura">
                <p>Licenciatura</p>
                <div class="form-selects">
                  <b-form-select v-model="graduation.selected" :options="graduation.options" class="form-select cursos"></b-form-select>
                </div>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="ordenar">
                <p>Ordenar</p>
                <div class="form-selects">
                  <b-form-select v-model="order.selected" :options="order.options" class="form-select cursos"></b-form-select>
                </div>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="tipo">
                <p>Tipo</p>
                <div class="buttons">
                  <b-button class="btn-procura" v-if="type.isProcura == false" @click="type.isProcura = true; type.isOferta = false" :class="{ active: type.isProcura }" >Procura</b-button>
                  <b-button class="btn-procura" v-if="type.isProcura == true" @click="type.isProcura = false" :class="{ active: type.isProcura }" >Procura</b-button>
                  <b-button class="btn-oferta" v-if="type.isOferta == false" @click="type.isProcura = false; type.isOferta = true" :class="{ active: type.isOferta }" >Oferta</b-button>
                  <b-button class="btn-oferta" v-if="type.isOferta == true" @click="type.isOferta = false" :class="{ active: type.isOferta }" >Oferta</b-button>
                </div>
              </div>
            </b-col>
          </div>
        </div>
      </b-row>
    
      <b-row style="padding:0;">
        <b-col xl="4" lg="4" cols="6" style="margin-bottom: 20px;" v-for="(project, index) in this.projects" :key="index" >
          <router-link :to="{ name: 'projetoEspecifico', params: { id: project.id }}">
            <div class="cardContainer">
              <div class="cardImage">
                <img :src="project.cover_image" alt="">
              </div>
              <div class="cardContent">
                <div class="adData">
                  <div class="profileImage">
                    <img :src="users.find((user) => user.email == project.email).profileImg" alt="">
                  </div>
                  <div class="nome_curso">
                    <h4>{{users.find((user) => user.email == project.email).first_name + " " + users.find((user) => user.email == project.email).last_name}}</h4>
                    <div class="curso">
                      <p>de&nbsp;</p>
                      <p>{{users.find((user) => user.email == project.email).course}}</p>
                    </div>
                  </div>
                </div>
                <div class="descricao">
                  <p>{{project.description}}</p>
                </div>
              </div>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data() {
    return {
      projects: [],
      users: [],
      graduation: {
        selected: null,
        options: [
          { value: null, text: "Tudo" },
          { value: "tsiw", text: "TSIW" },
          { value: "tcav", text: "TCAV" },
          { value: "design-grafico", text: "Design Gráfico" },
          { value: "design-industrial", text: "Design Industrial" },
          { value: "fotografia", text: "Fotografia" },
          { value: "multimedia", text: "Multimédia" },
        ],
      },
      order: {
        selected: null,
        options: [
          { value: null, text: "Tudo" },
          { value: "recentes", text: "Mais recentes" },
          { value: "antigos", text: "Mais antigos" },
        ],
      },
      type: {
        isOferta: false,
        isProcura: false,
      },
      search: ""
    }
  },
  computed : {
    ...mapGetters(["getUsers","getProjects"]),

    // filteredProjects () {
    //   let filterProjects = this.projects.slice(0)
    //   for(let project of filterProjects) {
    //     console.log((this.users.find((user) => user.email == project.email)).first_name.toLowerCase().includes(this.search.toLowerCase()));
    //   }
    //   if(this.graduation.selected != null) {
    //     filterProjects = filterProjects.filter((project)=> project.course == this.graduation.selected)
    //   }
    //   if(this.type.isOferta) {
    //     filterProjects = filterProjects.filter((project)=> project.typeAd.text == "Oferta")
    //   }
    //   if(this.type.isProcura) {
    //     filterProjects = filterProjects.filter((project)=> project.typeAd.text == "Procura")
    //   }
    //   if(this.search != "") {
    //     filterProjects = filterProjects.filter((project)=> project.description.toLowerCase().replace(/\s/g, '').includes(this.search.toLowerCase().replace(/\s/g, '')) || this.users.find((user) => user.email == project.email).first_name.toLowerCase().includes(this.search.toLowerCase().replace(/\s/g, '')) || this.users.find((user) => user.email == project.email).last_name.toLowerCase().includes(this.search.toLowerCase().replace(/\s/g, '')) )
    //     // filterProjects = filterProjects.filter((project)=> this.users.find((user) => user.email == project.email).first_name.toLowerCase().includes(this.search.toLowerCase()))
    //     // filterProjects = this.$store.state.ads.filter((project) => this.users.find((user)=>user.email == project.email).first_name.toLowerCase().includes(this.search.toLowerCase()))
    //     // filterProjects = this.$store.state.ads.filter((project) => this.users.find((user)=>user.email == project.email).last_name.toLowerCase().includes(this.search.toLowerCase()))
    //   }
    //   // for(let user of this.users){
    //   //   filterProjects = filterProjects.filter((project) => project.email == user.email)
    //   // }
    //   return filterProjects
    // }
  },

  mounted () {
    this.projects = this.getProjects
    this.users = this.getUsers
  },
}

</script>


<style scoped>


html, body {
  overflow-x:hidden ;
} 

 
.masthead {
  height: 507px;
  margin-bottom: 80px;
}

.masthead img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.generalContainer {
  background-color: #ebebeb;
}

.generalContainer section {
  display: flex;
}

.filterRow {
  padding: 0!important;
  width: auto !important;
  height: 440px!important;
}

.filterRectangle {
  width: 300px;
  height: 100%;
  border-radius: 15px;
  background-color: rgb(255, 255, 255) !important;
  margin-left: 15px;
}

.filterHeader p {
  margin: 25px 0 10px 0;
  font-size: 18px;
}

.filterHeader {
  width: 100%;
  border-bottom: 2px solid #ebebeb;
}

.filterRectangle > div {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding:0 30px 30px 30px;
  align-items: flex-start;
} 

.filterRectangle div input {
  height: 35px!important;
  font-size: 14px;
}

.filterRectangle div select {
  height: 35px!important;
  font-size: 14px;
}

.pesquisa p {
  margin: 5px;
  margin-top: 25px!important;
  font-size: 14px;
}

.licenciatura p {
  margin: 5px;
  font-size: 14px;
}

.ordenar p {
  margin: 5px;
  font-size: 14px;
}

.tipo p {
  margin: 5px;
  font-size: 14px;
}

.licenciatura, .pesquisa, .ordenar, .tipo  {
  margin-bottom: 25px;
}

.filterRectangle > div > .col-2 {
  width: 100%;
}

.filterRectangle .tipo .buttons .btn {
  width: 50%;
}

.filterRectangle .tipo .buttons {
  display: flex;
  height: 35px;
}

.filterRectangle .tipo .buttons button{
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filterRectangle .tipo {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.filterRectangle div p {
  color: rgb(92, 92, 92);
  text-align: left;
  font-weight: bold;
}

.btn-procura {
  margin-right: 5px;
}

.btn-oferta {
  margin-left: 5px;
}

.headerText {
  position: absolute;
  top: 30%;
  left: 0;
  line-height: 43px;
  text-align: center;
  z-index: 10;
  color: white;
}

.headerTitle{
font-weight: 500;
font-size: 96px;
line-height: 100px;
}

.headerSubTitle{
font-weight: 300;
font-size: 36px;
line-height: 43px;
}

.cardImage img {
  width: 490px;
  height: 220px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
}

.cardImage {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  height: 220px;
}

.profileImage img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.row {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 150px;
}

.col-4 {
  margin-bottom: 25px;
}

.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
}

.cardContainer:hover .cardImage {
  filter: grayscale(80%);
}

.cardContainer:hover .descricao > p {
  color: var(--orange);
}

a {
  text-decoration: none;
}

.cardContainer p, h4 {
  color: var(--black);
}

.cardContent > .profileImage {
  padding: 10px;
}

.cardContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
}

.descricao {
  padding: 0 15px;
  text-align: left;
  font-size: 16px;
  margin-top: 15px;
  position: relative;
}

.descricao p{
  height: 45px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.cardContent h4, .cardContent p {
  margin: 0;
}

.cardContent .adData .nome_curso {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.nome_curso > .curso {
  display: flex;
  justify-content: flex-start;
}

.cardContent .adData {
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 10px;
}

.cardContent .adData .nome_curso h4{
  font-weight: bold;
  font-size: 14px;
}

.cardContent .adData .nome_curso p {
  font-size: 14px;
  color: grey !important;
}

.adData {
  display: flex;
}

.tipo .buttons .active {
  background: var(--orange);
  border: none;
}

</style>

