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
 * The ApikeyRegenerateV1Request model module.
 * @module eZmaxAPI/model/ApikeyRegenerateV1Request
 * @version 1.1.18
 */
class ApikeyRegenerateV1Request {
    /**
     * Constructs a new <code>ApikeyRegenerateV1Request</code>.
     * Request for POST /1/object/apikey/{pkiApikeyID}/regenerate
     * @alias module:eZmaxAPI/model/ApikeyRegenerateV1Request
     */
    constructor() { 
        
        ApikeyRegenerateV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApikeyRegenerateV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyRegenerateV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyRegenerateV1Request} The populated <code>ApikeyRegenerateV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyRegenerateV1Request();

            if (data.hasOwnProperty('bApikeyIssigned')) {
                obj['bApikeyIssigned'] = ApiClient.convertToType(data['bApikeyIssigned'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApikeyRegenerateV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApikeyRegenerateV1Request</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * Returns Whether the apikey is signed or not
     * @return {Boolean}
     */
    getBApikeyIssigned() {
        return this.bApikeyIssigned;
    }

    /**
     * Sets Whether the apikey is signed or not
     * @param {Boolean} bApikeyIssigned Whether the apikey is signed or not
     */
    setBApikeyIssigned(bApikeyIssigned) {
        this['bApikeyIssigned'] = bApikeyIssigned;
    }

}



/**
 * Whether the apikey is signed or not
 * @member {Boolean} bApikeyIssigned
 */
ApikeyRegenerateV1Request.prototype['bApikeyIssigned'] = undefined;






export default ApikeyRegenerateV1Request;

