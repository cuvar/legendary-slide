import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { theme } from "../styles/theme";
import "../styles/index.css";

@customElement("legendary-slide")
export class SlideComponent extends LitElement {
  static styles = [
    theme,
    css`
      :host {
        display: block;
        color: var(--color-primary);
      }
    `,
  ];

  @property() name = "Legendary Slide";

  render() {
    return html`
      <div>
        <h1 class="bg-green-500">Hello, ${this.name} this is luca</h1>
      </div>
    `;
  }
}
