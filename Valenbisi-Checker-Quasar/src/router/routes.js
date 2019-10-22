const routes = [
  {
    // Caso path inicial /
    path: '/',
    // Definimos la layout a cargar con esta ruta y el componente a meter en el layout
    component: () => import('layouts/LayoutPrincipal.vue'),
    // Cargamos ese layout y segun el resto de la ruta, decidimos que pagina se carga en el layout 
    children: [
      { path: '', component: () => import('pages/Estaciones.vue') },
      { path: 'estaciones', component: () => import('pages/Estaciones.vue') },
      { path: 'carril', component: () => import('pages/Carril.vue') },
      { path: 'acercade', component: () => import('pages/AcercaDe.vue') },
      
    ]
  }
]

// Always leave this as last one
// Este se deja para que si no hay coincidencia... nos muestre la pagina de error
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes