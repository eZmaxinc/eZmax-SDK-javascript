/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfolderGetObjectV2ResponseMPayload from './EzsignfolderGetObjectV2ResponseMPayload';

/**
 * The EzsignfolderGetObjectV2ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignfolderGetObjectV2ResponseAllOf
 * @version 1.1.15
 */
class EzsignfolderGetObjectV2ResponseAllOf {
    /**
     * Constructs a new <code>EzsignfolderGetObjectV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignfolderGetObjectV2ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsignfolderGetObjectV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseAllOf} The populated <code>EzsignfolderGetObjectV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetObjectV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfolderGetObjectV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfolderGetObjectV2ResponseMPayload} mPayload
 */
EzsignfolderGetObjectV2ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignfolderGetObjectV2ResponseAllOf;

