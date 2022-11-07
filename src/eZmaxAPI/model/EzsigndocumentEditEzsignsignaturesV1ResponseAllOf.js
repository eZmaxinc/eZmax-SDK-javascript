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
import EzsigndocumentEditEzsignsignaturesV1ResponseMPayload from './EzsigndocumentEditEzsignsignaturesV1ResponseMPayload';

/**
 * The EzsigndocumentEditEzsignsignaturesV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseAllOf
 * @version 1.1.15
 */
class EzsigndocumentEditEzsignsignaturesV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigndocumentEditEzsignsignaturesV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigndocumentEditEzsignsignaturesV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsigndocumentEditEzsignsignaturesV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseAllOf} The populated <code>EzsigndocumentEditEzsignsignaturesV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentEditEzsignsignaturesV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigndocumentEditEzsignsignaturesV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload} mPayload
 */
EzsigndocumentEditEzsignsignaturesV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigndocumentEditEzsignsignaturesV1ResponseAllOf;

