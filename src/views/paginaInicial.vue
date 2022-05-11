<template>
  <div class="home">
        <header>
        <div class="intro-body">
            <div class="imageContainer">
              <picture>
                <source type="image/webp" srcset="../assets/img/mainPage.webp">
                <source type="image/jpg" srcset="../assets/img/mainPage.jpg">
                <img src="../assets/img/mainPage.jpg" class="img-fluid mainPageImg">
              </picture>
            </div>
            <b-row>
              <b-col col mx="auto" class="headerTextMain">
                <h1 class="headerTitleMain mediumFont"> <b class="orangeTitle">Conecta-te </b> com 
                a tua faculdade</h1>
                <p class="headerSubTitleMain regularFont">
                  Um website feito por estudantes,
                  para estudantes
                </p>
              </b-col>
            </b-row>
        </div>
    </header>

    <section class="firstBlock">
      <b-container>
        <b-row align-v="center">
          <b-col md="6" order="2">
            <div>
              <ul class="list-unstyled boxes">
                <b-media tag="li" class="boxesPath">
                  <template #aside>
                    <picture>
                      <source type="image/webp" srcset="../assets/img/landingPensar.webp">
                      <source type="image/png" srcset="../assets/img/landingPensar.png">
                      <img src="../assets/img/landingPensar.png" class="imageBox">
                    </picture>
                  </template>
                  <h5 class="mt-0 mb-1">
                    Tens um projeto que precisa de ajuda extra
                  </h5>
                </b-media>
                <b-media tag="li" class="my-4 boxesPath">
                  <template #aside>
                    <picture>
                      <source type="image/webp" srcset="../assets/img/landingIdeia.webp">
                      <source type="image/png" srcset="../assets/img/landingIdeia.png">
                      <img src="../assets/img/landingIdeia.png" class="imageBox">
                    </picture>
                  </template>
                  <h5 class="mt-0 mb-1">
                    Achas que um aluno de outro curso pode ajudar
                  </h5>
                </b-media>
                <b-media tag="li" class="boxesPath">
                  <template #aside>
                    <picture>
                      <source type="image/webp" srcset="../assets/img/landingMaos.webp">
                      <source type="image/png" srcset="../assets/img/landingMaos.png">
                      <img src="../assets/img/landingMaos.png" class="imageBox">
                    </picture>
                  </template>
                  <h5 class="mt-0 mb-1">
                    Inscreves-te na Buckle e deixas a magia acontecer
                  </h5>
                </b-media>
              </ul>
            </div>
          </b-col>
          <b-col md="6" order="1" class="left">
            <h2 class="display-4 mainHeaders">Aqui na Buckle facilitamos-te a vida</h2>
            <p class="mainTexts regularFont">É simples e fácil</p>
            <button class="btn btn-primary mainButtons blueButtons" to="/sobre" type="button">Saber mais</button>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="secondBlock">
      <b-row class="adDiv">
        <b-col col lg="6" class="l" order="1">
          <picture>
            <source type="image/webp" srcset="../assets/img/mainAnuncios.webp">
            <source type="image/jpg" srcset="../assets/img/mainAnuncios.jpg">
            <img src="../assets/img/mainAnuncios.jpg" class="imageBox">
          </picture>
        </b-col>
        <b-col col lg="6" class="r" order="2">
          <div class="display-4 mediumFont mainHeaders">
            <h4 id="homePageAdHeader">Anúncios: </h4>
            <p>A melhor forma de obteres aquilo que procuras</p>
          </div>
          <p class="regularFont mainTexts">
            Explora os anúncios feitos por outros alunos caso precises de ajuda ou caso pretendas ajudar
          </p>
          <button class="btn btn-primary mainButtons orangeButtons" @click="$router.push({name: 'Anuncios'})" type="button">
            Ver anúncios
          </button>
        </b-col>
      </b-row>
    
      <b-row class="projectDiv">
        <b-col col lg="6" class="l" order="1">
          <picture>
            <source type="image/webp" srcset="../assets/img/mainProjetos.webp">
            <source type="image/jpg" srcset="../assets/img/mainProjetos.jpg">
            <img src="../assets/img/mainProjetos.jpg" class="imageBox">
          </picture>
        </b-col>
        <b-col col lg="6" class="r" order="2">
          <div class="display-4 mediumFont mainHeaders">
            <h4 id="homePageProjectHeader">Projetos: </h4>
            <p>Dá a conhecer o teu potencial</p>
          </div>
          <p class="regularFont mainTexts">
            Na Buckle, damos-te também a oportunidade de mostrar osteus projetos às grandes empresas.
          </p>
          <button class="btn btn-primary mainButtons blueButtons" to="/projetos" type="button">
            Ver projetos
          </button>
        </b-col>
      </b-row>
    </section>

    <section class="fourthBlock">
      <div>
        <div class="recentAdsDiv">
          <h2 class="text-center regularFont recentAdsHeader mainHeaders">Os anúncios mais recentes</h2>
        </div>
        <b-row class="adRow">
          <b-col class="adCol" xl="4" lg="4" cols="6" style="margin-bottom: 20px;" v-for="(ad, index) in ads" :key="index" >
            <router-link v-if="index < 3" :to="{ name: 'anuncioEspecifico', params: { id: ad.id }}">
              <div class="cardContainer">
                <div class="cardImage">
                  <img :src="ad.imgBg" alt="">
                </div>
                <div class="cardContent">
                  <div class="adData">
                    <div class="profileImage">
                      <img :src="users.find((user) => user.email == ad.email).profileImg" alt="">
                    </div>
                    <div class="nome_curso">
                      <h4>{{users.find((user) => user.email == ad.email).first_name + " " + users.find((user) => user.email == ad.email).last_name}}</h4>
                      <div class="curso">
                        <p>de&nbsp;</p>
                        <p>{{ad.course}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="descricao">
                    <p>{{ad.description}}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </b-col>
          <div class="beforeLastButton">
            <b-button class="lastButton" to="/anuncios">Ver todos</b-button>
          </div>
        </b-row>
      </div>
    </section>

    <section class="fifthBlock">
      <div>
        <div class="recentProjectsDiv">
          <h2 class="regularFont recentProjectsHeader mainHeaders">Os projetos mais recentes</h2>
        </div>
        <b-row class="adRowRecent">
          <b-col class="adCol" xl="4" lg="4" cols="6" style="margin-bottom: 20px;" v-for="(project, index) in projects" :key="index" >
            <router-link v-if="index < 3" :to="{ name: 'projetoEspecifico', params: { id: project.id }}">
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
          <div class="beforeLastButton">
            <b-button class="lastButton projectsButton" to="/projetos">Ver todos</b-button>
          </div>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Home",
  data() {
    return {
      ads: [],
      projects: [],
      users: [],
    }
  },
  computed : {
    ...mapGetters(["getUsers","getAds", "getProjects"]),
  },
  created () {
   this.ads = this.getAds
   this.users = this.getUsers
   this.projects = this.getProjects
  },

};
</script>

