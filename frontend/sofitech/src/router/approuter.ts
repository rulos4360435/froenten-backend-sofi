import { createRouter, createWebHistory,type RouteRecordRaw } from 'vue-router'

// Importa las vistas que usarás
import Home from '../views/Home.vue'
import BuscarPaciente from '../views/Paciente.vue'
import BuscarUsuario from '../views/Usuario.vue'

const routes: Array<RouteRecordRaw> = [
  { path:'/',name:'Home',component:Home },
  { path: '/buscar-paciente', name: 'BuscarPaciente', component: BuscarPaciente },
  { path: '/buscar-usuario', name: 'BuscarUsuario', component: BuscarUsuario },
  // Agrega aquí las demás rutas
]

const appRouter = createRouter({
  history: createWebHistory(),
  routes
})

export default appRouter
 