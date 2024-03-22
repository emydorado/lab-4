import styles from './styles.css';
export enum Attribute {
	'image' = 'image',
	'name' = 'name',
	'status' = 'status',
	'species' = 'species',
	'type' = 'type',
	'origin' = 'origin',
	'firstEpisodeName' = 'firstEpisodeName',
}

class CharacterCard extends HTMLElement {
	image?: string;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	origin?: string;
	firstEpisodeName?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			name: null,
			status: null,
			species: null,
			type: null,
			origin: null,
			firstEpisodeName: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
    <div id="card">
    <h1>${this.name}</h1>
    <img src='${this.image}'></img>
    <p> Status: ${this.status}</p>
    <p> Species: ${this.species}</p>
    <p> Type: ${this.type || 'No type'}</p>
    <p> Origin: ${this.origin}</p>
    <p> First Episode: ${this.firstEpisodeName}</p>
    </div>
    `;
		}
		const cssContainer = this.ownerDocument.createElement('style');
		cssContainer.innerHTML = styles;
		this.shadowRoot?.appendChild(cssContainer);
	}
}

export default CharacterCard;
customElements.define('character-card', CharacterCard);
