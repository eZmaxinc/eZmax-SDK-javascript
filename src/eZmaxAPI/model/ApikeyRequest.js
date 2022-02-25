/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MultilingualApikeyDescription from './MultilingualApikeyDescription';

/**
 * The ApikeyRequest model module.
 * @module eZmaxAPI/model/ApikeyRequest
 * @version 1.1.5
 */
class ApikeyRequest {
    /**
     * Constructs a new <code>ApikeyRequest</code>.
     * An Apikey Object
     * @alias module:eZmaxAPI/model/ApikeyRequest
     * @param fkiUserID {Number} The unique ID of the User
     * @param objApikeyDescription {module:eZmaxAPI/model/MultilingualApikeyDescription} 
     */
    constructor(fkiUserID, objApikeyDescription) { 
        
        ApikeyRequest.initialize(this, fkiUserID, objApikeyDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiUserID, objApikeyDescription) { 
        obj['fkiUserID'] = fkiUserID;
        obj['objApikeyDescription'] = objApikeyDescription;
    }

    /**
     * Constructs a <code>ApikeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyRequest} The populated <code>ApikeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyRequest();

            if (data.hasOwnProperty('pkiApikeyID')) {
                obj['pkiApikeyID'] = ApiClient.convertToType(data['pkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('objApikeyDescription')) {
                obj['objApikeyDescription'] = MultilingualApikeyDescription.constructFromObject(data['objApikeyDescription']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Apikey
     * @return {Number}
     */
    getPkiApikeyID() {
        return this.pkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} pkiApikeyID The unique ID of the Apikey
     */
    setPkiApikeyID(pkiApikeyID) {
        this['pkiApikeyID'] = pkiApikeyID;
    }
/**
     * Returns The unique ID of the User
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
     * @return {module:eZmaxAPI/model/MultilingualApikeyDescription}
     */
    getObjApikeyDescription() {
        return this.objApikeyDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
     */
    setObjApikeyDescription(objApikeyDescription) {
        this['objApikeyDescription'] = objApikeyDescription;
    }

}

/**
 * The unique ID of the Apikey
 * @member {Number} pkiApikeyID
 */
ApikeyRequest.prototype['pkiApikeyID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
ApikeyRequest.prototype['fkiUserID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
 */
ApikeyRequest.prototype['objApikeyDescription'] = undefined;






export default ApikeyRequest;

