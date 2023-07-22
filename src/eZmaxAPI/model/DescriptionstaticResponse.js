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
 * The DescriptionstaticResponse model module.
 * @module eZmaxAPI/model/DescriptionstaticResponse
 * @version 1.1.18
 */
class DescriptionstaticResponse {
    /**
     * Constructs a new <code>DescriptionstaticResponse</code>.
     * A Descriptionstatic Object
     * @alias module:eZmaxAPI/model/DescriptionstaticResponse
     * @param pkiDescriptionstaticID {Number} The unique ID of the Descriptionstatic
     * @param sDescriptionstaticDescription {String} The description of the Descriptionstatic
     */
    constructor(pkiDescriptionstaticID, sDescriptionstaticDescription) { 
        
        DescriptionstaticResponse.initialize(this, pkiDescriptionstaticID, sDescriptionstaticDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiDescriptionstaticID, sDescriptionstaticDescription) { 
        obj['pkiDescriptionstaticID'] = pkiDescriptionstaticID;
        obj['sDescriptionstaticDescription'] = sDescriptionstaticDescription;
    }

    /**
     * Constructs a <code>DescriptionstaticResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DescriptionstaticResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DescriptionstaticResponse} The populated <code>DescriptionstaticResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescriptionstaticResponse();

            if (data.hasOwnProperty('pkiDescriptionstaticID')) {
                obj['pkiDescriptionstaticID'] = ApiClient.convertToType(data['pkiDescriptionstaticID'], 'Number');
            }
            if (data.hasOwnProperty('sDescriptionstaticDescription')) {
                obj['sDescriptionstaticDescription'] = ApiClient.convertToType(data['sDescriptionstaticDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DescriptionstaticResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DescriptionstaticResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DescriptionstaticResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sDescriptionstaticDescription'] && !(typeof data['sDescriptionstaticDescription'] === 'string' || data['sDescriptionstaticDescription'] instanceof String)) {
            throw new Error("Expected the field `sDescriptionstaticDescription` to be a primitive type in the JSON string but got " + data['sDescriptionstaticDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Descriptionstatic
     * minimum: 0
     * @return {Number}
     */
    getPkiDescriptionstaticID() {
        return this.pkiDescriptionstaticID;
    }

    /**
     * Sets The unique ID of the Descriptionstatic
     * @param {Number} pkiDescriptionstaticID The unique ID of the Descriptionstatic
     */
    setPkiDescriptionstaticID(pkiDescriptionstaticID) {
        this['pkiDescriptionstaticID'] = pkiDescriptionstaticID;
    }
/**
     * Returns The description of the Descriptionstatic
     * @return {String}
     */
    getSDescriptionstaticDescription() {
        return this.sDescriptionstaticDescription;
    }

    /**
     * Sets The description of the Descriptionstatic
     * @param {String} sDescriptionstaticDescription The description of the Descriptionstatic
     */
    setSDescriptionstaticDescription(sDescriptionstaticDescription) {
        this['sDescriptionstaticDescription'] = sDescriptionstaticDescription;
    }

}

DescriptionstaticResponse.RequiredProperties = ["pkiDescriptionstaticID", "sDescriptionstaticDescription"];

/**
 * The unique ID of the Descriptionstatic
 * @member {Number} pkiDescriptionstaticID
 */
DescriptionstaticResponse.prototype['pkiDescriptionstaticID'] = undefined;

/**
 * The description of the Descriptionstatic
 * @member {String} sDescriptionstaticDescription
 */
DescriptionstaticResponse.prototype['sDescriptionstaticDescription'] = undefined;






export default DescriptionstaticResponse;
