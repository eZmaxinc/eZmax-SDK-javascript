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
import CustomEzsigndocumentEzsignsignaturesAutomaticResponse from './CustomEzsigndocumentEzsignsignaturesAutomaticResponse';

/**
 * The CustomEzsignfolderEzsignsignaturesAutomaticResponse model module.
 * @module eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse
 * @version 1.1.18
 */
class CustomEzsignfolderEzsignsignaturesAutomaticResponse {
    /**
     * Constructs a new <code>CustomEzsignfolderEzsignsignaturesAutomaticResponse</code>.
     * An Ezsignfolder Object in the context of an EzsignsignaturesAutomatic path
     * @alias module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param a_objEzsigndocument {Array.<module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse>} 
     */
    constructor(pkiEzsignfolderID, sEzsignfolderDescription, a_objEzsigndocument) { 
        
        CustomEzsignfolderEzsignsignaturesAutomaticResponse.initialize(this, pkiEzsignfolderID, sEzsignfolderDescription, a_objEzsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfolderID, sEzsignfolderDescription, a_objEzsigndocument) { 
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['a_objEzsigndocument'] = a_objEzsigndocument;
    }

    /**
     * Constructs a <code>CustomEzsignfolderEzsignsignaturesAutomaticResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse} The populated <code>CustomEzsignfolderEzsignsignaturesAutomaticResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignfolderEzsignsignaturesAutomaticResponse();

            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfolderDescription')) {
                obj['sEzsignfolderDescription'] = ApiClient.convertToType(data['sEzsignfolderDescription'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsigndocument')) {
                obj['a_objEzsigndocument'] = ApiClient.convertToType(data['a_objEzsigndocument'], [CustomEzsigndocumentEzsignsignaturesAutomaticResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignfolderEzsignsignaturesAutomaticResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignfolderEzsignsignaturesAutomaticResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignfolderEzsignsignaturesAutomaticResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignfolderDescription'] && !(typeof data['sEzsignfolderDescription'] === 'string' || data['sEzsignfolderDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfolderDescription` to be a primitive type in the JSON string but got " + data['sEzsignfolderDescription']);
        }
        if (data['a_objEzsigndocument']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigndocument'])) {
                throw new Error("Expected the field `a_objEzsigndocument` to be an array in the JSON data but got " + data['a_objEzsigndocument']);
            }
            // validate the optional field `a_objEzsigndocument` (array)
            for (const item of data['a_objEzsigndocument']) {
                CustomEzsigndocumentEzsignsignaturesAutomaticResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignfolderID() {
        return this.pkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setPkiEzsignfolderID(pkiEzsignfolderID) {
        this['pkiEzsignfolderID'] = pkiEzsignfolderID;
    }
/**
     * Returns The description of the Ezsignfolder
     * @return {String}
     */
    getSEzsignfolderDescription() {
        return this.sEzsignfolderDescription;
    }

    /**
     * Sets The description of the Ezsignfolder
     * @param {String} sEzsignfolderDescription The description of the Ezsignfolder
     */
    setSEzsignfolderDescription(sEzsignfolderDescription) {
        this['sEzsignfolderDescription'] = sEzsignfolderDescription;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse>}
     */
    getAObjEzsigndocument() {
        return this.a_objEzsigndocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse>} a_objEzsigndocument
     */
    setAObjEzsigndocument(a_objEzsigndocument) {
        this['a_objEzsigndocument'] = a_objEzsigndocument;
    }

}

CustomEzsignfolderEzsignsignaturesAutomaticResponse.RequiredProperties = ["pkiEzsignfolderID", "sEzsignfolderDescription", "a_objEzsigndocument"];

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
CustomEzsignfolderEzsignsignaturesAutomaticResponse.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
CustomEzsignfolderEzsignsignaturesAutomaticResponse.prototype['sEzsignfolderDescription'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse>} a_objEzsigndocument
 */
CustomEzsignfolderEzsignsignaturesAutomaticResponse.prototype['a_objEzsigndocument'] = undefined;






export default CustomEzsignfolderEzsignsignaturesAutomaticResponse;

