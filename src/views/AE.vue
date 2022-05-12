<template>
  <div class="main">
    <div class="generalContainer">
      <div class="left-side">
        <div class="left-side-container">
          <div class="text">
            <p>Associação de Estudantes</p>
          </div>
          <div class="filter">
            <b-row class="filterRow">
              <div class="filterRectangle">
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
                    <div class="ordenar">
                      <p>Ordenar</p>
                      <div class="form-selects">
                        <b-form-select class="form-select cursos"></b-form-select>
                      </div>
                    </div>
                  </b-col>
                  <b-col cols="2">
                    <div class="tipo">
                      <p>Tipo</p>
                      <div class="buttons">
                        <b-button class="btn-procura" >Procura</b-button>
                        <b-button class="btn-oferta">Oferta</b-button>
                      </div>
                    </div>
                  </b-col>
                </div>
              </div>
            </b-row>
          </div>
        </div>
      </div>
      <div class="center">
        <b-row style="padding:0;">
          <b-col xl="12" lg="12" cols="12" v-for="(ad,index) in this.ae" :key="index">
            <div class="cardContainer">
              <div class="cardContent">
                <div class="adData">
                  <div class="profileImage">
                    <img :src="users.find((user) => user.email == ad.email).profileImg" alt="">
                  </div>
                  <div class="data">
                    <div class="header_data">
                      <h4>{{users.find((user) => user.email == ad.email).first_name + " " + users.find((user) => user.email == ad.email).last_name}}</h4>
                      <h5>{{ad.email}}</h5>
                    </div>
                    <div class="texto_data">
                      <p>{{ad.date}}</p>
                    </div>
                  </div>
                </div>
                <div class="descricao">
                  <p>{{ad.description}}</p>
                </div>
                <div class="actions">
                  <div class="like">
                    <a v-if="favs.find((favs) => favs.topicIdx == index)" @click="removeFavourite(index)"><b-icon icon="heart-fill" style="width: 20px; height: 20px; color: green;"></b-icon></a>
                    <a v-else @click="addFavourite(index)"><b-icon icon="heart" style="width: 20px; height: 20px;"></b-icon></a>
                  </div>
                  <div class="delete" v-if="ad.email == loggedUser.email">
                    <a @click="remove(index)"><b-icon icon="trash" style="width: 20px; height: 20px;"></b-icon></a>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>


      <div class="right-side-ae" v-if="isAe">
        <div class="title">
          <h3>Adicionar novo tópico</h3>
        </div>
        <div class="right-side-ae-container">
          <div class="form">
            <form @submit.prevent="addTopic">
              <div class="data">
                <div class="description">
                  <div class="form-group">
                    <textarea placeholder="Escreva aqui..." v-model="formDescription" class="form-control" name="" id="" rows="10"></textarea>
                  </div>
                </div>
              </div>
              <div class="button">
                <b-button type="submit">Adicionar</b-button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div class="right-side" v-else>
        <div class="title">
            <h3>Precisas de ajuda?</h3>
        </div>
        <div class="right-side-container">
          <div class="form">
            <form action="">
              <div class="student-data">
                <div class="form-name">
                  <b-form-input type="text" required placeholder="Nome"></b-form-input>
                </div>
                <div class="form-email" id="footer-form-email">
                  <b-form-input type="email" required placeholder="Email de estudante"></b-form-input>
                </div>
              </div>
              <div class="form-message-container">
                <b-form-textarea placeholder="Mensagem" class="form-message" rows="10"></b-form-textarea>
              </div>
              <div class="form-submit">
                <b-button type="submit">Enviar</b-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
  data() {
    return {
      ae: [],
      users: [],
      loggedUser: [],
      formDescription: "",
      favs: []
    }
  },
  computed : {
    ...mapGetters(["getUsers","getAe","getLoggedUser","getAeFavs"]),
    isAe() {
      if(this.$store.getters.getLoggedUser) {
        if(this.$store.getters.getLoggedUser.role == 'ae' || this.$store.getters.getLoggedUser.role == 'admin') {
          return true
        }
        else {
          return false
        }
      }
    },
  },
  mounted () {
    this.ae = this.getAe
    this.users = this.getUsers
    this.loggedUser = this.getLoggedUser
    this.favs = this.getAeFavs
  },
  methods: {
    ...mapMutations(["SET_NEW_AE_AD", "REMOVE_AE_AD","ADD_AE_FAV", "REMOVE_AE_FAV"]),

    addTopic() {
      const today = new Date()
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      const time = today.getHours() + ":" + today.getMinutes()
      const formData = {
        id: this.ae[this.ae.length-1].id + 1,
        email: this.loggedUser.email,
        description: this.formDescription,
        date: date + "?" + time,
        likes: 0
      }
      this.SET_NEW_AE_AD(formData)
    },
    remove(i) {
      Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que queres remover este tópico?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Informação!',
            'Tópico removido com sucesso!',
            'Ok'
          ).then(() => {
            this.REMOVE_AE_AD(i)
          })
        }
      })
    },
    addFavourite (i) {
      const favData = {
        userEmail: this.loggedUser.email,
        id: this.favs.length > 0 ? this.favs[this.favs.length - 1] + 1 : 0,
        topicIdx: i
      }  
      this.ADD_AE_FAV(favData)
    },
    removeFavourite(i) {
      let idx = this.favs.indexOf(this.favs.find((fav) => fav.topicIdx == i))
      this.REMOVE_AE_FAV(idx)
    },
  }
}
</script>

