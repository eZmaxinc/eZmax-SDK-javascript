/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldertypeGetObjectV1ResponseMPayload from './EzsignfoldertypeGetObjectV1ResponseMPayload';

/**
 * The EzsignfoldertypeGetObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseAllOf
 * @version 1.1.12
 */
class EzsignfoldertypeGetObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsignfoldertypeGetObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignfoldertypeGetObjectV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsignfoldertypeGetObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseAllOf} The populated <code>EzsignfoldertypeGetObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeGetObjectV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfoldertypeGetObjectV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfoldertypeGetObjectV1ResponseMPayload} mPayload
 */
EzsignfoldertypeGetObjectV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignfoldertypeGetObjectV1ResponseAllOf;

