//@ui5-bundle com/github/dfenerski/ui5_ssr/Component-preload.js
sap.ui.require.preload({
	"com/github/dfenerski/ui5_ssr/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/Device","sap/ui/core/ElementMetadata","sap/ui/core/UIComponent","./model/models"],function(e,t,n,s){"use strict";function i(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=i(s);const c=n.extend("com.github.dfenerski.ui5_ssr.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init:function e(){n.prototype.init.call(this);this.setModel(o.createDeviceModel(),"device");this.setModel(o.createAppModel(),"app");this.getRouter().initialize();const s=["sap.m.Page"];const i=t.prototype.getRenderer;t.prototype.getRenderer=function(){const e=i.call(this);if(s.includes(this.getName())){const t=this.getClass();const n=e.render;const s=t.prototype.onAfterRendering;e.render=function(t,s){const i=document.querySelector(`#sap-ui-ssr #${s.getId()}`);if(i){t.unsafeHtml(i.outerHTML);console.error("Preserved content rendered");return}n.call(e,t,s)};t.prototype.onAfterRendering=function(){const e=document.querySelector(`#sap-ui-ssr #${this.getId()}`);if(e){e.remove()}s.call(this)}}return e}},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.support.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return c});
},
	"com/github/dfenerski/ui5_ssr/controller/App.controller.js":function(){
"use strict";sap.ui.define(["./BaseController"],function(e){"use strict";function t(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const n=t(e);const s=n.extend("com.github.dfenerski.ui5_ssr.controller.App",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return s});
},
	"com/github/dfenerski/ui5_ssr/controller/BaseController.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){"use strict";const o=e.extend("com.github.dfenerski.ui5_ssr.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"com/github/dfenerski/ui5_ssr/controller/Main.controller.js":function(){
"use strict";sap.ui.define(["sap/m/MessageToast","./BaseController"],function(e,t){"use strict";function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const s=n(t);const o=s.extend("com.github.dfenerski.ui5_ssr.controller.Main",{handleDemoButtonPress:function t(){e.show("Demo button pressed")},handleActionButtonPress:function t(){const n=this.getView().byId("mainPage");const s=n.getContent()[1];e.show("Action button pressed")}});return o});
},
	"com/github/dfenerski/ui5_ssr/i18n/i18n.properties":'appTitle=com.github.dfenerski.ui5_ssr\r\nappDescription=UI5 Application com.github.dfenerski.ui5_ssr\r\nbtnText=Say Hello\r\n',
	"com/github/dfenerski/ui5_ssr/i18n/i18n_de.properties":'appTitle=com.github.dfenerski.ui5_ssr\r\nappDescription=UI5 Application com.github.dfenerski.ui5_ssr\r\nbtnText=Sag Hallo\r\n',
	"com/github/dfenerski/ui5_ssr/i18n/i18n_en.properties":'appTitle=com.github.dfenerski.ui5_ssr\r\nappDescription=UI5 Application com.github.dfenerski.ui5_ssr\r\nbtnText=Say Hello\r\n',
	"com/github/dfenerski/ui5_ssr/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.github.dfenerski.ui5_ssr","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.github.dfenerski.ui5_ssr.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.120.11","libs":{"sap.ui.core":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.github.dfenerski.ui5_ssr.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.github.dfenerski.ui5_ssr.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"}],"targets":{"main":{"viewId":"main","viewName":"Main"}}}}}',
	"com/github/dfenerski/ui5_ssr/model/formatter.js":function(){
"use strict";sap.ui.define([],function(){"use strict";var e={formatValue:e=>e?.toUpperCase()};return e});
},
	"com/github/dfenerski/ui5_ssr/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/BindingMode","sap/ui/model/json/JSONModel","sap/ui/Device"],function(n,t,e){"use strict";var a={createDeviceModel:()=>{const a=new t(e);a.setDefaultBindingMode(n.OneWay);return a},createAppModel:()=>{const e=new t({html:`<button id="__component0---main--demoButton" data-sap-ui="__component0---main--demoButton" data-sap-ui-render="" data-ui5-accesskey="d" class="sapMBtnBase sapMBtn">\n\t<span id="__component0---main--demoButton-inner" class="sapMBtnInner sapMBtnHoverable sapMFocusable sapMBtnText sapMBtnDefault">\n\t\t<span id="__component0---main--demoButton-content" class="sapMBtnContent">\n\t\t\t<bdi id="__component0---main--demoButton-BDI-content" aria-live="off">Demo Btn</bdi>\n\t\t</span>\n\t</span>\n</button>`});e.setDefaultBindingMode(n.TwoWay);return e}};return a});
},
	"com/github/dfenerski/ui5_ssr/modules/ssr/Button.js":function(){
"use strict";sap.ui.define(["sap/m/Button","sap/m/ButtonRenderer","sap/ui/core/RenderManager"],function(e,r,t){"use strict";const n=e.extend("com.github.dfenerski.ui5_ssr.modules.ssr.Button",{renderer:{apiVersion:4,render:(e,n)=>{const o=t.findPreservedContent(n.getId());const s=o[0];if(s){s.remove();e.unsafeHtml(s.outerHTML);console.error("Preserved content rendered");return}r.render(e,n)}},metadata:{},constructor:function r(t,n){e.prototype.constructor.call(this,t,n)}});return n});
},
	"com/github/dfenerski/ui5_ssr/view/App.view.xml":'<mvc:View\r\n    controllerName="com.github.dfenerski.ui5_ssr.controller.App"\r\n    displayBlock="true"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>',
	"com/github/dfenerski/ui5_ssr/view/Main.view.xml":'<mvc:View\r\n    controllerName="com.github.dfenerski.ui5_ssr.controller.Main"\r\n    displayBlock="true"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    xmlns:core="sap.ui.core"\r\n    xmlns:ssr="com.github.dfenerski.ui5_ssr.modules.ssr"\r\n><Page id="mainPage" title="{i18n>appTitle}"><content><Button id="actionButton" text="Action Btn" press="handleActionButtonPress" /><Button id="demoButton" text="Demo Btn" press="handleDemoButtonPress" /></content></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
