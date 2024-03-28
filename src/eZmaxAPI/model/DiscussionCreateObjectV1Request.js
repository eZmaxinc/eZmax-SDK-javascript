/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DiscussionRequestCompound from './DiscussionRequestCompound';

/**
 * The DiscussionCreateObjectV1Request model module.
 * @module eZmaxAPI/model/DiscussionCreateObjectV1Request
 * @version 1.2.0
 */
class DiscussionCreateObjectV1Request {
    /**
     * Constructs a new <code>DiscussionCreateObjectV1Request</code>.
     * Request for POST /1/object/discussion
     * @alias module:eZmaxAPI/model/DiscussionCreateObjectV1Request
     * @param a_objDiscussion {Array.<module:eZmaxAPI/model/DiscussionRequestCompound>} 
     */
    constructor(a_objDiscussion) { 
        
        DiscussionCreateObjectV1Request.initialize(this, a_objDiscussion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objDiscussion) { 
        obj['a_objDiscussion'] = a_objDiscussion;
    }

    /**
     * Constructs a <code>DiscussionCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DiscussionCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DiscussionCreateObjectV1Request} The populated <code>DiscussionCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscussionCreateObjectV1Request();

            if (data.hasOwnProperty('a_objDiscussion')) {
                obj['a_objDiscussion'] = ApiClient.convertToType(data['a_objDiscussion'], [DiscussionRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscussionCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscussionCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscussionCreateObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objDiscussion']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objDiscussion'])) {
                throw new Error("Expected the field `a_objDiscussion` to be an array in the JSON data but got " + data['a_objDiscussion']);
            }
            // validate the optional field `a_objDiscussion` (array)
            for (const item of data['a_objDiscussion']) {
                DiscussionRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/DiscussionRequestCompound>}
     */
    getAObjDiscussion() {
        return this.a_objDiscussion;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/DiscussionRequestCompound>} a_objDiscussion
     */
    setAObjDiscussion(a_objDiscussion) {
        this['a_objDiscussion'] = a_objDiscussion;
    }

}

DiscussionCreateObjectV1Request.RequiredProperties = ["a_objDiscussion"];

/**
 * @member {Array.<module:eZmaxAPI/model/DiscussionRequestCompound>} a_objDiscussion
 */
DiscussionCreateObjectV1Request.prototype['a_objDiscussion'] = undefined;






export default DiscussionCreateObjectV1Request;
