/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatepackagesignerResponseCompound from './EzsigntemplatepackagesignerResponseCompound';

/**
 * The EzsigntemplatepackagesignerGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV1ResponseMPayload
 * @version 1.1.13
 */
class EzsigntemplatepackagesignerGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignerGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatepackagesigner/{pkiEzsigntemplatepackagesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound
     * @param pkiEzsigntemplatepackagesignerID {Number} The unique ID of the Ezsigntemplatepackagesigner
     * @param fkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param sEzsigntemplatepackagesignerDescription {String} The description of the Ezsigntemplatepackagesigner
     */
    constructor(pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription) { 
        EzsigntemplatepackagesignerResponseCompound.initialize(this, pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription);
        EzsigntemplatepackagesignerGetObjectV1ResponseMPayload.initialize(this, pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription) { 
        obj['pkiEzsigntemplatepackagesignerID'] = pkiEzsigntemplatepackagesignerID;
        obj['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
        obj['sEzsigntemplatepackagesignerDescription'] = sEzsigntemplatepackagesignerDescription;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignerGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackagesignerGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignerGetObjectV1ResponseMPayload();
            EzsigntemplatepackagesignerResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatepackagesignerID')) {
                obj['pkiEzsigntemplatepackagesignerID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackagesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatepackagesignerDescription')) {
                obj['sEzsigntemplatepackagesignerDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackagesignerDescription'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagesigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatepackagesignerID() {
        return this.pkiEzsigntemplatepackagesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesigner
     * @param {Number} pkiEzsigntemplatepackagesignerID The unique ID of the Ezsigntemplatepackagesigner
     */
    setPkiEzsigntemplatepackagesignerID(pkiEzsigntemplatepackagesignerID) {
        this['pkiEzsigntemplatepackagesignerID'] = pkiEzsigntemplatepackagesignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackage
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatepackageID() {
        return this.fkiEzsigntemplatepackageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackage
     * @param {Number} fkiEzsigntemplatepackageID The unique ID of the Ezsigntemplatepackage
     */
    setFkiEzsigntemplatepackageID(fkiEzsigntemplatepackageID) {
        this['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
    }
/**
     * Returns The description of the Ezsigntemplatepackagesigner
     * @return {String}
     */
    getSEzsigntemplatepackagesignerDescription() {
        return this.sEzsigntemplatepackagesignerDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatepackagesigner
     * @param {String} sEzsigntemplatepackagesignerDescription The description of the Ezsigntemplatepackagesigner
     */
    setSEzsigntemplatepackagesignerDescription(sEzsigntemplatepackagesignerDescription) {
        this['sEzsigntemplatepackagesignerDescription'] = sEzsigntemplatepackagesignerDescription;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} pkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackagesignerGetObjectV1ResponseMPayload.prototype['pkiEzsigntemplatepackagesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagesignerGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The description of the Ezsigntemplatepackagesigner
 * @member {String} sEzsigntemplatepackagesignerDescription
 */
EzsigntemplatepackagesignerGetObjectV1ResponseMPayload.prototype['sEzsigntemplatepackagesignerDescription'] = undefined;


// Implement EzsigntemplatepackagesignerResponseCompound interface:
/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} pkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackagesignerResponseCompound.prototype['pkiEzsigntemplatepackagesignerID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagesignerResponseCompound.prototype['fkiEzsigntemplatepackageID'] = undefined;
/**
 * The description of the Ezsigntemplatepackagesigner
 * @member {String} sEzsigntemplatepackagesignerDescription
 */
EzsigntemplatepackagesignerResponseCompound.prototype['sEzsigntemplatepackagesignerDescription'] = undefined;




export default EzsigntemplatepackagesignerGetObjectV1ResponseMPayload;

