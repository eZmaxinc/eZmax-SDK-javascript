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
import CustomDiscussionconfigurationResponse from './CustomDiscussionconfigurationResponse';
import DiscussionResponse from './DiscussionResponse';
import DiscussionmembershipResponseCompound from './DiscussionmembershipResponseCompound';
import DiscussionmessageResponseCompound from './DiscussionmessageResponseCompound';

/**
 * The DiscussionResponseCompound model module.
 * @module eZmaxAPI/model/DiscussionResponseCompound
 * @version 1.2.0
 */
class DiscussionResponseCompound {
    /**
     * Constructs a new <code>DiscussionResponseCompound</code>.
     * A Discussion Object
     * @alias module:eZmaxAPI/model/DiscussionResponseCompound
     * @implements module:eZmaxAPI/model/DiscussionResponse
     * @param pkiDiscussionID {Number} The unique ID of the Discussion
     * @param sDiscussionDescription {String} The description of the Discussion
     * @param bDiscussionClosed {Boolean} Whether if it's an closed
     * @param iDiscussionmessageCount {Number} The count of Attachment.
     * @param iDiscussionmessageCountunread {Number} The count of Attachment.
     * @param a_objDiscussionmembership {Array.<module:eZmaxAPI/model/DiscussionmembershipResponseCompound>} 
     * @param a_objDiscussionmessage {Array.<module:eZmaxAPI/model/DiscussionmessageResponseCompound>} 
     */
    constructor(pkiDiscussionID, sDiscussionDescription, bDiscussionClosed, iDiscussionmessageCount, iDiscussionmessageCountunread, a_objDiscussionmembership, a_objDiscussionmessage) { 
        DiscussionResponse.initialize(this, pkiDiscussionID, sDiscussionDescription, bDiscussionClosed, iDiscussionmessageCount, iDiscussionmessageCountunread);
        DiscussionResponseCompound.initialize(this, pkiDiscussionID, sDiscussionDescription, bDiscussionClosed, iDiscussionmessageCount, iDiscussionmessageCountunread, a_objDiscussionmembership, a_objDiscussionmessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiDiscussionID, sDiscussionDescription, bDiscussionClosed, iDiscussionmessageCount, iDiscussionmessageCountunread, a_objDiscussionmembership, a_objDiscussionmessage) { 
        obj['pkiDiscussionID'] = pkiDiscussionID;
        obj['sDiscussionDescription'] = sDiscussionDescription;
        obj['bDiscussionClosed'] = bDiscussionClosed;
        obj['iDiscussionmessageCount'] = iDiscussionmessageCount;
        obj['iDiscussionmessageCountunread'] = iDiscussionmessageCountunread;
        obj['a_objDiscussionmembership'] = a_objDiscussionmembership;
        obj['a_objDiscussionmessage'] = a_objDiscussionmessage;
    }

    /**
     * Constructs a <code>DiscussionResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DiscussionResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DiscussionResponseCompound} The populated <code>DiscussionResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscussionResponseCompound();
            DiscussionResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiDiscussionID')) {
                obj['pkiDiscussionID'] = ApiClient.convertToType(data['pkiDiscussionID'], 'Number');
            }
            if (data.hasOwnProperty('sDiscussionDescription')) {
                obj['sDiscussionDescription'] = ApiClient.convertToType(data['sDiscussionDescription'], 'String');
            }
            if (data.hasOwnProperty('bDiscussionClosed')) {
                obj['bDiscussionClosed'] = ApiClient.convertToType(data['bDiscussionClosed'], 'Boolean');
            }
            if (data.hasOwnProperty('dtDiscussionLastread')) {
                obj['dtDiscussionLastread'] = ApiClient.convertToType(data['dtDiscussionLastread'], 'String');
            }
            if (data.hasOwnProperty('iDiscussionmessageCount')) {
                obj['iDiscussionmessageCount'] = ApiClient.convertToType(data['iDiscussionmessageCount'], 'Number');
            }
            if (data.hasOwnProperty('iDiscussionmessageCountunread')) {
                obj['iDiscussionmessageCountunread'] = ApiClient.convertToType(data['iDiscussionmessageCountunread'], 'Number');
            }
            if (data.hasOwnProperty('objDiscussionconfiguration')) {
                obj['objDiscussionconfiguration'] = CustomDiscussionconfigurationResponse.constructFromObject(data['objDiscussionconfiguration']);
            }
            if (data.hasOwnProperty('a_objDiscussionmembership')) {
                obj['a_objDiscussionmembership'] = ApiClient.convertToType(data['a_objDiscussionmembership'], [DiscussionmembershipResponseCompound]);
            }
            if (data.hasOwnProperty('a_objDiscussionmessage')) {
                obj['a_objDiscussionmessage'] = ApiClient.convertToType(data['a_objDiscussionmessage'], [DiscussionmessageResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscussionResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscussionResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscussionResponseCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sDiscussionDescription'] && !(typeof data['sDiscussionDescription'] === 'string' || data['sDiscussionDescription'] instanceof String)) {
            throw new Error("Expected the field `sDiscussionDescription` to be a primitive type in the JSON string but got " + data['sDiscussionDescription']);
        }
        // ensure the json data is a string
        if (data['dtDiscussionLastread'] && !(typeof data['dtDiscussionLastread'] === 'string' || data['dtDiscussionLastread'] instanceof String)) {
            throw new Error("Expected the field `dtDiscussionLastread` to be a primitive type in the JSON string but got " + data['dtDiscussionLastread']);
        }
        // validate the optional field `objDiscussionconfiguration`
        if (data['objDiscussionconfiguration']) { // data not null
          CustomDiscussionconfigurationResponse.validateJSON(data['objDiscussionconfiguration']);
        }
        if (data['a_objDiscussionmembership']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objDiscussionmembership'])) {
                throw new Error("Expected the field `a_objDiscussionmembership` to be an array in the JSON data but got " + data['a_objDiscussionmembership']);
            }
            // validate the optional field `a_objDiscussionmembership` (array)
            for (const item of data['a_objDiscussionmembership']) {
                DiscussionmembershipResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objDiscussionmessage']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objDiscussionmessage'])) {
                throw new Error("Expected the field `a_objDiscussionmessage` to be an array in the JSON data but got " + data['a_objDiscussionmessage']);
            }
            // validate the optional field `a_objDiscussionmessage` (array)
            for (const item of data['a_objDiscussionmessage']) {
                DiscussionmessageResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Discussion
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getPkiDiscussionID() {
        return this.pkiDiscussionID;
    }

    /**
     * Sets The unique ID of the Discussion
     * @param {Number} pkiDiscussionID The unique ID of the Discussion
     */
    setPkiDiscussionID(pkiDiscussionID) {
        this['pkiDiscussionID'] = pkiDiscussionID;
    }
/**
     * Returns The description of the Discussion
     * @return {String}
     */
    getSDiscussionDescription() {
        return this.sDiscussionDescription;
    }

    /**
     * Sets The description of the Discussion
     * @param {String} sDiscussionDescription The description of the Discussion
     */
    setSDiscussionDescription(sDiscussionDescription) {
        this['sDiscussionDescription'] = sDiscussionDescription;
    }
/**
     * Returns Whether if it's an closed
     * @return {Boolean}
     */
    getBDiscussionClosed() {
        return this.bDiscussionClosed;
    }

    /**
     * Sets Whether if it's an closed
     * @param {Boolean} bDiscussionClosed Whether if it's an closed
     */
    setBDiscussionClosed(bDiscussionClosed) {
        this['bDiscussionClosed'] = bDiscussionClosed;
    }
/**
     * Returns The date the Discussion was last read
     * @return {String}
     */
    getDtDiscussionLastread() {
        return this.dtDiscussionLastread;
    }

    /**
     * Sets The date the Discussion was last read
     * @param {String} dtDiscussionLastread The date the Discussion was last read
     */
    setDtDiscussionLastread(dtDiscussionLastread) {
        this['dtDiscussionLastread'] = dtDiscussionLastread;
    }
/**
     * Returns The count of Attachment.
     * @return {Number}
     */
    getIDiscussionmessageCount() {
        return this.iDiscussionmessageCount;
    }

    /**
     * Sets The count of Attachment.
     * @param {Number} iDiscussionmessageCount The count of Attachment.
     */
    setIDiscussionmessageCount(iDiscussionmessageCount) {
        this['iDiscussionmessageCount'] = iDiscussionmessageCount;
    }
/**
     * Returns The count of Attachment.
     * @return {Number}
     */
    getIDiscussionmessageCountunread() {
        return this.iDiscussionmessageCountunread;
    }

    /**
     * Sets The count of Attachment.
     * @param {Number} iDiscussionmessageCountunread The count of Attachment.
     */
    setIDiscussionmessageCountunread(iDiscussionmessageCountunread) {
        this['iDiscussionmessageCountunread'] = iDiscussionmessageCountunread;
    }
/**
     * @return {module:eZmaxAPI/model/CustomDiscussionconfigurationResponse}
     */
    getObjDiscussionconfiguration() {
        return this.objDiscussionconfiguration;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomDiscussionconfigurationResponse} objDiscussionconfiguration
     */
    setObjDiscussionconfiguration(objDiscussionconfiguration) {
        this['objDiscussionconfiguration'] = objDiscussionconfiguration;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/DiscussionmembershipResponseCompound>}
     */
    getAObjDiscussionmembership() {
        return this.a_objDiscussionmembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/DiscussionmembershipResponseCompound>} a_objDiscussionmembership
     */
    setAObjDiscussionmembership(a_objDiscussionmembership) {
        this['a_objDiscussionmembership'] = a_objDiscussionmembership;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/DiscussionmessageResponseCompound>}
     */
    getAObjDiscussionmessage() {
        return this.a_objDiscussionmessage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/DiscussionmessageResponseCompound>} a_objDiscussionmessage
     */
    setAObjDiscussionmessage(a_objDiscussionmessage) {
        this['a_objDiscussionmessage'] = a_objDiscussionmessage;
    }

}

DiscussionResponseCompound.RequiredProperties = ["pkiDiscussionID", "sDiscussionDescription", "bDiscussionClosed", "iDiscussionmessageCount", "iDiscussionmessageCountunread", "a_objDiscussionmembership", "a_objDiscussionmessage"];

/**
 * The unique ID of the Discussion
 * @member {Number} pkiDiscussionID
 */
DiscussionResponseCompound.prototype['pkiDiscussionID'] = undefined;

/**
 * The description of the Discussion
 * @member {String} sDiscussionDescription
 */
DiscussionResponseCompound.prototype['sDiscussionDescription'] = undefined;

/**
 * Whether if it's an closed
 * @member {Boolean} bDiscussionClosed
 */
DiscussionResponseCompound.prototype['bDiscussionClosed'] = undefined;

/**
 * The date the Discussion was last read
 * @member {String} dtDiscussionLastread
 */
DiscussionResponseCompound.prototype['dtDiscussionLastread'] = undefined;

/**
 * The count of Attachment.
 * @member {Number} iDiscussionmessageCount
 */
DiscussionResponseCompound.prototype['iDiscussionmessageCount'] = undefined;

/**
 * The count of Attachment.
 * @member {Number} iDiscussionmessageCountunread
 */
DiscussionResponseCompound.prototype['iDiscussionmessageCountunread'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CustomDiscussionconfigurationResponse} objDiscussionconfiguration
 */
DiscussionResponseCompound.prototype['objDiscussionconfiguration'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/DiscussionmembershipResponseCompound>} a_objDiscussionmembership
 */
DiscussionResponseCompound.prototype['a_objDiscussionmembership'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/DiscussionmessageResponseCompound>} a_objDiscussionmessage
 */
DiscussionResponseCompound.prototype['a_objDiscussionmessage'] = undefined;


// Implement DiscussionResponse interface:
/**
 * The unique ID of the Discussion
 * @member {Number} pkiDiscussionID
 */
DiscussionResponse.prototype['pkiDiscussionID'] = undefined;
/**
 * The description of the Discussion
 * @member {String} sDiscussionDescription
 */
DiscussionResponse.prototype['sDiscussionDescription'] = undefined;
/**
 * Whether if it's an closed
 * @member {Boolean} bDiscussionClosed
 */
DiscussionResponse.prototype['bDiscussionClosed'] = undefined;
/**
 * The date the Discussion was last read
 * @member {String} dtDiscussionLastread
 */
DiscussionResponse.prototype['dtDiscussionLastread'] = undefined;
/**
 * The count of Attachment.
 * @member {Number} iDiscussionmessageCount
 */
DiscussionResponse.prototype['iDiscussionmessageCount'] = undefined;
/**
 * The count of Attachment.
 * @member {Number} iDiscussionmessageCountunread
 */
DiscussionResponse.prototype['iDiscussionmessageCountunread'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CustomDiscussionconfigurationResponse} objDiscussionconfiguration
 */
DiscussionResponse.prototype['objDiscussionconfiguration'] = undefined;




export default DiscussionResponseCompound;