<style scoped>
.home {
  background-color: #ebebeb;
}

.lightFont {
  font-family: var(--lightFont);
}

.regularFont {
  font-family: var(--regularFont);
}

.mediumFont {
  font-family: var(--mediumFont);
}

.boldFont {
  font-family: var(--boldFont);
}

.beforeLastButton {
  display: flex;
  justify-content: center;
}

.lastButton{
  font-family: var(--mediumFont);
  width: 153px;
  height: 44px;
  border-radius: 10px;
  text-align: center !important;
  color: white !important;
  background-color: var(--black) !important;
  border: none;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lastButton:hover {
  background-color: white !important;
  color: var(--black) !important;
}

.text-center {
  margin-bottom: 60px;
}



.imageContainer {
  padding: 0 0px 75px 0px;
}

.mainPageImg {
  width: 100% !important;
  height: 650px !important;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

.headerTextMain {
  position: absolute;
  top: 40%;
  left: 100px;
  width: 460px !important;
  text-align: left;
  z-index: 10;
  color: white;
}

.orangeTitle {
  color: #f17941;
}

.projectsButton {
  margin-bottom: 20px;
}

.headerTitleMain {
  font-weight: 500;
  font-size: 50px;
}

.headerSubTitleMain {
  font-weight: 300;
  font-size: 24px;
}

.mainHeaders {
  text-align: left;
  font-size: 32px;
}

#homePageProjectHeader {
  color: var(--blue);
}

#homePageAdHeader {
  color: var(--orange);
}

