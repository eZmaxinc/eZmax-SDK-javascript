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
import FieldENotificationpreferenceStatus from './FieldENotificationpreferenceStatus';

/**
 * The CustomNotificationtestgetnotificationtestsResponseAllOf model module.
 * @module eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponseAllOf
 * @version 1.1.15
 */
class CustomNotificationtestgetnotificationtestsResponseAllOf {
    /**
     * Constructs a new <code>CustomNotificationtestgetnotificationtestsResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponseAllOf
     * @param eNotificationpreferenceStatus {module:eZmaxAPI/model/FieldENotificationpreferenceStatus} 
     * @param iNotificationtest {Number} The number of elements returned by the Notificationtest
     */
    constructor(eNotificationpreferenceStatus, iNotificationtest) { 
        
        CustomNotificationtestgetnotificationtestsResponseAllOf.initialize(this, eNotificationpreferenceStatus, iNotificationtest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eNotificationpreferenceStatus, iNotificationtest) { 
        obj['eNotificationpreferenceStatus'] = eNotificationpreferenceStatus;
        obj['iNotificationtest'] = iNotificationtest;
    }

    /**
     * Constructs a <code>CustomNotificationtestgetnotificationtestsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponseAllOf} The populated <code>CustomNotificationtestgetnotificationtestsResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomNotificationtestgetnotificationtestsResponseAllOf();

            if (data.hasOwnProperty('eNotificationpreferenceStatus')) {
                obj['eNotificationpreferenceStatus'] = FieldENotificationpreferenceStatus.constructFromObject(data['eNotificationpreferenceStatus']);
            }
            if (data.hasOwnProperty('iNotificationtest')) {
                obj['iNotificationtest'] = ApiClient.convertToType(data['iNotificationtest'], 'Number');
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/FieldENotificationpreferenceStatus}
     */
    getENotificationpreferenceStatus() {
        return this.eNotificationpreferenceStatus;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldENotificationpreferenceStatus} eNotificationpreferenceStatus
     */
    setENotificationpreferenceStatus(eNotificationpreferenceStatus) {
        this['eNotificationpreferenceStatus'] = eNotificationpreferenceStatus;
    }
/**
     * Returns The number of elements returned by the Notificationtest
     * @return {Number}
     */
    getINotificationtest() {
        return this.iNotificationtest;
    }

    /**
     * Sets The number of elements returned by the Notificationtest
     * @param {Number} iNotificationtest The number of elements returned by the Notificationtest
     */
    setINotificationtest(iNotificationtest) {
        this['iNotificationtest'] = iNotificationtest;
    }

}

/**
 * @member {module:eZmaxAPI/model/FieldENotificationpreferenceStatus} eNotificationpreferenceStatus
 */
CustomNotificationtestgetnotificationtestsResponseAllOf.prototype['eNotificationpreferenceStatus'] = undefined;

/**
 * The number of elements returned by the Notificationtest
 * @member {Number} iNotificationtest
 */
CustomNotificationtestgetnotificationtestsResponseAllOf.prototype['iNotificationtest'] = undefined;






export default CustomNotificationtestgetnotificationtestsResponseAllOf;

