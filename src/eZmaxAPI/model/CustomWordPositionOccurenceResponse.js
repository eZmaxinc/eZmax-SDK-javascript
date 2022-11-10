/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomWordPositionOccurenceResponse model module.
 * @module eZmaxAPI/model/CustomWordPositionOccurenceResponse
 * @version 1.1.16
 */
class CustomWordPositionOccurenceResponse {
    /**
     * Constructs a new <code>CustomWordPositionOccurenceResponse</code>.
     * A Word Position Object
     * @alias module:eZmaxAPI/model/CustomWordPositionOccurenceResponse
     */
    constructor() { 
        
        CustomWordPositionOccurenceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomWordPositionOccurenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomWordPositionOccurenceResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomWordPositionOccurenceResponse} The populated <code>CustomWordPositionOccurenceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomWordPositionOccurenceResponse();

            if (data.hasOwnProperty('iPage')) {
                obj['iPage'] = ApiClient.convertToType(data['iPage'], 'Number');
            }
            if (data.hasOwnProperty('iX')) {
                obj['iX'] = ApiClient.convertToType(data['iX'], 'Number');
            }
            if (data.hasOwnProperty('iY')) {
                obj['iY'] = ApiClient.convertToType(data['iY'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The page where the word occurence was found
     * minimum: 1
     * @return {Number}
     */
    getIPage() {
        return this.iPage;
    }

    /**
     * Sets The page where the word occurence was found
     * @param {Number} iPage The page where the word occurence was found
     */
    setIPage(iPage) {
        this['iPage'] = iPage;
    }
/**
     * Returns The X coordinate (Horizontal) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
     * minimum: 0
     * @return {Number}
     */
    getIX() {
        return this.iX;
    }

    /**
     * Sets The X coordinate (Horizontal) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
     * @param {Number} iX The X coordinate (Horizontal) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
     */
    setIX(iX) {
        this['iX'] = iX;
    }
/**
     * Returns The Y coordinate (Vertical) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
     * minimum: 0
     * @return {Number}
     */
    getIY() {
        return this.iY;
    }

    /**
     * Sets The Y coordinate (Vertical) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
     * @param {Number} iY The Y coordinate (Vertical) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
     */
    setIY(iY) {
        this['iY'] = iY;
    }

}

/**
 * The page where the word occurence was found
 * @member {Number} iPage
 */
CustomWordPositionOccurenceResponse.prototype['iPage'] = undefined;

/**
 * The X coordinate (Horizontal) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
 * @member {Number} iX
 */
CustomWordPositionOccurenceResponse.prototype['iX'] = undefined;

/**
 * The Y coordinate (Vertical) where the Word occurence was found.  Coordinate is calculated at 100dpi (dot per inch).
 * @member {Number} iY
 */
CustomWordPositionOccurenceResponse.prototype['iY'] = undefined;






export default CustomWordPositionOccurenceResponse;

