/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksendGetFormsDataV1ResponseMPayload from './EzsignbulksendGetFormsDataV1ResponseMPayload';

/**
 * The EzsignbulksendGetFormsDataV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf
 * @version 1.1.16
 */
class EzsignbulksendGetFormsDataV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignbulksendGetFormsDataV1ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf} The populated <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetFormsDataV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignbulksendGetFormsDataV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} mPayload
 */
EzsignbulksendGetFormsDataV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignbulksendGetFormsDataV1ResponseAllOf;

