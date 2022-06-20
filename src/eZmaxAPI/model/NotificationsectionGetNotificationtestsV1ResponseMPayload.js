/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomNotificationsubsectiongetnotificationtestsResponse from './CustomNotificationsubsectiongetnotificationtestsResponse';

/**
 * The NotificationsectionGetNotificationtestsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/NotificationsectionGetNotificationtestsV1ResponseMPayload
 * @version 1.1.9
 */
class NotificationsectionGetNotificationtestsV1ResponseMPayload {
    /**
     * Constructs a new <code>NotificationsectionGetNotificationtestsV1ResponseMPayload</code>.
     * Payload for GET /1/object/notificationsection/{pkiNotificationsectionID}/getNotificationtests
     * @alias module:eZmaxAPI/model/NotificationsectionGetNotificationtestsV1ResponseMPayload
     * @param a_objNotificationsubsection {Array.<module:eZmaxAPI/model/CustomNotificationsubsectiongetnotificationtestsResponse>} 
     */
    constructor(a_objNotificationsubsection) { 
        
        NotificationsectionGetNotificationtestsV1ResponseMPayload.initialize(this, a_objNotificationsubsection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objNotificationsubsection) { 
        obj['a_objNotificationsubsection'] = a_objNotificationsubsection;
    }

    /**
     * Constructs a <code>NotificationsectionGetNotificationtestsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/NotificationsectionGetNotificationtestsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/NotificationsectionGetNotificationtestsV1ResponseMPayload} The populated <code>NotificationsectionGetNotificationtestsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsectionGetNotificationtestsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objNotificationsubsection')) {
                obj['a_objNotificationsubsection'] = ApiClient.convertToType(data['a_objNotificationsubsection'], [CustomNotificationsubsectiongetnotificationtestsResponse]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomNotificationsubsectiongetnotificationtestsResponse>}
     */
    getAObjNotificationsubsection() {
        return this.a_objNotificationsubsection;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomNotificationsubsectiongetnotificationtestsResponse>} a_objNotificationsubsection
     */
    setAObjNotificationsubsection(a_objNotificationsubsection) {
        this['a_objNotificationsubsection'] = a_objNotificationsubsection;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/CustomNotificationsubsectiongetnotificationtestsResponse>} a_objNotificationsubsection
 */
NotificationsectionGetNotificationtestsV1ResponseMPayload.prototype['a_objNotificationsubsection'] = undefined;






export default NotificationsectionGetNotificationtestsV1ResponseMPayload;

