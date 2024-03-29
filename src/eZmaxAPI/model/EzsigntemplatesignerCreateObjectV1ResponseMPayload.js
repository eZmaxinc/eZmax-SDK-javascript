/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatesignerCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1ResponseMPayload
 * @version 1.1.18
 */
class EzsigntemplatesignerCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatesignerCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsigntemplatesigner
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1ResponseMPayload
     * @param a_pkiEzsigntemplatesignerID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param bEzsigntemplatepackageNeedvalidation {Boolean} Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param bEzsignbulksendNeedvalidation {Boolean} Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     */
    constructor(a_pkiEzsigntemplatesignerID, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation) { 
        
        EzsigntemplatesignerCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsigntemplatesignerID, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplatesignerID, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation) { 
        obj['a_pkiEzsigntemplatesignerID'] = a_pkiEzsigntemplatesignerID;
        obj['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
        obj['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1ResponseMPayload} The populated <code>EzsigntemplatesignerCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplatesignerID')) {
                obj['a_pkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['a_pkiEzsigntemplatesignerID'], ['Number']);
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
     * Validates the JSON data with respect to <code>EzsigntemplatesignerCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignerCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignerCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsigntemplatesignerID'])) {
            throw new Error("Expected the field `a_pkiEzsigntemplatesignerID` to be an array in the JSON data but got " + data['a_pkiEzsigntemplatesignerID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplatesignerID() {
        return this.a_pkiEzsigntemplatesignerID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigntemplatesignerID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigntemplatesignerID(a_pkiEzsigntemplatesignerID) {
        this['a_pkiEzsigntemplatesignerID'] = a_pkiEzsigntemplatesignerID;
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

EzsigntemplatesignerCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiEzsigntemplatesignerID", "bEzsigntemplatepackageNeedvalidation", "bEzsignbulksendNeedvalidation"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigntemplatesignerID
 */
EzsigntemplatesignerCreateObjectV1ResponseMPayload.prototype['a_pkiEzsigntemplatesignerID'] = undefined;

/**
 * Whether the Ezsignbulksend was automatically modified and needs a manual validation
 * @member {Boolean} bEzsigntemplatepackageNeedvalidation
 */
EzsigntemplatesignerCreateObjectV1ResponseMPayload.prototype['bEzsigntemplatepackageNeedvalidation'] = undefined;

/**
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsigntemplatesignerCreateObjectV1ResponseMPayload.prototype['bEzsignbulksendNeedvalidation'] = undefined;






export default EzsigntemplatesignerCreateObjectV1ResponseMPayload;

