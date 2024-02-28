import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./view-shop-button";
import "./svg-icon";
import svgSpinner from "../assets/icons/spinner.svg?raw";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { formatPrice } from "../utils/helpers";

type SearchParams = {
  query: string;
  currency: string;
};

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

type Currency = {
  code: string;
  symbol: string;
};

const COUNTRY_DATA: Record<string, { name: string; flag: string; currency: Currency }> = {
  AT: {
    name: "Austria",
    flag: "🇦🇹",
    currency: { code: "EUR", symbol: "€" },
  },
  HU: {
    name: "Hungary",
    flag: "🇭🇺",
    currency: { code: "HUF", symbol: "Ft" },
  },
} as const;

@customElement("search-input")
export class SearchInput extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
    form {
      max-width: 900px;
      margin: 0 auto;

      & .input-row {
        position: relative;

        & input {
          background-color: var(--color-light);
          border-radius: var(--radii-full);
          box-shadow: var(--shadow-sm);
          color: white;
          border: none;
          padding: 0 120px 0 30px;
          height: 50px;
          font-size: 1.2rem;
          min-width: 100px;
          width: 100%;
        }
        & button {
          position: absolute;
          right: 4px;
          top: 4px;
          bottom: 4px;
          border-radius: var(--radii-full);
          background-color: var(--color-accent);
          color: white;
          font-weight: bold;
          outline: none;
          box-shadow: none;
          border: none;
          padding: 0 30px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        & button:disabled {
          cursor: not-allowed;
        }
        & button:hover {
          opacity: 0.8;
        }
      }

      .filters {
        transition: all 0.3s;
        border-radius: var(--radii-md);
        margin: 1rem 0;
        padding: 10px 30px;
        text-align: end;

        &[open] {
          background: var(--color-light);
        }
        & > summary {
          cursor: pointer;
          display: flex;
          flex-direction: row-reverse;
          gap: 10px;
          align-items: center;
          list-style: none;
          user-select: none;
          margin-bottom: 10px;
        }
        & label {
          font-size: 0.8rem;
          margin-right: 0.5rem;
          font-weight: 500;
        }
        & select {
          background: var(--color-accent-light);
          border: none;
          box-shadow: none;
          border-radius: 4px;
          padding: 4px 6px;
          font-weight: 500;
        }
      }
    }

    .spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      gap: 1em;
    }
    .placeholder {
      display: flex;
      flex-direction: column;
      gap: 1em;
      align-items: center;
      margin-top: 50px;

      & > img {
        width: 200px;
        aspect-ratio: 1;
        max-width: 50vw;
      }
      & > span {
        font-size: 1.6rem;
        font-style: italic;
        font-weight: 600;
        text-align: center;
      }
    }

    .results {
      background: var(--color-light);
      box-shadow: var(--shadow-sm);
      border-radius: var(--radii-md);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      & > hr {
        width: 100%;
        opacity: 0.1;
      }
    }
    .result-item {
      display: grid;
      width: 100%;
      grid-template-columns: auto auto 1fr auto auto;
      grid-template-areas: "flag img name price btn";
      justify-content: start;
      align-items: center;
      gap: 6px 1rem;
      border-radius: var(--radii-md);

      & .flag {
        grid-area: flag;
      }
      & .price {
        grid-area: price;
        margin-left: auto;
        font-weight: bold;
        text-wrap: pretty;
        font-variant-numeric: tabular-nums;
        & summary {
          font-weight: normal;
          font-size: 0.8em;
          width: min-content;
          cursor: pointer;
        }
        & a {
          display: block;
          font-size: 0.8rem;
          color: white;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      & .name {
        grid-area: name;
        display: -webkit-box;
        max-width: 600px;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: clamp(0.875rem, 0.7763rem + 0.3947vw, 1.25rem);
      }
      & .btn {
        grid-area: btn;
      }
      & img {
        grid-area: img;
        width: 60px;
        aspect-ratio: 1;
        border-radius: 4px;
        object-fit: contain;
      }
    }
    @media (max-width: 600px) {
      .result-item {
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: "img name name name" "flag price price btn";
        column-gap: 10px;
        & .price {
          margin-left: unset;
        }
        & img {
          width: 50px;
        }
        & .flag {
          align-self: flex-start;
        }
        & .btn {
          align-self: flex-start;
        }
      }
    }
  `;

  private filtersRef: Ref<HTMLDetailsElement> = createRef();

  @state() private error: string = "";
  @state() private rows: SearchResponse = [];
  @state() private isLoading: boolean = false;
  @state() private currency: Currency = { code: "HUF", symbol: "Ft" };

  private async onSearchSubmit(e: SubmitEvent) {
    if (this.isLoading) return; // prevent spam clicks
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    try {
      this.isLoading = true;
      document.body.style.cursor = "progress";

      this.error = ""; // reset previous error
      this.rows = []; // reset previous results

      this.filtersRef.value.open = false; // close the filters panel

      const res = await this.fetchResults({
        query: fields.query.toString(),
        currency: this.currency.code,
      });
      this.rows = res;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
      document.body.style.cursor = "default";
    }
  }

  private async fetchResults(params: SearchParams): Promise<SearchResponse> {
    const searchParams = new URLSearchParams(params);
    return fetch(`${import.meta.env.VITE_API_BASE}/handler?${searchParams}`).then((res) =>
      res.json(),
    );
  }

  private onCurrencyChange(event: Event) {
    const code = (event.target as HTMLSelectElement).value;
    this.currency = Object.values(COUNTRY_DATA).find((c) => c.currency.code === code).currency;
  }

  private getLowestPrice(prices: Price[]): Price | undefined {
    // TODO get lowest price
    return prices[0];
  }

  override render() {
    return html`
      <form @submit=${this.onSearchSubmit}>
        <div class="input-row">
          <input
            autofocus
            required
            autocomplete="off"
            minlength="3"
            name="query"
            placeholder="Search any product..."
            type="search"
          />
          <button part="button" ?disabled=${this.isLoading}>
            <svg-icon icon="search"></svg-icon> Go
          </button>
        </div>

        <details class="filters" ${ref(this.filtersRef)}>
          <summary>
            <span>Filters</span>
            <svg-icon vertical-align="middle" icon="sliders"></svg-icon>
          </summary>

          <div>
            <label id="currency">Currency</label>
            <select aria-labelledby="currency" name="currency" @change=${this.onCurrencyChange}>
              ${[...new Set(Object.values(COUNTRY_DATA).map((c) => c.currency.code))].map(
                (code) => html`<option ?selected=${code === this.currency.code}>${code}</option>`,
              )}
            </select>
          </div>
        </details>
      </form>

      ${this.isLoading
        ? html`<div class="spinner">${unsafeSVG(svgSpinner)}<span>Loading results...</span></div>`
        : this.error
        ? html`<p>❌💀 ${this.error}</p>`
        : this.rows.length === 0
        ? html`<div class="placeholder">
            <img src="images/money_with_wings_3d.png" aria-hidden="true" />
            <span>Go save some money!</span>
          </div>`
        : this.rows.every((r) => r.items.length === 0)
        ? html`<p>🔍 No results found!</p>`
        : html`
            <section class="results">
              ${this.rows
                .flatMap((countryData) =>
                  countryData.items.map((item) => ({
                    ...item,
                    country_code: countryData.country_code,
                  })),
                )
                .filter((r) => r.prices.length > 0)
                .sort((r1, r2) => {
                  return (
                    Number(this.getLowestPrice(r1.prices).price) -
                    Number(this.getLowestPrice(r2.prices).price)
                  );
                })
                .map(
                  (item) => html`
                    <article class="result-item">
                      <span class="flag">${COUNTRY_DATA[item.country_code].flag}</span>
                      <img src=${item.picture_url} loading="lazy" aria-hidden="true" />
                      <span class="name">${item.item}</span>
                      <div class="price">
                        <span>
                          ${formatPrice(this.getLowestPrice(item.prices).price, this.currency.code)}
                        </span>
                        <details>
                          <summary>More</summary>
                          ${item.prices
                            .slice(0, 5)
                            .map(
                              (p) =>
                                html` <a href=${p.link} target="_blank">
                                  ${formatPrice(p.price, this.currency.code)}
                                </a>`,
                            )}
                        </details>
                      </div>
                      <div class="btn">
                        <view-shop-button
                          href=${this.getLowestPrice(item.prices)?.link}
                        ></view-shop-button>
                      </div>
                    </article>
                    <hr />
                  `,
                )}
            </section>
          `}
    `;
  }
}
