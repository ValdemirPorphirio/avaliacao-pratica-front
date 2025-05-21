<template>
  <div class="app">

    <div class="header blue darken-1 center">
      Agendamento de Transferências
    </div>

    <div>
      <Formulario @aoSalvarFormulario="saveTransfer" />
    </div>


    <div class="tabela">
      <table>

        <thead>

          <tr>
            <th>Conta de Origem</th>
            <th>Conta de Destino</th>
            <th>Valor</th>
            <th>Data da transferência</th>
            <th>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">Atualizar</i></button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="transfer of transfers" :key="transfer.id">
            <td>{{ transfer.originAccount }}</td>
            <td>{{ transfer.destinationAccount }}</td>
            <td>{{ transfer.ammount }}</td>
            <td>{{ transfer.dateToTransfer }}</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from './components/Formulario.vue';
import ITransfer from './interfaces/ITransfer';
import Transferencia from './services/transferencias';

export default defineComponent({
  name: 'App',

  components: {
    Formulario
  },

  data() {
    return {
      transfers: [] as ITransfer[]
    }
  },

  methods: {
    saveTransfer(transfer: ITransfer) {
      console.log("save Transfer")
    }
  },

  mounted() {
    Transferencia.listar().then((resposta) => {
      console.log(resposta.data);
      this.transfers = resposta.data;
    })
  },
})
</script>

<style>
.header {
  /* background-color: #e2a776; */
  text-align: center;
}
</style>

<!-- : { originAccount: string; destinationAccount: string; ammount: number; dateToTransfer: string; }[] -->
