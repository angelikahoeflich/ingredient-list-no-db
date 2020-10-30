const express = require('express');
const app = express();

const port = 4040;
const ctrl = require('./Controller');
const cors = require('cors');


//Middleware 
app.use(express.json());
app.use( cors() );

//CRUD 
app.get('/api/ingredients', ctrl.getIngredients);
app.get('/api/ingredients/staples', ctrl.getStaples);
app.get('/api/ingredients/additional', ctrl.getAdditional);
app.get('/api/ingredients/:id', ctrl.getOneIngredient);
app.post('/api/ingredients', ctrl.addToList);
app.put('/api/ingredients/staples/:id', ctrl.editStaplesIngredient);
app.put('/api/ingredients/additonal/:id', ctrl.editAdditionalIngredient);
app.delete('/api/ingredients/staples/:index', ctrl.removeFromStapleList);
app.delete('/api/ingredients/additional/:index', ctrl.removeFromAdditionalList);



app.listen(port, console.log(`Listening on port ${port}`))