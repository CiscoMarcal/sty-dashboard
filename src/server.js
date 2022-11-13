import "dotenv/config";
import "./database";
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

import UsersResource from './resources/UsersResource';
import ProjectsResource from "./resources/ProjectsResource";

import locale from './locales';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    tadabases: [],
    rootPath: '/admin',
    resources: [
        UsersResource, 
        ProjectsResource
    ],
    ...locale,
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(7777, () => {
    console.log('AdminJS is under http://localhost:7777/admin');
});
