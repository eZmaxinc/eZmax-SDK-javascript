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
import MultilingualEzsignsignergroupDescription from './MultilingualEzsignsignergroupDescription';

/**
 * The EzsignsignergroupRequest model module.
 * @module eZmaxAPI/model/EzsignsignergroupRequest
 * @version 1.1.18
 */
class EzsignsignergroupRequest {
    /**
     * Constructs a new <code>EzsignsignergroupRequest</code>.
     * A Ezsignsignergroup Object
     * @alias module:eZmaxAPI/model/EzsignsignergroupRequest
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param objEzsignsignergroupDescription {module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription} 
     */
    constructor(fkiEzsignfolderID, objEzsignsignergroupDescription) { 
        
        EzsignsignergroupRequest.initialize(this, fkiEzsignfolderID, objEzsignsignergroupDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID, objEzsignsignergroupDescription) { 
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['objEzsignsignergroupDescription'] = objEzsignsignergroupDescription;
    }

    /**
     * Constructs a <code>EzsignsignergroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignergroupRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignergroupRequest} The populated <code>EzsignsignergroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignergroupRequest();

            if (data.hasOwnProperty('pkiEzsignsignergroupID')) {
                obj['pkiEzsignsignergroupID'] = ApiClient.convertToType(data['pkiEzsignsignergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('objEzsignsignergroupDescription')) {
                obj['objEzsignsignergroupDescription'] = MultilingualEzsignsignergroupDescription.constructFromObject(data['objEzsignsignergroupDescription']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignergroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignergroupRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignergroupRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignsignergroupDescription`
        if (data['objEzsignsignergroupDescription']) { // data not null
          MultilingualEzsignsignergroupDescription.validateJSON(data['objEzsignsignergroupDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignsignergroup
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getPkiEzsignsignergroupID() {
        return this.pkiEzsignsignergroupID;
    }

    /**
     * Sets The unique ID of the Ezsignsignergroup
     * @param {Number} pkiEzsignsignergroupID The unique ID of the Ezsignsignergroup
     */
    setPkiEzsignsignergroupID(pkiEzsignsignergroupID) {
        this['pkiEzsignsignergroupID'] = pkiEzsignsignergroupID;
    }
/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} fkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription}
     */
    getObjEzsignsignergroupDescription() {
        return this.objEzsignsignergroupDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription} objEzsignsignergroupDescription
     */
    setObjEzsignsignergroupDescription(objEzsignsignergroupDescription) {
        this['objEzsignsignergroupDescription'] = objEzsignsignergroupDescription;
    }

}

EzsignsignergroupRequest.RequiredProperties = ["fkiEzsignfolderID", "objEzsignsignergroupDescription"];

/**
 * The unique ID of the Ezsignsignergroup
 * @member {Number} pkiEzsignsignergroupID
 */
EzsignsignergroupRequest.prototype['pkiEzsignsignergroupID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignsignergroupRequest.prototype['fkiEzsignfolderID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription} objEzsignsignergroupDescription
 */
EzsignsignergroupRequest.prototype['objEzsignsignergroupDescription'] = undefined;






export default EzsignsignergroupRequest;

