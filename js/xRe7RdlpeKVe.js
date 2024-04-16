class CovetWidgetLoader extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    if (this.widget.getAttribute("gallery-embed-id") === "0") {
      this.innerHTML = "<p class=\"emtpy-gallery\">Please enter <strong>Embed ID</strong> in section details. Learn more about <a href=\"https://covet.pics/help-center-article/embed-a-gallery-on-a-store-2-0-themes\" target=\"_blank\">embedding</a></p>"
    } else if (!this.injectedSript) {
      this.loadWidget()
    }
  }

  loadWidget() {
    const scriptElmModule = document.createElement("script")
    const scriptElmPolyfill = document.createElement("script")

    scriptElmModule.src = `${this.baseUrl}/covet-pics-widget.esm.js`
    scriptElmModule.setAttribute("type", "module")
    document.querySelector("head").appendChild(scriptElmModule)

    scriptElmPolyfill.src = `${this.baseUrl}/covet-pics-widget.js`
    scriptElmPolyfill.setAttribute("nomodule", "")
    document.querySelector("head").appendChild(scriptElmPolyfill)
  }

  get widget() {
    return this.parentElement.querySelector("covet-pics-widget")
  }

  get injectedSript() {
    const scripts = document.head.querySelectorAll("script")

    return Array.from(scripts).some(script => script.src.includes("/covet-pics-widget."))
  }

  get baseUrl() {
    return "https://cdn.jsdelivr.net/npm/@covet-pics/covet-pics-widget@latest/dist/covet-pics-widget"
  }
}

customElements.define("covet-widget-loader", CovetWidgetLoader)
