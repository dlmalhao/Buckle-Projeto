<template>
  <div>
    <div v-if=" getLoggedUser.email === getActiveProfile.email">
      <div class="generalContainer">
        <div class="main-body">
          <div class="row mainContainer">
            <div class="card-body col-md-3">
              <div class="cardHeader">
                <img :src="getLoggedUser.profileImg" class="imgProfileLoggedUser" alt="">
                <h4>{{getLoggedUser.first_name}} {{getLoggedUser.last_name}}</h4>
              </div>
              <div class="cardsProfile">
                
                <b-card no-body class="cardProfile">
                  <b-tabs pills card vertical nav-wrapper-class="w-100">
                    <b-tab class="buttonsProfile" title="Informação" active @click="selector ='dadosPerfil'"></b-tab>
                    <b-tab class="buttonsProfile" title="Anúncios Ativos" @click="selector ='anunciosAtivos'"></b-tab>
                    <b-tab class="buttonsProfile" title="Projetos Ativos" @click="selector ='projetosAtivos'"></b-tab>
                    <b-tab class="buttonsProfile" title="Favoritos" @click="selector ='favoritosPerfil Page'"></b-tab>
                    <b-tab class="buttonsProfile" title="Avaliações" @click="selector ='avaliacoesPerfil Page'"></b-tab>
                    <button class="btn btn-primary adminsButtons"  @click="$router.push({name: 'Gestão de utilizadores'})" v-if="getLoggedUser.role === 'admin'">Gerir Utilizadores</button>
                    <button class="btn btn-primary adminsButtons"  @click="$router.push({name: 'Gestão de anuncios'})" v-if="getLoggedUser.role === 'admin'">Gerir Anúncios</button>
                    <button class="btn btn-primary adminsButtons" v-if="getLoggedUser.role === 'admin'">Gerir Projetos</button>
                  </b-tabs>
                </b-card>
                
              </div>
  
              <div class="certificado">
                <h3>Certificação</h3>
                <p>Conclui todos para obteres um certificado</p>
                <h5>Anuncios oferta concluídos</h5>
                <div class="progress">
                  <div class="progress-bar " role="progressbar" aria-valuenow="6" style="width: 60%" aria-valuemin="0" aria-valuemax="10"></div>
                </div>
                <h5>Avaliações 5 estrelas</h5>
                <div class="progress">
                  <div class="progress-bar " role="progressbar" aria-valuenow="1" style="width: 20%" aria-valuemin="0" aria-valuemax="5"></div>
                </div>
              </div>
            </div>
            
            <div v-if="selector === 'dadosPerfil'" class="dadosPerfil col-md-9">
              <div class="tituloContainer">
                <h1 class="titulo">Informação</h1>
              </div>
              <div class="container dadosPerfil">
                <div class="nomeCompleto">
                  <div class="dadosContainer col-md-3">
                  <label for="nameAgeTxt">Nome</label>
                  <input type="text" class="inputsPerfil" id="nameAgeTxt" v-model="userEdit.first_name " >
                </div>
                <div class="col-md-1"></div>
                <div class="dadosContainer col-md-3">
                  <label for="nameAgeTxt">Apelido</label>
                  <input type="text" class="inputsPerfil" id="nameAgeTxt" v-model="userEdit.last_name " >
                </div>
                </div>
                <div class="dadosContainer">
                  <label for="descriptionTxt">Descrição</label>
                  <input type="text" class="inputsPerfil" id="descriptionTxt"  v-model="userEdit.description "  >
                </div>
                <div class="nomeCompleto">
                  <div class="dadosContainer col-md-3">                 
                    <label for="areaTxt">Curso</label>
                    <input type="text" class="inputsPerfil" id="areaTxt" v-model="userEdit.course" disabled >
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="nameAgeTxt">Imagem de Perfil</label>
                    <input type="text" class="inputsPerfil" id="nameAgeTxt" v-model="userEdit.profileImg" >
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="nameAgeTxt">Imagem de Capa</label>
                    <input type="text" class="inputsPerfil" id="nameAgeTxt" v-model="userEdit.imgBg " >
                  </div>
                </div>
                
                <div class="dadosContainer">
                  <label for="contactTxt">Contacto</label>
                  <input type="text" class="inputsPerfil" id="contactTxt" v-model="userEdit.email" disabled>
                </div>
                <div class="saveButton">
                  <button class="btn btn-warning" @click="saveNewInfo">Salvar</button>
                </div>
                
              </div>
            </div>
            <div v-if="selector === 'anunciosAtivos'" class="anunciosAtivos col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Anuncios ativos</h1>
                </div>                
                <div class="botaoAdicionar">
                  <button class="titulo btn btn-primary" @click="selector ='addAnuncio Page'">Adicionar</button>
                </div>
              </div>
              <div>
                
              </div>
              <div class="adsContainer Perfil">
                <div class="row" >
                  <div class="Card col-md-4" v-for="(ad,index) in userAds" :key="index" :value="ad" >
                      <div class="card text-center " >
                        <div class="backgroundAnuncios">
                          <img :src="getLoggedUser.imgBg" alt="" class="backgroundAnuncio" >
                        </div>
                        <div class="imagemAnuncios">
                          <img :src="getLoggedUser.profileImg" class="imgAnuncio col-md-3">
                          <div class="nome curso container">
                            <h4>{{getLoggedUser.first_name}} {{getLoggedUser.last_name}}<h5>de {{getLoggedUser.course}}</h5></h4>
                            <p>{{ad.description}}</p>
                          </div>
                        </div>
                        <button class="btn btn-danger remove" @click=" removeSelectAd(ad.id) ">X</button>
                        <button class="btn btn-warning" @click=" editSelectAd(ad.id) ">Editar</button> 
                          
                      </div>
                      <div class="col-md-1"></div>
                    </div>
                  </div>     
                </div>
              </div>
            <div v-if="selector === 'projetosAtivos'" class="projetosAtivos col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Projetos ativos</h1>
                </div>                
                <div class="botaoAdicionar">
                  <button class="titulo btn btn-primary" @click="selector ='addProjeto Page'">Criar</button>
                </div>
              </div>
              <div class="ProjetosContainer Perfil">
                  <div class="row">
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" >
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="Card col-md-3">
                      <div class="card text-center">
                          <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" class="backgroundAnuncio">
                        <div class="FotoNome Card">
                          <img src="../assets/imagem.png" alt="" width="30%">
                          <button class="btn btn-warning" @click="selector ='editAd Page'">Editar</button>
                          <div class="nome curso container">
                            <h4>Daniel Freitas <h6>de TSIW</h6></h4>
                          </div>
                        </div>  
                          <p>Sou capaz de criar websites para quem precisar.</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div v-if="selector === 'favoritosPerfil Page'" class="favoritos col-md-9">
              <div class="adsContainer Perfil">
                  <div class="row" >
                    <!-- <div class="cards" v-for="(ad,index) in getAds" :key="index" :value="ad"> -->
                      <div class="Card col-md-4" v-for="(fav,index) in getFavs" :key="index" >
                        <div class="card text-center " >
                          <div class="backgroundAnuncios">
                            <img :src="fav.activeProfile.imgBg" alt="" class="backgroundAnuncio" >
                          </div>
                          <div class="imagemAnuncios">
                            <img :src="fav.activeProfile.profileImg" class="imgAnuncio col-md-3">
                            <div class="nome curso container">
                              <h4>{{fav.activeProfile.first_name +' ' + fav.activeProfile.last_name}} <h5 style=" text-transform: capitalize;">de {{fav.activeProfile.course}}</h5></h4>
                              <p>{{fav.activeProfile.description}}</p>
                            </div>
                          </div>
                            
                            <router-link :to="{ name: 'anuncioEspecifico', params: { id: getId.id }}">
                              <button class="btn btn-warning" @click=" goToActiveAd(fav.adId) ">Ver Anúncio</button> 
                            </router-link>
                          
                        </div>
                        <div class="col-md-1"></div>
                      </div>
                    <!-- </div> -->
                    
                    
                  </div>  
                   
              </div>
            </div>
            <div v-if="selector === 'avaliacoesPerfil Page'" class="avaliacoes col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Avaliações</h1>
                </div>                
                <div class="botaoAdicionar">
                  <button class="titulo btn btn-primary">Ver Todas</button>
                </div>
              </div>
              <div class="row">
              <div class="col-md-3 avaliacaoContainer" v-for="(avaliacao, index) in avaliacoesUserActive" :key="index">
                <div>
                  <div class="statsComment" >
                  <star-rating class="camposAvaliacao" :read-only="true" :star-size="20"  active-color="#F17941" v-model="avaliacao.rating"></star-rating>
                </div>

                <p>{{avaliacao.opiniao}}</p>
                <hr>
                <div>
                  <p class="personComment"><b>{{avaliacao.userName}}</b></p> 
                  <p class="cursoAvaliacao">{{avaliacao.course}}</p>
                </div>
                </div>
                
              </div>
            </div>
              
            </div>

            <div v-if="selector === 'addAnuncio Page'" class="addAnuncio col-md-9">
              <form @submit.prevent="addAds">
                <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Criar Anúncio</h1>
                  
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                    <div class="dadosContainer col-md-11">
                    <label for="tituloAdsTxt">Titulo</label>
                    <input type="text" class="inputsPerfil" id="tituloAdsTxt" v-model="form.title">
                  </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3" v-model="form.description"></textarea>
                </div>
                
                <div class="addAds cursoTipoTempo">
                  <div class="dadosContainer col-md-3">
                    <label for="cursoTxt">Curso</label>
                    <input type="text" class="inputsPerfil" id="tituloAdsTxt" v-model="getLoggedUser.course" disabled>
                      
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tipoTxt">Tipo de Anúncio</label>
                    <select id="tipoTxt" class="inputsPerfil" v-model="form.typeAd" required>
                       <option value="" disabled>Escolha um tipo</option>
                      <option v-for="(typeAd, index) in typeAds" :key="index" :value="typeAd">
                        {{typeAd.text}}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tempoTxt">Tempo necessário</label>
                    <input type="text" class="inputsPerfil" id="tempoTxt" v-model="form.time">
                  </div>
                </div> 

                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <input type="submit" class="btn btn-warning" value="Criar">
                </div>
                </div>
                
                
              </div>
              </form>
              
            </div>

            <div v-if="selector === 'addProjeto Page'" class="addProjeto col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Criar Projeto</h1>
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                  <div class="dadosContainer col-md-5">
                  <label for="tituloAdsTxt">Titulo</label>
                  <input type="text" class="inputsPerfil" id="tituloAdsTxt" >
                </div>
                <div class="col-md-3"></div>
                <div class="dadosContainer col-md-3">
                  <label for="tituloAdsTxt">Fotografia</label>
                  <div class="container addAdsFoto">
                    <button class="btn btn-warning">Escolher imagem (jpeg ou png)</button>
                  </div>
                </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3"></textarea>
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="dataTxt">Data</label>
                  <input type="text" class="inputsPerfil" id="dataTxt" >
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="colaboradoresTxt">Colaboradores</label>
                  <input type="text" class="inputsPerfil" id="colaboradoresTxt">
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="linksTxt">Links</label>
                  <input type="text" class="inputsPerfil" id="linksTxt">
                </div>
                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <button class="btn btn-warning">Salvar</button>
                </div>
                </div>
                
                
              </div>
            </div>
            <div v-if="selector ==  'editAd Page'" class="editAnuncio col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Editar Anúncio</h1>
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                    <div class="dadosContainer col-md-11">
                    <label for="tituloAdsTxt">Titulo</label>
                    <input type="text" class="inputsPerfil" id="tituloAdsTxt" required  v-model="adEdit.title">
                  </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3" v-model="adEdit.description" required></textarea>
                </div>
                <div class="addAds cursoTipoTempo">
                  <div class="dadosContainer col-md-3">
                    <label for="cursoTxt">Curso</label>
                    <input type="text"  id="cursoTxt" class="inputsPerfil" disabled v-model="adEdit.course">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tipoTxt">Tipo de Anúncio</label>
                    <input type="text"  id="tipoTxt" class="inputsPerfil" required v-model="adEdit.typeAd.text">
                  </div>
                  <div class="col-md-1"></div>
                  <div class="dadosContainer col-md-3">
                    <label for="tempoTxt">Tempo necessário</label>
                    <input type="text" class="inputsPerfil" id="tempoTxt" required v-model="adEdit.time">
                  </div>
                </div> 
                <div class="container saveButtonAds">
                  
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                    <button class="btn btn-warning" @click="editAdActive" >Editar</button>
                  </div>
                </div>
                
                
              </div>
            </div>

            <div v-if="selector === 'editProjeto Page'" class="editProjeto col-md-9">
              <div class="titulo">
                <div class="tituloAnuncios">
                  <h1>Criar Projeto</h1>
                </div> 
              </div>
              <div class="container dadosPerfil">
                <div class="addAds tituloFoto">
                  <div class="dadosContainer col-md-5">
                  <label for="tituloAdsTxt">Titulo</label>
                  <input type="text" class="inputsPerfil" id="tituloAdsTxt" >
                </div>
                <div class="col-md-3"></div>
                <div class="dadosContainer col-md-3">
                  <label for="tituloAdsTxt">Fotografia</label>
                  <div class="container addAdsFoto">
                    <button class="btn btn-warning">Escolher imagem (jpeg ou png)</button>
                  </div>
                </div>
                </div>
                
                <div class="dadosContainer col-md-11">
                  <label for="descriptionTxt">Descrição</label>
                  <textarea  id="descriptionTxt" class="md-textarea form-control" rows="3"></textarea>
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="dataTxt">Data</label>
                  <input type="text" class="inputsPerfil" id="dataTxt" >
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="colaboradoresTxt">Colaboradores</label>
                  <input type="text" class="inputsPerfil" id="colaboradoresTxt">
                </div>
                <div class="dadosContainer col-md-11">
                  <label for="linksTxt">Links</label>
                  <input type="text" class="inputsPerfil" id="linksTxt">
                </div>
                <div class="container saveButtonAds">
                  <div class="col-md-9"></div>
                  <div class="saveButtonAds col-md-2">
                  <button class="btn btn-warning">Salvar</button>
                </div>
                </div>
                
                
              </div>
            </div>
        </div>
      </div>
      </div>
      
    
    </div> 
    <div v-else>
      <div class="generalContainerOtherPerson">
        <header class="headBg">
          <div class="intro-body">
            <b-container>
              <b-row>
                <b-col col mx="auto" class="headerText">
                  <img class="image1" :src="getActiveProfile.imgBg" />
                  <img class= "image2" :src="getActiveProfile.profileImg">
                  <div class="headerData">
                    <h1 class="headerTitle">{{getActiveProfile.first_name}} {{getActiveProfile.last_name}}</h1>
                    <p class="headerSubTitle" style="text-transform: capitalize;">{{getActiveProfile.course}}</p>
                  </div>
                  
                </b-col>
              </b-row>
            </b-container>
          </div>
        </header>


        <div class="profileButtonsPanel">
          <div class="div">
             <b-card no-body class="buttonsProfileCard">
                      <b-tabs pills card nav-wrapper-class="w-10">
                        <b-tab class="buttonsProfile" title="Informação" active @click="selectorOtherPerson ='dadosPerfilOtherPerson'"></b-tab>
                        <b-tab class="buttonsProfile" title="Anúncios" @click="selectorOtherPerson ='anunciosOtherPerson'"></b-tab>
                        <b-tab class="buttonsProfile" title="Projetos " @click="selectorOtherPerson ='projetosOtherPerson'"></b-tab>
                        <b-tab class="buttonsProfile" title="Avaliações" @click="selectorOtherPerson ='avaliacoesOtherPerson'"></b-tab>

                      </b-tabs>
              </b-card>
          </div>
        </div>

      <div v-if="selectorOtherPerson == 'dadosPerfilOtherPerson'" class="dadosProfileOtherPerson">
        <h4>Descrição</h4>
        <p v-if="getActiveProfile.description != ''">{{getActiveProfile.description}} </p> 
        <p v-else> Este utilizador ainda não tem uma descrição</p>
        <h4>Contacto</h4>
        <p>{{getActiveProfile.email}}</p> <br>
  
        <h4>Anúncios criados</h4>
        <p> 1 ofertas, 1 procuras</p> <br>
    
        
  
        <h4>Projetos criados</h4>
        <p>1 projeto</p> <br>
  
        <h4>Colaborações em projetos</h4>
        <p>1 colaboração</p>

      </div>

        <div v-if="selectorOtherPerson == 'anunciosOtherPerson'" >
          <div class="adsContainer PerfilOtherPerson">
            <div class="row" >
                <div class="Card col-md-4" v-for="(ad,index) in getAds" :key="index">
                  <div class="card text-center " v-if="getActiveProfile.email == ad.email">
                    <div class="backgroundAnuncios">
                      <img :src="getActiveProfile.imgBg" alt="" class="backgroundAnuncio" >
                    </div>
                    <div class="imagemAnuncios">
                      <img :src="getActiveProfile.profileImg" class="imgAnuncio col-md-3">
                      <div class="nome curso container">
                        <h4>{{getActiveProfile.first_name}} {{getActiveProfile.last_name}}<h5>de {{getActiveProfile.course}}</h5></h4>
                        <p>{{ad.description}}</p>
                      </div>
                    </div>
                      <router-link :to="{ name: 'anuncioEspecifico', params: { id: ad.id }}">
                        <button class="btn btn-warning" @click=" editSelectAd(ad.id) ">Ver Anúncio</button> 
                      </router-link>
                  </div>
                  
                </div>
              <!-- </div> -->

            
            </div>  

          </div>
        </div>

        <div v-if="selectorOtherPerson== 'avaliacoesOtherPerson'">
          <div class="avaliacoes ContainerOtherPerson">
            <div class="row">
              <div class="col-md-3 avaliacaoContainer" v-for="(avaliacao, index) in avaliacoesUserActive" :key="index">
                <div>
                  <div class="statsComment" >
                    <star-rating class="camposAvaliacao" :read-only="true" :star-size="20"  active-color="#F17941" v-model="avaliacao.rating"></star-rating>
                  </div>
                  <p>{{avaliacao.opiniao}}</p>
                  <hr>
                  <div>
                    <p class="personComment"><b>{{avaliacao.userName}}</b></p> 
                    <p class="cursoAvaliacao">{{avaliacao.course}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10 ">
                <h4>Avalia o trabalho da {{getActiveProfile.first_name +' '+ getActiveProfile.last_name}}!</h4>
                <div class="containerAvaliacoes">
                  <div class="containerEsquerdo">
                    <img :src="getActiveProfile.imgBg" class="avaliacaoImg" >
                  </div>
                  <div class="containerDireito">
                    <div class="nomeeAvaliacao">
                      <label for="nomeTxt">Email</label>
                      <b-form-input type="text" class="camposAvaliacao" :value="getLoggedUser.email" disabled></b-form-input>
                    </div>
                    <div class="cursoeOpiniao">
                      <label for="nomeTxt">Curso</label>
                      <b-form-input type="text" class="camposAvaliacao" :value="getLoggedUser.course" disabled></b-form-input>
                      <star-rating class="camposAvaliacao" :animate="true" :active-on-click="true" :star-size="20"  active-color="#F17941"  v-model="avaliacao.rating"></star-rating>
                      <label for="nomeTxt">Opinião</label>
                      <b-form-textarea type="text" class="camposAvaliacao" v-model="avaliacao.opiniaoTxt" ></b-form-textarea>
                    </div>
                    <div class="btn btn-warning enviarAvaliacao" @click="addAvaliacao">Enviar</div>
                  </div>
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
import {mapGetters, mapMutations} from "vuex"
import ratingComment from "@/assets/estrelas.png"
import StarRating from 'vue-star-rating'

export default {
  name: "pefil",
  components: {
    StarRating
  },
  data() {
    return {
      selector: "dadosPerfil",
      selectorOtherPerson: "dadosPerfilOtherPerson",
      ratingComment:ratingComment,
      form: {
        title: "",
        description: "",
        course: "",
        time : "",
        email : "",
        profileImg: "",
        imgBg: "",
        typeAds: ""

        
      },
      
      userAds:[],
      userEdit: {
        first_name:'',
        last_name:'',
        description: "",
        course: "",
        email : "",
        about: ''

        
      },

      adEdit:{
        title: "",
        description: "",
        course: "",
        time : "",
        email : "",
        profileImage: "",
        imgBg: "",
        typeAds: ""
      },

      courses:[ 'tsiw', 'tcav','design-grafico', 'design-industrial',  'fotografia',  'multimedia', 
      ],
      typeAds:[
        { value: 'oferta', text: 'Oferta' },
        { value: 'procura', text: 'Procura' },
      ],

      avaliacao:{
        opiniaoTxt : '',
        rating: 0
      },

      avaliacoes:[],
      avaliacoesUserActive:[]
      
      
    
    }
  },

  updated () {
    this.adEdit = this.getId;
  },
  
  
  mounted () {
    this.userAds = this.$store.state.ads.filter((ad) => ad.email == this.getLoggedUser.email)
    
    this.userEdit = this.getLoggedUser
   
    this.avaliacoes = this.getAvaliacoes
    
    this.avaliacoesUserActive = this.avaliacoes.filter((av) => av.activeProfile == this.getActiveProfile.email)
    
  },

  computed: {
    ...mapGetters(["getLoggedUser", "getAds", "getAdsId", "getId","getUsers", "getActiveProfile", "getFavs", "getAvaliacoes" ]),
   
  },

  methods: {
    ...mapMutations(["SET_ADS", "SET_ACTIVE_AD", "SET_ACTIVE_AD_OUT", "SET_NEW_USER", "SIGNOUT_USER", "SET_LOGGED_USER", "ADD_COMMENT"]),

    

    addAds(){
      

      Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que quer criar o Anúncio?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Criado com sucesso!',
          
        ).then(() => {
          
          
        })
        this.form.id = this.getAdsId;
        this.form.email= this.getLoggedUser.email,
        this.form.profileImg = this.getLoggedUser.profileImg,
        this.form.imgBg = this.getLoggedUser.imgBg
        this.form.course = this.getLoggedUser.course
        this.SET_ADS (this.form)
        window.location.reload();
        
      }
      })
      

    },

    editSelectAd(idEdit){
      if(this.getActiveProfile.email == this.getLoggedUser.email){
        this.SET_ACTIVE_AD(idEdit)

        this.selector ='editAd Page'
      }else{
        this.SET_ACTIVE_AD(idEdit)
         
      }
      
      
    },

    goToActiveAd(idGo){
      this.SET_ACTIVE_AD(idGo)
    },

    removeSelectAd(idRemove){
     Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que quer remover o Anúncio?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#3085d6',
      confirmButtonColor: '#d33',
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Removido com sucesso!',
          
        ).then(() => {
          this.$router.push({ name: "perfil"})
        })
         this.SET_ACTIVE_AD(idRemove)
         for(let i = 0; i <this.getAds.length; i++){
            if(idRemove == this.id){
              this.getAds =this.getAds.splice(i ,1)
              localStorage.setItem('ads', JSON.stringify(this.getAds));
              this.SET_ACTIVE_AD_OUT()
              
              window.location.reload();
             
            }
         }
        
      }
      })
     
    },

    saveNewInfo(){

       Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que quer alterar os seus dados?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Alterado com sucesso!',
          
        ).then(() => {
 
          for(let i = 0; i <this.getUsers.length; i++){
            if(this.getUsers[i].email == this.getLoggedUser.email){
              this.getUsers =this.getUsers.splice(i ,1)
              this.SET_NEW_USER(this.userEdit);
              localStorage.setItem('users', JSON.stringify(this.getUsers));
              this.SIGNOUT_USER()
              this.SET_LOGGED_USER(this.userEdit.email)
          }
            
         
       }
        window.location.reload();
        })
        
        
      }
      })
       
       
    },

    editAdActive(){

       Swal.fire({
      title: 'Atenção!',
      text: "Tens a certeza que quer alterar os seus dados?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Alterado com sucesso!',
          
        ).then(() => {
 
          
        for(let i = 0; i <this.getAds.length; i++){
          if(this.getAds[i].id == this.getId.id){
            this.getAds =this.getAds.splice(i ,1)
            this.SET_ADS(this.adEdit);
            localStorage.setItem('ads', JSON.stringify(this.getAds));
            this.SET_ACTIVE_AD_OUT()
            this.SET_ACTIVE_AD(this.adEdit.id)
          }
        }
        window.location.reload();
        })
        
        
      }
      })

    },


    addAvaliacao () {
      const avaliacaoData = {
        userEmail: this.getLoggedUser.email,
        userName:  this.getLoggedUser.first_name + " " + this.getLoggedUser.last_name,
        userImg : this.getLoggedUser.profileImg,
        activeProfile : this.getActiveProfile.email,
        rating : this.avaliacao.rating,
        opiniao : this.avaliacao.opiniaoTxt,
        course : this.getLoggedUser.course,
      }

      Swal.fire({
      title: 'Atenção!',
      text: "Confirma a avaliação?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
      }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Avaliação feita com sucesso!',
          
        ).then(() => {
          
          
        })
        this.ADD_COMMENT(avaliacaoData)
        this.$router.push({ name: "Anuncios"})
      }
      })

      
      
    },
  
  }
}
</script>

