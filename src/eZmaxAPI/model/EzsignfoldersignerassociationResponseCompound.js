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
import EzsignfoldersignerassociationResponse from './EzsignfoldersignerassociationResponse';
import EzsignfoldersignerassociationResponseCompoundAllOf from './EzsignfoldersignerassociationResponseCompoundAllOf';
import EzsignfoldersignerassociationResponseCompoundUser from './EzsignfoldersignerassociationResponseCompoundUser';
import EzsignsignerResponseCompound from './EzsignsignerResponseCompound';

/**
 * The EzsignfoldersignerassociationResponseCompound model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound
 * @version 1.1.11
 */
class EzsignfoldersignerassociationResponseCompound {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationResponseCompound</code>.
     * An Ezsignfoldersignerassociation Object
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationResponse
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundAllOf
     * @param pkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param bEzsignfoldersignerassociationReceivecopy {Boolean} If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
     * @param tEzsignfoldersignerassociationMessage {String} A custom text message that will be added to the email sent.
     */
    constructor(pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy, tEzsignfoldersignerassociationMessage) { 
        EzsignfoldersignerassociationResponse.initialize(this, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy, tEzsignfoldersignerassociationMessage);EzsignfoldersignerassociationResponseCompoundAllOf.initialize(this);
        EzsignfoldersignerassociationResponseCompound.initialize(this, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy, tEzsignfoldersignerassociationMessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfoldersignerassociationID, fkiEzsignfolderID, bEzsignfoldersignerassociationReceivecopy, tEzsignfoldersignerassociationMessage) { 
        obj['pkiEzsignfoldersignerassociationID'] = pkiEzsignfoldersignerassociationID;
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['bEzsignfoldersignerassociationReceivecopy'] = bEzsignfoldersignerassociationReceivecopy;
        obj['tEzsignfoldersignerassociationMessage'] = tEzsignfoldersignerassociationMessage;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompound} The populated <code>EzsignfoldersignerassociationResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationResponseCompound();
            EzsignfoldersignerassociationResponse.constructFromObject(data, obj);
            EzsignfoldersignerassociationResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignfoldersignerassociationID')) {
                obj['pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['pkiEzsignfoldersignerassociationID'], 'Number');
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
            if (data.hasOwnProperty('objUser')) {
                obj['objUser'] = EzsignfoldersignerassociationResponseCompoundUser.constructFromObject(data['objUser']);
            }
            if (data.hasOwnProperty('objEzsignsigner')) {
                obj['objEzsignsigner'] = EzsignsignerResponseCompound.constructFromObject(data['objEzsignsigner']);
            }
        }
        return obj;
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
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser}
     */
    getObjUser() {
        return this.objUser;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
     */
    setObjUser(objUser) {
        this['objUser'] = objUser;
    }
/**
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompound}
     */
    getObjEzsignsigner() {
        return this.objEzsignsigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
     */
    setObjEzsignsigner(objEzsignsigner) {
        this['objEzsignsigner'] = objEzsignsigner;
    }

}

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationResponseCompound.prototype['pkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationResponseCompound.prototype['fkiEzsignfolderID'] = undefined;

/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationResponseCompound.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfoldersignerassociationMessage
 */
EzsignfoldersignerassociationResponseCompound.prototype['tEzsignfoldersignerassociationMessage'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
 */
EzsignfoldersignerassociationResponseCompound.prototype['objUser'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
 */
EzsignfoldersignerassociationResponseCompound.prototype['objEzsignsigner'] = undefined;


// Implement EzsignfoldersignerassociationResponse interface:
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationResponse.prototype['pkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsignfoldersignerassociationResponse.prototype['fkiEzsignfolderID'] = undefined;
/**
 * If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain't required to sign the document.
 * @member {Boolean} bEzsignfoldersignerassociationReceivecopy
 */
EzsignfoldersignerassociationResponse.prototype['bEzsignfoldersignerassociationReceivecopy'] = undefined;
/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfoldersignerassociationMessage
 */
EzsignfoldersignerassociationResponse.prototype['tEzsignfoldersignerassociationMessage'] = undefined;
// Implement EzsignfoldersignerassociationResponseCompoundAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} objUser
 */
EzsignfoldersignerassociationResponseCompoundAllOf.prototype['objUser'] = undefined;
/**
 * @member {module:eZmaxAPI/model/EzsignsignerResponseCompound} objEzsignsigner
 */
EzsignfoldersignerassociationResponseCompoundAllOf.prototype['objEzsignsigner'] = undefined;




export default EzsignfoldersignerassociationResponseCompound;

