const express = require('express');
const app = express();
const port = 4040;
const ctrl = require('./Controller');



//Middleware 
app.use(express.json());


app.get('/api/ingredients', ctrl.getIngredients);
app.post('', ctrl.addToList);
app.put('', ctrl.editListIngredients);
app.delete('', ctrl.removeFromList);



app.listen(port, console.log(`Listening on port ${port}`))