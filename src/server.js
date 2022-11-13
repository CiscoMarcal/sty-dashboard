import "dotenv/config";
import "./database";
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';
import UsersResource from './resources/UsersResource';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJS = new AdminJS({
    tadabases: [],
    rootPath: '/admin',
    resources: [UsersResource],
    locale: {
        translations: {
            actions: {
                new: 'Criar novo',
            },
            labels: {
                users: 'Usuários',
            },
            resources: {
                users: {
                    actions: {
                        resetPassword: 'Redefinir senha'
                    },
                    properties: {
                        name: 'Nome',
                    }
                }
            }
        }
    }
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.listen(7777, () => {
    console.log('AdminJS is under http://localhost:7777/admin');
});
