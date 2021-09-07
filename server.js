const express = require('express');
const { static } = express;
const path = require('path');

const app  = express();
app.use(express.json());

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/api.todos', async(req, res, next) => {
    try {
        res.send(await Todo.findAll());
    }
    catch(ex) {
        next(ex);
    }
})



const init = async()=> {
    try{
        await syncAndSeed();
        const PORT = 3000;
        app.listen(PORT, ()=> console.log(`LISTENING ON PORT:${PORT}`));
    }
    catch(err) {
        console.log(err);
    }
}

const Sequelize = require('sequelize')
const { STRING, BOOLEAN } = Sequelize.DataTypes
const db = new Sequelize('postgres://localhost/new_dealers_choice_redux_thunks_db');
const faker = require('faker');

const Todo = db.define('todo', {
    content: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    done: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

Todo.createRandom = function(){
    return Grocery.create({ name: faker.commerce.productName()});
}
const syncAndSeed = async()=> {
    await db.sync({ force: true });
    await Promise.all([
        Todo.create({ content: 'Drink water'}),
        Todo.create({ content: '15 minutes of yoga', done: true }),
        Todo.create({ content: '15 minutes of breathing'})
    ])
};

init();