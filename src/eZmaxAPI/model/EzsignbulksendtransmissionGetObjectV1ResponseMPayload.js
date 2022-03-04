/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import EzsignbulksendtransmissionResponseCompound from './EzsignbulksendtransmissionResponseCompound';

/**
 * The EzsignbulksendtransmissionGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV1ResponseMPayload
 * @version 1.1.7
 */
class EzsignbulksendtransmissionGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendtransmissionGetObjectV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getObject API Request
     * @alias module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound
     * @param pkiEzsignbulksendtransmissionID {Number} The unique ID of the Ezsignbulksendtransmission
     * @param fkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param sEzsignbulksendtransmissionDescription {String} The description of the Ezsignbulksendtransmission
     * @param iEzsignbulksendtransmissionErrors {Number} The number of errors during the Ezsignbulksendtransmission
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiEzsignbulksendtransmissionID, fkiEzsignbulksendID, sEzsignbulksendtransmissionDescription, iEzsignbulksendtransmissionErrors, objAudit) { 
        EzsignbulksendtransmissionResponseCompound.initialize(this, pkiEzsignbulksendtransmissionID, fkiEzsignbulksendID, sEzsignbulksendtransmissionDescription, iEzsignbulksendtransmissionErrors, objAudit);
        EzsignbulksendtransmissionGetObjectV1ResponseMPayload.initialize(this, pkiEzsignbulksendtransmissionID, fkiEzsignbulksendID, sEzsignbulksendtransmissionDescription, iEzsignbulksendtransmissionErrors, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksendtransmissionID, fkiEzsignbulksendID, sEzsignbulksendtransmissionDescription, iEzsignbulksendtransmissionErrors, objAudit) { 
        obj['pkiEzsignbulksendtransmissionID'] = pkiEzsignbulksendtransmissionID;
        obj['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
        obj['sEzsignbulksendtransmissionDescription'] = sEzsignbulksendtransmissionDescription;
        obj['iEzsignbulksendtransmissionErrors'] = iEzsignbulksendtransmissionErrors;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>EzsignbulksendtransmissionGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV1ResponseMPayload} The populated <code>EzsignbulksendtransmissionGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendtransmissionGetObjectV1ResponseMPayload();
            EzsignbulksendtransmissionResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignbulksendtransmissionID')) {
                obj['pkiEzsignbulksendtransmissionID'] = ApiClient.convertToType(data['pkiEzsignbulksendtransmissionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignbulksendID')) {
                obj['fkiEzsignbulksendID'] = ApiClient.convertToType(data['fkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignbulksendtransmissionDescription')) {
                obj['sEzsignbulksendtransmissionDescription'] = ApiClient.convertToType(data['sEzsignbulksendtransmissionDescription'], 'String');
            }
            if (data.hasOwnProperty('iEzsignbulksendtransmissionErrors')) {
                obj['iEzsignbulksendtransmissionErrors'] = ApiClient.convertToType(data['iEzsignbulksendtransmissionErrors'], 'Number');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignbulksendtransmission
     * @return {Number}
     */
    getPkiEzsignbulksendtransmissionID() {
        return this.pkiEzsignbulksendtransmissionID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksendtransmission
     * @param {Number} pkiEzsignbulksendtransmissionID The unique ID of the Ezsignbulksendtransmission
     */
    setPkiEzsignbulksendtransmissionID(pkiEzsignbulksendtransmissionID) {
        this['pkiEzsignbulksendtransmissionID'] = pkiEzsignbulksendtransmissionID;
    }
/**
     * Returns The unique ID of the Ezsignbulksend
     * @return {Number}
     */
    getFkiEzsignbulksendID() {
        return this.fkiEzsignbulksendID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksend
     * @param {Number} fkiEzsignbulksendID The unique ID of the Ezsignbulksend
     */
    setFkiEzsignbulksendID(fkiEzsignbulksendID) {
        this['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
    }
/**
     * Returns The description of the Ezsignbulksendtransmission
     * @return {String}
     */
    getSEzsignbulksendtransmissionDescription() {
        return this.sEzsignbulksendtransmissionDescription;
    }

    /**
     * Sets The description of the Ezsignbulksendtransmission
     * @param {String} sEzsignbulksendtransmissionDescription The description of the Ezsignbulksendtransmission
     */
    setSEzsignbulksendtransmissionDescription(sEzsignbulksendtransmissionDescription) {
        this['sEzsignbulksendtransmissionDescription'] = sEzsignbulksendtransmissionDescription;
    }
/**
     * Returns The number of errors during the Ezsignbulksendtransmission
     * @return {Number}
     */
    getIEzsignbulksendtransmissionErrors() {
        return this.iEzsignbulksendtransmissionErrors;
    }

    /**
     * Sets The number of errors during the Ezsignbulksendtransmission
     * @param {Number} iEzsignbulksendtransmissionErrors The number of errors during the Ezsignbulksendtransmission
     */
    setIEzsignbulksendtransmissionErrors(iEzsignbulksendtransmissionErrors) {
        this['iEzsignbulksendtransmissionErrors'] = iEzsignbulksendtransmissionErrors;
    }
/**
     * @return {module:eZmaxAPI/model/CommonAudit}
     */
    getObjAudit() {
        return this.objAudit;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAudit} objAudit
     */
    setObjAudit(objAudit) {
        this['objAudit'] = objAudit;
    }

}

/**
 * The unique ID of the Ezsignbulksendtransmission
 * @member {Number} pkiEzsignbulksendtransmissionID
 */
EzsignbulksendtransmissionGetObjectV1ResponseMPayload.prototype['pkiEzsignbulksendtransmissionID'] = undefined;

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksendtransmissionGetObjectV1ResponseMPayload.prototype['fkiEzsignbulksendID'] = undefined;

/**
 * The description of the Ezsignbulksendtransmission
 * @member {String} sEzsignbulksendtransmissionDescription
 */
EzsignbulksendtransmissionGetObjectV1ResponseMPayload.prototype['sEzsignbulksendtransmissionDescription'] = undefined;

/**
 * The number of errors during the Ezsignbulksendtransmission
 * @member {Number} iEzsignbulksendtransmissionErrors
 */
EzsignbulksendtransmissionGetObjectV1ResponseMPayload.prototype['iEzsignbulksendtransmissionErrors'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignbulksendtransmissionGetObjectV1ResponseMPayload.prototype['objAudit'] = undefined;


// Implement EzsignbulksendtransmissionResponseCompound interface:
/**
 * The unique ID of the Ezsignbulksendtransmission
 * @member {Number} pkiEzsignbulksendtransmissionID
 */
EzsignbulksendtransmissionResponseCompound.prototype['pkiEzsignbulksendtransmissionID'] = undefined;
/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksendtransmissionResponseCompound.prototype['fkiEzsignbulksendID'] = undefined;
/**
 * The description of the Ezsignbulksendtransmission
 * @member {String} sEzsignbulksendtransmissionDescription
 */
EzsignbulksendtransmissionResponseCompound.prototype['sEzsignbulksendtransmissionDescription'] = undefined;
/**
 * The number of errors during the Ezsignbulksendtransmission
 * @member {Number} iEzsignbulksendtransmissionErrors
 */
EzsignbulksendtransmissionResponseCompound.prototype['iEzsignbulksendtransmissionErrors'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignbulksendtransmissionResponseCompound.prototype['objAudit'] = undefined;




export default EzsignbulksendtransmissionGetObjectV1ResponseMPayload;

