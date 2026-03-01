import '../static/global.css';
import { MainView } from './views/main/main.js';

class App {
    routes = [
        {
            path: '',
            view: MainView,
        },
    ];

    constructor() {
        window.addEventListener('hashchange', this.handleRoute.bind(this));

        this.handleRoute();
    }

    handleRoute() {
        if (this.currentView) {
            this.currentView.destroy();
        }

        const view = this.routes.find((r) => r.path === location.hash).view;

        this.currentView = new view();
        this.currentView.render();
    }
}

const app = new App();

console.log(app.currentView);
