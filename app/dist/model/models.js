"use strict";sap.ui.define(["sap/ui/model/BindingMode","sap/ui/model/json/JSONModel","sap/ui/Device"],function(n,t,e){"use strict";var a={createDeviceModel:()=>{const a=new t(e);a.setDefaultBindingMode(n.OneWay);return a},createAppModel:()=>{const e=new t({html:`<button id="__component0---main--demoButton" data-sap-ui="__component0---main--demoButton" data-sap-ui-render="" data-ui5-accesskey="d" class="sapMBtnBase sapMBtn">\n\t<span id="__component0---main--demoButton-inner" class="sapMBtnInner sapMBtnHoverable sapMFocusable sapMBtnText sapMBtnDefault">\n\t\t<span id="__component0---main--demoButton-content" class="sapMBtnContent">\n\t\t\t<bdi id="__component0---main--demoButton-BDI-content" aria-live="off">Demo Btn</bdi>\n\t\t</span>\n\t</span>\n</button>`});e.setDefaultBindingMode(n.TwoWay);return e}};return a});
//# sourceMappingURL=models.js.map