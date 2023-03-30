import { LightningElement, api } from 'lwc';

export default class IndicatorKeyRow extends LightningElement {

    @api keyIcon = 'custom:custom20';
    @api keyImage = '';
    @api keyText = '🙃';
    @api keyDescription = 'Description will go here (use same form Normal and Inverse)';
    @api keyFillType = 'Static Text || Icon Image || Field Value';
    @api keyHoverValue = 'Field Value || Hover Text';
    @api keyPriority = 'Priority ("Last" for Normal / "First" for Inverse)';
    @api keyExtensionLogic = 'Extension Logic (Contains Text or Within Range)';

}