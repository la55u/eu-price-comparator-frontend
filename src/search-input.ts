/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('search-input')
export class SearchInput extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    section {
      border: solid 1px gainsboro;
      background-color: ghostwhite;
      border-radius: 24px;
      padding: 16px;
      display: flex;
      gap: 0.5em;
    }
    input {
      border-radius: 8px;
      border: 1px solid lightgray;
      padding: 10px;
      font-size: 20px;
      flex-grow: 1;
    }
    button {
      border-radius: 8px;
      outline: none;
      box-shadow: none;
      border: 1px solid gray;
      padding: 0 20px;
      cursor: pointer;
    }
    table {
      width: 100%;
    }
    tr:hover {
      outline: 1px solid gray;
    }
    td:last-child {
      text-align: end;
    }
    td {
      padding: 8px;
    }
  `;

  @state() private query: string = '';
  @state() private results: {title: string; url: string; price: number}[] = [];

  private _onSearchClick() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => (this.results = json.products));
  }

  private _onQueryChange(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    this.query = value;
  }

  override render() {
    return html`
      <section>
        <input
          @input=${this._onQueryChange}
          placeholder="Search any product..."
          type="search"
        />
        <button @click=${this._onSearchClick} part="button">Search</button>
      </section>

      ${this.results.length > 0
        ? html`<span>Results for: "${this.query}"</span>`
        : null}

      <section>
        <table>
          <thead>
            <th>Site</th>
            <th>Product</th>
            <th>Price</th>
            <th>Link</th>
          </thead>
          <tbody>
            ${this.results.map(
              (item) => html`
                <tr>
                  <td>🇭🇺</td>
                  <td>${item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <a href="https://example.org" target="_blank">
                      Go to shop ↗️
                    </a>
                  </td>
                </tr>
              `
            )}
          </tbody>
        </table>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-input': SearchInput;
  }
}
