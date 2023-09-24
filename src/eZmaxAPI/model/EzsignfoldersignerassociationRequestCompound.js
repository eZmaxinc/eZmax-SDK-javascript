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
import EzsignfoldersignerassociationRequest from './EzsignfoldersignerassociationRequest';
import EzsignsignerRequestCompound from './EzsignsignerRequestCompound';

/**
 * The EzsignfoldersignerassociationRequestCompound model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound
 * @version 1.2.0
 */
class EzsignfoldersignerassociationRequestCompound {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationRequestCompound</code>.
     * An Ezsignfoldersignerassociation Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationRequest
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     */
    constructor(fkiEzsignfolderID) { 
        EzsignfoldersignerassociationRequest.initialize(this, fkiEzsignfolderID);
        EzsignfoldersignerassociationRequestCompound.initialize(this, fkiEzsignfolderID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID) { 
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} The populated <code>EzsignfoldersignerassociationRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationRequestCompound();
            EzsignfoldersignerassociationRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignfoldersignerassociationID')) {
                obj['pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['pkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignsignergroupID')) {
                obj['fkiEzsignsignergroupID'] = ApiClient.convertToType(data['fkiEzsignsignergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignfoldersignerassociationReceivecopy')) {
                obj['bEzsignfoldersignerassociationReceivecopy'] = ApiClient.convertToType(data['bEzsignfoldersignerassociationReceivecopy'], 'Boolean');
            }
            if (data.hasOwnProperty('tEzsignfoldersignerassociationMessage')) {
                obj['tEzsignfoldersignerassociationMessage'] = ApiClient.convertToType(data['tEzsignfoldersignerassociationMessage'], 'String');
            }
            if (data.hasOwnProperty('objEzsignsigner')) {
                obj['objEzsignsigner'] = EzsignsignerRequestCompound.constructFromObject(data['objEzsignsigner']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldersignerassociationRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldersignerassociationRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldersignerassociationRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tEzsignfoldersignerassociationMessage'] && !(typeof data['tEzsignfoldersignerassociationMessage'] === 'string' || data['tEzsignfoldersignerassociationMessage'] instanceof String)) {
            throw new Error("Expected the field `tEzsignfoldersignerassociationMessage` to be a primitive type in the JSON string but got " + data['tEzsignfoldersignerassociationMessage']);
        }
        // validate the optional field `objEzsignsigner`
        if (data['objEzsignsigner']) { // data not null
          EzsignsignerRequestCompound.validateJSON(data['objEzsignsigner']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignfoldersignerassociationID() {
        return this.pkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setPkiEzsignfoldersignerassociationID(pkiEzsignfoldersignerassociationID) {
        this['pkiEzsignfoldersignerassociationID'] = pkiEzsignfoldersignerassociationID;
    }
/**
     * Returns The unique ID of the User
     * minimum: 0
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
     * Returns The unique ID of the Ezsignsignergroup
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getFkiEzsignsignergroupID() {
        return this.fkiEzsignsignergroupID;
    }

    /**
     * Sets The unique ID of the Ezsignsignergroup
     * @param {Number} fkiEzsignsignergroupID The unique ID of the Ezsignsignergroup
     */
    setFkiEzsignsignergroupID(fkiEzsignsignergroupID) {
        this['fkiEzsignsignergroupID'] = fkiEzsignsignergroupID;
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
     * Returns If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     * @return {Boolean}
     */
    getBEzsignfoldersignerassociationReceivecopy() {
        return this.bEzsignfoldersignerassociationReceivecopy;
    }

    /**
     * Sets If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     * @param {Boolean} bEzsignfoldersignerassociationReceivecopy If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     */
    setBEzsignfoldersignerassociationReceivecopy(bEzsignfoldersignerassociationReceivecopy) {
        this['bEzsignfoldersignerassociationReceivecopy'] = bEzsignfoldersignerassociationReceivecopy;
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
/**
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompound}
     */
    getObjEzsignsigner() {
        return this.objEzsignsigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompound} objEzsignsigner
     */
    setObjEzsignsigner(objEzsignsigner) {
        this['objEzsignsigner'] = objEzsignsigner;
    }

}

EzsignfoldersignerassociationRequestCompound.RequiredProperties = ["fkiEzsignfolderID"];

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationRequestCompound.prototype['pkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignfoldersignerassociationRequestCompound.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Ezsignsignergroup
 * @member {Number} fkiEzsignsignergroupID
 */
EzsignfoldersignerassociationRequestCompound.prototype['fkiEzsignsignergroupID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationRequestCompound.prototype['fkiEzsignfolderID'] = undefined;

/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationRequestCompound.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfoldersignerassociationMessage
 */
EzsignfoldersignerassociationRequestCompound.prototype['tEzsignfoldersignerassociationMessage'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignsignerRequestCompound} objEzsignsigner
 */
EzsignfoldersignerassociationRequestCompound.prototype['objEzsignsigner'] = undefined;


// Implement EzsignfoldersignerassociationRequest interface:
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationRequest.prototype['pkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignfoldersignerassociationRequest.prototype['fkiUserID'] = undefined;
/**
 * The unique ID of the Ezsignsignergroup
 * @member {Number} fkiEzsignsignergroupID
 */
EzsignfoldersignerassociationRequest.prototype['fkiEzsignsignergroupID'] = undefined;
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationRequest.prototype['fkiEzsignfolderID'] = undefined;
/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationRequest.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;
/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfoldersignerassociationMessage
 */
EzsignfoldersignerassociationRequest.prototype['tEzsignfoldersignerassociationMessage'] = undefined;




export default EzsignfoldersignerassociationRequestCompound;

