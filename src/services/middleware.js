import Cookie from 'js-cookie';

export default {
    auth(to, from, next) {
        const token = Cookie.get('_myapp_token');
        // em projeto real é importante checar a validade do token via ajax a uma url da api back-end
        if (!token) {
            next('/login');
        }

        next();
    },
}