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

// POST /projects - Crear un proyecto
app.post('/projects', (req, res) => {
    const { name, stars } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'El campo "name" es requerido' });
    }

    const newProject = {
        id: nextId++,
        name,
        stars: stars || 0,
    };

    projects.push(newProject);
    res.status(201).json(newProject);
});

// PATCH /projects/:id - Actualizar un proyecto
app.patch('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    projects[index] = { ...projects[index], ...req.body };
    res.json(projects[index]);
    });

    // DELETE /projects/:id - Eliminar un proyecto
    app.delete('/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const deleted = projects.splice(index, 1);
    res.json({ message: 'Proyecto eliminado', project: deleted[0] });
    });

    app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});