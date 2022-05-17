/**
 * eZmax API Definition (Full)
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
import EzsigntemplatepackagesignermembershipResponseCompound from './EzsigntemplatepackagesignermembershipResponseCompound';

/**
 * The EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload
 * @version 1.1.7
 */
class EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatepackagesignermembership/{pkiEzsigntemplatepackagesignermembershipID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound
     * @param pkiEzsigntemplatepackagesignermembershipID {Number} The unique ID of the Ezsigntemplatepackagesignermembership
     * @param fkiEzsigntemplatepackagemembershipID {Number} The unique ID of the Ezsigntemplatepackagemembership
     * @param fkiEzsigntemplatepackagesignerID {Number} The unique ID of the Ezsigntemplatepackagesigner
     * @param fkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     */
    constructor(pkiEzsigntemplatepackagesignermembershipID, fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID) { 
        EzsigntemplatepackagesignermembershipResponseCompound.initialize(this, pkiEzsigntemplatepackagesignermembershipID, fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID);
        EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload.initialize(this, pkiEzsigntemplatepackagesignermembershipID, fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackagesignermembershipID, fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID) { 
        obj['pkiEzsigntemplatepackagesignermembershipID'] = pkiEzsigntemplatepackagesignermembershipID;
        obj['fkiEzsigntemplatepackagemembershipID'] = fkiEzsigntemplatepackagemembershipID;
        obj['fkiEzsigntemplatepackagesignerID'] = fkiEzsigntemplatepackagesignerID;
        obj['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload();
            EzsigntemplatepackagesignermembershipResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatepackagesignermembershipID')) {
                obj['pkiEzsigntemplatepackagesignermembershipID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackagesignermembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackagemembershipID')) {
                obj['fkiEzsigntemplatepackagemembershipID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackagemembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackagesignerID')) {
                obj['fkiEzsigntemplatepackagesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackagesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerID')) {
                obj['fkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatepackagesignermembershipCopy')) {
                obj['iEzsigntemplatepackagesignermembershipCopy'] = ApiClient.convertToType(data['iEzsigntemplatepackagesignermembershipCopy'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagesignermembership
     * @return {Number}
     */
    getPkiEzsigntemplatepackagesignermembershipID() {
        return this.pkiEzsigntemplatepackagesignermembershipID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesignermembership
     * @param {Number} pkiEzsigntemplatepackagesignermembershipID The unique ID of the Ezsigntemplatepackagesignermembership
     */
    setPkiEzsigntemplatepackagesignermembershipID(pkiEzsigntemplatepackagesignermembershipID) {
        this['pkiEzsigntemplatepackagesignermembershipID'] = pkiEzsigntemplatepackagesignermembershipID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackagemembership
     * @return {Number}
     */
    getFkiEzsigntemplatepackagemembershipID() {
        return this.fkiEzsigntemplatepackagemembershipID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagemembership
     * @param {Number} fkiEzsigntemplatepackagemembershipID The unique ID of the Ezsigntemplatepackagemembership
     */
    setFkiEzsigntemplatepackagemembershipID(fkiEzsigntemplatepackagemembershipID) {
        this['fkiEzsigntemplatepackagemembershipID'] = fkiEzsigntemplatepackagemembershipID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackagesigner
     * @return {Number}
     */
    getFkiEzsigntemplatepackagesignerID() {
        return this.fkiEzsigntemplatepackagesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesigner
     * @param {Number} fkiEzsigntemplatepackagesignerID The unique ID of the Ezsigntemplatepackagesigner
     */
    setFkiEzsigntemplatepackagesignerID(fkiEzsigntemplatepackagesignerID) {
        this['fkiEzsigntemplatepackagesignerID'] = fkiEzsigntemplatepackagesignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatesigner
     * @return {Number}
     */
    getFkiEzsigntemplatesignerID() {
        return this.fkiEzsigntemplatesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} fkiEzsigntemplatesignerID The unique ID of the Ezsigntemplatesigner
     */
    setFkiEzsigntemplatesignerID(fkiEzsigntemplatesignerID) {
        this['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
    }
/**
     * Returns The Copy number in case of multiple copies.
     * @return {Number}
     */
    getIEzsigntemplatepackagesignermembershipCopy() {
        return this.iEzsigntemplatepackagesignermembershipCopy;
    }

    /**
     * Sets The Copy number in case of multiple copies.
     * @param {Number} iEzsigntemplatepackagesignermembershipCopy The Copy number in case of multiple copies.
     */
    setIEzsigntemplatepackagesignermembershipCopy(iEzsigntemplatepackagesignermembershipCopy) {
        this['iEzsigntemplatepackagesignermembershipCopy'] = iEzsigntemplatepackagesignermembershipCopy;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackagesignermembership
 * @member {Number} pkiEzsigntemplatepackagesignermembershipID
 */
EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload.prototype['pkiEzsigntemplatepackagesignermembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} fkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplatepackagemembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} fkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplatepackagesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplatesignerID'] = undefined;

/**
 * The Copy number in case of multiple copies.
 * @member {Number} iEzsigntemplatepackagesignermembershipCopy
 */
EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload.prototype['iEzsigntemplatepackagesignermembershipCopy'] = undefined;


// Implement EzsigntemplatepackagesignermembershipResponseCompound interface:
/**
 * The unique ID of the Ezsigntemplatepackagesignermembership
 * @member {Number} pkiEzsigntemplatepackagesignermembershipID
 */
EzsigntemplatepackagesignermembershipResponseCompound.prototype['pkiEzsigntemplatepackagesignermembershipID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} fkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagesignermembershipResponseCompound.prototype['fkiEzsigntemplatepackagemembershipID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} fkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackagesignermembershipResponseCompound.prototype['fkiEzsigntemplatepackagesignerID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatepackagesignermembershipResponseCompound.prototype['fkiEzsigntemplatesignerID'] = undefined;
/**
 * The Copy number in case of multiple copies.
 * @member {Number} iEzsigntemplatepackagesignermembershipCopy
 */
EzsigntemplatepackagesignermembershipResponseCompound.prototype['iEzsigntemplatepackagesignermembershipCopy'] = undefined;




export default EzsigntemplatepackagesignermembershipGetObjectV1ResponseMPayload;

