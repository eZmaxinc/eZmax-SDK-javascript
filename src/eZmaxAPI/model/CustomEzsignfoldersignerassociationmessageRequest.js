/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomEzsignfoldersignerassociationmessageRequest model module.
 * @module eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest
 * @version 1.1.12
 */
class CustomEzsignfoldersignerassociationmessageRequest {
    /**
     * Constructs a new <code>CustomEzsignfoldersignerassociationmessageRequest</code>.
     * A custom message Object in the context of an Ezsignfolder&#39;s send function
     * @alias module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     */
    constructor(fkiEzsignfoldersignerassociationID) { 
        
        CustomEzsignfoldersignerassociationmessageRequest.initialize(this, fkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldersignerassociationID) { 
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>CustomEzsignfoldersignerassociationmessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignfoldersignerassociationmessageRequest} The populated <code>CustomEzsignfoldersignerassociationmessageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignfoldersignerassociationmessageRequest();

            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('tEzsignfoldersignerassociationMessage')) {
                obj['tEzsignfoldersignerassociationMessage'] = ApiClient.convertToType(data['tEzsignfoldersignerassociationMessage'], 'String');
            }
        }
        return obj;
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
     * Returns A custom text message that will be added to the email sent.
     * @return {String}
     */
    getTEzsignfoldersignerassociationMessage() {
        return this.tEzsignfoldersignerassociationMessage;
    }

    /**
     * Sets A custom text message that will be added to the email sent.
     * @param {String} tEzsignfoldersignerassociationMessage A custom text message that will be added to the email sent.
     */
    setTEzsignfoldersignerassociationMessage(tEzsignfoldersignerassociationMessage) {
        this['tEzsignfoldersignerassociationMessage'] = tEzsignfoldersignerassociationMessage;
    }

}

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
CustomEzsignfoldersignerassociationmessageRequest.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfoldersignerassociationMessage
 */
CustomEzsignfoldersignerassociationmessageRequest.prototype['tEzsignfoldersignerassociationMessage'] = undefined;






export default CustomEzsignfoldersignerassociationmessageRequest;

