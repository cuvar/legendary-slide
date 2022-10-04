import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { create, cssomSheet } from "twind";

const sheet = cssomSheet({ target: new CSSStyleSheet() });
const { tw } = create({ sheet });

@customElement("legendary-slide")
export class SlideComponent extends LitElement {
  static styles = [sheet.target];

  @property() name = "Legendary Slide";

  render() {
    return html`
      <div class=${tw`font-sans flex flex-col`}>
        <h1 class=${tw``}>Hello, ${this.name}, here is ur text:</h1>
        <div class=${tw`text-green-400`}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
