import CustomData from 'sap/ui/core/CustomData';

const SSR_KEY = 'universal-ssr';

/**
 * @namespace com.github.dfenerski.ui5_universal
 */
export default class SSRData extends CustomData {
    public static readonly metadata = {
        library: 'com.github.dfenerski.ui5_universal',
    };

    public override init() {
        super.init();
        //
        this.setKey();
        this.setValue();
        this.setWriteToDom();
    }

    public override setKey(): this {
        return super.setKey(SSR_KEY);
    }

    public override setValue(): this {
        return super.setValue(String(true));
    }

    public override setWriteToDom(): this {
        return super.setWriteToDom(true);
    }
}
