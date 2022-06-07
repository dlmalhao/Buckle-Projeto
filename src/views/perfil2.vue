<template>

    <div class="main">
      <div class="left-side">
        <div>
          <b-card no-body>
            <b-tabs pills card vertical class="myTabs">
              <template #tabs-start>
                <li role="presentation" class="profileArea">
                  <div class="sector1">
                    <img :src="userData.img" alt="" />
                    <h3>{{ userData.nome }} {{ userData.sobrenome }}</h3>
                    <b-icon icon="gear"></b-icon>
                  </div>
                </li>
              </template>
              <b-tab title="Perfil" active>
                <div class="right-side">
                  <div class="image-div">
                    <img :src="userData.bgImg" />
                  </div>
                  <div class="user-data-div">
                    <div class="profile">
                      <div class="image">
                        <img :src="userData.img" alt="" />
                      </div>
                      <div class="profile-data">
                        <div class="nome">
                          <h3>{{ userData.nome }} {{ userData.sobrenome }}</h3>
                        </div>
                        <div class="curso">
                          <h3>TSIW</h3>
                        </div>
                        <div class="data">
                          <h3>{{userData.date}}</h3>
                        </div>
                      </div>
                    </div>
                    <div class="settings">
                      <b-icon icon="gear"></b-icon>
                    </div>
                  </div>
                  <div class="main-div">
                    <div class="content">
                      <div class="left">
                        <div class="nome">
                          <div class="nomeLabel">
                            <h3>Nome:</h3>
                          </div>
                          <h3 id="nome">
                            {{ userData.nome }} {{ userData.sobrenome }}
                          </h3>
                        </div>
                        <div class="email">
                          <div class="emailLabel">
                            <h3>Email:</h3>
                          </div>
                          <h3 id="email">{{ userData.email_utilizador }}</h3>
                        </div>
                        <div class="curso">
                          <div class="cursoLabel">
                            <h3>Curso:</h3>
                          </div>
                          <h3 id="curso">TSIW</h3>
                        </div>
                        <div class="descricao">
                          <div class="descricaoLabel">
                            <h3>Descrição:</h3>
                          </div>
                          <h3 id="descricao">{{userData.descricao}}</h3>
                        </div>
                      </div>
                      <div class="right">
                        <div class="container1">
                          <b-icon icon="gear"></b-icon>
                          <div class="containerTexto">
                            <div class="title">
                              <h3>Anúncios</h3>
                            </div>
                            <div class="description">
                              <h3>3</h3>
                            </div>
                          </div>
                        </div>
                        <div class="container2">
                          <b-icon icon="gear"></b-icon>
                          <div class="containerTexto">
                            <div class="title">
                              <h3>Anúncios</h3>
                            </div>
                            <div class="description">
                              <h3>3</h3>
                            </div>
                          </div>
                        </div>
                        <div class="container3">
                          <b-icon icon="gear"></b-icon>
                          <div class="containerTexto">
                            <div class="title">
                              <h3>Anúncios</h3>
                            </div>
                            <div class="description">
                              <h3>3</h3>
                            </div>
                          </div>
                        </div>
                        <div class="container4">
                          <b-icon icon="gear"></b-icon>
                          <div class="containerTexto">
                            <div class="title">
                              <h3>Anúncios</h3>
                            </div>
                            <div class="description">
                              <h3>3</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Anúncios" class="ads-tab">
                <section>
                  <b-row class="filterRow">
                    <div class="filterRectangle">
                      <div class="addAnnouncement">
                        <div class="addButton">
                          <b-button>+</b-button>
                        </div>
                        <div class="addText">
                          <h3>Novo</h3>
                        </div>
                      </div>
                      <div class="div">
                        <div class="filterHeader">
                          <p>Filtrar por:</p>
                        </div>
                        <b-col cols="2">
                          <div class="pesquisa">
                            <p>Pesquisa</p>
                            <b-form-input type="text"></b-form-input>
                          </div>
                        </b-col>
                        <b-col cols="2">
                          <div class="licenciatura">
                            <p>Licenciatura</p>
                            <div class="form-selects">
                              <b-form-select
                                class="form-select cursos"
                              ></b-form-select>
                            </div>
                          </div>
                        </b-col>
                        <b-col cols="2">
                          <div class="ordenar">
                            <p>Ordenar</p>
                            <div class="form-selects">
                              <b-form-select
                                class="form-select cursos"
                              ></b-form-select>
                            </div>
                          </div>
                        </b-col>
                        <b-col cols="2">
                          <div class="tipo">
                            <p>Tipo</p>
                            <div class="buttons">
                              <b-button class="btn-procura">Procura</b-button>
                              <b-button class="btn-oferta">Oferta</b-button>
                            </div>
                          </div>
                        </b-col>
                      </div>
                    </div>
                  </b-row>

                  <b-row style="padding: 0" class="ads-row">
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                  </b-row>
                </section>
              </b-tab>

              <b-tab title="Projetos" class="projects-tab">
                <section>
                  <b-row class="filterRow">
                    <div class="filterRectangle">
                      <div class="addAnnouncement">
                        <div class="addButton">
                          <b-button>+</b-button>
                        </div>
                        <div class="addText">
                          <h3>Novo</h3>
                        </div>
                      </div>
                      <div class="div">
                        <div class="filterHeader">
                          <p>Filtrar por:</p>
                        </div>
                        <b-col cols="2">
                          <div class="pesquisa">
                            <p>Pesquisa</p>
                            <b-form-input type="text"></b-form-input>
                          </div>
                        </b-col>
                        <b-col cols="2">
                          <div class="licenciatura">
                            <p>Licenciatura</p>
                            <div class="form-selects">
                              <b-form-select
                                class="form-select cursos"
                              ></b-form-select>
                            </div>
                          </div>
                        </b-col>
                        <b-col cols="2">
                          <div class="ordenar">
                            <p>Ordenar</p>
                            <div class="form-selects">
                              <b-form-select
                                class="form-select cursos"
                              ></b-form-select>
                            </div>
                          </div>
                        </b-col>
                        <b-col cols="2">
                          <div class="tipo">
                            <p>Tipo</p>
                            <div class="buttons">
                              <b-button class="btn-procura">Procura</b-button>
                              <b-button class="btn-oferta">Oferta</b-button>
                            </div>
                          </div>
                        </b-col>
                      </div>
                    </div>
                  </b-row>

                  <b-row style="padding: 0" class="projects-row">
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                    <b-col cols="4" style="margin-bottom: 20px">
                      <router-link :to="{ name: 'PaginaInicial' }">
                        <div class="cardContainer">
                          <div class="cardImage">
                            <img
                              src="../assets/img/esmad.jpg"
                              class="imageBox"
                            />
                          </div>
                          <div class="cardContent">
                            <div class="adData">
                              <div class="profileImage">
                                <img
                                  src="../assets/img/ireneCosta.jpg"
                                  class="imageBox"
                                />
                              </div>
                              <div class="nome_curso">
                                <h4>Irene Costa</h4>
                                <div class="curso">
                                  <p>de&nbsp;</p>
                                  <p>TCAV</p>
                                </div>
                              </div>
                            </div>
                            <div class="descricao">
                              <p>Descrição 1 2 3</p>
                            </div>
                          </div>
                        </div>
                      </router-link>
                    </b-col>
                  </b-row>
                </section>
              </b-tab>

              <b-tab title="Mensagens">
                <div class="chat">
                  <b-row style="margin-right: 0">
                    <b-col cols="3">
                      <div class="left-side-container">
                        <div class="left-side-Content">
                          <div class="card-container">
                            <div class="card-img">
                              <img src="../assets/img/CardExample.png" alt="" />
                            </div>
                            <div class="card-text">
                              <h4>Irene</h4>
                              <p>24/05/2020</p>
                            </div>
                          </div>
                          <div class="card-container">
                            <div class="card-img">
                              <img src="../assets/img/pedroNunes.jpg" alt="" />
                            </div>
                            <div class="card-text">
                              <h4>António</h4>
                              <p>21/04/2020</p>
                            </div>
                          </div>
                          <div class="card-container">
                            <div class="card-img">
                              <img
                                src="../assets/img/danielFreitas.jpg"
                                alt=""
                              />
                            </div>
                            <div class="card-text">
                              <h4>Gonçalo</h4>
                              <p>03/04/2020</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-col>
                    <b-col cols="9" class="chatZone">
                      <div class="content">
                        <div class="footerBar">
                          <div class="input">
                            <b-form-input
                              type="text"
                              placeholder="Enviar mensagem.."
                            ></b-form-input>
                          </div>
                          <div class="sendButton">
                            <b-icon icon="arrow-return-right"></b-icon>
                          </div>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-tab>
              <b-tab title="Favoritos"
                ><b-card-text>Tab contents 3</b-card-text></b-tab
              >
              <b-tab title="Avaliações"
                ><b-card-text>Tab contents 3</b-card-text></b-tab
              >
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
import StarRating from "vue-star-rating";

