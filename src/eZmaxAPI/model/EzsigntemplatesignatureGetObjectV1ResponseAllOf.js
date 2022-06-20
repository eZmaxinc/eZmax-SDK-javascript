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
import EzsigntemplatesignatureGetObjectV1ResponseMPayload from './EzsigntemplatesignatureGetObjectV1ResponseMPayload';

/**
 * The EzsigntemplatesignatureGetObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseAllOf
 * @version 1.1.8
 */
class EzsigntemplatesignatureGetObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigntemplatesignatureGetObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigntemplatesignatureGetObjectV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsigntemplatesignatureGetObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseAllOf} The populated <code>EzsigntemplatesignatureGetObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureGetObjectV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigntemplatesignatureGetObjectV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV1ResponseMPayload} mPayload
 */
EzsigntemplatesignatureGetObjectV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigntemplatesignatureGetObjectV1ResponseAllOf;

