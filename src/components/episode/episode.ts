export enum firstEpisode {
	'firstEpisodeName' = 'firstEpisodeName',
}

class episode extends HTMLElement {
	firstEpisodeName?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<firstEpisode, null> = {
			firstEpisodeName: null,
		};
		return Object.keys(attrs);
	}
	attributeChangedCallback(propName: firstEpisode, oldValue: string | undefined, newValue: string | undefined) {
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
    <p> First Episode: ${this.firstEpisodeName}</p>
    `;
		}
	}
}

export default episode;
customElements.define('character-episode', episode);
