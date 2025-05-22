<template>
  <div class="app">

    <div class="title teal lighten-2">
      <h6>Agendamento de Transferências</h6>
    </div>

    <b>{{ error }}</b>

    <Formulario @aoSalvarFormulario="saveTransfer" />

    <div class="title teal lighten-2"></div>
    <Tabela :transfers="transfers" @aoAtualizarLista="listar" />

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Formulario from './components/Formulario.vue';
import ITransfer from './interfaces/ITransfer';
import Transferencia from './services/transferencias';
import Tabela from './components/Tabela.vue'

export default defineComponent({
  name: 'App',

  components: {
    Formulario,
    Tabela
  },

  data() {
    return {
      transfer: {} as ITransfer,
      transfers: [] as ITransfer[],
      error: ''
    }
  },

  methods: {
    listar() {
      Transferencia.listar().then((resposta) => {
        this.transfers = resposta.data;
        this.error = ''
      }).catch(e => {
        console.log(e.response.data.errors)
        this.error = e.response.data.message
      })
    },

    saveTransfer(transfer: ITransfer) {
      Transferencia.salvar(transfer).then(resposta => {
        alert('Salvo com sucesso')
        this.error = ''
        this.listar();
      }).catch(e => {
        console.log(e.response.data)
        this.error = e.response.data.message
      })
    }
  },

  mounted() {
    this.listar()
  }
})
</script>

<style>
.title {
  text-align: center;
  font-weight: bold;
  width: 100%;
  height: fit-content;
  border: 1px solid black;
}
</style>