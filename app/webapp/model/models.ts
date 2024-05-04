import BindingMode from 'sap/ui/model/BindingMode';
import JSONModel from 'sap/ui/model/json/JSONModel';

import Device from 'sap/ui/Device';

export default {
    createDeviceModel: () => {
        const oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode(BindingMode.OneWay);
        return oModel;
    },

    createAppModel: () => {
        const oModel = new JSONModel({
            html: `<button id="__component0---main--demoButton" data-sap-ui="__component0---main--demoButton" data-sap-ui-render="" data-ui5-accesskey="d" class="sapMBtnBase sapMBtn">
	<span id="__component0---main--demoButton-inner" class="sapMBtnInner sapMBtnHoverable sapMFocusable sapMBtnText sapMBtnDefault">
		<span id="__component0---main--demoButton-content" class="sapMBtnContent">
			<bdi id="__component0---main--demoButton-BDI-content" aria-live="off">Demo Btn</bdi>
		</span>
	</span>
</button>`,
        });
        oModel.setDefaultBindingMode(BindingMode.TwoWay);
        return oModel;
    },
};
