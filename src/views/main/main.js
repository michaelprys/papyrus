import { AbstractView } from '../../common/view.js';

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle('Search books');
    }

    render() {
        const main = document.createElement('div');
        main.textContent = 'Test';
        this.app.textContent = '';
        this.app.append(main);
    }
}
