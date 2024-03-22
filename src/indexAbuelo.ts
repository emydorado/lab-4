import getRickymorty from './data/dataFetch';
import './stylesIndex.css';
import './components/indexPadre';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	async connectedCallback() {
		for (let i = 1; i < 11; i++) {
			const characterData = await getRickymorty(i);
			console.log(characterData);
			this.render(characterData);
		}
	}

	render(characterData: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
				<character-card
					image='${characterData.image}'
					name='${characterData.name}'
					status='${characterData.status}'
					species='${characterData.species}'
					type='${characterData.type || 'No type'}'
					origin='${characterData.origin.name}'>
			`;
		}
	}
}

customElements.define('app-container', AppContainer);
