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
 * The EzsignbulksendsignermappingRequest model module.
 * @module eZmaxAPI/model/EzsignbulksendsignermappingRequest
 * @version 1.2.0
 */
class EzsignbulksendsignermappingRequest {
    /**
     * Constructs a new <code>EzsignbulksendsignermappingRequest</code>.
     * A Ezsignbulksendsignermapping Object
     * @alias module:eZmaxAPI/model/EzsignbulksendsignermappingRequest
     * @param fkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param sEzsignbulksendsignermappingDescription {String} The description of the Ezsignbulksendsignermapping
     */
    constructor(fkiEzsignbulksendID, sEzsignbulksendsignermappingDescription) { 
        
        EzsignbulksendsignermappingRequest.initialize(this, fkiEzsignbulksendID, sEzsignbulksendsignermappingDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignbulksendID, sEzsignbulksendsignermappingDescription) { 
        obj['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
        obj['sEzsignbulksendsignermappingDescription'] = sEzsignbulksendsignermappingDescription;
    }

    /**
     * Constructs a <code>EzsignbulksendsignermappingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendsignermappingRequest} The populated <code>EzsignbulksendsignermappingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendsignermappingRequest();

            if (data.hasOwnProperty('pkiEzsignbulksendsignermappingID')) {
                obj['pkiEzsignbulksendsignermappingID'] = ApiClient.convertToType(data['pkiEzsignbulksendsignermappingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignbulksendID')) {
                obj['fkiEzsignbulksendID'] = ApiClient.convertToType(data['fkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignbulksendsignermappingDescription')) {
                obj['sEzsignbulksendsignermappingDescription'] = ApiClient.convertToType(data['sEzsignbulksendsignermappingDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendsignermappingRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendsignermappingRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendsignermappingRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignbulksendsignermappingDescription'] && !(typeof data['sEzsignbulksendsignermappingDescription'] === 'string' || data['sEzsignbulksendsignermappingDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsignbulksendsignermappingDescription` to be a primitive type in the JSON string but got " + data['sEzsignbulksendsignermappingDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignbulksendsignermapping
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignbulksendsignermappingID() {
        return this.pkiEzsignbulksendsignermappingID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksendsignermapping
     * @param {Number} pkiEzsignbulksendsignermappingID The unique ID of the Ezsignbulksendsignermapping
     */
    setPkiEzsignbulksendsignermappingID(pkiEzsignbulksendsignermappingID) {
        this['pkiEzsignbulksendsignermappingID'] = pkiEzsignbulksendsignermappingID;
    }
/**
     * Returns The unique ID of the Ezsignbulksend
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignbulksendID() {
        return this.fkiEzsignbulksendID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksend
     * @param {Number} fkiEzsignbulksendID The unique ID of the Ezsignbulksend
     */
    setFkiEzsignbulksendID(fkiEzsignbulksendID) {
        this['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
    }
/**
     * Returns The unique ID of the User
     * minimum: 0
     * @return {Number}
     */
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserID The unique ID of the User
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
    }
/**
     * Returns The description of the Ezsignbulksendsignermapping
     * @return {String}
     */
    getSEzsignbulksendsignermappingDescription() {
        return this.sEzsignbulksendsignermappingDescription;
    }

    /**
     * Sets The description of the Ezsignbulksendsignermapping
     * @param {String} sEzsignbulksendsignermappingDescription The description of the Ezsignbulksendsignermapping
     */
    setSEzsignbulksendsignermappingDescription(sEzsignbulksendsignermappingDescription) {
        this['sEzsignbulksendsignermappingDescription'] = sEzsignbulksendsignermappingDescription;
    }

}

EzsignbulksendsignermappingRequest.RequiredProperties = ["fkiEzsignbulksendID", "sEzsignbulksendsignermappingDescription"];

/**
 * The unique ID of the Ezsignbulksendsignermapping
 * @member {Number} pkiEzsignbulksendsignermappingID
 */
EzsignbulksendsignermappingRequest.prototype['pkiEzsignbulksendsignermappingID'] = undefined;

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksendsignermappingRequest.prototype['fkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignbulksendsignermappingRequest.prototype['fkiUserID'] = undefined;

/**
 * The description of the Ezsignbulksendsignermapping
 * @member {String} sEzsignbulksendsignermappingDescription
 */
EzsignbulksendsignermappingRequest.prototype['sEzsignbulksendsignermappingDescription'] = undefined;






export default EzsignbulksendsignermappingRequest;

