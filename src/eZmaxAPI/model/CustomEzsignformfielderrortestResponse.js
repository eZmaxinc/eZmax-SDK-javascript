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
 * The CustomEzsignformfielderrortestResponse model module.
 * @module eZmaxAPI/model/CustomEzsignformfielderrortestResponse
 * @version 1.2.0
 */
class CustomEzsignformfielderrortestResponse {
    /**
     * Constructs a new <code>CustomEzsignformfielderrortestResponse</code>.
     * A Custom Ezsignformfielderrortest Object to contain the detail of the test error
     * @alias module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse
     * @param sEzsignformfielderrortestName {String} The name of the test
     * @param sEzsignformfielderrortestDetail {String} The detail why the test failed
     */
    constructor(sEzsignformfielderrortestName, sEzsignformfielderrortestDetail) { 
        
        CustomEzsignformfielderrortestResponse.initialize(this, sEzsignformfielderrortestName, sEzsignformfielderrortestDetail);
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
     * Constructs a <code>CustomEzsignformfielderrortestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignformfielderrortestResponse} The populated <code>CustomEzsignformfielderrortestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignformfielderrortestResponse();

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
     * Validates the JSON data with respect to <code>CustomEzsignformfielderrortestResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignformfielderrortestResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignformfielderrortestResponse.RequiredProperties) {
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

CustomEzsignformfielderrortestResponse.RequiredProperties = ["sEzsignformfielderrortestName", "sEzsignformfielderrortestDetail"];

/**
 * The name of the test
 * @member {String} sEzsignformfielderrortestName
 */
CustomEzsignformfielderrortestResponse.prototype['sEzsignformfielderrortestName'] = undefined;

/**
 * The detail why the test failed
 * @member {String} sEzsignformfielderrortestDetail
 */
CustomEzsignformfielderrortestResponse.prototype['sEzsignformfielderrortestDetail'] = undefined;






export default CustomEzsignformfielderrortestResponse;

