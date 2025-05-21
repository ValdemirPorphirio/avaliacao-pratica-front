<template>
  <div class="app">

    <div class="title teal lighten-2">
      <h6>Agendamento de Transferências</h6>
    </div>

    <div>
      <Formulario @aoSalvarFormulario="saveTransfer" />
    </div>

    <div class="title teal lighten-2"></div>

    <div class="tabela">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Conta de Origem</th>
            <th>Conta de Destino</th>
            <th>Valor</th>
            <th>Taxa de transferência</th>
            <th>Valor total</th>
            <th>Data de efetivação</th>
            <th>
              <button @click="listar" class="waves-effect btn-small blue darken-3">Atualizar</button>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="transfer of transfers" :key="transfer.id">
            <td>{{ transfer.id }}</td>
            <td>{{ transfer.originAccount }}</td>
            <td>{{ transfer.destinationAccount }}</td>
            <td>R${{ transfer.ammount }}</td>
            <td>R${{ transfer.transferFee }}</td>
            <td>R${{ transfer.ammount + transfer.transferFee }}</td>
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
      transfer: {} as ITransfer,
      transfers: [] as ITransfer[]
    }
  },

  methods: {
    listar() {
      Transferencia.listar().then((resposta) => {
        this.transfers = resposta.data;
      })
    },

    saveTransfer(transfer: ITransfer) {
      Transferencia.salvar(transfer).then(resposta => {
        this.limparForm();
        alert('Salvo com sucesso')
        this.listar();
      });
    },

    limparForm() {
      this.transfer.originAccount = '';
      this.transfer = {} as ITransfer;
    }
  },

  mounted() {
    this.listar();
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