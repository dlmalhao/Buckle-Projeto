<template>
    <div class="chat">
        <b-row style="margin-right: 0;">
            <b-col cols="3">
                <div class="left-side-container">
                    <div class="left-side-header">
                        <b-dropdown id="dropdown-1" class="m-md-2">
                            <template #button-content>Diogo</template>
                            <b-dropdown-item>Definições de perfil</b-dropdown-item>
                            <b-dropdown-item>Os teus anúncios</b-dropdown-item>
                            <b-dropdown-item>Os teus projetos</b-dropdown-item>
                            <b-dropdown-item>Favoritos</b-dropdown-item>
                            <b-dropdown-item>Avaliações</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item >Terminar sessão</b-dropdown-item>
                        </b-dropdown>
                    </div>
                    <div class="left-side-content">
                        <div class="card-container">
                            <div class="card-img">
                                <img src="../assets/img/CardExample.png" alt="">
                            </div>
                            <div class="card-text">
                                <h4>Irene Costa</h4>
                                <p>Contactada por ti - Anúncio oferta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
            <b-col cols="9">
                <p>chat</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['getLoggedUser'])
    },
    methods : {
        ...mapMutations(['SIGNOUT_USER']),

        logOut() {
            Swal.fire({
            title: 'Atenção!',
            text: "Tens a certeza que queres sair da tua conta ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
            }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Adeus!',
                'Foste deslogado com sucesso.',
                'Ok'
              ).then(() => {
                this.$router.push({ name: "PaginaInicial"})
              })
              this.SIGNOUT_USER()
            }
            })
        }
    }
}
    
</script>

<style>
    .chat > .row {
        margin: 0 50px;
    }

    .left-side-container {
        height: 100vh;
    }

    .left-side-content > .card-container > .card-img > img  {
        width: 70px;
        border-radius: 10px;
    }

    .card-img {
        margin: 20px;
        display: flex;
        width: 100%;        
    }

    .card-container {
        display: flex !important;
        align-items: center !important;
        height: 100%;
    }

    .left-side-content {
        background-color: var(--orange);
        border-radius: 20px;
        height: 100px;
    }

    .card-container > .card-text {
        color: white;
        width: 100%;
        margin-right: 20px;
        max-height: 100%;
        text-align: left;
    }

    .card-container > .card-text > h4 {
        font-size: 25px;
        margin: 0;
        font-weight: bold;
    }

    .card-container > .card-text > p {
        font-size: 16px;
        margin: 0;
    }

</style>