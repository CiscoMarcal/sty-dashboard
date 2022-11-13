const commonProps = {
    status: 'Situação',
    createdAt: 'Criação',
    updatedAt: 'Atualização',
};

export default {
    users: {
        actions: {
            resetPssword: 'Redefinir senha',
        },
        properties: {
            id: 'ID',
            initials: 'Iniciais',
            name: 'Nome',
            email: 'E-mail',
            password: 'Senha',
            passwordHash: 'Senha criptografada',
            role: 'Perfil',
            ...commonProps,
        },
    },
    projects: {
        properties: {
            id: 'ID',
            name: 'Nome',
            description: 'Descrição',
            userId: 'Responsável',
            ...commonProps,
        },
    }
}