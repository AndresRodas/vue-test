<template>
    <div>
        <ol class="list-group">
        <li v-for="(fruta, index) of arrayOrder()" :key="fruta.id" @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">{{index+1}}-{{fruta.nombre}}</div>
            {{fruta.description}}
            </div>
            <span class="badge bg-primary rounded-pill">{{fruta.cantidad}}</span>
        </li>
        </ol>
        <br>
        <button class="btn btn-primary btn-block" @click="reiniciar()">Reset</button>
    </div>   
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'MyLista',
        computed: {
            ...mapState(['frutas'])
        },
        methods:{
            ...mapMutations(['aumentar', 'reiniciar']),
             arrayOrder(){
                return this.frutas.sort((a, b) => b.cantidad - a.cantidad )
            }
        },

    }
</script>
