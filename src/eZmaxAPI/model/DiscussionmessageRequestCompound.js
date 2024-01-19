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
import DiscussionmessageRequest from './DiscussionmessageRequest';

/**
 * The DiscussionmessageRequestCompound model module.
 * @module eZmaxAPI/model/DiscussionmessageRequestCompound
 * @version 1.2.0
 */
class DiscussionmessageRequestCompound {
    /**
     * Constructs a new <code>DiscussionmessageRequestCompound</code>.
     * A Discussionmessage Object and children
     * @alias module:eZmaxAPI/model/DiscussionmessageRequestCompound
     * @implements module:eZmaxAPI/model/DiscussionmessageRequest
     * @param fkiDiscussionID {Number} The unique ID of the Discussion
     * @param tDiscussionmessageContent {String} The content of the Discussionmessage
     */
    constructor(fkiDiscussionID, tDiscussionmessageContent) { 
        DiscussionmessageRequest.initialize(this, fkiDiscussionID, tDiscussionmessageContent);
        DiscussionmessageRequestCompound.initialize(this, fkiDiscussionID, tDiscussionmessageContent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiDiscussionID, tDiscussionmessageContent) { 
        obj['fkiDiscussionID'] = fkiDiscussionID;
        obj['tDiscussionmessageContent'] = tDiscussionmessageContent;
    }

    /**
     * Constructs a <code>DiscussionmessageRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DiscussionmessageRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DiscussionmessageRequestCompound} The populated <code>DiscussionmessageRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscussionmessageRequestCompound();
            DiscussionmessageRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiDiscussionmessageID')) {
                obj['pkiDiscussionmessageID'] = ApiClient.convertToType(data['pkiDiscussionmessageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiDiscussionID')) {
                obj['fkiDiscussionID'] = ApiClient.convertToType(data['fkiDiscussionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiDiscussionmembershipIDActionrequired')) {
                obj['fkiDiscussionmembershipIDActionrequired'] = ApiClient.convertToType(data['fkiDiscussionmembershipIDActionrequired'], 'Number');
            }
            if (data.hasOwnProperty('tDiscussionmessageContent')) {
                obj['tDiscussionmessageContent'] = ApiClient.convertToType(data['tDiscussionmessageContent'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscussionmessageRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscussionmessageRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscussionmessageRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tDiscussionmessageContent'] && !(typeof data['tDiscussionmessageContent'] === 'string' || data['tDiscussionmessageContent'] instanceof String)) {
            throw new Error("Expected the field `tDiscussionmessageContent` to be a primitive type in the JSON string but got " + data['tDiscussionmessageContent']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Discussionmessage
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getPkiDiscussionmessageID() {
        return this.pkiDiscussionmessageID;
    }

    /**
     * Sets The unique ID of the Discussionmessage
     * @param {Number} pkiDiscussionmessageID The unique ID of the Discussionmessage
     */
    setPkiDiscussionmessageID(pkiDiscussionmessageID) {
        this['pkiDiscussionmessageID'] = pkiDiscussionmessageID;
    }
/**
     * Returns The unique ID of the Discussion
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getFkiDiscussionID() {
        return this.fkiDiscussionID;
    }

    /**
     * Sets The unique ID of the Discussion
     * @param {Number} fkiDiscussionID The unique ID of the Discussion
     */
    setFkiDiscussionID(fkiDiscussionID) {
        this['fkiDiscussionID'] = fkiDiscussionID;
    }
/**
     * Returns The unique ID of the Discussionmembership
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getFkiDiscussionmembershipIDActionrequired() {
        return this.fkiDiscussionmembershipIDActionrequired;
    }

    /**
     * Sets The unique ID of the Discussionmembership
     * @param {Number} fkiDiscussionmembershipIDActionrequired The unique ID of the Discussionmembership
     */
    setFkiDiscussionmembershipIDActionrequired(fkiDiscussionmembershipIDActionrequired) {
        this['fkiDiscussionmembershipIDActionrequired'] = fkiDiscussionmembershipIDActionrequired;
    }
/**
     * Returns The content of the Discussionmessage
     * @return {String}
     */
    getTDiscussionmessageContent() {
        return this.tDiscussionmessageContent;
    }

    /**
     * Sets The content of the Discussionmessage
     * @param {String} tDiscussionmessageContent The content of the Discussionmessage
     */
    setTDiscussionmessageContent(tDiscussionmessageContent) {
        this['tDiscussionmessageContent'] = tDiscussionmessageContent;
    }

}

DiscussionmessageRequestCompound.RequiredProperties = ["fkiDiscussionID", "tDiscussionmessageContent"];

/**
 * The unique ID of the Discussionmessage
 * @member {Number} pkiDiscussionmessageID
 */
DiscussionmessageRequestCompound.prototype['pkiDiscussionmessageID'] = undefined;

/**
 * The unique ID of the Discussion
 * @member {Number} fkiDiscussionID
 */
DiscussionmessageRequestCompound.prototype['fkiDiscussionID'] = undefined;

/**
 * The unique ID of the Discussionmembership
 * @member {Number} fkiDiscussionmembershipIDActionrequired
 */
DiscussionmessageRequestCompound.prototype['fkiDiscussionmembershipIDActionrequired'] = undefined;

/**
 * The content of the Discussionmessage
 * @member {String} tDiscussionmessageContent
 */
DiscussionmessageRequestCompound.prototype['tDiscussionmessageContent'] = undefined;


// Implement DiscussionmessageRequest interface:
/**
 * The unique ID of the Discussionmessage
 * @member {Number} pkiDiscussionmessageID
 */
DiscussionmessageRequest.prototype['pkiDiscussionmessageID'] = undefined;
/**
 * The unique ID of the Discussion
 * @member {Number} fkiDiscussionID
 */
DiscussionmessageRequest.prototype['fkiDiscussionID'] = undefined;
/**
 * The unique ID of the Discussionmembership
 * @member {Number} fkiDiscussionmembershipIDActionrequired
 */
DiscussionmessageRequest.prototype['fkiDiscussionmembershipIDActionrequired'] = undefined;
/**
 * The content of the Discussionmessage
 * @member {String} tDiscussionmessageContent
 */
DiscussionmessageRequest.prototype['tDiscussionmessageContent'] = undefined;




export default DiscussionmessageRequestCompound;

