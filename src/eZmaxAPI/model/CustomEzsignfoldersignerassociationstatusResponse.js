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
import CustomEzsignsignaturestatusResponse from './CustomEzsignsignaturestatusResponse';

/**
 * The CustomEzsignfoldersignerassociationstatusResponse model module.
 * @module eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse
 * @version 1.2.0
 */
class CustomEzsignfoldersignerassociationstatusResponse {
    /**
     * Constructs a new <code>CustomEzsignfoldersignerassociationstatusResponse</code>.
     * A Ezsignfoldersignerassociationstatus Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param a_objEzsignsignaturestatus {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>} 
     */
    constructor(fkiEzsignfoldersignerassociationID, a_objEzsignsignaturestatus) { 
        
        CustomEzsignfoldersignerassociationstatusResponse.initialize(this, fkiEzsignfoldersignerassociationID, a_objEzsignsignaturestatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldersignerassociationID, a_objEzsignsignaturestatus) { 
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
        obj['a_objEzsignsignaturestatus'] = a_objEzsignsignaturestatus;
    }

    /**
     * Constructs a <code>CustomEzsignfoldersignerassociationstatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse} The populated <code>CustomEzsignfoldersignerassociationstatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignfoldersignerassociationstatusResponse();

            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfoldersignerassociationstatusLastname')) {
                obj['sEzsignfoldersignerassociationstatusLastname'] = ApiClient.convertToType(data['sEzsignfoldersignerassociationstatusLastname'], 'String');
            }
            if (data.hasOwnProperty('sEzsignfoldersignerassociationstatusFirstname')) {
                obj['sEzsignfoldersignerassociationstatusFirstname'] = ApiClient.convertToType(data['sEzsignfoldersignerassociationstatusFirstname'], 'String');
            }
            if (data.hasOwnProperty('sEzsignfoldersignerassociationstatusDescriptionX')) {
                obj['sEzsignfoldersignerassociationstatusDescriptionX'] = ApiClient.convertToType(data['sEzsignfoldersignerassociationstatusDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsignsignaturestatus')) {
                obj['a_objEzsignsignaturestatus'] = ApiClient.convertToType(data['a_objEzsignsignaturestatus'], [CustomEzsignsignaturestatusResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignfoldersignerassociationstatusResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignfoldersignerassociationstatusResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignfoldersignerassociationstatusResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignfoldersignerassociationstatusLastname'] && !(typeof data['sEzsignfoldersignerassociationstatusLastname'] === 'string' || data['sEzsignfoldersignerassociationstatusLastname'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldersignerassociationstatusLastname` to be a primitive type in the JSON string but got " + data['sEzsignfoldersignerassociationstatusLastname']);
        }
        // ensure the json data is a string
        if (data['sEzsignfoldersignerassociationstatusFirstname'] && !(typeof data['sEzsignfoldersignerassociationstatusFirstname'] === 'string' || data['sEzsignfoldersignerassociationstatusFirstname'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldersignerassociationstatusFirstname` to be a primitive type in the JSON string but got " + data['sEzsignfoldersignerassociationstatusFirstname']);
        }
        // ensure the json data is a string
        if (data['sEzsignfoldersignerassociationstatusDescriptionX'] && !(typeof data['sEzsignfoldersignerassociationstatusDescriptionX'] === 'string' || data['sEzsignfoldersignerassociationstatusDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldersignerassociationstatusDescriptionX` to be a primitive type in the JSON string but got " + data['sEzsignfoldersignerassociationstatusDescriptionX']);
        }
        if (data['a_objEzsignsignaturestatus']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsignaturestatus'])) {
                throw new Error("Expected the field `a_objEzsignsignaturestatus` to be an array in the JSON data but got " + data['a_objEzsignsignaturestatus']);
            }
            // validate the optional field `a_objEzsignsignaturestatus` (array)
            for (const item of data['a_objEzsignsignaturestatus']) {
                CustomEzsignsignaturestatusResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationID() {
        return this.fkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} fkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setFkiEzsignfoldersignerassociationID(fkiEzsignfoldersignerassociationID) {
        this['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }
/**
     * Returns The last name of the Ezsignsigner
     * @return {String}
     */
    getSEzsignfoldersignerassociationstatusLastname() {
        return this.sEzsignfoldersignerassociationstatusLastname;
    }

    /**
     * Sets The last name of the Ezsignsigner
     * @param {String} sEzsignfoldersignerassociationstatusLastname The last name of the Ezsignsigner
     */
    setSEzsignfoldersignerassociationstatusLastname(sEzsignfoldersignerassociationstatusLastname) {
        this['sEzsignfoldersignerassociationstatusLastname'] = sEzsignfoldersignerassociationstatusLastname;
    }
/**
     * Returns The first name of the Ezsignsigner
     * @return {String}
     */
    getSEzsignfoldersignerassociationstatusFirstname() {
        return this.sEzsignfoldersignerassociationstatusFirstname;
    }

    /**
     * Sets The first name of the Ezsignsigner
     * @param {String} sEzsignfoldersignerassociationstatusFirstname The first name of the Ezsignsigner
     */
    setSEzsignfoldersignerassociationstatusFirstname(sEzsignfoldersignerassociationstatusFirstname) {
        this['sEzsignfoldersignerassociationstatusFirstname'] = sEzsignfoldersignerassociationstatusFirstname;
    }
/**
     * Returns The description of the Ezsignsigner
     * @return {String}
     */
    getSEzsignfoldersignerassociationstatusDescriptionX() {
        return this.sEzsignfoldersignerassociationstatusDescriptionX;
    }

    /**
     * Sets The description of the Ezsignsigner
     * @param {String} sEzsignfoldersignerassociationstatusDescriptionX The description of the Ezsignsigner
     */
    setSEzsignfoldersignerassociationstatusDescriptionX(sEzsignfoldersignerassociationstatusDescriptionX) {
        this['sEzsignfoldersignerassociationstatusDescriptionX'] = sEzsignfoldersignerassociationstatusDescriptionX;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>}
     */
    getAObjEzsignsignaturestatus() {
        return this.a_objEzsignsignaturestatus;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>} a_objEzsignsignaturestatus
     */
    setAObjEzsignsignaturestatus(a_objEzsignsignaturestatus) {
        this['a_objEzsignsignaturestatus'] = a_objEzsignsignaturestatus;
    }

}

CustomEzsignfoldersignerassociationstatusResponse.RequiredProperties = ["fkiEzsignfoldersignerassociationID", "a_objEzsignsignaturestatus"];

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The last name of the Ezsignsigner
 * @member {String} sEzsignfoldersignerassociationstatusLastname
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['sEzsignfoldersignerassociationstatusLastname'] = undefined;

/**
 * The first name of the Ezsignsigner
 * @member {String} sEzsignfoldersignerassociationstatusFirstname
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['sEzsignfoldersignerassociationstatusFirstname'] = undefined;

/**
 * The description of the Ezsignsigner
 * @member {String} sEzsignfoldersignerassociationstatusDescriptionX
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['sEzsignfoldersignerassociationstatusDescriptionX'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>} a_objEzsignsignaturestatus
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['a_objEzsignsignaturestatus'] = undefined;






export default CustomEzsignfoldersignerassociationstatusResponse;

