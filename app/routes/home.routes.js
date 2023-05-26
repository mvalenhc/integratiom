import { Router } from 'express'
const home = Router()

// Vista principal de la pagina
home.get('/', (req, res) => {
  res.render('index');
});

// vista para la pagina por genero
home.get('/pagina-genero', (req, res) => {
  res.render('pagina-genero.ejs')
});

// Ruta por defecto al ingresar una ruta desconocida
home.use((req, res) => {
  res.send(`<h1> Ruta desconocida </h1>`);
});

export default home;