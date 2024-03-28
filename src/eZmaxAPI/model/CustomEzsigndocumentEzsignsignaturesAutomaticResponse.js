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
import CustomEzsignsignatureEzsignsignaturesAutomaticResponse from './CustomEzsignsignatureEzsignsignaturesAutomaticResponse';

/**
 * The CustomEzsigndocumentEzsignsignaturesAutomaticResponse model module.
 * @module eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse
 * @version 1.2.0
 */
class CustomEzsigndocumentEzsignsignaturesAutomaticResponse {
    /**
     * Constructs a new <code>CustomEzsigndocumentEzsignsignaturesAutomaticResponse</code>.
     * An Ezsigndocument Object in the context of an EzsignsignaturesAutomatic path
     * @alias module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse
     * @param pkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param sEzsigndocumentName {String} The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param a_objEzsignsignature {Array.<module:eZmaxAPI/model/CustomEzsignsignatureEzsignsignaturesAutomaticResponse>} 
     */
    constructor(pkiEzsigndocumentID, sEzsigndocumentName, a_objEzsignsignature) { 
        
        CustomEzsigndocumentEzsignsignaturesAutomaticResponse.initialize(this, pkiEzsigndocumentID, sEzsigndocumentName, a_objEzsignsignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigndocumentID, sEzsigndocumentName, a_objEzsignsignature) { 
        obj['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
        obj['sEzsigndocumentName'] = sEzsigndocumentName;
        obj['a_objEzsignsignature'] = a_objEzsignsignature;
    }

    /**
     * Constructs a <code>CustomEzsigndocumentEzsignsignaturesAutomaticResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsigndocumentEzsignsignaturesAutomaticResponse} The populated <code>CustomEzsigndocumentEzsignsignaturesAutomaticResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsigndocumentEzsignsignaturesAutomaticResponse();

            if (data.hasOwnProperty('pkiEzsigndocumentID')) {
                obj['pkiEzsigndocumentID'] = ApiClient.convertToType(data['pkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigndocumentName')) {
                obj['sEzsigndocumentName'] = ApiClient.convertToType(data['sEzsigndocumentName'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [CustomEzsignsignatureEzsignsignaturesAutomaticResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsigndocumentEzsignsignaturesAutomaticResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsigndocumentEzsignsignaturesAutomaticResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsigndocumentEzsignsignaturesAutomaticResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigndocumentName'] && !(typeof data['sEzsigndocumentName'] === 'string' || data['sEzsigndocumentName'] instanceof String)) {
            throw new Error("Expected the field `sEzsigndocumentName` to be a primitive type in the JSON string but got " + data['sEzsigndocumentName']);
        }
        if (data['a_objEzsignsignature']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsignature'])) {
                throw new Error("Expected the field `a_objEzsignsignature` to be an array in the JSON data but got " + data['a_objEzsignsignature']);
            }
            // validate the optional field `a_objEzsignsignature` (array)
            for (const item of data['a_objEzsignsignature']) {
                CustomEzsignsignatureEzsignsignaturesAutomaticResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigndocument
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigndocumentID() {
        return this.pkiEzsigndocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigndocument
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
     */
    setPkiEzsigndocumentID(pkiEzsigndocumentID) {
        this['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
    }
/**
     * Returns The name of the document that will be presented to Ezsignfoldersignerassociations
     * @return {String}
     */
    getSEzsigndocumentName() {
        return this.sEzsigndocumentName;
    }

    /**
     * Sets The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param {String} sEzsigndocumentName The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    setSEzsigndocumentName(sEzsigndocumentName) {
        this['sEzsigndocumentName'] = sEzsigndocumentName;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignsignatureEzsignsignaturesAutomaticResponse>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignsignatureEzsignsignaturesAutomaticResponse>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
    }

}

CustomEzsigndocumentEzsignsignaturesAutomaticResponse.RequiredProperties = ["pkiEzsigndocumentID", "sEzsigndocumentName", "a_objEzsignsignature"];

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} pkiEzsigndocumentID
 */
CustomEzsigndocumentEzsignsignaturesAutomaticResponse.prototype['pkiEzsigndocumentID'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
CustomEzsigndocumentEzsignsignaturesAutomaticResponse.prototype['sEzsigndocumentName'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignsignatureEzsignsignaturesAutomaticResponse>} a_objEzsignsignature
 */
CustomEzsigndocumentEzsignsignaturesAutomaticResponse.prototype['a_objEzsignsignature'] = undefined;






export default CustomEzsigndocumentEzsignsignaturesAutomaticResponse;

