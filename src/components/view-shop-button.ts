import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";

@customElement("view-shop-button")
export class ViewShopButton extends LitElement {
  static override styles = css`
    :host {
    }
    button {
      border-radius: var(--radii-full);
      background-color: rgba(var(--accent), 0.1);
      border: 1px solid rgba(var(--accent-light), 0.1);
      color: white;
      font-weight: bold;
      outline: none;
      box-shadow: none;
      padding: 10px 20px;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
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
      //
    } finally {
      this.isLoading = false;
    }
  }

  override render() {
    return html`<button ?disabled=${this.isLoading} @click=${this.onClick}>
      View shop 🡥
    </button> `;
  }
}
