/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload
 * @version 1.1.8
 */
class EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload</code>.
     * Payload for DELETE /1/object/ezsigntemplatepackagesigner/{pkiEzsigntemplatepackagesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload
     * @param bEzsigntemplatepackageNeedvalidation {Boolean} Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param bEzsignbulksendNeedvalidation {Boolean} Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     */
    constructor(bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation) { 
        
        EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload.initialize(this, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bEzsigntemplatepackageNeedvalidation, bEzsignbulksendNeedvalidation) { 
        obj['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
        obj['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload();

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
 * Whether the Ezsignbulksend was automatically modified and needs a manual validation
 * @member {Boolean} bEzsigntemplatepackageNeedvalidation
 */
EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload.prototype['bEzsigntemplatepackageNeedvalidation'] = undefined;

/**
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload.prototype['bEzsignbulksendNeedvalidation'] = undefined;






export default EzsigntemplatepackagesignerDeleteObjectV1ResponseMPayload;

