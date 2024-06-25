"use strict";

sap.ui.define(["sap/ui/Device", "sap/ui/core/UIComponent", "./model/models"], function (Device, UIComponent, __models) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const models = _interopRequireDefault(__models);
  /**
   * @namespace com.github.dfenerski.ui5_ssr
   */
  const Component = UIComponent.extend("com.github.dfenerski.ui5_ssr.Component", {
    metadata: {
      manifest: 'json',
      interfaces: ['sap.ui.core.IAsyncContentCreation']
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this);

      // create the device model
      this.setModel(models.createDeviceModel(), 'device');

      // create the app model
      this.setModel(models.createAppModel(), 'app');

      // create the views based on the url/hash
      this.getRouter().initialize();
      const SSR_CONTROLS = ['sap.m.Page'];
      // @ts-expect-error behold
      const getRenderer = sap.ui.core.ElementMetadata.prototype.getRenderer;
      // @ts-expect-error behold
      sap.ui.core.ElementMetadata.prototype.getRenderer = function () {
        const renderer = getRenderer.call(this);
        //
        if (SSR_CONTROLS.includes(this.getName())) {
          const controlClass = this.getClass();
          const render = renderer.render;
          const onAfterRendering = controlClass.prototype.onAfterRendering;
          renderer.render = function (rm, control) {
            // const preservedContent$ = <any>(
            //     RenderManager.findPreservedContent(control.getId())
            // );
            const preservedContent = document.querySelector(`#sap-ui-ssr #${control.getId()}`);
            if (preservedContent) {
              // preservedContent.remove();
              rm.unsafeHtml(preservedContent.outerHTML);
              console.error('Preserved content rendered');
              return;
            }
            render.call(renderer, rm, control);
          };
          controlClass.prototype.onAfterRendering = function () {
            const preservedContent = document.querySelector(`#sap-ui-ssr #${this.getId()}`);
            if (preservedContent) {
              preservedContent.remove();
            }
            onAfterRendering.call(this);
          };
        }
        return renderer;
      };
    },
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains('sapUiSizeCozy') || document.body.classList.contains('sapUiSizeCompact')) {
          this.contentDensityClass = '';
        } else if (!Device.support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = 'sapUiSizeCompact';
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = 'sapUiSizeCozy';
        }
      }
      return this.contentDensityClass;
    }
  });
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map
