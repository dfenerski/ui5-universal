import { $ButtonSettings as $MButtonSettings } from 'sap/m/Button';

declare module './Button' {
    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $ButtonSettings extends $MButtonSettings {}

    export default interface Button {}
}
