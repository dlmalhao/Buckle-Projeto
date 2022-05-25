<template>
    <div class="main">
        <div class="left-side">
            <p>left</p>
        </div>
        <div class="right-side">
            <div class="image-div">
                <img src="../assets/img/backgroundPerfil.jpg" />
            </div>
            <div class="user-data-div">
                <div class="profile">
                    <div class="image">
                        <img src="../assets/img/danielFreitas.jpg" alt="">
                    </div>
                    <div class="profile-data">
                        <div class="nome">
                            <h3>Daniel Freitas</h3>
                        </div>
                        <div class="curso">
                            <h3>TSIW</h3>
                        </div>
                        <div class="data">
                            <h3>Entrou em 21/04/2022</h3>
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
                            <h3>Daniel Freitas</h3>
                        </div>
                        <div class="email">
                            <div class="emailLabel">
                                <h3>Email:</h3>
                            </div>
                            <h3>danielfreitas@esmad.ipp.pt</h3>
                        </div>
                        <div class="curso">
                            <div class="cursoLabel">
                                <h3>Curso:</h3>
                            </div>
                            <h3>TSIW</h3>
                        </div>
                        <div class="descricao">
                            <div class="descricaoLabel">
                                <h3>Descrição:</h3>
                            </div>
                            <h3>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h3>
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    display: flex !important;
    width: 100%;
    background-color:#ebebeb;
}
.main .left-side {
    height: 90vh;
    width: 400px;
}
.main .right-side {
    width: 100%;
}

.main .right-side .image-div {
    height: 200px;
}

.main .right-side .image-div img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.right-side .user-data-div {
    display: flex;
}

.main .right-side .user-data-div .profile {
    width: 100%;
    height: 200px;
    display: flex;
}

.main .right-side .user-data-div .profile .image img{
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

.right-side .user-data-div .profile .profile-data .nome h3{
    font-size: 18px;
    font-weight: bold;
    margin: 1px;
}

.right-side .user-data-div .profile .profile-data .curso h3 {
    font-size: 14px;
    margin: 1px;
}

.right-side .user-data-div .profile .profile-data .data h3 {
    font-size: 14px;
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
    margin : 20px;
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
}

.main-div {
    margin: 0 25px;
}

.main-div .content .left {
    text-align: left;
    margin-left: 20px;
    width: 50%;
}

.nomeLabel h3, .emailLabel h3, .cursoLabel h3, .descricaoLabel h3 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
}

.nomeLabel {
    margin-top: 20px;
}

.descricao, .nome, .email, .curso {
    margin-bottom: 15px;
}

.nome h3, .email h3, .curso h3, .descricao h3 {
    font-size: 14px;
}

.right {
    width: 50%;
    margin: 0 20px;
}

.container1, .container2, .container3, .container4 {
    background-color: #ebebeb;
    width: 100%;
    display: flex;
    margin: 15px 0;
    align-items:center;
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

.container1 svg, .container2 svg, .container3 svg, .container4 svg {
    font-size: 32px;
    margin-left: 20px;
}

.container1 .containerTexto .title h3,
 .container2 .containerTexto .title h3,
  .container3 .containerTexto .title h3,
   .container4 .containerTexto .title h3{
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

.containerTexto {
    width: 100%;
    margin-right: 52px;
    padding: 15px 0;
}


</style>