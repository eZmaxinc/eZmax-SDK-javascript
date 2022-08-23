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
 * The EzsigntemplatedocumentRequestPatch model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentRequestPatch
 * @version 1.1.10
 */
class EzsigntemplatedocumentRequestPatch {
    /**
     * Constructs a new <code>EzsigntemplatedocumentRequestPatch</code>.
     * An Ezsigntemplatedocument Object
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch
     */
    constructor() { 
        
        EzsigntemplatedocumentRequestPatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentRequestPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch} The populated <code>EzsigntemplatedocumentRequestPatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentRequestPatch();

            if (data.hasOwnProperty('sEzsigntemplatedocumentName')) {
                obj['sEzsigntemplatedocumentName'] = ApiClient.convertToType(data['sEzsigntemplatedocumentName'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The name of the Ezsigntemplatedocument.
     * @return {String}
     */
    getSEzsigntemplatedocumentName() {
        return this.sEzsigntemplatedocumentName;
    }

    /**
     * Sets The name of the Ezsigntemplatedocument.
     * @param {String} sEzsigntemplatedocumentName The name of the Ezsigntemplatedocument.
     */
    setSEzsigntemplatedocumentName(sEzsigntemplatedocumentName) {
        this['sEzsigntemplatedocumentName'] = sEzsigntemplatedocumentName;
    }

}

/**
 * The name of the Ezsigntemplatedocument.
 * @member {String} sEzsigntemplatedocumentName
 */
EzsigntemplatedocumentRequestPatch.prototype['sEzsigntemplatedocumentName'] = undefined;






export default EzsigntemplatedocumentRequestPatch;

