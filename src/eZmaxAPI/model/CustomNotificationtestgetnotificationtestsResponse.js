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
import CustomNotificationtestgetnotificationtestsResponseAllOf from './CustomNotificationtestgetnotificationtestsResponseAllOf';
import FieldENotificationpreferenceStatus from './FieldENotificationpreferenceStatus';
import NotificationtestResponse from './NotificationtestResponse';

/**
 * The CustomNotificationtestgetnotificationtestsResponse model module.
 * @module eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponse
 * @version 1.1.7
 */
class CustomNotificationtestgetnotificationtestsResponse {
    /**
     * Constructs a new <code>CustomNotificationtestgetnotificationtestsResponse</code>.
     * A Notificationtest Object in the context of getNotificationtests
     * @alias module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponse
     * @implements module:eZmaxAPI/model/NotificationtestResponse
     * @implements module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponseAllOf
     * @param pkiNotificationtestID {Number} The unique ID of the Notificationtest
     * @param fkiNotificationsubsectionID {Number} The unique ID of the Notificationsubsection
     * @param sNotificationtestFunction {String} The function name of the Notificationtest
     * @param sNotificationtestNameX {String} The name of the Notificationtest in the language of the requester
     * @param eNotificationpreferenceStatus {module:eZmaxAPI/model/FieldENotificationpreferenceStatus} 
     * @param iNotificationtest {Number} The number of elements returned by the Notificationtest
     */
    constructor(pkiNotificationtestID, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX, eNotificationpreferenceStatus, iNotificationtest) { 
        NotificationtestResponse.initialize(this, pkiNotificationtestID, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX);CustomNotificationtestgetnotificationtestsResponseAllOf.initialize(this, eNotificationpreferenceStatus, iNotificationtest);
        CustomNotificationtestgetnotificationtestsResponse.initialize(this, pkiNotificationtestID, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX, eNotificationpreferenceStatus, iNotificationtest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiNotificationtestID, fkiNotificationsubsectionID, sNotificationtestFunction, sNotificationtestNameX, eNotificationpreferenceStatus, iNotificationtest) { 
        obj['pkiNotificationtestID'] = pkiNotificationtestID;
        obj['fkiNotificationsubsectionID'] = fkiNotificationsubsectionID;
        obj['sNotificationtestFunction'] = sNotificationtestFunction;
        obj['sNotificationtestNameX'] = sNotificationtestNameX;
        obj['eNotificationpreferenceStatus'] = eNotificationpreferenceStatus;
        obj['iNotificationtest'] = iNotificationtest;
    }

    /**
     * Constructs a <code>CustomNotificationtestgetnotificationtestsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomNotificationtestgetnotificationtestsResponse} The populated <code>CustomNotificationtestgetnotificationtestsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomNotificationtestgetnotificationtestsResponse();
            NotificationtestResponse.constructFromObject(data, obj);
            CustomNotificationtestgetnotificationtestsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiNotificationtestID')) {
                obj['pkiNotificationtestID'] = ApiClient.convertToType(data['pkiNotificationtestID'], 'Number');
            }
            if (data.hasOwnProperty('fkiNotificationsubsectionID')) {
                obj['fkiNotificationsubsectionID'] = ApiClient.convertToType(data['fkiNotificationsubsectionID'], 'Number');
            }
            if (data.hasOwnProperty('sNotificationtestFunction')) {
                obj['sNotificationtestFunction'] = ApiClient.convertToType(data['sNotificationtestFunction'], 'String');
            }
            if (data.hasOwnProperty('sNotificationtestNameX')) {
                obj['sNotificationtestNameX'] = ApiClient.convertToType(data['sNotificationtestNameX'], 'String');
            }
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
     * Returns The unique ID of the Notificationtest
     * @return {Number}
     */
    getPkiNotificationtestID() {
        return this.pkiNotificationtestID;
    }

    /**
     * Sets The unique ID of the Notificationtest
     * @param {Number} pkiNotificationtestID The unique ID of the Notificationtest
     */
    setPkiNotificationtestID(pkiNotificationtestID) {
        this['pkiNotificationtestID'] = pkiNotificationtestID;
    }
/**
     * Returns The unique ID of the Notificationsubsection
     * @return {Number}
     */
    getFkiNotificationsubsectionID() {
        return this.fkiNotificationsubsectionID;
    }

    /**
     * Sets The unique ID of the Notificationsubsection
     * @param {Number} fkiNotificationsubsectionID The unique ID of the Notificationsubsection
     */
    setFkiNotificationsubsectionID(fkiNotificationsubsectionID) {
        this['fkiNotificationsubsectionID'] = fkiNotificationsubsectionID;
    }
/**
     * Returns The function name of the Notificationtest
     * @return {String}
     */
    getSNotificationtestFunction() {
        return this.sNotificationtestFunction;
    }

    /**
     * Sets The function name of the Notificationtest
     * @param {String} sNotificationtestFunction The function name of the Notificationtest
     */
    setSNotificationtestFunction(sNotificationtestFunction) {
        this['sNotificationtestFunction'] = sNotificationtestFunction;
    }
/**
     * Returns The name of the Notificationtest in the language of the requester
     * @return {String}
     */
    getSNotificationtestNameX() {
        return this.sNotificationtestNameX;
    }

    /**
     * Sets The name of the Notificationtest in the language of the requester
     * @param {String} sNotificationtestNameX The name of the Notificationtest in the language of the requester
     */
    setSNotificationtestNameX(sNotificationtestNameX) {
        this['sNotificationtestNameX'] = sNotificationtestNameX;
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
 * The unique ID of the Notificationtest
 * @member {Number} pkiNotificationtestID
 */
CustomNotificationtestgetnotificationtestsResponse.prototype['pkiNotificationtestID'] = undefined;

/**
 * The unique ID of the Notificationsubsection
 * @member {Number} fkiNotificationsubsectionID
 */
CustomNotificationtestgetnotificationtestsResponse.prototype['fkiNotificationsubsectionID'] = undefined;

/**
 * The function name of the Notificationtest
 * @member {String} sNotificationtestFunction
 */
CustomNotificationtestgetnotificationtestsResponse.prototype['sNotificationtestFunction'] = undefined;

/**
 * The name of the Notificationtest in the language of the requester
 * @member {String} sNotificationtestNameX
 */
CustomNotificationtestgetnotificationtestsResponse.prototype['sNotificationtestNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldENotificationpreferenceStatus} eNotificationpreferenceStatus
 */
CustomNotificationtestgetnotificationtestsResponse.prototype['eNotificationpreferenceStatus'] = undefined;

/**
 * The number of elements returned by the Notificationtest
 * @member {Number} iNotificationtest
 */
CustomNotificationtestgetnotificationtestsResponse.prototype['iNotificationtest'] = undefined;


// Implement NotificationtestResponse interface:
/**
 * The unique ID of the Notificationtest
 * @member {Number} pkiNotificationtestID
 */
NotificationtestResponse.prototype['pkiNotificationtestID'] = undefined;
/**
 * The unique ID of the Notificationsubsection
 * @member {Number} fkiNotificationsubsectionID
 */
NotificationtestResponse.prototype['fkiNotificationsubsectionID'] = undefined;
/**
 * The function name of the Notificationtest
 * @member {String} sNotificationtestFunction
 */
NotificationtestResponse.prototype['sNotificationtestFunction'] = undefined;
/**
 * The name of the Notificationtest in the language of the requester
 * @member {String} sNotificationtestNameX
 */
NotificationtestResponse.prototype['sNotificationtestNameX'] = undefined;
// Implement CustomNotificationtestgetnotificationtestsResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/FieldENotificationpreferenceStatus} eNotificationpreferenceStatus
 */
CustomNotificationtestgetnotificationtestsResponseAllOf.prototype['eNotificationpreferenceStatus'] = undefined;
/**
 * The number of elements returned by the Notificationtest
 * @member {Number} iNotificationtest
 */
CustomNotificationtestgetnotificationtestsResponseAllOf.prototype['iNotificationtest'] = undefined;




export default CustomNotificationtestgetnotificationtestsResponse;
