"use strict";

sap.ui.define(["sap/m/MessageToast", "./BaseController"], function (MessageToast, __BaseController) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.github.dfenerski.ui5_ssr.controller
   */
  const Main = BaseController.extend("com.github.dfenerski.ui5_ssr.controller.Main", {
    handleDemoButtonPress: function _handleDemoButtonPress() {
      MessageToast.show('Demo button pressed');
    },
    handleActionButtonPress: function _handleActionButtonPress() {
      const page = this.getView().byId('mainPage');
      const html = page.getContent()[1];
      //
      // RenderManager.preserveContent(
      //     document.getElementById('__component0---main--demoButton'),
      //     true,
      //     false,
      // );
      MessageToast.show('Action button pressed');
    }
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map
