/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzsignformfieldRequest from './CustomEzsignformfieldRequest';
import CustomEzsignformfieldgroupRequestAllOf from './CustomEzsignformfieldgroupRequestAllOf';

/**
 * The CustomEzsignformfieldgroupRequest model module.
 * @module eZmaxAPI/model/CustomEzsignformfieldgroupRequest
 * @version 1.1.18
 */
class CustomEzsignformfieldgroupRequest {
    /**
     * Constructs a new <code>CustomEzsignformfieldgroupRequest</code>.
     * A Custom Ezsignformfieldgroup Object to fill an Ezsignform using submitForm
     * @alias module:eZmaxAPI/model/CustomEzsignformfieldgroupRequest
     * @implements module:eZmaxAPI/model/CustomEzsignformfieldgroupRequestAllOf
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/CustomEzsignformfieldRequest>} An array containing all the values to fill the Ezsignform.
     */
    constructor(a_objEzsignformfield) { 
        CustomEzsignformfieldgroupRequestAllOf.initialize(this, a_objEzsignformfield);
        CustomEzsignformfieldgroupRequest.initialize(this, a_objEzsignformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignformfield) { 
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
    }

    /**
     * Constructs a <code>CustomEzsignformfieldgroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignformfieldgroupRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignformfieldgroupRequest} The populated <code>CustomEzsignformfieldgroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignformfieldgroupRequest();
            CustomEzsignformfieldgroupRequestAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignformfieldgroupID')) {
                obj['pkiEzsignformfieldgroupID'] = ApiClient.convertToType(data['pkiEzsignformfieldgroupID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignformfieldgroupLabel')) {
                obj['sEzsignformfieldgroupLabel'] = ApiClient.convertToType(data['sEzsignformfieldgroupLabel'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsignformfield')) {
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [CustomEzsignformfieldRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignformfieldgroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignformfieldgroupRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignformfieldgroupRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldgroupLabel'] && !(typeof data['sEzsignformfieldgroupLabel'] === 'string' || data['sEzsignformfieldgroupLabel'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldgroupLabel` to be a primitive type in the JSON string but got " + data['sEzsignformfieldgroupLabel']);
        }
        if (data['a_objEzsignformfield']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfield'])) {
                throw new Error("Expected the field `a_objEzsignformfield` to be an array in the JSON data but got " + data['a_objEzsignformfield']);
            }
            // validate the optional field `a_objEzsignformfield` (array)
            for (const item of data['a_objEzsignformfield']) {
                CustomEzsignformfieldRequest.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignformfieldgroupID() {
        return this.pkiEzsignformfieldgroupID;
    }

    /**
     * Sets The unique ID of the Ezsignformfieldgroup
     * @param {Number} pkiEzsignformfieldgroupID The unique ID of the Ezsignformfieldgroup
     */
    setPkiEzsignformfieldgroupID(pkiEzsignformfieldgroupID) {
        this['pkiEzsignformfieldgroupID'] = pkiEzsignformfieldgroupID;
    }
/**
     * Returns The Label for the Ezsignformfieldgroup
     * @return {String}
     */
    getSEzsignformfieldgroupLabel() {
        return this.sEzsignformfieldgroupLabel;
    }

    /**
     * Sets The Label for the Ezsignformfieldgroup
     * @param {String} sEzsignformfieldgroupLabel The Label for the Ezsignformfieldgroup
     */
    setSEzsignformfieldgroupLabel(sEzsignformfieldgroupLabel) {
        this['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
    }
/**
     * Returns An array containing all the values to fill the Ezsignform.
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignformfieldRequest>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * Sets An array containing all the values to fill the Ezsignform.
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignformfieldRequest>} a_objEzsignformfield An array containing all the values to fill the Ezsignform.
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
    }

}

CustomEzsignformfieldgroupRequest.RequiredProperties = ["a_objEzsignformfield"];

/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
CustomEzsignformfieldgroupRequest.prototype['pkiEzsignformfieldgroupID'] = undefined;

/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
CustomEzsignformfieldgroupRequest.prototype['sEzsignformfieldgroupLabel'] = undefined;

/**
 * An array containing all the values to fill the Ezsignform.
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignformfieldRequest>} a_objEzsignformfield
 */
CustomEzsignformfieldgroupRequest.prototype['a_objEzsignformfield'] = undefined;


// Implement CustomEzsignformfieldgroupRequestAllOf interface:
/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
CustomEzsignformfieldgroupRequestAllOf.prototype['pkiEzsignformfieldgroupID'] = undefined;
/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
CustomEzsignformfieldgroupRequestAllOf.prototype['sEzsignformfieldgroupLabel'] = undefined;
/**
 * An array containing all the values to fill the Ezsignform.
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignformfieldRequest>} a_objEzsignformfield
 */
CustomEzsignformfieldgroupRequestAllOf.prototype['a_objEzsignformfield'] = undefined;




export default CustomEzsignformfieldgroupRequest;

