"use strict";

sap.ui.define(["sap/m/MessageBox", "./BaseController"], function (MessageBox, __BaseController) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.github.dfenerski.ui5_ssr.controller
   */
  const Main = BaseController.extend("com.github.dfenerski.ui5_ssr.controller.Main", {
    sayHello: function _sayHello() {
      MessageBox.show("Hello World!");
    }
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map
