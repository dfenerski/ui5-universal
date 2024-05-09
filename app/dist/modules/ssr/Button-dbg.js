"use strict";

sap.ui.define(["sap/m/Button", "sap/m/ButtonRenderer", "sap/ui/core/RenderManager"], function (MButton, ButtonRenderer, RenderManager) {
  "use strict";

  /**
   * @namespace com.github.dfenerski.ui5_ssr.modules.ssr
   */
  const Button = MButton.extend("com.github.dfenerski.ui5_ssr.modules.ssr.Button", {
    renderer: {
      apiVersion: 4,
      render: (rm, button) => {
        const preservedContent$ = RenderManager.findPreservedContent(button.getId());
        const preservedContent = preservedContent$[0];
        if (preservedContent) {
          preservedContent.remove();
          rm.unsafeHtml(preservedContent.outerHTML);
          console.error('Preserved content rendered');
          return;
        }
        ButtonRenderer.render(rm, button);
      }
    },
    metadata: {},
    constructor: function _constructor(id, settings) {
      MButton.prototype.constructor.call(this, id, settings);
    }
  });
  return Button;
});
//# sourceMappingURL=Button-dbg.js.map
