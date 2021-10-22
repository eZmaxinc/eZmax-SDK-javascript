/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentRequest from './EzsigndocumentRequest';

/**
 * The UNUSEDEzsigndocumentEditObjectV1Request model module.
 * @module eZmaxAPI/model/UNUSEDEzsigndocumentEditObjectV1Request
 * @version 1.1.1
 */
class UNUSEDEzsigndocumentEditObjectV1Request {
    /**
     * Constructs a new <code>UNUSEDEzsigndocumentEditObjectV1Request</code>.
     * Request for the /1/object/ezsigndocument/editObject API Request
     * @alias module:eZmaxAPI/model/UNUSEDEzsigndocumentEditObjectV1Request
     */
    constructor() { 
        
        UNUSEDEzsigndocumentEditObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UNUSEDEzsigndocumentEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UNUSEDEzsigndocumentEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UNUSEDEzsigndocumentEditObjectV1Request} The populated <code>UNUSEDEzsigndocumentEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UNUSEDEzsigndocumentEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigndocument')) {
                obj['objEzsigndocument'] = EzsigndocumentRequest.constructFromObject(data['objEzsigndocument']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentRequest}
     */
    getObjEzsigndocument() {
        return this.objEzsigndocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentRequest} objEzsigndocument
     */
    setObjEzsigndocument(objEzsigndocument) {
        this['objEzsigndocument'] = objEzsigndocument;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest} objEzsigndocument
 */
UNUSEDEzsigndocumentEditObjectV1Request.prototype['objEzsigndocument'] = undefined;






export default UNUSEDEzsigndocumentEditObjectV1Request;

