var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
const COUNTRY_DATA = {
    AT: { name: "Austria", flag: "🇦🇹" },
    HU: { name: "Hungary", flag: "🇭🇺" },
};
let SearchInput = class SearchInput extends LitElement {
    constructor() {
        super(...arguments);
        this.error = "";
        this.rows = [];
        this.isLoading = false;
    }
    async onSearchSubmit(e) {
        if (this.isLoading)
            return; // prevent spam clicks
        e.preventDefault();
        const fields = Object.fromEntries(new FormData(e.target));
        try {
            this.isLoading = true;
            document.body.style.cursor = "progress";
            // reset previous state
            this.error = "";
            this.rows = [];
            const res = await this.fetchResults({ query: fields.query.toString() });
            this.rows = res;
        }
        catch (error) {
            this.error = error.message;
        }
        finally {
            this.isLoading = false;
            document.body.style.cursor = "default";
        }
    }
    async fetchResults({ query }) {
        const searchParams = new URLSearchParams({ query });
        return fetch(`https://eu-price-comparer.vercel.app/api/handler?${searchParams}`).then((res) => res.json());
    }
    // private onQueryChange(e: InputEvent) {
    //   const value = (e.target as HTMLInputElement).value;
    //   this.query = value;
    // }
    getLowestPrice(prices) {
        // TODO get lowest price
        return prices[0];
    }
    render() {
        return html `
      <form class="input-row" @submit=${this.onSearchSubmit}>
        <input
          required
          minlength="3"
          name="query"
          placeholder="Search any product..."
          type="search"
        />
        <button part="button">Go <span>&nbsp;🡪</span></button>
      </form>

      ${this.isLoading
            ? html `<p>Loading...</p>`
            : this.error
                ? html `<p>❌💀 ${this.error}</p>`
                : this.rows.length === 0
                    ? html `<p><!-- Idle --></p>`
                    : this.rows.every((r) => r.items.length === 0)
                        ? html `<p>🔍 No results found!</p>`
                        : html `
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                ${this.rows.flatMap((countryData) => countryData.items
                            .map((item) => ({
                            ...item,
                            country_code: countryData.country_code,
                        }))
                            .map((item) => html `
                        <tr>
                          <td>${COUNTRY_DATA[item.country_code].flag}</td>
                          <td>${item.item}</td>
                          <td>${this.getLowestPrice(item.prices).price}</td>
                          <td>
                            <a
                              href=${this.getLowestPrice(item.prices).link}
                              target="_blank"
                              >Go to shop</a
                            >
                            ↗️
                            <a href="https://example.org" target="_blank"
                              >View all offers</a
                            >
                            ↗️
                          </td>
                        </tr>
                      `))}
              </tbody>
            </table>
          `}
    `;
    }
};
SearchInput.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .input-row {
      display: flex;
      gap: 0.5em;
    }
    input {
      background-color: var(--color-light);
      border-radius: var(--radii-full);
      box-shadow: var(--shadow-sm);
      color: white;
      border: none;
      padding: 0 30px;
      height: 50px;
      font-size: 20px;
      flex-grow: 1;
    }
    button {
      border-radius: var(--radii-full);
      background-color: var(--color-accent);
      color: white;
      font-weight: bold;
      outline: none;
      box-shadow: none;
      border: none;
      padding: 0 30px;
      cursor: pointer;
    }
    button:hover {
      opacity: 0.8;
    }
    table {
      width: 100%;
      background-color: var(--color-light);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radii-md);
      padding: 16px;
    }
    tbody tr:hover {
      outline: 1px solid gray;
    }
    td:last-child {
      text-align: end;
    }
    td {
      padding: 8px;
    }
    td > a {
      color: var(--color-accent-light);
    }
  `;
__decorate([
    state()
], SearchInput.prototype, "error", void 0);
__decorate([
    state()
], SearchInput.prototype, "rows", void 0);
__decorate([
    state()
], SearchInput.prototype, "isLoading", void 0);
SearchInput = __decorate([
    customElement("search-input")
], SearchInput);
export { SearchInput };
