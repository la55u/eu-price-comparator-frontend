import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./view-shop-button";

type SearchResponse = CountryResponse[];

type CountryResponse = {
  country_code: string;
  items: Item[];
};

type Item = {
  item: string;
  prices: Price[];
  picture_url: string;
};

type Price = {
  price: string;
  link: string;
};

const COUNTRY_DATA = {
  AT: { name: "Austria", flag: "🇦🇹" },
  HU: { name: "Hungary", flag: "🇭🇺" },
} as const;

@customElement("search-input")
export class SearchInput extends LitElement {
  static override styles = css`
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
      white-space: nowrap;
      text-decoration: none;
      color: var(--color-accent-light);
    }
  `;

  @state() private error: string = "";
  @state() private rows: SearchResponse = [];
  @state() private isLoading: boolean = false;

  private async onSearchSubmit(e: SubmitEvent) {
    if (this.isLoading) return; // prevent spam clicks
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    try {
      this.isLoading = true;
      document.body.style.cursor = "progress";
      // reset previous state
      this.error = "";
      this.rows = [];

      const res = await this.fetchResults({ query: fields.query.toString() });
      this.rows = res;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
      document.body.style.cursor = "default";
    }
  }

  private async fetchResults({ query }: { query: string }): Promise<SearchResponse> {
    const searchParams = new URLSearchParams({ query });
    return fetch(`${import.meta.env.VITE_API_BASE}/handler?${searchParams}`).then((res) =>
      res.json()
    );
  }

  // private onQueryChange(e: InputEvent) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.query = value;
  // }

  private getLowestPrice(prices: Price[]): Price | undefined {
    // TODO get lowest price
    return prices[0];
  }

  override render() {
    return html`
      <form class="input-row" @submit=${this.onSearchSubmit}>
        <input
          autofocus
          required
          minlength="3"
          name="query"
          placeholder="Search any product..."
          type="search"
        />
        <button part="button">Go <span>&nbsp;🡪</span></button>
      </form>

      ${this.isLoading
        ? html`<p>Loading...</p>`
        : this.error
        ? html`<p>❌💀 ${this.error}</p>`
        : this.rows.length === 0
        ? html`<p><!-- Idle --></p>`
        : this.rows.every((r) => r.items.length === 0)
        ? html`<p>🔍 No results found!</p>`
        : html`
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
                ${this.rows.flatMap((countryData) =>
                  countryData.items
                    .map((item) => ({
                      ...item,
                      country_code: countryData.country_code,
                    }))
                    .map(
                      (item) => html`
                        <tr>
                          <td>${COUNTRY_DATA[item.country_code].flag}</td>
                          <td>${item.item}</td>
                          <td>${this.getLowestPrice(item.prices)?.price}</td>
                          <td>
                            <view-shop-button
                              href=${this.getLowestPrice(item.prices)?.link}
                            ></view-shop-button>
                          </td>
                        </tr>
                      `
                    )
                )}
              </tbody>
            </table>
          `}
    `;
  }
}
