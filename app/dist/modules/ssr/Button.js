"use strict";sap.ui.define(["sap/m/Button","sap/m/ButtonRenderer","sap/ui/core/RenderManager"],function(e,r,t){"use strict";const n=e.extend("com.github.dfenerski.ui5_ssr.modules.ssr.Button",{renderer:{apiVersion:4,render:(e,n)=>{const o=t.findPreservedContent(n.getId());const s=o[0];if(s){s.remove();e.unsafeHtml(s.outerHTML);console.error("Preserved content rendered");return}r.render(e,n)}},metadata:{},constructor:function r(t,n){e.prototype.constructor.call(this,t,n)}});return n});
//# sourceMappingURL=Button.js.map