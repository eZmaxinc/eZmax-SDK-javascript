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
import CustomEzsignformfielderrortestResponse from './CustomEzsignformfielderrortestResponse';

/**
 * The CustomEzsignformfielderrorResponseAllOf model module.
 * @module eZmaxAPI/model/CustomEzsignformfielderrorResponseAllOf
 * @version 1.1.18
 */
class CustomEzsignformfielderrorResponseAllOf {
    /**
     * Constructs a new <code>CustomEzsignformfielderrorResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/CustomEzsignformfielderrorResponseAllOf
     * @param sEzsignformfieldLabel {String} The Label for the Ezsignformfield
     * @param a_objEzsignformfielderrortest {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse>} 
     */
    constructor(sEzsignformfieldLabel, a_objEzsignformfielderrortest) { 
        
        CustomEzsignformfielderrorResponseAllOf.initialize(this, sEzsignformfieldLabel, a_objEzsignformfielderrortest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEzsignformfieldLabel, a_objEzsignformfielderrortest) { 
        obj['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
        obj['a_objEzsignformfielderrortest'] = a_objEzsignformfielderrortest;
    }

    /**
     * Constructs a <code>CustomEzsignformfielderrorResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignformfielderrorResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignformfielderrorResponseAllOf} The populated <code>CustomEzsignformfielderrorResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignformfielderrorResponseAllOf();

            if (data.hasOwnProperty('sEzsignformfieldLabel')) {
                obj['sEzsignformfieldLabel'] = ApiClient.convertToType(data['sEzsignformfieldLabel'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsignformfielderrortest')) {
                obj['a_objEzsignformfielderrortest'] = ApiClient.convertToType(data['a_objEzsignformfielderrortest'], [CustomEzsignformfielderrortestResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignformfielderrorResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignformfielderrorResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignformfielderrorResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldLabel'] && !(typeof data['sEzsignformfieldLabel'] === 'string' || data['sEzsignformfieldLabel'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldLabel` to be a primitive type in the JSON string but got " + data['sEzsignformfieldLabel']);
        }
        if (data['a_objEzsignformfielderrortest']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfielderrortest'])) {
                throw new Error("Expected the field `a_objEzsignformfielderrortest` to be an array in the JSON data but got " + data['a_objEzsignformfielderrortest']);
            }
            // validate the optional field `a_objEzsignformfielderrortest` (array)
            for (const item of data['a_objEzsignformfielderrortest']) {
                CustomEzsignformfielderrortestResponse.validateJSON(item);
            };
        }

        return true;
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
     * Returns 
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse>}
     */
    getAObjEzsignformfielderrortest() {
        return this.a_objEzsignformfielderrortest;
    }

    /**
     * Sets 
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse>} a_objEzsignformfielderrortest 
     */
    setAObjEzsignformfielderrortest(a_objEzsignformfielderrortest) {
        this['a_objEzsignformfielderrortest'] = a_objEzsignformfielderrortest;
    }

}

CustomEzsignformfielderrorResponseAllOf.RequiredProperties = ["sEzsignformfieldLabel", "a_objEzsignformfielderrortest"];

/**
 * The Label for the Ezsignformfield
 * @member {String} sEzsignformfieldLabel
 */
CustomEzsignformfielderrorResponseAllOf.prototype['sEzsignformfieldLabel'] = undefined;

/**
 * 
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse>} a_objEzsignformfielderrortest
 */
CustomEzsignformfielderrorResponseAllOf.prototype['a_objEzsignformfielderrortest'] = undefined;






export default CustomEzsignformfielderrorResponseAllOf;

