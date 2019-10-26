import { ListComponent } from './components';

const render = rootElement => (document.getElementById(rootElement).innerHTML = ListComponent());
export default { render };
