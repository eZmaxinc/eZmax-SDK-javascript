/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignatureRequest from './EzsignsignatureRequest';
import EzsignsignatureRequestCompound from './EzsignsignatureRequestCompound';

/**
 * The EzsignsignatureCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignsignatureCreateObjectV1Request
 * @version 1.0.44
 */
class EzsignsignatureCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignsignatureCreateObjectV1Request</code>.
     * Request for the /1/object/ezsignsignature/createObject API Request
     * @alias module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Request
     */
    constructor() { 
        
        EzsignsignatureCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignsignatureCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Request} The populated <code>EzsignsignatureCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureCreateObjectV1Request();

            if (data.hasOwnProperty('objEzsignsignature')) {
                obj['objEzsignsignature'] = EzsignsignatureRequest.constructFromObject(data['objEzsignsignature']);
            }
            if (data.hasOwnProperty('objEzsignsignatureCompound')) {
                obj['objEzsignsignatureCompound'] = EzsignsignatureRequestCompound.constructFromObject(data['objEzsignsignatureCompound']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignsignatureRequest}
     */
    getObjEzsignsignature() {
        return this.objEzsignsignature;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignatureRequest} objEzsignsignature
     */
    setObjEzsignsignature(objEzsignsignature) {
        this['objEzsignsignature'] = objEzsignsignature;
    }
/**
     * @return {module:eZmaxAPI/model/EzsignsignatureRequestCompound}
     */
    getObjEzsignsignatureCompound() {
        return this.objEzsignsignatureCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignatureRequestCompound} objEzsignsignatureCompound
     */
    setObjEzsignsignatureCompound(objEzsignsignatureCompound) {
        this['objEzsignsignatureCompound'] = objEzsignsignatureCompound;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignsignatureRequest} objEzsignsignature
 */
EzsignsignatureCreateObjectV1Request.prototype['objEzsignsignature'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignsignatureRequestCompound} objEzsignsignatureCompound
 */
EzsignsignatureCreateObjectV1Request.prototype['objEzsignsignatureCompound'] = undefined;






export default EzsignsignatureCreateObjectV1Request;

