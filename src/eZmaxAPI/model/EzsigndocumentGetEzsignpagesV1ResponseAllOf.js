/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentGetEzsignpagesV1ResponseMPayload from './EzsigndocumentGetEzsignpagesV1ResponseMPayload';

/**
 * The EzsigndocumentGetEzsignpagesV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseAllOf
 * @version 1.1.7
 */
class EzsigndocumentGetEzsignpagesV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignpagesV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigndocumentGetEzsignpagesV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsigndocumentGetEzsignpagesV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseAllOf} The populated <code>EzsigndocumentGetEzsignpagesV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignpagesV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigndocumentGetEzsignpagesV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload} mPayload
 */
EzsigndocumentGetEzsignpagesV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigndocumentGetEzsignpagesV1ResponseAllOf;

