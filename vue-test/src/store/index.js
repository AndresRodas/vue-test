import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [
      { nombre: 'Banana', cantidad: 10, description: 'La banana es una fruta tropical'},
      { nombre: 'Manzana', cantidad: 20, description: 'La manzana crece en los arboles'},
      { nombre: 'Pera', cantidad: 14, description: 'La pera es deliciosa'},
      { nombre: 'Piña', cantidad: 5, description: 'La piña es una fruta muy dulce'},
      { nombre: 'Tomate', cantidad: 8, description: 'El tomate es una fruta poco dulce'}
    ]
  },
  getters: {
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      for (let st of state.frutas){
        st.cantidad = 0
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