<style scoped>
.main {
  background-color: #ebebeb;
}

  .generalContainer {
    display: flex;
    width: 100%;
  }

  .center {
    width: 100%;
    margin-top: 83px;
  }

  .left-side {
    width: 400px;
    border-radius: 15px;
    margin: 25px 25px 0 100px;
  }

  .right-side, .right-side-ae {
    width: 600px;
    border-radius: 15px;
    margin: 108px 100px 0 25px;
  }

  .left-side .text {
    background-color: var(--orange);
    padding: 1px;
    margin-bottom: 15px;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .left-side .text p {
    font-weight: bold;
    font-size: 20px;
    margin: 18px 0;
    color: white;
    text-align: center;
  }

  .filterRow {
  padding: 0!important;
  width: 100%;
  margin: 0;
  height: 60vh!important;
}

textarea {
  resize: none;
}

.filterRectangle {
  width: 300px;
  height: 100%;
  background-color: rgb(255, 255, 255) !important;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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








.profileImage img {
  width: 50px;
  height: 50px;
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
  border-radius: 15px;
  margin: 25px 0px 0 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
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
  min-height: 120px;
}

.descricao {
  padding: 0 15px;
  text-align: left;
  font-size: 16px;
  margin: 15px 0;
  overflow-wrap: anywhere;
  position: relative;
}

.cardContent h4, .cardContent p {
  margin: 0;
}

.cardContent .actions {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-bottom: 15px;
  padding-right: 20px;
}

.cardContent .actions .like {
  margin-right: 8px;
}

.cardContent .actions .like a:hover svg {
  color: green;
  width: 22px !important;
  height: 22px !important;
}

.cardContent .actions .like a svg {
  position: absolute;
  right: 60px;
  bottom: 15px;
  cursor: pointer;
}

.cardContent .actions .delete a svg {
  position: absolute;
  right: 20px;
  bottom: 15px;
  cursor: pointer;
}

.cardContent .actions .delete a:hover svg {
  color: red;
  width: 22px !important;
  height: 22px !important;
}

.cardContent .actions .delete {
  margin-left: 8px;
}

.cardContent .adData .data {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.cardContent .adData .data .header_data {
  display: flex;
  align-items:center;
}

.nome_curso > .texto_data {
  display: flex;
  justify-content: flex-start;
}

.cardContent .adData {
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 10px;
}

.cardContent .adData .data .header_data h4{
  font-weight: bold;
  margin-right: 5px;
  font-size: 14px;
}

.cardContent .adData .data h5 {
  font-size: 14px;
  color: grey !important;
  margin: 0;
}

.cardContent .adData .data p {
  font-size: 14px;
  color: grey !important;
  margin: 5px 0 0 0;
}

.adData {
  display: flex;
}

.right-side .title h3, .right-side-ae .title h3{
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin: 18px 0;
}

.right-side .title, .right-side-ae .title {
  background-color: var(--blue);
  padding: 1px;
  margin-bottom: 15px;
  border-radius: 15px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
}

.right-side-container {
  background-color: white;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border-radius: 15px;
  min-height: 333px;
}

.right-side-ae-container {
  background-color: white;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  border-radius: 15px;
}

.right-side-ae-container .button button {
  width: 100%;
  background-color: var(--blue);
  border: none;
}

.right-side-ae-container .button {
  margin-top: 15px;
}

.right-side-ae-container .button button:hover {
  background-color: var(--orange);
}

.right-side-ae-container .form {
  padding: 15px;
}

.form {
  margin: 10px;
}

.form-name {
  padding-top: 10px;
}

.form-email {
  padding-top: 10px;
}

.form-message-container {
  padding-top: 10px;
}

.form-submit {
  padding-top: 10px;
  padding-bottom: 10px;
}

.form-submit button {
  width: 100%;
}

</style>