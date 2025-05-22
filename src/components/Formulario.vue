<template>
    <div class="row">
        <form class="col s12" @submit.prevent="enviar">
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Conta de origem" id="origin_account" type="text"
                        v-model="transfer.originAccount" required>
                    <label class="active" for="origin_account">Conta de origem</label>
                </div>
                <div class="input-field col s6">
                    <input placeholder="Conta de destino" id="destination_account" type="text"
                        v-model="transfer.destinationAccount" required>
                    <label class="active" for="destination_account">Conta de destino</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Valor" id="ammount" type="number" v-model="transfer.ammount" required>
                    <label class="active" for="ammount">Valor</label>
                </div>
                <div class="input-field col s6">
                    <input placeholder="aaaa-mm-dd" id="dateToTransfer" type="date" min="{{ dataMinima }}"
                        v-model="transfer.dateToTransfer" required>
                    <label class="active" for="dateToTransfer">Data da Transferência</label>
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    <button class="waves-effect btn-small blue darken-3">Enviar</button>
                </div>
            </div>
        </form>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ITransfer from '../interfaces/ITransfer';

export default defineComponent({
    name: "Formulario",
    emit: ["aoSalvarFormulario"],

    data() {
        return {
            transfer: {} as ITransfer
        }
    },

    methods: {
        enviar() {
            this.$emit('aoSalvarFormulario', this.transfer);
            this.transfer = {} as ITransfer;
        }
    },
    computed: {
        dataMinima(): string {
            return new Date().toISOString().substring(0, 10)
        }
    }
})
</script>