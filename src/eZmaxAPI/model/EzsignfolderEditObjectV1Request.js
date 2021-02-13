/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfolderRequest from './EzsignfolderRequest';

/**
 * The EzsignfolderEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignfolderEditObjectV1Request
 * @version 1.0.30
 */
class EzsignfolderEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignfolderEditObjectV1Request</code>.
     * Request for the /1/object/ezsignfolder/editObject API Request
     * @alias module:eZmaxAPI/model/EzsignfolderEditObjectV1Request
     */
    constructor() { 
        
        EzsignfolderEditObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfolderEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderEditObjectV1Request} The populated <code>EzsignfolderEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignfolder')) {
                obj['objEzsignfolder'] = EzsignfolderRequest.constructFromObject(data['objEzsignfolder']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfolderRequest}
     */
    getObjEzsignfolder() {
        return this.objEzsignfolder;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderRequest} objEzsignfolder
     */
    setObjEzsignfolder(objEzsignfolder) {
        this['objEzsignfolder'] = objEzsignfolder;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfolderRequest} objEzsignfolder
 */
EzsignfolderEditObjectV1Request.prototype['objEzsignfolder'] = undefined;






export default EzsignfolderEditObjectV1Request;

