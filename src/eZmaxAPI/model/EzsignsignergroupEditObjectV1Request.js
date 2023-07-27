/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignergroupRequestCompound from './EzsignsignergroupRequestCompound';

/**
 * The EzsignsignergroupEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignsignergroupEditObjectV1Request
 * @version 1.1.18
 */
class EzsignsignergroupEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignsignergroupEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsignsignergroup/{pkiEzsignsignergroupID}
     * @alias module:eZmaxAPI/model/EzsignsignergroupEditObjectV1Request
     */
    constructor() { 
        
        EzsignsignergroupEditObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignsignergroupEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignergroupEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignergroupEditObjectV1Request} The populated <code>EzsignsignergroupEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignergroupEditObjectV1Request();

            if (data.hasOwnProperty('objBranding')) {
                obj['objBranding'] = EzsignsignergroupRequestCompound.constructFromObject(data['objBranding']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignergroupEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignergroupEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // validate the optional field `objBranding`
        if (data['objBranding']) { // data not null
          EzsignsignergroupRequestCompound.validateJSON(data['objBranding']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignsignergroupRequestCompound}
     */
    getObjBranding() {
        return this.objBranding;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignergroupRequestCompound} objBranding
     */
    setObjBranding(objBranding) {
        this['objBranding'] = objBranding;
    }

}



/**
 * @member {module:eZmaxAPI/model/EzsignsignergroupRequestCompound} objBranding
 */
EzsignsignergroupEditObjectV1Request.prototype['objBranding'] = undefined;






export default EzsignsignergroupEditObjectV1Request;

