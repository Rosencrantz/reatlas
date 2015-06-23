import settings from './settings';
import Dialog from './dialog';

class Dropdown extends Dialog {
	constructor() {
		super();
	}

	toggle() {
		console.log('dropdown toggle');
	}
}

export default Dropdown;