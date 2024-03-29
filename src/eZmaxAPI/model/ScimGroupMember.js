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

/**
 * The ScimGroupMember model module.
 * @module eZmaxAPI/model/ScimGroupMember
 * @version 1.1.18
 */
class ScimGroupMember {
    /**
     * Constructs a new <code>ScimGroupMember</code>.
     * @alias module:eZmaxAPI/model/ScimGroupMember
     */
    constructor() { 
        
        ScimGroupMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScimGroupMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ScimGroupMember} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ScimGroupMember} The populated <code>ScimGroupMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimGroupMember();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('$ref')) {
                obj['$ref'] = ApiClient.convertToType(data['$ref'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScimGroupMember</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScimGroupMember</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }
        // ensure the json data is a string
        if (data['display'] && !(typeof data['display'] === 'string' || data['display'] instanceof String)) {
            throw new Error("Expected the field `display` to be a primitive type in the JSON string but got " + data['display']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['$ref'] && !(typeof data['$ref'] === 'string' || data['$ref'] instanceof String)) {
            throw new Error("Expected the field `$ref` to be a primitive type in the JSON string but got " + data['$ref']);
        }

        return true;
    }

/**
     * @return {String}
     */
    getValue() {
        return this.value;
    }

    /**
     * @param {String} value
     */
    setValue(value) {
        this['value'] = value;
    }
/**
     * @return {String}
     */
    getDisplay() {
        return this.display;
    }

    /**
     * @param {String} display
     */
    setDisplay(display) {
        this['display'] = display;
    }
/**
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {String} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * @return {String}
     */
    getRef() {
        return this.$ref;
    }

    /**
     * @param {String} ref
     */
    setRef(ref) {
        this['$ref'] = ref;
    }

}



/**
 * @member {String} value
 */
ScimGroupMember.prototype['value'] = undefined;

/**
 * @member {String} display
 */
ScimGroupMember.prototype['display'] = undefined;

/**
 * @member {String} type
 */
ScimGroupMember.prototype['type'] = undefined;

/**
 * @member {String} $ref
 */
ScimGroupMember.prototype['$ref'] = undefined;






export default ScimGroupMember;

