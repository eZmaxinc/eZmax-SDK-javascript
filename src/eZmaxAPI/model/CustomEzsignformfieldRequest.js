/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomEzsignformfieldRequest model module.
 * @module eZmaxAPI/model/CustomEzsignformfieldRequest
 * @version 1.2.0
 */
class CustomEzsignformfieldRequest {
    /**
     * Constructs a new <code>CustomEzsignformfieldRequest</code>.
     * A Custom Ezsignformfield Object to fill an Ezsignform using submitForm
     * @alias module:eZmaxAPI/model/CustomEzsignformfieldRequest
     */
    constructor() { 
        
        CustomEzsignformfieldRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomEzsignformfieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignformfieldRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignformfieldRequest} The populated <code>CustomEzsignformfieldRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignformfieldRequest();

            if (data.hasOwnProperty('pkiEzsignformfieldID')) {
                obj['pkiEzsignformfieldID'] = ApiClient.convertToType(data['pkiEzsignformfieldID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignformfieldLabel')) {
                obj['sEzsignformfieldLabel'] = ApiClient.convertToType(data['sEzsignformfieldLabel'], 'String');
            }
            if (data.hasOwnProperty('bEzsignformfieldSelected')) {
                obj['bEzsignformfieldSelected'] = ApiClient.convertToType(data['bEzsignformfieldSelected'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignformfieldEnteredvalue')) {
                obj['sEzsignformfieldEnteredvalue'] = ApiClient.convertToType(data['sEzsignformfieldEnteredvalue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignformfieldRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignformfieldRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sEzsignformfieldLabel'] && !(typeof data['sEzsignformfieldLabel'] === 'string' || data['sEzsignformfieldLabel'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldLabel` to be a primitive type in the JSON string but got " + data['sEzsignformfieldLabel']);
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldEnteredvalue'] && !(typeof data['sEzsignformfieldEnteredvalue'] === 'string' || data['sEzsignformfieldEnteredvalue'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldEnteredvalue` to be a primitive type in the JSON string but got " + data['sEzsignformfieldEnteredvalue']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignformfield
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignformfieldID() {
        return this.pkiEzsignformfieldID;
    }

    /**
     * Sets The unique ID of the Ezsignformfield
     * @param {Number} pkiEzsignformfieldID The unique ID of the Ezsignformfield
     */
    setPkiEzsignformfieldID(pkiEzsignformfieldID) {
        this['pkiEzsignformfieldID'] = pkiEzsignformfieldID;
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
     * Returns Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
     * @return {Boolean}
     */
    getBEzsignformfieldSelected() {
        return this.bEzsignformfieldSelected;
    }

    /**
     * Sets Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
     * @param {Boolean} bEzsignformfieldSelected Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
     */
    setBEzsignformfieldSelected(bEzsignformfieldSelected) {
        this['bEzsignformfieldSelected'] = bEzsignformfieldSelected;
    }
/**
     * Returns This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
     * @return {String}
     */
    getSEzsignformfieldEnteredvalue() {
        return this.sEzsignformfieldEnteredvalue;
    }

    /**
     * Sets This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
     * @param {String} sEzsignformfieldEnteredvalue This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
     */
    setSEzsignformfieldEnteredvalue(sEzsignformfieldEnteredvalue) {
        this['sEzsignformfieldEnteredvalue'] = sEzsignformfieldEnteredvalue;
    }

}



/**
 * The unique ID of the Ezsignformfield
 * @member {Number} pkiEzsignformfieldID
 */
CustomEzsignformfieldRequest.prototype['pkiEzsignformfieldID'] = undefined;

/**
 * The Label for the Ezsignformfield
 * @member {String} sEzsignformfieldLabel
 */
CustomEzsignformfieldRequest.prototype['sEzsignformfieldLabel'] = undefined;

/**
 * Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
 * @member {Boolean} bEzsignformfieldSelected
 */
CustomEzsignformfieldRequest.prototype['bEzsignformfieldSelected'] = undefined;

/**
 * This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
 * @member {String} sEzsignformfieldEnteredvalue
 */
CustomEzsignformfieldRequest.prototype['sEzsignformfieldEnteredvalue'] = undefined;






export default CustomEzsignformfieldRequest;

