<template>
  <div class="home">
        <header>
        <div class="intro-body">
            <div class="imageContainer">
              <img src="../assets/img/mainPage.jpg" class="img-fluid mainPageImg">
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
          <b-col col lg="6" order="2">
            <div class="p-5">
              <div>
                <ul class="list-unstyled boxes">
                  <b-media tag="li" class="boxesPath">
                    <template #aside>
                      <img class="imageBox"
                        src="../assets/img/landingPensar.png">
                    </template>
                    <h5 class="mt-0 mb-1">
                      Tens um projeto que precisa de ajuda extra
                    </h5>
                  </b-media>

                  <b-media tag="li" class="my-4 boxesPath">
                    <template #aside>
                      <img class="imageBox"
                        src="../assets/img/landingIdeia.png">
                    </template>

                    <h5 class="mt-0 mb-1">
                      Achas que um aluno de outro curso pode ajudar
                    </h5>
                  </b-media>

                  <b-media tag="li" class="boxesPath">
                    <template #aside>
                      <img class="imageBox"
                        src="../assets/img/landingMaos.png">
                    </template>

                    <h5 class="mt-0 mb-1">
                      Inscreves-te na Buckle e deixas a magia acontecer
                    </h5>
                  </b-media>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col col lg="6" order="1">
            <div class="p-5">
              <h2 class="display-4 mainHeaders mediumFont">Aqui na Buckle facilitamos-te a vida</h2>
              <p class="mainTexts regularFont">É simples e fácil</p>
              <button class="btn btn-primary mainButtons blueButtons" to="/sobre" type="button">Saber mais</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="secondBlock">
      <b-container>
        <b-row align-v="center">
          <b-col col lg="6" order="1">
            <div class="p-5">
              <img src="../assets/img/mainAnuncios.jpg" style="width:550px; border-radius: 15px;">
            </div>
          </b-col>
          <b-col col lg="6" order="2">
            <div class="p-5 classAnuncios">
              <h2 class="display-4 mediumFont mainHeaders">
                <i> Anúncios: </i> A melhor forma de obteres aquilo que procuras
              </h2>
              <p class="regularFont mainTexts">
                Explora todas as ofertas que os alunos da ESMAD estão a oferecer
                ou cria um anúncio do tipo procura e vai direto ao assunto.
              </p>
              <button class="btn btn-primary mainButtons orangeButtons" @click="$router.push({name: 'Anuncios'})" type="button">
                Ver anúncios
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="thirdBlock">
      <b-container>
        <b-row align-v="center">
          <b-col col lg="6" order="2">
            <div class="p-5">
              <img src="../assets/img/mainProjetos.jpg" alt="" srcset="" style="width:550px; border-radius: 15px;"/>
            </div>
          </b-col>
          <b-col col lg="6" order="1">
            <div class="p-5  divProjetos">
              <h2 class="display-4 mediumFont mainHeaders">
                <i>Projetos: </i> Dá a conhecer o teu potencial
              </h2>
              <p class="regularFont mainTexts">
                Na Buckle, damos-te também a oportunidade de mostrar o que andas
                a fazer às grandes empresas.
              </p>
              <button class="btn btn-primary mainButtons blueButtons" to="/projetos" type="button">
                Ver projetos
              </button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="fourthBlock">
      <b-container>
        <div>
          <h2 class="text-center regularFont">Os anúncios mais recentes</h2>
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
        </b-row>
        <div class="beforeLastButton">
          <b-button class="orangeButtons lastButton" to="/anuncios">Ver todos</b-button>
        </div>
      </b-container>
    </section>

    <section class="fifthBlock">
      <b-container>
        <div>
          <h2 class="text-center regularFont">Os projetos mais recentes</h2>
        </div>
        <b-row>
        </b-row>
        <div class="beforeLastButton">
          <b-button class="blueButtons lastButton" to="/projetos">Ver todos </b-button>
        </div>
      </b-container>
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
      users: [],
    }
  },
  computed : {
    ...mapGetters(["getUsers","getAds"]),
  },
  mounted () {
   this.ads = this.getAds
   this.users = this.getUsers
  },

};
</script>

<style scoped>
.home {
  background-color: #e5e5e5;
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
  margin-bottom: 60px;
  font-family: var(--mediumFont);
  width: 153px;
  height: 44px;
  border-radius: 10px;
  text-align: center !important;
  color: white !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-center {
  margin-bottom: 60px;
}



.imageContainer {
  padding: 25px 25px 75px 25px;
}

.mainPageImg {
  width: 100% !important;
  height: 650px !important;
  object-fit: cover;
  border-radius: 20px;
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

.headerTitleMain {
  font-weight: 500;
  font-size: 50px;
}

.headerSubTitleMain {
  font-weight: 300;
  font-size: 25px;
}

.mainHeaders {
  text-align: left;
  font-size: 40px;
}

.mainTexts {
  text-align: left;
  font-size: 22px;
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
  border-radius: 10px;
  backdrop-filter: blur(100rem);
  font-family: var(--regularFont);
  font-size: 22px;
  color: #353535;
}
.boxes {
  width: 520px;
}

.imageBox {
  width: 50px;
  margin-top: 15px;
  margin-left: 15px;
}

.divProjetos {
  width: 650px;
  margin-top: -60px;
}

.classAnuncios {
  width: 650px;
  margin-top: -45px;
}

.firstBlock {
  margin-top: -30px;
}

.secondBlock {
  margin-top: 40px;
  background-color: white;
  margin: 0 25px;
  border-radius: 15px;
}

.thirdBlock {
  margin-top: 60px;
}

.fourthBlock {
  margin-top: 60px;
  padding-top: 20px;
  background-color: white;
  margin: 0 25px;
  border-radius: 15px;
}

.fourthBlock .container div h2 {
  font-weight: bold;
  margin-bottom: 30px;
}

.fifthBlock {
  margin-top: 60px;
  margin-bottom: 60px;
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
  font-size: 18px;
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

.adRow {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 150px;
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

.cardContainer:hover {
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
