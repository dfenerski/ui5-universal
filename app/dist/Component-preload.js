//@ui5-bundle com/github/dfenerski/ui5_ssr/Component-preload.js
sap.ui.require.preload({
	"com/github/dfenerski/ui5_ssr/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./model/models","sap/ui/Device"],function(t,e,s){"use strict";function i(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const n=i(e);const o=t.extend("com.github.dfenerski.ui5_ssr.Component",{metadata:{manifest:"json"},init:function e(){t.prototype.init.call(this);this.setModel(n.createDeviceModel(),"device");this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!s.support.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return o});
},
	"com/github/dfenerski/ui5_ssr/controller/App.controller.js":function(){
"use strict";sap.ui.define(["./BaseController"],function(e){"use strict";function t(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const n=t(e);const s=n.extend("com.github.dfenerski.ui5_ssr.controller.App",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return s});
},
	"com/github/dfenerski/ui5_ssr/controller/BaseController.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){"use strict";const o=e.extend("com.github.dfenerski.ui5_ssr.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"com/github/dfenerski/ui5_ssr/controller/Main.controller.js":function(){
"use strict";sap.ui.define(["sap/m/MessageBox","./BaseController"],function(e,n){"use strict";function t(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=t(n);const s=o.extend("com.github.dfenerski.ui5_ssr.controller.Main",{sayHello:function n(){e.show("Hello World!")}});return s});
},
	"com/github/dfenerski/ui5_ssr/i18n/i18n.properties":'appTitle=com.github.dfenerski.ui5_ssr\nappDescription=UI5 Application com.github.dfenerski.ui5_ssr\nbtnText=Say Hello\n',
	"com/github/dfenerski/ui5_ssr/i18n/i18n_de.properties":'appTitle=com.github.dfenerski.ui5_ssr\nappDescription=UI5 Application com.github.dfenerski.ui5_ssr\nbtnText=Sag Hallo\n',
	"com/github/dfenerski/ui5_ssr/i18n/i18n_en.properties":'appTitle=com.github.dfenerski.ui5_ssr\nappDescription=UI5 Application com.github.dfenerski.ui5_ssr\nbtnText=Say Hello\n',
	"com/github/dfenerski/ui5_ssr/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.github.dfenerski.ui5_ssr","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.github.dfenerski.ui5_ssr.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.120.11","libs":{"sap.ui.core":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.github.dfenerski.ui5_ssr.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.github.dfenerski.ui5_ssr.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"}],"targets":{"main":{"viewId":"main","viewName":"Main"}}}}}',
	"com/github/dfenerski/ui5_ssr/model/formatter.js":function(){
"use strict";sap.ui.define([],function(){"use strict";var e={formatValue:e=>e?.toUpperCase()};return e});
},
	"com/github/dfenerski/ui5_ssr/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/model/BindingMode","sap/ui/Device"],function(e,i,n){"use strict";var s={createDeviceModel:()=>{const s=new e(n);s.setDefaultBindingMode(i.OneWay);return s}};return s});
},
	"com/github/dfenerski/ui5_ssr/view/App.view.xml":'<mvc:View\n\tcontrollerName="com.github.dfenerski.ui5_ssr.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>\n',
	"com/github/dfenerski/ui5_ssr/view/Main.view.xml":'<mvc:View\n\tcontrollerName="com.github.dfenerski.ui5_ssr.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:core="sap.ui.core"\n\tcore:require="{\n\t\tformatter: \'com/github/dfenerski/ui5_ssr/model/formatter\'\n\t}"><Page\n\t\ttitle="{i18n>appTitle}"\n\t\tid="page"><content><IllustratedMessage\n\t\t\t\ttitle="{i18n>appTitle}"\n\t\t\t\tillustrationType="sapIllus-SuccessHighFive"\n\t\t\t\tenableVerticalResponsiveness="true"\n\t\t\t\tdescription="{i18n>appDescription}"><additionalContent><Button\n\t\t\t\t\t\tid="helloButton"\n\t\t\t\t\t\ttext="{formatter: \'formatter.formatValue\', path: \'i18n>btnText\'}"\n\t\t\t\t\t\tpress="sayHello" /></additionalContent></IllustratedMessage></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
