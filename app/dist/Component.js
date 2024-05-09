"use strict";sap.ui.define(["sap/ui/Device","sap/ui/core/UIComponent","./model/models"],function(e,t,n){"use strict";function s(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const i=s(n);const o=t.extend("com.github.dfenerski.ui5_ssr.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init:function e(){t.prototype.init.call(this);this.setModel(i.createDeviceModel(),"device");this.setModel(i.createAppModel(),"app");this.getRouter().initialize();const n=["sap.m.Page"];const s=sap.ui.core.ElementMetadata.prototype.getRenderer;sap.ui.core.ElementMetadata.prototype.getRenderer=function(){const e=s.call(this);if(n.includes(this.getName())){const t=this.getClass();const n=e.render;const s=t.prototype.onAfterRendering;e.render=function(t,s){const i=document.querySelector(`#sap-ui-ssr #${s.getId()}`);if(i){t.unsafeHtml(i.outerHTML);console.error("Preserved content rendered");return}n.call(e,t,s)};t.prototype.onAfterRendering=function(){const e=document.querySelector(`#sap-ui-ssr #${this.getId()}`);if(e){e.remove()}s.call(this)}}return e}},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.support.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return o});
//# sourceMappingURL=Component.js.map