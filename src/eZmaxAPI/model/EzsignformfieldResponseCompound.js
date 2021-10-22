/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignformfieldResponse from './EzsignformfieldResponse';

/**
 * The EzsignformfieldResponseCompound model module.
 * @module eZmaxAPI/model/EzsignformfieldResponseCompound
 * @version 1.1.1
 */
class EzsignformfieldResponseCompound {
    /**
     * Constructs a new <code>EzsignformfieldResponseCompound</code>.
     * An Ezsignformfield Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignformfieldResponseCompound
     * @implements module:eZmaxAPI/model/EzsignformfieldResponse
     * @param sEzsignformfieldLabel {String} The Label for the Ezsignformfield
     * @param sEzsignformfieldValue {String} The Value for the Ezsignformfield
     */
    constructor(sEzsignformfieldLabel, sEzsignformfieldValue) { 
        EzsignformfieldResponse.initialize(this, sEzsignformfieldLabel, sEzsignformfieldValue);
        EzsignformfieldResponseCompound.initialize(this, sEzsignformfieldLabel, sEzsignformfieldValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEzsignformfieldLabel, sEzsignformfieldValue) { 
        obj['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
        obj['sEzsignformfieldValue'] = sEzsignformfieldValue;
    }

    /**
     * Constructs a <code>EzsignformfieldResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldResponseCompound} The populated <code>EzsignformfieldResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldResponseCompound();
            EzsignformfieldResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('sEzsignformfieldLabel')) {
                obj['sEzsignformfieldLabel'] = ApiClient.convertToType(data['sEzsignformfieldLabel'], 'String');
            }
            if (data.hasOwnProperty('sEzsignformfieldValue')) {
                obj['sEzsignformfieldValue'] = ApiClient.convertToType(data['sEzsignformfieldValue'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Label for the Ezsignformfield
     * @return {String}
     */
    getSEzsignformfieldLabel() {
        return this.sEzsignformfieldLabel;
    }

    /**
     * Sets The Label for the Ezsignformfield
     * @param {String} sEzsignformfieldLabel The Label for the Ezsignformfield
     */
    setSEzsignformfieldLabel(sEzsignformfieldLabel) {
        this['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
    }
/**
     * Returns The Value for the Ezsignformfield
     * @return {String}
     */
    getSEzsignformfieldValue() {
        return this.sEzsignformfieldValue;
    }

    /**
     * Sets The Value for the Ezsignformfield
     * @param {String} sEzsignformfieldValue The Value for the Ezsignformfield
     */
    setSEzsignformfieldValue(sEzsignformfieldValue) {
        this['sEzsignformfieldValue'] = sEzsignformfieldValue;
    }

}

/**
 * The Label for the Ezsignformfield
 * @member {String} sEzsignformfieldLabel
 */
EzsignformfieldResponseCompound.prototype['sEzsignformfieldLabel'] = undefined;

/**
 * The Value for the Ezsignformfield
 * @member {String} sEzsignformfieldValue
 */
EzsignformfieldResponseCompound.prototype['sEzsignformfieldValue'] = undefined;


// Implement EzsignformfieldResponse interface:
/**
 * The Label for the Ezsignformfield
 * @member {String} sEzsignformfieldLabel
 */
EzsignformfieldResponse.prototype['sEzsignformfieldLabel'] = undefined;
/**
 * The Value for the Ezsignformfield
 * @member {String} sEzsignformfieldValue
 */
EzsignformfieldResponse.prototype['sEzsignformfieldValue'] = undefined;




export default EzsignformfieldResponseCompound;

