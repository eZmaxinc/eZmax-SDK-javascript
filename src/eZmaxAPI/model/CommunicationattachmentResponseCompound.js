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
import CommunicationattachmentResponse from './CommunicationattachmentResponse';

/**
 * The CommunicationattachmentResponseCompound model module.
 * @module eZmaxAPI/model/CommunicationattachmentResponseCompound
 * @version 1.2.0
 */
class CommunicationattachmentResponseCompound {
    /**
     * Constructs a new <code>CommunicationattachmentResponseCompound</code>.
     * A Communicationattachment Object
     * @alias module:eZmaxAPI/model/CommunicationattachmentResponseCompound
     * @implements module:eZmaxAPI/model/CommunicationattachmentResponse
     * @param pkiCommunicationattachmentID {Number} The unique ID of the Communicationattachment
     * @param sCommunicationattachmentName {String} The name of the Communicationattachment
     */
    constructor(pkiCommunicationattachmentID, sCommunicationattachmentName) { 
        CommunicationattachmentResponse.initialize(this, pkiCommunicationattachmentID, sCommunicationattachmentName);
        CommunicationattachmentResponseCompound.initialize(this, pkiCommunicationattachmentID, sCommunicationattachmentName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCommunicationattachmentID, sCommunicationattachmentName) { 
        obj['pkiCommunicationattachmentID'] = pkiCommunicationattachmentID;
        obj['sCommunicationattachmentName'] = sCommunicationattachmentName;
    }

    /**
     * Constructs a <code>CommunicationattachmentResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationattachmentResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationattachmentResponseCompound} The populated <code>CommunicationattachmentResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationattachmentResponseCompound();
            CommunicationattachmentResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiCommunicationattachmentID')) {
                obj['pkiCommunicationattachmentID'] = ApiClient.convertToType(data['pkiCommunicationattachmentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiAttachmentID')) {
                obj['fkiAttachmentID'] = ApiClient.convertToType(data['fkiAttachmentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiInvoiceID')) {
                obj['fkiInvoiceID'] = ApiClient.convertToType(data['fkiInvoiceID'], 'Number');
            }
            if (data.hasOwnProperty('fkiSalarypreparationID')) {
                obj['fkiSalarypreparationID'] = ApiClient.convertToType(data['fkiSalarypreparationID'], 'Number');
            }
            if (data.hasOwnProperty('sCommunicationattachmentName')) {
                obj['sCommunicationattachmentName'] = ApiClient.convertToType(data['sCommunicationattachmentName'], 'String');
            }
            if (data.hasOwnProperty('sDownloadUrl')) {
                obj['sDownloadUrl'] = ApiClient.convertToType(data['sDownloadUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationattachmentResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationattachmentResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationattachmentResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCommunicationattachmentName'] && !(typeof data['sCommunicationattachmentName'] === 'string' || data['sCommunicationattachmentName'] instanceof String)) {
            throw new Error("Expected the field `sCommunicationattachmentName` to be a primitive type in the JSON string but got " + data['sCommunicationattachmentName']);
        }
        // ensure the json data is a string
        if (data['sDownloadUrl'] && !(typeof data['sDownloadUrl'] === 'string' || data['sDownloadUrl'] instanceof String)) {
            throw new Error("Expected the field `sDownloadUrl` to be a primitive type in the JSON string but got " + data['sDownloadUrl']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Communicationattachment
     * @return {Number}
     */
    getPkiCommunicationattachmentID() {
        return this.pkiCommunicationattachmentID;
    }

    /**
     * Sets The unique ID of the Communicationattachment
     * @param {Number} pkiCommunicationattachmentID The unique ID of the Communicationattachment
     */
    setPkiCommunicationattachmentID(pkiCommunicationattachmentID) {
        this['pkiCommunicationattachmentID'] = pkiCommunicationattachmentID;
    }
/**
     * Returns The unique ID of the Attachment.
     * minimum: 0
     * @return {Number}
     */
    getFkiAttachmentID() {
        return this.fkiAttachmentID;
    }

    /**
     * Sets The unique ID of the Attachment.
     * @param {Number} fkiAttachmentID The unique ID of the Attachment.
     */
    setFkiAttachmentID(fkiAttachmentID) {
        this['fkiAttachmentID'] = fkiAttachmentID;
    }
/**
     * Returns The unique ID of the Invoice.
     * minimum: 0
     * @return {Number}
     */
    getFkiInvoiceID() {
        return this.fkiInvoiceID;
    }

    /**
     * Sets The unique ID of the Invoice.
     * @param {Number} fkiInvoiceID The unique ID of the Invoice.
     */
    setFkiInvoiceID(fkiInvoiceID) {
        this['fkiInvoiceID'] = fkiInvoiceID;
    }
/**
     * Returns The unique ID of the Salarypreparation.
     * minimum: 0
     * @return {Number}
     */
    getFkiSalarypreparationID() {
        return this.fkiSalarypreparationID;
    }

    /**
     * Sets The unique ID of the Salarypreparation.
     * @param {Number} fkiSalarypreparationID The unique ID of the Salarypreparation.
     */
    setFkiSalarypreparationID(fkiSalarypreparationID) {
        this['fkiSalarypreparationID'] = fkiSalarypreparationID;
    }
/**
     * Returns The name of the Communicationattachment
     * @return {String}
     */
    getSCommunicationattachmentName() {
        return this.sCommunicationattachmentName;
    }

    /**
     * Sets The name of the Communicationattachment
     * @param {String} sCommunicationattachmentName The name of the Communicationattachment
     */
    setSCommunicationattachmentName(sCommunicationattachmentName) {
        this['sCommunicationattachmentName'] = sCommunicationattachmentName;
    }
/**
     * Returns The Url to the requested document.  Url will expire after 3 hours.
     * @return {String}
     */
    getSDownloadUrl() {
        return this.sDownloadUrl;
    }

    /**
     * Sets The Url to the requested document.  Url will expire after 3 hours.
     * @param {String} sDownloadUrl The Url to the requested document.  Url will expire after 3 hours.
     */
    setSDownloadUrl(sDownloadUrl) {
        this['sDownloadUrl'] = sDownloadUrl;
    }

}

CommunicationattachmentResponseCompound.RequiredProperties = ["pkiCommunicationattachmentID", "sCommunicationattachmentName"];

/**
 * The unique ID of the Communicationattachment
 * @member {Number} pkiCommunicationattachmentID
 */
CommunicationattachmentResponseCompound.prototype['pkiCommunicationattachmentID'] = undefined;

/**
 * The unique ID of the Attachment.
 * @member {Number} fkiAttachmentID
 */
CommunicationattachmentResponseCompound.prototype['fkiAttachmentID'] = undefined;

/**
 * The unique ID of the Invoice.
 * @member {Number} fkiInvoiceID
 */
CommunicationattachmentResponseCompound.prototype['fkiInvoiceID'] = undefined;

/**
 * The unique ID of the Salarypreparation.
 * @member {Number} fkiSalarypreparationID
 */
CommunicationattachmentResponseCompound.prototype['fkiSalarypreparationID'] = undefined;

/**
 * The name of the Communicationattachment
 * @member {String} sCommunicationattachmentName
 */
CommunicationattachmentResponseCompound.prototype['sCommunicationattachmentName'] = undefined;

/**
 * The Url to the requested document.  Url will expire after 3 hours.
 * @member {String} sDownloadUrl
 */
CommunicationattachmentResponseCompound.prototype['sDownloadUrl'] = undefined;


// Implement CommunicationattachmentResponse interface:
/**
 * The unique ID of the Communicationattachment
 * @member {Number} pkiCommunicationattachmentID
 */
CommunicationattachmentResponse.prototype['pkiCommunicationattachmentID'] = undefined;
/**
 * The unique ID of the Attachment.
 * @member {Number} fkiAttachmentID
 */
CommunicationattachmentResponse.prototype['fkiAttachmentID'] = undefined;
/**
 * The unique ID of the Invoice.
 * @member {Number} fkiInvoiceID
 */
CommunicationattachmentResponse.prototype['fkiInvoiceID'] = undefined;
/**
 * The unique ID of the Salarypreparation.
 * @member {Number} fkiSalarypreparationID
 */
CommunicationattachmentResponse.prototype['fkiSalarypreparationID'] = undefined;
/**
 * The name of the Communicationattachment
 * @member {String} sCommunicationattachmentName
 */
CommunicationattachmentResponse.prototype['sCommunicationattachmentName'] = undefined;
/**
 * The Url to the requested document.  Url will expire after 3 hours.
 * @member {String} sDownloadUrl
 */
CommunicationattachmentResponse.prototype['sDownloadUrl'] = undefined;




export default CommunicationattachmentResponseCompound;

