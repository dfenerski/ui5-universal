"use strict";sap.ui.define(["sap/m/MessageToast","./BaseController"],function(e,t){"use strict";function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const s=n(t);const o=s.extend("com.github.dfenerski.ui5_ssr.controller.Main",{handleDemoButtonPress:function t(){e.show("Demo button pressed")},handleActionButtonPress:function t(){const n=this.getView().byId("mainPage");const s=n.getContent()[1];e.show("Action button pressed")}});return o});
//# sourceMappingURL=Main.controller.js.map