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
import DiscussionRequestPatch from './DiscussionRequestPatch';

/**
 * The DiscussionPatchObjectV1Request model module.
 * @module eZmaxAPI/model/DiscussionPatchObjectV1Request
 * @version 1.2.0
 */
class DiscussionPatchObjectV1Request {
    /**
     * Constructs a new <code>DiscussionPatchObjectV1Request</code>.
     * Request for PATCH /1/object/discussion/{pkiDiscussionID}
     * @alias module:eZmaxAPI/model/DiscussionPatchObjectV1Request
     * @param objDiscussion {module:eZmaxAPI/model/DiscussionRequestPatch} 
     */
    constructor(objDiscussion) { 
        
        DiscussionPatchObjectV1Request.initialize(this, objDiscussion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objDiscussion) { 
        obj['objDiscussion'] = objDiscussion;
    }

    /**
     * Constructs a <code>DiscussionPatchObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DiscussionPatchObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DiscussionPatchObjectV1Request} The populated <code>DiscussionPatchObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscussionPatchObjectV1Request();

            if (data.hasOwnProperty('objDiscussion')) {
                obj['objDiscussion'] = DiscussionRequestPatch.constructFromObject(data['objDiscussion']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscussionPatchObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscussionPatchObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscussionPatchObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDiscussion`
        if (data['objDiscussion']) { // data not null
          DiscussionRequestPatch.validateJSON(data['objDiscussion']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/DiscussionRequestPatch}
     */
    getObjDiscussion() {
        return this.objDiscussion;
    }

    /**
     * @param {module:eZmaxAPI/model/DiscussionRequestPatch} objDiscussion
     */
    setObjDiscussion(objDiscussion) {
        this['objDiscussion'] = objDiscussion;
    }

}

DiscussionPatchObjectV1Request.RequiredProperties = ["objDiscussion"];

/**
 * @member {module:eZmaxAPI/model/DiscussionRequestPatch} objDiscussion
 */
DiscussionPatchObjectV1Request.prototype['objDiscussion'] = undefined;






export default DiscussionPatchObjectV1Request;

