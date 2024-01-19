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

/**
 * The CustomDiscussionconfigurationResponse model module.
 * @module eZmaxAPI/model/CustomDiscussionconfigurationResponse
 * @version 1.2.0
 */
class CustomDiscussionconfigurationResponse {
    /**
     * Constructs a new <code>CustomDiscussionconfigurationResponse</code>.
     * A Custom Discussionconfiguration Object
     * @alias module:eZmaxAPI/model/CustomDiscussionconfigurationResponse
     * @param bDiscussionconfigurationCompletehistorywhenadded {Boolean} If the added Discussionmembership will have access to the entire history or not
     * @param bDiscussionconfigurationCreateallowed {Boolean} If the the creation of the Discussion is allowed or not
     * @param bDiscussionconfigurationDeleteallowed {Boolean} If the the destruction of the Discussion is allowed or not
     * @param bDiscussionconfigurationDeletediscussionmessageallowed {Boolean} If the the destruction of the Discussionmessage is allowed or not
     * @param bDiscussionconfigurationEditdiscussionmessageallowed {Boolean} If the the creation of the Discussionmessage is allowed or not
     */
    constructor(bDiscussionconfigurationCompletehistorywhenadded, bDiscussionconfigurationCreateallowed, bDiscussionconfigurationDeleteallowed, bDiscussionconfigurationDeletediscussionmessageallowed, bDiscussionconfigurationEditdiscussionmessageallowed) { 
        
        CustomDiscussionconfigurationResponse.initialize(this, bDiscussionconfigurationCompletehistorywhenadded, bDiscussionconfigurationCreateallowed, bDiscussionconfigurationDeleteallowed, bDiscussionconfigurationDeletediscussionmessageallowed, bDiscussionconfigurationEditdiscussionmessageallowed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bDiscussionconfigurationCompletehistorywhenadded, bDiscussionconfigurationCreateallowed, bDiscussionconfigurationDeleteallowed, bDiscussionconfigurationDeletediscussionmessageallowed, bDiscussionconfigurationEditdiscussionmessageallowed) { 
        obj['bDiscussionconfigurationCompletehistorywhenadded'] = bDiscussionconfigurationCompletehistorywhenadded;
        obj['bDiscussionconfigurationCreateallowed'] = bDiscussionconfigurationCreateallowed;
        obj['bDiscussionconfigurationDeleteallowed'] = bDiscussionconfigurationDeleteallowed;
        obj['bDiscussionconfigurationDeletediscussionmessageallowed'] = bDiscussionconfigurationDeletediscussionmessageallowed;
        obj['bDiscussionconfigurationEditdiscussionmessageallowed'] = bDiscussionconfigurationEditdiscussionmessageallowed;
    }

    /**
     * Constructs a <code>CustomDiscussionconfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomDiscussionconfigurationResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomDiscussionconfigurationResponse} The populated <code>CustomDiscussionconfigurationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomDiscussionconfigurationResponse();

            if (data.hasOwnProperty('bDiscussionconfigurationCompletehistorywhenadded')) {
                obj['bDiscussionconfigurationCompletehistorywhenadded'] = ApiClient.convertToType(data['bDiscussionconfigurationCompletehistorywhenadded'], 'Boolean');
            }
            if (data.hasOwnProperty('bDiscussionconfigurationCreateallowed')) {
                obj['bDiscussionconfigurationCreateallowed'] = ApiClient.convertToType(data['bDiscussionconfigurationCreateallowed'], 'Boolean');
            }
            if (data.hasOwnProperty('bDiscussionconfigurationDeleteallowed')) {
                obj['bDiscussionconfigurationDeleteallowed'] = ApiClient.convertToType(data['bDiscussionconfigurationDeleteallowed'], 'Boolean');
            }
            if (data.hasOwnProperty('bDiscussionconfigurationDeletediscussionmessageallowed')) {
                obj['bDiscussionconfigurationDeletediscussionmessageallowed'] = ApiClient.convertToType(data['bDiscussionconfigurationDeletediscussionmessageallowed'], 'Boolean');
            }
            if (data.hasOwnProperty('bDiscussionconfigurationEditdiscussionmessageallowed')) {
                obj['bDiscussionconfigurationEditdiscussionmessageallowed'] = ApiClient.convertToType(data['bDiscussionconfigurationEditdiscussionmessageallowed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomDiscussionconfigurationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomDiscussionconfigurationResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomDiscussionconfigurationResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns If the added Discussionmembership will have access to the entire history or not
     * @return {Boolean}
     */
    getBDiscussionconfigurationCompletehistorywhenadded() {
        return this.bDiscussionconfigurationCompletehistorywhenadded;
    }

    /**
     * Sets If the added Discussionmembership will have access to the entire history or not
     * @param {Boolean} bDiscussionconfigurationCompletehistorywhenadded If the added Discussionmembership will have access to the entire history or not
     */
    setBDiscussionconfigurationCompletehistorywhenadded(bDiscussionconfigurationCompletehistorywhenadded) {
        this['bDiscussionconfigurationCompletehistorywhenadded'] = bDiscussionconfigurationCompletehistorywhenadded;
    }
/**
     * Returns If the the creation of the Discussion is allowed or not
     * @return {Boolean}
     */
    getBDiscussionconfigurationCreateallowed() {
        return this.bDiscussionconfigurationCreateallowed;
    }

    /**
     * Sets If the the creation of the Discussion is allowed or not
     * @param {Boolean} bDiscussionconfigurationCreateallowed If the the creation of the Discussion is allowed or not
     */
    setBDiscussionconfigurationCreateallowed(bDiscussionconfigurationCreateallowed) {
        this['bDiscussionconfigurationCreateallowed'] = bDiscussionconfigurationCreateallowed;
    }
/**
     * Returns If the the destruction of the Discussion is allowed or not
     * @return {Boolean}
     */
    getBDiscussionconfigurationDeleteallowed() {
        return this.bDiscussionconfigurationDeleteallowed;
    }

    /**
     * Sets If the the destruction of the Discussion is allowed or not
     * @param {Boolean} bDiscussionconfigurationDeleteallowed If the the destruction of the Discussion is allowed or not
     */
    setBDiscussionconfigurationDeleteallowed(bDiscussionconfigurationDeleteallowed) {
        this['bDiscussionconfigurationDeleteallowed'] = bDiscussionconfigurationDeleteallowed;
    }
/**
     * Returns If the the destruction of the Discussionmessage is allowed or not
     * @return {Boolean}
     */
    getBDiscussionconfigurationDeletediscussionmessageallowed() {
        return this.bDiscussionconfigurationDeletediscussionmessageallowed;
    }

    /**
     * Sets If the the destruction of the Discussionmessage is allowed or not
     * @param {Boolean} bDiscussionconfigurationDeletediscussionmessageallowed If the the destruction of the Discussionmessage is allowed or not
     */
    setBDiscussionconfigurationDeletediscussionmessageallowed(bDiscussionconfigurationDeletediscussionmessageallowed) {
        this['bDiscussionconfigurationDeletediscussionmessageallowed'] = bDiscussionconfigurationDeletediscussionmessageallowed;
    }
/**
     * Returns If the the creation of the Discussionmessage is allowed or not
     * @return {Boolean}
     */
    getBDiscussionconfigurationEditdiscussionmessageallowed() {
        return this.bDiscussionconfigurationEditdiscussionmessageallowed;
    }

    /**
     * Sets If the the creation of the Discussionmessage is allowed or not
     * @param {Boolean} bDiscussionconfigurationEditdiscussionmessageallowed If the the creation of the Discussionmessage is allowed or not
     */
    setBDiscussionconfigurationEditdiscussionmessageallowed(bDiscussionconfigurationEditdiscussionmessageallowed) {
        this['bDiscussionconfigurationEditdiscussionmessageallowed'] = bDiscussionconfigurationEditdiscussionmessageallowed;
    }

}

CustomDiscussionconfigurationResponse.RequiredProperties = ["bDiscussionconfigurationCompletehistorywhenadded", "bDiscussionconfigurationCreateallowed", "bDiscussionconfigurationDeleteallowed", "bDiscussionconfigurationDeletediscussionmessageallowed", "bDiscussionconfigurationEditdiscussionmessageallowed"];

/**
 * If the added Discussionmembership will have access to the entire history or not
 * @member {Boolean} bDiscussionconfigurationCompletehistorywhenadded
 */
CustomDiscussionconfigurationResponse.prototype['bDiscussionconfigurationCompletehistorywhenadded'] = undefined;

/**
 * If the the creation of the Discussion is allowed or not
 * @member {Boolean} bDiscussionconfigurationCreateallowed
 */
CustomDiscussionconfigurationResponse.prototype['bDiscussionconfigurationCreateallowed'] = undefined;

/**
 * If the the destruction of the Discussion is allowed or not
 * @member {Boolean} bDiscussionconfigurationDeleteallowed
 */
CustomDiscussionconfigurationResponse.prototype['bDiscussionconfigurationDeleteallowed'] = undefined;

/**
 * If the the destruction of the Discussionmessage is allowed or not
 * @member {Boolean} bDiscussionconfigurationDeletediscussionmessageallowed
 */
CustomDiscussionconfigurationResponse.prototype['bDiscussionconfigurationDeletediscussionmessageallowed'] = undefined;

/**
 * If the the creation of the Discussionmessage is allowed or not
 * @member {Boolean} bDiscussionconfigurationEditdiscussionmessageallowed
 */
CustomDiscussionconfigurationResponse.prototype['bDiscussionconfigurationEditdiscussionmessageallowed'] = undefined;






export default CustomDiscussionconfigurationResponse;

