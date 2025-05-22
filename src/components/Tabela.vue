<template>
    <div class="tabela">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Conta de Origem</th>
                    <th>Conta de Destino</th>
                    <th>Valor</th>
                    <th>Taxa</th>
                    <th>Valor + Taxa</th>
                    <th>Data de efetivação</th>
                    <th>
                        <button @click="atualizarLista" class="waves-effect btn-small blue darken-3">Atualizar</button>
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
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ITransfer from '../interfaces/ITransfer';

export default defineComponent({
    name: 'Tabela',
    emit: ['aoAtualizarLista'],
    props: {
        transfers: {
            type: Array as PropType<ITransfer[]>
        }
    },

    methods: {
        atualizarLista() {
            this.$emit('aoAtualizarLista')
        }
    }
})
</script>