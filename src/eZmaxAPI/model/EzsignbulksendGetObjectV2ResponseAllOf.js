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
import EzsignbulksendGetObjectV2ResponseMPayload from './EzsignbulksendGetObjectV2ResponseMPayload';

/**
 * The EzsignbulksendGetObjectV2ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseAllOf
 * @version 1.1.13
 */
class EzsignbulksendGetObjectV2ResponseAllOf {
    /**
     * Constructs a new <code>EzsignbulksendGetObjectV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignbulksendGetObjectV2ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsignbulksendGetObjectV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseAllOf} The populated <code>EzsignbulksendGetObjectV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetObjectV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignbulksendGetObjectV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendGetObjectV2ResponseMPayload} mPayload
 */
EzsignbulksendGetObjectV2ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignbulksendGetObjectV2ResponseAllOf;

