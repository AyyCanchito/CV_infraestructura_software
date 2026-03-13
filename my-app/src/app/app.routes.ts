import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ColumnaIzquierda } from '../../components/columna-izquierda/columna-izquierda';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'mi-historia', component: Home },
    { path: 'habilidades', component: Home },
    { path: 'proyectos-personales', component: Home },
    { path: 'proyectos-github', component: Home },  // 👈
    {
    path: 'softwares',
    component: Home,
    children: [
            { path: 'programas', component: ColumnaIzquierda }
        ]
    }
];