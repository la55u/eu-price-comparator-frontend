import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import svgSpinner from "../assets/icons/spinner.svg?raw";

import "./gh-octicon";

@customElement("view-shop-button")
export class ViewShopButton extends LitElement {
  static override styles = css`
    button {
      border-radius: var(--radii-full);
      background-color: rgba(var(--accent), 0.1);
      border: 1px solid rgba(var(--accent-light), 0.1);
      color: white;
      font-weight: bold;
      outline: none;
      box-shadow: none;
      width: 130px;
      height: 40px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      white-space: nowrap;
      transition: all 0.3s;
    }
    button:hover {
      opacity: 0.8;
    }
    button[disabled]:hover {
      cursor: "wait";
    }
  `;

  @property() href: string;
  @state() private isLoading: boolean = false;

  private async onClick() {
    try {
      this.isLoading = true;
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/resolve_url`, {
        method: "POST",
        body: JSON.stringify([this.href]),
      });
      const data = await res.json();
      const url = data[0];
      window.open(url, "_blank");
    } catch (error) {
      // open the original, un-resolved url if the resolve failed
      window.open(this.href, "_blank");
    } finally {
      this.isLoading = false;
    }
  }

  override render() {
    return html`
      <button ?disabled=${this.isLoading} @click=${this.onClick}>
        ${this.isLoading
          ? unsafeSVG(svgSpinner)
          : html`
              <span>View shop</span>
              <gh-octicon icon="arrow-up-right"></gh-octicon>
            `}
      </button>
    `;
  }
}
