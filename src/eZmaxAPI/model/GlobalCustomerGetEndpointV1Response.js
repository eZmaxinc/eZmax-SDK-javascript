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
 * The GlobalCustomerGetEndpointV1Response model module.
 * @module eZmaxAPI/model/GlobalCustomerGetEndpointV1Response
 * @version 1.1.18
 */
class GlobalCustomerGetEndpointV1Response {
    /**
     * Constructs a new <code>GlobalCustomerGetEndpointV1Response</code>.
     * Response for GET /1/customer/{pksCustomerCode}/endpoint
     * @alias module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response
     * @param sEndpointURL {String} The endpoint's URL
     */
    constructor(sEndpointURL) { 
        
        GlobalCustomerGetEndpointV1Response.initialize(this, sEndpointURL);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEndpointURL) { 
        obj['sEndpointURL'] = sEndpointURL;
    }

    /**
     * Constructs a <code>GlobalCustomerGetEndpointV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response} The populated <code>GlobalCustomerGetEndpointV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GlobalCustomerGetEndpointV1Response();

            if (data.hasOwnProperty('sEndpointURL')) {
                obj['sEndpointURL'] = ApiClient.convertToType(data['sEndpointURL'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GlobalCustomerGetEndpointV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalCustomerGetEndpointV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GlobalCustomerGetEndpointV1Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEndpointURL'] && !(typeof data['sEndpointURL'] === 'string' || data['sEndpointURL'] instanceof String)) {
            throw new Error("Expected the field `sEndpointURL` to be a primitive type in the JSON string but got " + data['sEndpointURL']);
        }

        return true;
    }

/**
     * Returns The endpoint's URL
     * @return {String}
     */
    getSEndpointURL() {
        return this.sEndpointURL;
    }

    /**
     * Sets The endpoint's URL
     * @param {String} sEndpointURL The endpoint's URL
     */
    setSEndpointURL(sEndpointURL) {
        this['sEndpointURL'] = sEndpointURL;
    }

}

GlobalCustomerGetEndpointV1Response.RequiredProperties = ["sEndpointURL"];

/**
 * The endpoint's URL
 * @member {String} sEndpointURL
 */
GlobalCustomerGetEndpointV1Response.prototype['sEndpointURL'] = undefined;






export default GlobalCustomerGetEndpointV1Response;

