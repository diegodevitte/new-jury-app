const routes = {
    home: '/',
    login: '/login',
    account: '/account',
    projects: '/projects',
    project: (projectId) => projectId ? `/projects/:${projectId}` : '/projects/:projectId'
}

export default routes;