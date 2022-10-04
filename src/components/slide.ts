import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { theme } from "../styles/theme";
import "../styles/index.css";

import { create, cssomSheet } from "twind";
const sheet = cssomSheet({ target: new CSSStyleSheet() });
const { tw } = create({ sheet });

@customElement("legendary-slide")
export class SlideComponent extends LitElement {
  static styles = [sheet.target];

  @property() name = "Legendary Slide";

  render() {
    return html`
      <div>
        <h1 class=${tw`text-green-500 font-sans`}>
          Hello, ${this.name} this is luca
        </h1>
      </div>
    `;
  }
}
