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

/**
 * The CustomEzsignformfielderrortestResponseAllOf model module.
 * @module eZmaxAPI/model/CustomEzsignformfielderrortestResponseAllOf
 * @version 1.1.18
 */
class CustomEzsignformfielderrortestResponseAllOf {
    /**
     * Constructs a new <code>CustomEzsignformfielderrortestResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/CustomEzsignformfielderrortestResponseAllOf
     * @param sEzsignformfielderrortestName {String} The name of the test
     * @param sEzsignformfielderrortestDetail {String} The detail why the test failed
     */
    constructor(sEzsignformfielderrortestName, sEzsignformfielderrortestDetail) { 
        
        CustomEzsignformfielderrortestResponseAllOf.initialize(this, sEzsignformfielderrortestName, sEzsignformfielderrortestDetail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEzsignformfielderrortestName, sEzsignformfielderrortestDetail) { 
        obj['sEzsignformfielderrortestName'] = sEzsignformfielderrortestName;
        obj['sEzsignformfielderrortestDetail'] = sEzsignformfielderrortestDetail;
    }

    /**
     * Constructs a <code>CustomEzsignformfielderrortestResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignformfielderrortestResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignformfielderrortestResponseAllOf} The populated <code>CustomEzsignformfielderrortestResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignformfielderrortestResponseAllOf();

            if (data.hasOwnProperty('sEzsignformfielderrortestName')) {
                obj['sEzsignformfielderrortestName'] = ApiClient.convertToType(data['sEzsignformfielderrortestName'], 'String');
            }
            if (data.hasOwnProperty('sEzsignformfielderrortestDetail')) {
                obj['sEzsignformfielderrortestDetail'] = ApiClient.convertToType(data['sEzsignformfielderrortestDetail'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignformfielderrortestResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignformfielderrortestResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignformfielderrortestResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignformfielderrortestName'] && !(typeof data['sEzsignformfielderrortestName'] === 'string' || data['sEzsignformfielderrortestName'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfielderrortestName` to be a primitive type in the JSON string but got " + data['sEzsignformfielderrortestName']);
        }
        // ensure the json data is a string
        if (data['sEzsignformfielderrortestDetail'] && !(typeof data['sEzsignformfielderrortestDetail'] === 'string' || data['sEzsignformfielderrortestDetail'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfielderrortestDetail` to be a primitive type in the JSON string but got " + data['sEzsignformfielderrortestDetail']);
        }

        return true;
    }

/**
     * Returns The name of the test
     * @return {String}
     */
    getSEzsignformfielderrortestName() {
        return this.sEzsignformfielderrortestName;
    }

    /**
     * Sets The name of the test
     * @param {String} sEzsignformfielderrortestName The name of the test
     */
    setSEzsignformfielderrortestName(sEzsignformfielderrortestName) {
        this['sEzsignformfielderrortestName'] = sEzsignformfielderrortestName;
    }
/**
     * Returns The detail why the test failed
     * @return {String}
     */
    getSEzsignformfielderrortestDetail() {
        return this.sEzsignformfielderrortestDetail;
    }

    /**
     * Sets The detail why the test failed
     * @param {String} sEzsignformfielderrortestDetail The detail why the test failed
     */
    setSEzsignformfielderrortestDetail(sEzsignformfielderrortestDetail) {
        this['sEzsignformfielderrortestDetail'] = sEzsignformfielderrortestDetail;
    }

}

CustomEzsignformfielderrortestResponseAllOf.RequiredProperties = ["sEzsignformfielderrortestName", "sEzsignformfielderrortestDetail"];

/**
 * The name of the test
 * @member {String} sEzsignformfielderrortestName
 */
CustomEzsignformfielderrortestResponseAllOf.prototype['sEzsignformfielderrortestName'] = undefined;

/**
 * The detail why the test failed
 * @member {String} sEzsignformfielderrortestDetail
 */
CustomEzsignformfielderrortestResponseAllOf.prototype['sEzsignformfielderrortestDetail'] = undefined;






export default CustomEzsignformfielderrortestResponseAllOf;