export default {
  data() {
    return {
      userData: {},
      selectorOtherPerson: "dadosPerfilOtherPerson",
    };
  },

  mounted() {
    this.getDataUser();
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
  methods: {
    ...mapActions(["getUser"]),

    async getDataUser() {
      try {
        this.userData = await this.getUser(this.$route.params.id);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.message,
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
/* Código da antiga página de perfil */

.generalContainerOtherPerson {
  margin: 2vh;
}

.headBg {
  position: relative;
  top: 0;
  left: 0;
}

.headerTexto {
  color: white !important;
}

.image1 {
  position: relative;
  top: 0;
  left: 0;
  height: 507px;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}

.image2 {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 200px;
}

.headerData {
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 200px;
}

.headerName {
  font-weight: bold;
}

.profileButtonsPanel {
  width: 100%;
  position: relative;
  bottom: 30px;
  padding: 0 180px;
}

.profileButtonsPanel > div {
  background-color: white;
  width: 100%;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}


.dadosProfileOtherPerson{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding : 0 180px;
  text-align:left;
}


.adsContainer.PerfilOtherPerson{
  padding : 0 180px;
}

.backgroundAnuncio{
  border-radius: 5px;
  border: 1px solid;
  width: 100%;
  height:14rem;
}

.imagemAnuncios{
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btn.btn-warning{
  background-color: #F17941;
  border-color: #F17941;
  color:white
}

.btn.btn-warning:hover{
  background-color: #F17941 !important;
  border-color: #F17941 !important;
  color:white
}

.btn.btn-warning:focus{
  background-color: #F17941;
  border-color: #F17941;
  color:white
}


.card.buttonsProfileCard{
  border: none !important;
}

.buttonsProfileCard ul li{
  display: flex;
  justify-content: center;
  margin-right: 6vh;
  margin-left: 6vh;
}

.buttonsProfileCard ul li a {
  background-color: white !important;
  color: var(--black);
  font-weight: bold !important;
} 
.buttonsProfileCard ul li a.active {
  background-color:var(--orange) !important;
} 
.buttonsProfileCard ul li a:hover {
  color:var(--black) !important;
} 

.buttonsProfileCard ul li a.active:hover {
  color:white !important;
} 

.cardProfile ul li a {
  text-align: left;
  color: #353535 !important;
  font-weight: bold;
}

.cardProfile ul li a.active {
  text-align: left;
  background-color: var(--orange) !important;
  color: white !important;
}

.cardProfile ul li a.active:hover {
  text-align: left;
  background-color: var(--orange) !important;
  color: white !important;
}
.cardProfile ul li{
  text-align: left;
}
.cardProfile ul li a:hover{
  color: var(--orange) !important;
}
.cardProfile ul li a:active{
  color: white !important;
}

.cardProfile ul li:focus{
  background-color:#F17941 !important;
}

.cardProfile ul{
  background-color:#F1F1F1;
}
.card.cardProfile{
  background-color:#F1F1F1;
  border: none;
}

.avaliacoes.ContainerOtherPerson{
  padding : 0 180px;
}

.col-md-3.avaliacaoContainer{
 margin-top: 2rem;
 margin-left: 2rem;
}

.statsComment{
  display:flex;
  flex-direction: row;
  align-items: flex-start;
}

.camposAvaliacao{
  margin-bottom: 3vh;
}

.personComment{
  margin-bottom: 0rem;
}

.cursoAvaliacao{
  color: #F17941;
}

.containerAvaliacoes{
  display: flex;
  border : 1px solid;
  border-radius :20px;
}

.containerEsquerdo{
  display: flex;
  align-items: flex-start;
  width : 50%;
}
.avaliacaoImg{
  width : 100%;
  border-radius: 20px;
  object-fit: cover;
  font-weight: bold;
  height:100%
}

.containerDireito{
  display: flex;
 flex-direction: column;
 margin-top: 5vh;
 margin-left: 3vh;
 width: 50%;
 margin-bottom: 5vh;
}

.nomeeAvaliacao{
  text-align: left;
  width: 90%;
}

.camposAvaliacao{
  margin-bottom: 3vh;
}

.btn.btn-warning.enviarAvaliacao{
  width: 90%;
  font-weight: bold;
}












































































































/* Código da página de perfil */
.main {
  display: flex !important;
  width: 100%;
}
.main .left-side {
  height: 90vh;
  width: 100%;
  background-color: white;
}
.main .right-side {
  width: 100%;
  background-color: #f3f3f3;
}

.main .right-side .image-div {
  height: 300px;
}

.main .right-side .image-div img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.right-side .user-data-div {
  display: flex;
  height: 140px;
}

.main .right-side .user-data-div .profile {
  width: 100%;
  height: 200px;
  display: flex;
}

.main .right-side .user-data-div .profile .image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  bottom: 100px;
  left: 100px;
}

.right-side .user-data-div .settings {
  width: 100%;
}

.right-side .user-data-div .profile .profile-data {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
}

.right-side .user-data-div .profile .profile-data .nome h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 1px;
  color: var(--black);
}

.right-side .user-data-div .profile .profile-data .nome {
  margin-bottom: 5px;
}

.right-side .user-data-div .profile .profile-data .curso h3 {
  font-size: 14px;
  margin: 0;
  color: rgb(131, 131, 131);
}

.right-side .user-data-div .profile .profile-data .curso {
  margin-bottom: 5px;
}

.right-side .user-data-div .profile .profile-data .data h3 {
  font-size: 14px;
  color: rgb(131, 131, 131);
  margin: 0;
}

.profile .profile-data {
  position: relative;
  top: 10px;
  left: 140px;
}

.user-data-div .settings {
  font-size: 22px;
  display: flex;
  justify-content: end;
  margin: 20px;
}

.user-data-div .settings svg {
  color: var(--black);
  cursor: pointer;
}

.user-data-div .settings svg:hover {
  color: var(--orange);
}

.main-div .content {
  display: flex;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.main-div {
  margin: 0 25px !important;
  padding-bottom: 20px;
}

.main-div .content .left {
  text-align: left;
  margin-left: 20px;
  width: 50%;
}

.nomeLabel h3,
.emailLabel h3,
.cursoLabel h3,
.descricaoLabel h3 {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  color: var(--black);
}

.nomeLabel {
  margin-top: 20px;
}

.descricao,
.nome,
.email,
.curso {
  margin-bottom: 15px;
  padding: 0 !important;
}

.nome h3,
.email h3,
.curso h3,
.descricao h3 {
  font-size: 14px;
}

.right {
  width: 50%;
  margin: 0 20px;
}

.container1,
.container2,
.container3,
.container4 {
  background-color: #f3f3f3;
  width: 100%;
  display: flex;
  margin: 15px 0;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.container1 {
  margin-top: 20px;
}

.container4 {
  margin-bottom: 20px;
}

.main-div {
  margin-bottom: 20px;
}

.container1 svg,
.container2 svg,
.container3 svg,
.container4 svg {
  font-size: 32px;
  margin-left: 20px;
}

.container1 .containerTexto .title h3,
.container2 .containerTexto .title h3,
.container3 .containerTexto .title h3,
.container4 .containerTexto .title h3 {
  font-size: 18px;
  margin: 5px 0 0 0;
}

.container1 .containerTexto .description h3,
.container2 .containerTexto .description h3,
.container3 .containerTexto .description h3,
.container4 .containerTexto .description h3 {
  font-weight: bold;
  font-size: 22px;
  margin: 5px 0 0 0;
}

#nome,
#email,
#curso,
#descricao {
  color: rgb(131, 131, 131);
}

.containerTexto {
  width: 100%;
  margin-right: 52px;
  padding: 15px 0;
}

.left-side .sector1 {
  display: flex;
  align-items: center;
}

.left-side .sector1 svg {
  margin-left: 20px;
}

.left-side .sector1 h3 {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
}

.left-side .sector1 img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px 20px 10px 0;
}

.card {
  border: none;
}

.tabs {
  width: 100%;
}

.col-auto {
  padding: 0 !important;
}

.col {
  padding: 0 !important;
}

.tab-content > .tab-pane {
  padding: 0 !important;
}

.generalContainer {
  background-color: #ebebeb;
}

.generalContainer section {
  display: flex;
}

.filterRow {
  padding: 0 !important;
  width: auto !important;
  margin: 0;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
}

.filterRectangle {
  width: 300px;
  height: 100%;
  border-radius: 15px;
  background-color: rgb(255, 255, 255) !important;
  padding: 0;
}

.filterHeader p {
  margin: 10px 0 10px 0;
  font-size: 18px;
}

.filterHeader {
  width: 100%;
  border-bottom: 2px solid #ebebeb;
}

.filterRectangle > .div {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px 30px;
  align-items: flex-start;
}

.filterRectangle div input {
  height: 35px !important;
  font-size: 14px;
}

.filterRectangle div select {
  height: 35px !important;
  font-size: 14px;
}

.pesquisa p {
  margin: 5px;
  margin-top: 25px !important;
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

.licenciatura,
.pesquisa,
.ordenar,
.tipo {
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

.filterRectangle .tipo .buttons button {
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
  color: white !important;
}

.headerTitle {
  font-weight: 500;
  font-size: 96px;
  line-height: 100px;
}

.headerSubTitle {
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
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

.col-4 {
  margin-bottom: 25px;
}
.col-4 a {
  text-decoration: none;
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

.cardContainer p,
h4 {
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

.descricao p {
  height: 45px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.cardContent h4,
.cardContent p {
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

.cardContent .adData .nome_curso h4 {
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

.addAnnouncement {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--black);
  padding: 20px 30px;
}

.addAnnouncement .addText h3 {
  font-size: 22px;
  color: white;
  margin-left: 25px;
  margin-bottom: 0;
}

.addAnnouncement .addButton button {
  font-size: 20px;
  background-color: var(--orange);
  border: none;
}

.addAnnouncement .addButton button:hover {
  background-color: var(--blue);
}

.chat > .row {
  margin: 0;
  padding-top: 10px;
}

.left-side-container {
  height: 100vh;
}

.left-side-Content > .card-container > .card-img > img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.card-img {
  margin: 10px;
  display: flex;
  width: 30%;
}

.card-container {
  display: flex !important;
  align-items: center !important;
  height: 100%;
}

.card-container {
  background-color: var(--black);
  border-radius: 10px;
  height: 62px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.15s ease-in;
}

.card-container:hover {
  background-color: var(--orange);
}

.card-container > .card-text {
  color: white;
  width: 70%;
  margin-right: 20px;
  max-height: 100%;
  text-align: left;
}

.card-container > .card-text > h4 {
  font-size: 16px;
  margin: 0;
  font-weight: bold;
  color: white;
}

.card-container > .card-text > p {
  font-size: 14px;
  font-weight: 200;
  margin: 0;
}

.chatZone .content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  border: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.chat {
  overflow: hidden;
  max-height: 87vh;
}

.chatZone {
  max-height: 86vh;
  padding-left: 0;
  border-bottom: 1px solid var(--border);
}

.footerBar {
  width: 100%;
  display: flex;
  padding: 10px 25px;
  position: relative;
}

.footerBar .input {
  width: 100%;
  height: 42px;
}

.footerBar .sendButton {
  width: 36px;
  height: 36px;
  background-color: var(--orange);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  top: 2px;
  left: 5px;
}

.footerBar .input input {
  border: 1px solid var(--border);
  border-radius: 20px;
  height: 100%;
}

.footerBar .sendButton svg {
  color: white;
  font-weight: bold;
}

.footerBar .sendButton:hover {
  background-color: var(--black);
  border: 1px solid var(--black);
}

.chat .col-3 {
  background-color: var(--border);
}
</style>