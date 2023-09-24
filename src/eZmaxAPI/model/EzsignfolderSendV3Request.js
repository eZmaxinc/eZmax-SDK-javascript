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
 * The EzsignfolderSendV3Request model module.
 * @module eZmaxAPI/model/EzsignfolderSendV3Request
 * @version 1.2.0
 */
class EzsignfolderSendV3Request {
    /**
     * Constructs a new <code>EzsignfolderSendV3Request</code>.
     * Request for POST /3/object/ezsignfolder/{pkiEzsignfolderID}/send
     * @alias module:eZmaxAPI/model/EzsignfolderSendV3Request
     * @param tEzsignfolderMessage {String} A custom text message that will be added to the email sent.
     * @param a_fkiEzsignfoldersignerassociationID {Array.<Number>} 
     */
    constructor(tEzsignfolderMessage, a_fkiEzsignfoldersignerassociationID) { 
        
        EzsignfolderSendV3Request.initialize(this, tEzsignfolderMessage, a_fkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tEzsignfolderMessage, a_fkiEzsignfoldersignerassociationID) { 
        obj['tEzsignfolderMessage'] = tEzsignfolderMessage;
        obj['a_fkiEzsignfoldersignerassociationID'] = a_fkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>EzsignfolderSendV3Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderSendV3Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderSendV3Request} The populated <code>EzsignfolderSendV3Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderSendV3Request();

            if (data.hasOwnProperty('tEzsignfolderMessage')) {
                obj['tEzsignfolderMessage'] = ApiClient.convertToType(data['tEzsignfolderMessage'], 'String');
            }
            if (data.hasOwnProperty('dtEzsignfolderDelayedsenddate')) {
                obj['dtEzsignfolderDelayedsenddate'] = ApiClient.convertToType(data['dtEzsignfolderDelayedsenddate'], 'String');
            }
            if (data.hasOwnProperty('a_fkiEzsignfoldersignerassociationID')) {
                obj['a_fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['a_fkiEzsignfoldersignerassociationID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderSendV3Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderSendV3Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderSendV3Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tEzsignfolderMessage'] && !(typeof data['tEzsignfolderMessage'] === 'string' || data['tEzsignfolderMessage'] instanceof String)) {
            throw new Error("Expected the field `tEzsignfolderMessage` to be a primitive type in the JSON string but got " + data['tEzsignfolderMessage']);
        }
        // ensure the json data is a string
        if (data['dtEzsignfolderDelayedsenddate'] && !(typeof data['dtEzsignfolderDelayedsenddate'] === 'string' || data['dtEzsignfolderDelayedsenddate'] instanceof String)) {
            throw new Error("Expected the field `dtEzsignfolderDelayedsenddate` to be a primitive type in the JSON string but got " + data['dtEzsignfolderDelayedsenddate']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_fkiEzsignfoldersignerassociationID'])) {
            throw new Error("Expected the field `a_fkiEzsignfoldersignerassociationID` to be an array in the JSON data but got " + data['a_fkiEzsignfoldersignerassociationID']);
        }

        return true;
    }

/**
     * Returns A custom text message that will be added to the email sent.
     * @return {String}
     */
    getTEzsignfolderMessage() {
        return this.tEzsignfolderMessage;
    }

    /**
     * Sets A custom text message that will be added to the email sent.
     * @param {String} tEzsignfolderMessage A custom text message that will be added to the email sent.
     */
    setTEzsignfolderMessage(tEzsignfolderMessage) {
        this['tEzsignfolderMessage'] = tEzsignfolderMessage;
    }
/**
     * Returns The date and time at which the Ezsignfolder will be sent in the future.
     * @return {String}
     */
    getDtEzsignfolderDelayedsenddate() {
        return this.dtEzsignfolderDelayedsenddate;
    }

    /**
     * Sets The date and time at which the Ezsignfolder will be sent in the future.
     * @param {String} dtEzsignfolderDelayedsenddate The date and time at which the Ezsignfolder will be sent in the future.
     */
    setDtEzsignfolderDelayedsenddate(dtEzsignfolderDelayedsenddate) {
        this['dtEzsignfolderDelayedsenddate'] = dtEzsignfolderDelayedsenddate;
    }
/**
     * @return {Array.<Number>}
     */
    getAFkiEzsignfoldersignerassociationID() {
        return this.a_fkiEzsignfoldersignerassociationID;
    }

    /**
     * @param {Array.<Number>} a_fkiEzsignfoldersignerassociationID
     */
    setAFkiEzsignfoldersignerassociationID(a_fkiEzsignfoldersignerassociationID) {
        this['a_fkiEzsignfoldersignerassociationID'] = a_fkiEzsignfoldersignerassociationID;
    }

}

EzsignfolderSendV3Request.RequiredProperties = ["tEzsignfolderMessage", "a_fkiEzsignfoldersignerassociationID"];

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfolderMessage
 */
EzsignfolderSendV3Request.prototype['tEzsignfolderMessage'] = undefined;

/**
 * The date and time at which the Ezsignfolder will be sent in the future.
 * @member {String} dtEzsignfolderDelayedsenddate
 */
EzsignfolderSendV3Request.prototype['dtEzsignfolderDelayedsenddate'] = undefined;

/**
 * @member {Array.<Number>} a_fkiEzsignfoldersignerassociationID
 */
EzsignfolderSendV3Request.prototype['a_fkiEzsignfoldersignerassociationID'] = undefined;






export default EzsignfolderSendV3Request;

