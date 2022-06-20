/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignbulksendsignermappingResponse model module.
 * @module eZmaxAPI/model/EzsignbulksendsignermappingResponse
 * @version 1.1.9
 */
class EzsignbulksendsignermappingResponse {
    /**
     * Constructs a new <code>EzsignbulksendsignermappingResponse</code>.
     * A Ezsignbulksendsignermapping Object
     * @alias module:eZmaxAPI/model/EzsignbulksendsignermappingResponse
     * @param pkiEzsignbulksendsignermappingID {Number} The unique ID of the Ezsignbulksendsignermapping
     * @param fkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param sEzsignbulksendsignermappingDescription {String} The description of the Ezsignbulksendsignermapping
     */
    constructor(pkiEzsignbulksendsignermappingID, fkiEzsignbulksendID, sEzsignbulksendsignermappingDescription) { 
        
        EzsignbulksendsignermappingResponse.initialize(this, pkiEzsignbulksendsignermappingID, fkiEzsignbulksendID, sEzsignbulksendsignermappingDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksendsignermappingID, fkiEzsignbulksendID, sEzsignbulksendsignermappingDescription) { 
        obj['pkiEzsignbulksendsignermappingID'] = pkiEzsignbulksendsignermappingID;
        obj['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
        obj['sEzsignbulksendsignermappingDescription'] = sEzsignbulksendsignermappingDescription;
    }

    /**
     * Constructs a <code>EzsignbulksendsignermappingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendsignermappingResponse} The populated <code>EzsignbulksendsignermappingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendsignermappingResponse();

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

/**
 * The unique ID of the Ezsignbulksendsignermapping
 * @member {Number} pkiEzsignbulksendsignermappingID
 */
EzsignbulksendsignermappingResponse.prototype['pkiEzsignbulksendsignermappingID'] = undefined;

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksendsignermappingResponse.prototype['fkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignbulksendsignermappingResponse.prototype['fkiUserID'] = undefined;

/**
 * The description of the Ezsignbulksendsignermapping
 * @member {String} sEzsignbulksendsignermappingDescription
 */
EzsignbulksendsignermappingResponse.prototype['sEzsignbulksendsignermappingDescription'] = undefined;






export default EzsignbulksendsignermappingResponse;

