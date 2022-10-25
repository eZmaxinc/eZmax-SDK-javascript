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
import EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload from './EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload';

/**
 * The EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf
 * @version 1.1.11
 */
class EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf} The populated <code>EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} mPayload
 */
EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf;

