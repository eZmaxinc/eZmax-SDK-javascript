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

/**
 * The EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload
 * @version 1.1.10
 */
class EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsigntemplatepackagemembership
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload
     * @param a_pkiEzsigntemplatepackagemembershipID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param bEzsigntemplatepackageNeedvalidation {Boolean} Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param bEzsignbulksendNeedvalidation {Boolean} Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     */
    constructor(a_pkiEzsigntemplatepackagemembershipID, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation) { 
        
        EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsigntemplatepackagemembershipID, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplatepackagemembershipID, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation) { 
        obj['a_pkiEzsigntemplatepackagemembershipID'] = a_pkiEzsigntemplatepackagemembershipID;
        obj['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
        obj['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplatepackagemembershipID')) {
                obj['a_pkiEzsigntemplatepackagemembershipID'] = ApiClient.convertToType(data['a_pkiEzsigntemplatepackagemembershipID'], ['Number']);
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageNeedvalidation')) {
                obj['bEzsigntemplatepackageNeedvalidation'] = ApiClient.convertToType(data['bEzsigntemplatepackageNeedvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignbulksendNeedvalidation')) {
                obj['bEzsignbulksendNeedvalidation'] = ApiClient.convertToType(data['bEzsignbulksendNeedvalidation'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplatepackagemembershipID() {
        return this.a_pkiEzsigntemplatepackagemembershipID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigntemplatepackagemembershipID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigntemplatepackagemembershipID(a_pkiEzsigntemplatepackagemembershipID) {
        this['a_pkiEzsigntemplatepackagemembershipID'] = a_pkiEzsigntemplatepackagemembershipID;
    }
/**
     * Returns Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @return {Boolean}
     */
    getBEzsigntemplatepackageNeedvalidation() {
        return this.bEzsigntemplatepackageNeedvalidation;
    }

    /**
     * Sets Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param {Boolean} bEzsigntemplatepackageNeedvalidation Whether the Ezsignbulksend was automatically modified and needs a manual validation
     */
    setBEzsigntemplatepackageNeedvalidation(bEzsigntemplatepackageNeedvalidation) {
        this['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
    }
/**
     * Returns Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @return {Boolean}
     */
    getBEzsignbulksendNeedvalidation() {
        return this.bEzsignbulksendNeedvalidation;
    }

    /**
     * Sets Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @param {Boolean} bEzsignbulksendNeedvalidation Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     */
    setBEzsignbulksendNeedvalidation(bEzsignbulksendNeedvalidation) {
        this['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload.prototype['a_pkiEzsigntemplatepackagemembershipID'] = undefined;

/**
 * Whether the Ezsignbulksend was automatically modified and needs a manual validation
 * @member {Boolean} bEzsigntemplatepackageNeedvalidation
 */
EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload.prototype['bEzsigntemplatepackageNeedvalidation'] = undefined;

/**
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload.prototype['bEzsignbulksendNeedvalidation'] = undefined;






export default EzsigntemplatepackagemembershipCreateObjectV1ResponseMPayload;

