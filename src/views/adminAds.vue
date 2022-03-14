<template>
    <div>
        <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Titulo</th>
                <th>Descrição</th>
                <th>Imagem</th>
                <th>Tipo</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(ad, index) in ads" :key="index"> 
                    <td>{{index + 1}}</td> 
                    <td>{{ad.title}}</td>  
                    <td>{{ad.description}}</td>
                    <td><img :src="ad.imgBg" style="width: 75px;object-fit: cover;"></td>
                    <td>{{ad.typeAd.text}}</td>
                    <td><b-button variant="danger" @click="remove_ad(index)">Remover</b-button> <b-button variant="info" style="color: white;">Detalhes</b-button> <b-button variant="dark">Editar</b-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: function () {
    return {
      ads: [],
    };
  },
  mounted() {
    this.ads = this.$store.state.ads;
  },
  methods: {
    ...mapMutations(["SET_ADS","REMOVE_AD"]),

    addAds () {
      this.form.id = this.getAdsId;
      this.form.email= this.getLoggedUser.email,

      this.SET_ADS (this.form)
    },
    remove_ad (i) {
      Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que queres remover o anúncio?",
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
            'Anúncio removido com sucesso!',
            'Ok'
          ).then(() => {
            this.REMOVE_AD(i)
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
