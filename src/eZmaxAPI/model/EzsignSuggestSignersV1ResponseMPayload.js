/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomUserResponse from './CustomUserResponse';
import EzsignfoldersignerassociationResponseCompound from './EzsignfoldersignerassociationResponseCompound';

/**
 * The EzsignSuggestSignersV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignSuggestSignersV1ResponseMPayload
 * @version 1.1.17
 */
class EzsignSuggestSignersV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignSuggestSignersV1ResponseMPayload</code>.
     * Payload for GET /1/module/ezsign/suggestSigners
     * @alias module:eZmaxAPI/model/EzsignSuggestSignersV1ResponseMPayload
     * @param a_objEzsignfoldersignerassociation {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound>} 
     * @param a_objUserTeam {Array.<module:eZmaxAPI/model/CustomUserResponse>} 
     * @param a_objUser {Array.<module:eZmaxAPI/model/CustomUserResponse>} 
     */
    constructor(a_objEzsignfoldersignerassociation, a_objUserTeam, a_objUser) { 
        
        EzsignSuggestSignersV1ResponseMPayload.initialize(this, a_objEzsignfoldersignerassociation, a_objUserTeam, a_objUser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfoldersignerassociation, a_objUserTeam, a_objUser) { 
        obj['a_objEzsignfoldersignerassociation'] = a_objEzsignfoldersignerassociation;
        obj['a_objUserTeam'] = a_objUserTeam;
        obj['a_objUser'] = a_objUser;
    }

    /**
     * Constructs a <code>EzsignSuggestSignersV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignSuggestSignersV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignSuggestSignersV1ResponseMPayload} The populated <code>EzsignSuggestSignersV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignSuggestSignersV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignfoldersignerassociation')) {
                obj['a_objEzsignfoldersignerassociation'] = ApiClient.convertToType(data['a_objEzsignfoldersignerassociation'], [EzsignfoldersignerassociationResponseCompound]);
            }
            if (data.hasOwnProperty('a_objUserTeam')) {
                obj['a_objUserTeam'] = ApiClient.convertToType(data['a_objUserTeam'], [CustomUserResponse]);
            }
            if (data.hasOwnProperty('a_objUser')) {
                obj['a_objUser'] = ApiClient.convertToType(data['a_objUser'], [CustomUserResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignSuggestSignersV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignSuggestSignersV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignSuggestSignersV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignfoldersignerassociation']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignfoldersignerassociation'])) {
                throw new Error("Expected the field `a_objEzsignfoldersignerassociation` to be an array in the JSON data but got " + data['a_objEzsignfoldersignerassociation']);
            }
            // validate the optional field `a_objEzsignfoldersignerassociation` (array)
            for (const item of data['a_objEzsignfoldersignerassociation']) {
                EzsignfoldersignerassociationResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objUserTeam']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUserTeam'])) {
                throw new Error("Expected the field `a_objUserTeam` to be an array in the JSON data but got " + data['a_objUserTeam']);
            }
            // validate the optional field `a_objUserTeam` (array)
            for (const item of data['a_objUserTeam']) {
                CustomUserResponse.validateJSON(item);
            };
        }
        if (data['a_objUser']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUser'])) {
                throw new Error("Expected the field `a_objUser` to be an array in the JSON data but got " + data['a_objUser']);
            }
            // validate the optional field `a_objUser` (array)
            for (const item of data['a_objUser']) {
                CustomUserResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound>}
     */
    getAObjEzsignfoldersignerassociation() {
        return this.a_objEzsignfoldersignerassociation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound>} a_objEzsignfoldersignerassociation
     */
    setAObjEzsignfoldersignerassociation(a_objEzsignfoldersignerassociation) {
        this['a_objEzsignfoldersignerassociation'] = a_objEzsignfoldersignerassociation;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomUserResponse>}
     */
    getAObjUserTeam() {
        return this.a_objUserTeam;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomUserResponse>} a_objUserTeam
     */
    setAObjUserTeam(a_objUserTeam) {
        this['a_objUserTeam'] = a_objUserTeam;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomUserResponse>}
     */
    getAObjUser() {
        return this.a_objUser;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomUserResponse>} a_objUser
     */
    setAObjUser(a_objUser) {
        this['a_objUser'] = a_objUser;
    }

}

EzsignSuggestSignersV1ResponseMPayload.RequiredProperties = ["a_objEzsignfoldersignerassociation", "a_objUserTeam", "a_objUser"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound>} a_objEzsignfoldersignerassociation
 */
EzsignSuggestSignersV1ResponseMPayload.prototype['a_objEzsignfoldersignerassociation'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomUserResponse>} a_objUserTeam
 */
EzsignSuggestSignersV1ResponseMPayload.prototype['a_objUserTeam'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomUserResponse>} a_objUser
 */
EzsignSuggestSignersV1ResponseMPayload.prototype['a_objUser'] = undefined;






export default EzsignSuggestSignersV1ResponseMPayload;

