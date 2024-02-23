import octicons from "@primer/octicons";
import { css, LitElement } from "lit-element";
import { customElement, property } from "lit/decorators.js";
import { IconName } from "primer__octicons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";

const validAlign = {
  middle: true,
  "text-bottom": true,
  "text-top": true,
  unset: true,
};

@customElement("gh-octicon")
class Octicon extends LitElement {
  @property({ reflect: true })
  icon: IconName;

  @property({ type: Number, reflect: true })
  width = 16;

  @property({ type: Number, reflect: true })
  height = 16;

  @property({ reflect: true, attribute: "vertical-align" })
  verticalAlign = "middle";

  static get styles() {
    return css`
      svg {
        display: inline-block;
        fill: currentcolor;
        user-select: none;
      }
    `;
  }

  render() {
    const octicon = octicons[this.icon];

    const align = validAlign[this.verticalAlign] ? this.verticalAlign : "text-bottom";

    const options = {
      width: this.width,
      height: this.height,
      style: `vertical-align: ${align}`,
    };

    return unsafeSVG(octicon.toSVG(options));
  }
}

export default Octicon;