.mainHeaders p {
  font-size: 22px;
  font-weight: normal;
}

.firstBlock .left {
  padding-right: 75px;
}

.firstBlock .container .row {
  margin: auto;
}

.mainTexts {
  text-align: left;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.mainButtons {
  width: 153px;
  height: 44px;
  font-family: var(--mediumFont);
  float: left;
  border-radius: 10px;
  text-align: center !important;
  color: white !important;
}

.orangeButtons {
  background: #f17941 !important;
  border: none !important;
}

.orangeButtons:hover {
  background: var(--black) !important;
}

.blueButtons {
  background: #5266b7 !important;
  transition: 0.4s ease;
  border:none;
}

.blueButtons:hover {
  background: var(--black) !important;
}

.boxesPath {
  display: flex;
  align-items: center;
  text-align: left;
  background-color: white;
  height: 90px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  border-radius: 10px;
  backdrop-filter: blur(100rem);
  font-family: var(--regularFont);
  color: #353535;
}

.boxesPath .media-body h5 {
  font-size: 20px;
}

.boxes {
  width: 100%;
}

.imageBox {
  width: 50px;
  margin-top: 15px;
  margin-left: 15px;
}

.divProjetos {
  width: 100%;
  margin-top: -60px;
}

.classAnuncios {
  width: 100%;
  margin-top: -45px;
}

.secondBlock {
  background-color: white;
  margin: 75px 25px 0 25px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.secondBlock img {
  border-radius: 15px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recentAdsDiv h2, .recentProjectsDiv h2 {
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
  font-size: 25px;
  color: white;
}

.recentAdsDiv, .recentProjectsDiv {
  width: 500px;
  margin: 0 auto;
  padding: 2px 0 2px 0;
  border-radius: 15px 15px 0 0;
}

.recentAdsDiv {
  background-color: var(--orange);
}

.recentProjectsDiv {
  background-color: var(--blue);
}

.secondBlock .l {
  padding: 15px;
  height: 100%;
  width: 45%;
  padding-right: 50px !important;
}

.secondBlock .r {
  width: 55%;
}

.secondBlock .row {
  width: 100%;
  margin: 0;
}

.secondBlock .adDiv {
  display: flex !important;
  align-items: center;
}

.secondBlock .adDiv .r {
  border-left: 2px dashed #f179419c;
  
}

.secondBlock .projectDiv .r {
  border-left: 2px dashed #5266b79c;
}

.secondBlock .projectDiv {
  padding-top: 50px;
  display: flex;
  align-items: center;
}

.secondBlock .r {
  padding: 15px;
  padding-left: 50px !important;
  height: 100%;
}

.fourthBlock {
  margin: 80px 25px 0 25px;
  padding-top: 20px;
  border-radius: 15px;
}

.fourthBlock .container div h2 {
  font-weight: bold;
  margin-bottom: 30px;
}

.fifthBlock {
  margin: 100px 25px 60px 25px;
}

.cardAdNew {
  height: 310px;
  background: rgba(255, 255, 255, 0.692);
  border: 1px solid rgba(53, 53, 53, 0.8);
  box-sizing: border-box;
  border-radius: 15px 15px 15px 15px;
}

.cardAvatar {
  position: absolute;
  width: 72.86px;
  height: 72.86px;
  left: 10px;
  object-fit: cover;
  border: 1px solid #353535;
  box-sizing: border-box;
  border-radius: 10px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.cardContent {
  margin-top: 10px;
}

.cardTitle {
  font-family: var(--mediumFont);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #353535;
}

.titleCourse {
  font-family: var(--regularFont);
  font-size: 16px;
  margin-left: 5px;
  color: rgba(53, 53, 53, 0.48);
}

.cardText {
  font-family: var(--regularFont);
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  display: flex;
  align-items: center;
  color: #353535;
}

.cardImage img {
  width: 100%;
  height: 340px;
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

.adRow, .adRowRecent {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 150px;
  padding-top: 40px;
  border-radius: 15px;
  background-color: white;
}

.adCol {
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
  transition: 0.5s ease ;
}

.cardContainer:hover .cardImage {
  filter: grayscale(80%);
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

.cardContainer:hover .descricao > p {
  color: var(--orange) !important;
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

</style>
