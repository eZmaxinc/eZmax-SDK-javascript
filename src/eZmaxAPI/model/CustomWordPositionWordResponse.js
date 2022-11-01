/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomWordPositionOccurenceResponse from './CustomWordPositionOccurenceResponse';

/**
 * The CustomWordPositionWordResponse model module.
 * @module eZmaxAPI/model/CustomWordPositionWordResponse
 * @version 1.1.14
 */
class CustomWordPositionWordResponse {
    /**
     * Constructs a new <code>CustomWordPositionWordResponse</code>.
     * A Word Position Object
     * @alias module:eZmaxAPI/model/CustomWordPositionWordResponse
     * @param sWord {String} The searched word
     * @param a_objWordPositionOccurence {Array.<module:eZmaxAPI/model/CustomWordPositionOccurenceResponse>} The found occurences for the seached word
     */
    constructor(sWord, a_objWordPositionOccurence) { 
        
        CustomWordPositionWordResponse.initialize(this, sWord, a_objWordPositionOccurence);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sWord, a_objWordPositionOccurence) { 
        obj['sWord'] = sWord;
        obj['a_objWordPositionOccurence'] = a_objWordPositionOccurence;
    }

    /**
     * Constructs a <code>CustomWordPositionWordResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomWordPositionWordResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomWordPositionWordResponse} The populated <code>CustomWordPositionWordResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomWordPositionWordResponse();

            if (data.hasOwnProperty('sWord')) {
                obj['sWord'] = ApiClient.convertToType(data['sWord'], 'String');
            }
            if (data.hasOwnProperty('a_objWordPositionOccurence')) {
                obj['a_objWordPositionOccurence'] = ApiClient.convertToType(data['a_objWordPositionOccurence'], [CustomWordPositionOccurenceResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The searched word
     * @return {String}
     */
    getSWord() {
        return this.sWord;
    }

    /**
     * Sets The searched word
     * @param {String} sWord The searched word
     */
    setSWord(sWord) {
        this['sWord'] = sWord;
    }
/**
     * Returns The found occurences for the seached word
     * @return {Array.<module:eZmaxAPI/model/CustomWordPositionOccurenceResponse>}
     */
    getAObjWordPositionOccurence() {
        return this.a_objWordPositionOccurence;
    }

    /**
     * Sets The found occurences for the seached word
     * @param {Array.<module:eZmaxAPI/model/CustomWordPositionOccurenceResponse>} a_objWordPositionOccurence The found occurences for the seached word
     */
    setAObjWordPositionOccurence(a_objWordPositionOccurence) {
        this['a_objWordPositionOccurence'] = a_objWordPositionOccurence;
    }

}

/**
 * The searched word
 * @member {String} sWord
 */
CustomWordPositionWordResponse.prototype['sWord'] = undefined;

/**
 * The found occurences for the seached word
 * @member {Array.<module:eZmaxAPI/model/CustomWordPositionOccurenceResponse>} a_objWordPositionOccurence
 */
CustomWordPositionWordResponse.prototype['a_objWordPositionOccurence'] = undefined;






export default CustomWordPositionWordResponse;

