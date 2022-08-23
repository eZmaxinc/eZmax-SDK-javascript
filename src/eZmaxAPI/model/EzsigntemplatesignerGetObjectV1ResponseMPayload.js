/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatesignerResponseCompound from './EzsigntemplatesignerResponseCompound';

/**
 * The EzsigntemplatesignerGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerGetObjectV1ResponseMPayload
 * @version 1.1.10
 */
class EzsigntemplatesignerGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatesignerGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatesigner/{pkiEzsigntemplatesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound
     * @param pkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param sEzsigntemplatesignerDescription {String} The description of the Ezsigntemplatesigner
     */
    constructor(pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription) { 
        EzsigntemplatesignerResponseCompound.initialize(this, pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription);
        EzsigntemplatesignerGetObjectV1ResponseMPayload.initialize(this, pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatesignerID, fkiEzsigntemplateID, sEzsigntemplatesignerDescription) { 
        obj['pkiEzsigntemplatesignerID'] = pkiEzsigntemplatesignerID;
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['sEzsigntemplatesignerDescription'] = sEzsigntemplatesignerDescription;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV1ResponseMPayload} The populated <code>EzsigntemplatesignerGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerGetObjectV1ResponseMPayload();
            EzsigntemplatesignerResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatesignerID')) {
                obj['pkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['pkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatesignerDescription')) {
                obj['sEzsigntemplatesignerDescription'] = ApiClient.convertToType(data['sEzsigntemplatesignerDescription'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatesigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatesignerID() {
        return this.pkiEzsigntemplatesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} pkiEzsigntemplatesignerID The unique ID of the Ezsigntemplatesigner
     */
    setPkiEzsigntemplatesignerID(pkiEzsigntemplatesignerID) {
        this['pkiEzsigntemplatesignerID'] = pkiEzsigntemplatesignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateID() {
        return this.fkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} fkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setFkiEzsigntemplateID(fkiEzsigntemplateID) {
        this['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }
/**
     * Returns The description of the Ezsigntemplatesigner
     * @return {String}
     */
    getSEzsigntemplatesignerDescription() {
        return this.sEzsigntemplatesignerDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatesigner
     * @param {String} sEzsigntemplatesignerDescription The description of the Ezsigntemplatesigner
     */
    setSEzsigntemplatesignerDescription(sEzsigntemplatesignerDescription) {
        this['sEzsigntemplatesignerDescription'] = sEzsigntemplatesignerDescription;
    }

}

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} pkiEzsigntemplatesignerID
 */
EzsigntemplatesignerGetObjectV1ResponseMPayload.prototype['pkiEzsigntemplatesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatesignerGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The description of the Ezsigntemplatesigner
 * @member {String} sEzsigntemplatesignerDescription
 */
EzsigntemplatesignerGetObjectV1ResponseMPayload.prototype['sEzsigntemplatesignerDescription'] = undefined;


// Implement EzsigntemplatesignerResponseCompound interface:
/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} pkiEzsigntemplatesignerID
 */
EzsigntemplatesignerResponseCompound.prototype['pkiEzsigntemplatesignerID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatesignerResponseCompound.prototype['fkiEzsigntemplateID'] = undefined;
/**
 * The description of the Ezsigntemplatesigner
 * @member {String} sEzsigntemplatesignerDescription
 */
EzsigntemplatesignerResponseCompound.prototype['sEzsigntemplatesignerDescription'] = undefined;




export default EzsigntemplatesignerGetObjectV1ResponseMPayload;

