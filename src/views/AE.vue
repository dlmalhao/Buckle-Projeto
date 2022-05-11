<template>
  <div class="main">
    <div class="generalContainer">
      <header class="masthead">
        <div class="intro-body">
          <b-container>
            <b-row>
              <b-col col mx="auto" class="headerText">
                <h1 class="headerTitle">Associação</h1>
                <p class="headerSubTitle">
                  de estudantes
                </p>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .masthead {
  background-image: url("../assets/img/anunciosPage.jpg");
  height: 507px;
  margin-bottom: 80px;
  background-size: cover;
}
.generalContainer {
  background-color: #ebebeb;
}

.generalContainer section {
  display: flex;
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
font-size: 96px;
line-height: 96px;
}
</style>