<style>

.progress {
  background-color: #FFB18C !important;
}

.progress-bar {
  background-color: var(--orange) !important;
}

/* Botoes do Perfil */

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


.personComment{
  margin-bottom: 0rem;
}

.newComment{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #5266B7;
}
.statsComment{
  display:flex;
  flex-direction: row;
  align-items: flex-start;
}
.ratingComment{
  margin-bottom: 1rem;
}

.avaliacaoContainer{
  text-align: left;
 
}

.col-md-3.avaliacaoContainer{
 margin-top: 2rem;
 margin-left: 2rem;
 
}

.avaliacoes.Container{
  margin-top: 5rem;
}

.cursoAvaliacao{
  color: #F17941;
}

.mainContainer{
 padding-top: 6rem;
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

.image2 {
  object-fit: cover;
}

.nome.curso.container p{
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.imgAnuncio{
  border-radius: 5px;
  border: 1px solid;
  vertical-align: middle;
  width: 5rem;
  height:5rem;
  object-fit: cover;
  
}
.card.text-center{
  border: 1px solid ;
  border-radius:10px;
  margin-top:2rem;
}

.card.text-center {
  position: relative;  
  width:100%;
    
}
.card.text-center:before {
  content:"";
  position:absolute;
  width:100%;
  height:100%;
  top:0;left:0;right:0;
  background-color:rgba(0,0,0,0);
}
.card.text-center:hover::before {
  background-color:rgba(0,0,0,0.5);
  backdrop-filter: blur(1px);
  filter: blur(1px);
  transition: 0.5s ease;
}
.card.text-center img {
  display:block;
}
.card.text-center button {
  width: 50%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity:0;
} 
.card.text-center:hover button {   
  opacity: 1;
}

.btn.btn-danger.remove{
  top: 5%;
  left: 95%;
  width: 10%;
  display: flex;
  justify-content: center;
  
}




.FotoNome.Card{
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-left: 1rem;
  margin-top:1rem;
  margin-bottom: 1rem;
}


.card-body.col-md-3{
  background-color: #F1F1F1;
  padding-bottom: 10%;
}
.cardHeader{
  display: flex;
  align-items: center;  
}

.cardHeader img{
  margin-right: 1rem;
}
.buttonsPerfil{
  display:flex;
  flex-direction:column;
  width: 100%;
  padding-top:1rem
  
}

.certificado{
  padding-top: 2rem;
}

.nomeCompleto{
  display:flex;
  flex-direction:row;
}

.titulo{
  border-bottom: 1px solid ;
  display: flex;
  align-items: flex-start;
}
.tituloContainer{
  padding-left: 4rem;
  padding-right: 4rem;
}

.tituloAnuncios{
  width: 100%;
  display: flex;
}
.botaoAdicionar{
 width: 100%;
 display: flex;
 justify-content: end;
 padding-right: 5rem;
}

.container.dadosPerfil{
  background-color: #FFB18C;
  border-radius: 10px;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 1px 1px #353535;
}

.dadosContainer{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  
}

.inputsPerfil{
  width: 100%;
  border: 1px solid;
  border-color: var(--orange);
  border-radius: 5px;
}

.container.saveButtonAds{
  display: flex;
  flex-direction: row;
}

.saveButtonAds{
  display: flex;
  flex-direction: column;
}

.saveButton{
  display: flex;
  justify-content: flex-end;
}

.addAds.tituloFoto{
  display: flex;
  flex-direction: row;
}
.addAds.cursoTipoTempo{
  display: flex;
  flex-direction: row;
}

.container.addAdsFoto{
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
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

.btn.btn-primary{
  color: #353535;
  border-color: #F1F1F1;
  background-color: #F1F1F1;
  font-weight: bold;
  text-align: left;
}

.btn.btn-primary:hover{
  background-color: #F17941;
  border-color: #F17941;
}

.btn.btn-primary:focus{
  background-color: #F17941;
  border-color: #F17941;
  box-shadow: 0 12px 16px 0 white, 0 17px 50px 0 white;
}

.titulo.btn.btn.btn-primary{
   background-color: #F17941;
   color: white;
  
}

.titulo.btn.btn.btn-primary:hover{
   background-color: #F17941 !important;
   color: white !important;
}

.titulo.btn.btn.btn-primary:focus{
   background-color: #F17941;
   color: white;
  
}

.btn.btn-primary.adminsButtons{
  background-color: #F17941;
  color: white;
  width: 100%;
  text-align:center;
  margin-bottom: 10px;
}

.btn.btn-primary.adminsButtons:hover{
  background-color: var(--orange) !important;
  color: white;
  width: 100%;
  text-align:center;
  
}

.generalContainerOtherPerson{
  margin: 2vh;
}

.headBg{
  position: relative;
  top: 0;
  left: 0;
  
  /* height:507px;
  border-radius: 20px;
  background-size: cover;
  font-weight: bold; */

}

.image1{
   position: relative;
  top: 0;
  left: 0;
  height:507px;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5)
}

.image2{
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius:200px
}
.headerData{
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius:200px
}


.headerTitle{
  font-weight: bold;
}

.headerText{
  color : white !important;
}

.imgProfile{
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-top: 4vh;
}

.card-header.w-10{
  display: flex;
  justify-content: center;
  border: none !important; 
  background-color:white !important;
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


.profileButtonsPanel {
  width: 100%;
  position: relative;
  bottom: 30px;
  padding: 0 180px;
}

.profileButtonsPanel > div {
  background-color: white ;
  width: 100%;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.tabs{
  display: flex;
  align-items: center;
}

.dadosProfileOtherPerson{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding : 0 180px;
  text-align:left;
}

h4{
  font-weight: bold !important;
}

.adsContainer.PerfilOtherPerson{
  padding : 0 180px;
}

.avaliacoes.ContainerOtherPerson{
  padding : 0 180px;
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

.inputsAvaliacao{
  border-radius: 3px;
  border: none;
  background-color: var(--border)
}

.nomeeAvaliacao{
  text-align: left;
  width: 90%;
}

.cursoeOpiniao{
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
.vue-star-rating-rating-text{
  font-weight: bold;
  color: var(--orange);
  text-align:end;
  position: relative;
  top: 3px;
}
.imgProfileLoggedUser{
  width:100px;
  height:100px;
  margin-left: 3vh;
  object-fit: cover;
  border-radius: 10px;
}

</style>