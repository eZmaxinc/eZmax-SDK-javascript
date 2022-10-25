/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzsignfoldersignerassociationmessageRequest from './CustomEzsignfoldersignerassociationmessageRequest';

/**
 * The EzsignfolderSendV2Request model module.
 * @module eZmaxAPI/model/EzsignfolderSendV2Request
 * @version 1.1.11
 */
class EzsignfolderSendV2Request {
    /**
     * Constructs a new <code>EzsignfolderSendV2Request</code>.
     * Request for POST /2/object/ezsignfolder/{pkiEzsignfolderID}/send
     * @alias module:eZmaxAPI/model/EzsignfolderSendV2Request
     * @param tEzsignfolderMessage {String} A custom text message that will be added to the email sent.
     * @param a_fkiEzsignfoldersignerassociationID {Array.<Number>} 
     * @param a_objEzsignfoldersignerassociationmessage {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest>} 
     */
    constructor(tEzsignfolderMessage, a_fkiEzsignfoldersignerassociationID, a_objEzsignfoldersignerassociationmessage) { 
        
        EzsignfolderSendV2Request.initialize(this, tEzsignfolderMessage, a_fkiEzsignfoldersignerassociationID, a_objEzsignfoldersignerassociationmessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tEzsignfolderMessage, a_fkiEzsignfoldersignerassociationID, a_objEzsignfoldersignerassociationmessage) { 
        obj['tEzsignfolderMessage'] = tEzsignfolderMessage;
        obj['a_fkiEzsignfoldersignerassociationID'] = a_fkiEzsignfoldersignerassociationID;
        obj['a_objEzsignfoldersignerassociationmessage'] = a_objEzsignfoldersignerassociationmessage;
    }

    /**
     * Constructs a <code>EzsignfolderSendV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderSendV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderSendV2Request} The populated <code>EzsignfolderSendV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderSendV2Request();

            if (data.hasOwnProperty('tEzsignfolderMessage')) {
                obj['tEzsignfolderMessage'] = ApiClient.convertToType(data['tEzsignfolderMessage'], 'String');
            }
            if (data.hasOwnProperty('a_fkiEzsignfoldersignerassociationID')) {
                obj['a_fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['a_fkiEzsignfoldersignerassociationID'], ['Number']);
            }
            if (data.hasOwnProperty('a_objEzsignfoldersignerassociationmessage')) {
                obj['a_objEzsignfoldersignerassociationmessage'] = ApiClient.convertToType(data['a_objEzsignfoldersignerassociationmessage'], [CustomEzsignfoldersignerassociationmessageRequest]);
            }
        }
        return obj;
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
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest>}
     */
    getAObjEzsignfoldersignerassociationmessage() {
        return this.a_objEzsignfoldersignerassociationmessage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest>} a_objEzsignfoldersignerassociationmessage
     */
    setAObjEzsignfoldersignerassociationmessage(a_objEzsignfoldersignerassociationmessage) {
        this['a_objEzsignfoldersignerassociationmessage'] = a_objEzsignfoldersignerassociationmessage;
    }

}

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfolderMessage
 */
EzsignfolderSendV2Request.prototype['tEzsignfolderMessage'] = undefined;

/**
 * @member {Array.<Number>} a_fkiEzsignfoldersignerassociationID
 */
EzsignfolderSendV2Request.prototype['a_fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest>} a_objEzsignfoldersignerassociationmessage
 */
EzsignfolderSendV2Request.prototype['a_objEzsignfoldersignerassociationmessage'] = undefined;






export default EzsignfolderSendV2Request;

