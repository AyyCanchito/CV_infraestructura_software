const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria (skills)
let skills = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'HTML / CSS' },
    { id: 4, name: 'Python' },
    { id: 5, name: 'Microsoft office' },
];

let nextId = 6;

// GET / - Bienvenida
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API de Habilidades' });
});

// GET /skills - Ver todas las habilidades
app.get('/skills', (req, res) => {
    res.json(skills);
});

// GET /skills/:id - Ver una habilidad específica
app.get('/skills/:id', (req, res) => {
    const skill = skills.find(s => s.id === parseInt(req.params.id));

    if (!skill) {
        return res.status(404).json({ error: 'Habilidad no encontrada' });
    }

    res.json(skill);
});

// POST /skills - Agregar una habilidad
app.post('/skills', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El campo "name" es requerido' });
    }

    const newSkill = {
        id: nextId++,
        name,
    };

    skills.push(newSkill);
    res.status(201).json(newSkill);
});

// PATCH /skills/:id - Actualizar una habilidad
app.patch('/skills/:id', (req, res) => {
    const index = skills.findIndex(s => s.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Habilidad no encontrada' });
    }

    skills[index] = { ...skills[index], ...req.body };
    res.json(skills[index]);
});

// DELETE /skills/:id - Eliminar una habilidad
app.delete('/skills/:id', (req, res) => {
    const index = skills.findIndex(s => s.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Habilidad no encontrada' });
    }

    const deleted = skills.splice(index, 1);
    res.json({ message: 'Habilidad eliminada', skill: deleted[0] });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});