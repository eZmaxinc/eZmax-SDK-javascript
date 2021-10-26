/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListpresentationRequest model module.
 * @module eZmaxAPI/model/ListpresentationRequest
 * @version 1.1.2
 */
class ListpresentationRequest {
    /**
     * Constructs a new <code>ListpresentationRequest</code>.
     * A Listpresentation element
     * @alias module:eZmaxAPI/model/ListpresentationRequest
     * @param sListpresentationDescription {String} A descriptive for the list presentation
     * @param sListpresentationFilter {String} The filter to apply to the request to limit results.
     * @param sListpresentationOrderby {String} The order by the user chose
     * @param a_sColumnName {Array.<String>} An array of column names that the user chose to bee visible
     * @param iListpresentationRowMax {Number} The maximum numbers of results to be returned
     * @param iListpresentationRowOffset {Number} The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     * @param bListpresentationDefault {Boolean} Set to true if the user chose this Listpresentation as the default one. A single element should be set to true
     */
    constructor(sListpresentationDescription, sListpresentationFilter, sListpresentationOrderby, a_sColumnName, iListpresentationRowMax, iListpresentationRowOffset, bListpresentationDefault) { 
        
        ListpresentationRequest.initialize(this, sListpresentationDescription, sListpresentationFilter, sListpresentationOrderby, a_sColumnName, iListpresentationRowMax, iListpresentationRowOffset, bListpresentationDefault);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sListpresentationDescription, sListpresentationFilter, sListpresentationOrderby, a_sColumnName, iListpresentationRowMax, iListpresentationRowOffset, bListpresentationDefault) { 
        obj['sListpresentationDescription'] = sListpresentationDescription;
        obj['sListpresentationFilter'] = sListpresentationFilter;
        obj['sListpresentationOrderby'] = sListpresentationOrderby;
        obj['a_sColumnName'] = a_sColumnName;
        obj['iListpresentationRowMax'] = iListpresentationRowMax;
        obj['iListpresentationRowOffset'] = iListpresentationRowOffset;
        obj['bListpresentationDefault'] = bListpresentationDefault;
    }

    /**
     * Constructs a <code>ListpresentationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ListpresentationRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ListpresentationRequest} The populated <code>ListpresentationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListpresentationRequest();

            if (data.hasOwnProperty('sListpresentationDescription')) {
                obj['sListpresentationDescription'] = ApiClient.convertToType(data['sListpresentationDescription'], 'String');
            }
            if (data.hasOwnProperty('sListpresentationFilter')) {
                obj['sListpresentationFilter'] = ApiClient.convertToType(data['sListpresentationFilter'], 'String');
            }
            if (data.hasOwnProperty('sListpresentationOrderby')) {
                obj['sListpresentationOrderby'] = ApiClient.convertToType(data['sListpresentationOrderby'], 'String');
            }
            if (data.hasOwnProperty('a_sColumnName')) {
                obj['a_sColumnName'] = ApiClient.convertToType(data['a_sColumnName'], ['String']);
            }
            if (data.hasOwnProperty('iListpresentationRowMax')) {
                obj['iListpresentationRowMax'] = ApiClient.convertToType(data['iListpresentationRowMax'], 'Number');
            }
            if (data.hasOwnProperty('iListpresentationRowOffset')) {
                obj['iListpresentationRowOffset'] = ApiClient.convertToType(data['iListpresentationRowOffset'], 'Number');
            }
            if (data.hasOwnProperty('bListpresentationDefault')) {
                obj['bListpresentationDefault'] = ApiClient.convertToType(data['bListpresentationDefault'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns A descriptive for the list presentation
     * @return {String}
     */
    getSListpresentationDescription() {
        return this.sListpresentationDescription;
    }

    /**
     * Sets A descriptive for the list presentation
     * @param {String} sListpresentationDescription A descriptive for the list presentation
     */
    setSListpresentationDescription(sListpresentationDescription) {
        this['sListpresentationDescription'] = sListpresentationDescription;
    }
/**
     * Returns The filter to apply to the request to limit results.
     * @return {String}
     */
    getSListpresentationFilter() {
        return this.sListpresentationFilter;
    }

    /**
     * Sets The filter to apply to the request to limit results.
     * @param {String} sListpresentationFilter The filter to apply to the request to limit results.
     */
    setSListpresentationFilter(sListpresentationFilter) {
        this['sListpresentationFilter'] = sListpresentationFilter;
    }
/**
     * Returns The order by the user chose
     * @return {String}
     */
    getSListpresentationOrderby() {
        return this.sListpresentationOrderby;
    }

    /**
     * Sets The order by the user chose
     * @param {String} sListpresentationOrderby The order by the user chose
     */
    setSListpresentationOrderby(sListpresentationOrderby) {
        this['sListpresentationOrderby'] = sListpresentationOrderby;
    }
/**
     * Returns An array of column names that the user chose to bee visible
     * @return {Array.<String>}
     */
    getASColumnName() {
        return this.a_sColumnName;
    }

    /**
     * Sets An array of column names that the user chose to bee visible
     * @param {Array.<String>} a_sColumnName An array of column names that the user chose to bee visible
     */
    setASColumnName(a_sColumnName) {
        this['a_sColumnName'] = a_sColumnName;
    }
/**
     * Returns The maximum numbers of results to be returned
     * @return {Number}
     */
    getIListpresentationRowMax() {
        return this.iListpresentationRowMax;
    }

    /**
     * Sets The maximum numbers of results to be returned
     * @param {Number} iListpresentationRowMax The maximum numbers of results to be returned
     */
    setIListpresentationRowMax(iListpresentationRowMax) {
        this['iListpresentationRowMax'] = iListpresentationRowMax;
    }
/**
     * Returns The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     * @return {Number}
     */
    getIListpresentationRowOffset() {
        return this.iListpresentationRowOffset;
    }

    /**
     * Sets The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     * @param {Number} iListpresentationRowOffset The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
     */
    setIListpresentationRowOffset(iListpresentationRowOffset) {
        this['iListpresentationRowOffset'] = iListpresentationRowOffset;
    }
/**
     * Returns Set to true if the user chose this Listpresentation as the default one. A single element should be set to true
     * @return {Boolean}
     */
    getBListpresentationDefault() {
        return this.bListpresentationDefault;
    }

    /**
     * Sets Set to true if the user chose this Listpresentation as the default one. A single element should be set to true
     * @param {Boolean} bListpresentationDefault Set to true if the user chose this Listpresentation as the default one. A single element should be set to true
     */
    setBListpresentationDefault(bListpresentationDefault) {
        this['bListpresentationDefault'] = bListpresentationDefault;
    }

}

/**
 * A descriptive for the list presentation
 * @member {String} sListpresentationDescription
 */
ListpresentationRequest.prototype['sListpresentationDescription'] = undefined;

/**
 * The filter to apply to the request to limit results.
 * @member {String} sListpresentationFilter
 */
ListpresentationRequest.prototype['sListpresentationFilter'] = undefined;

/**
 * The order by the user chose
 * @member {String} sListpresentationOrderby
 */
ListpresentationRequest.prototype['sListpresentationOrderby'] = undefined;

/**
 * An array of column names that the user chose to bee visible
 * @member {Array.<String>} a_sColumnName
 */
ListpresentationRequest.prototype['a_sColumnName'] = undefined;

/**
 * The maximum numbers of results to be returned
 * @member {Number} iListpresentationRowMax
 */
ListpresentationRequest.prototype['iListpresentationRowMax'] = undefined;

/**
 * The starting element from where to start retrieving the results. For example if you started at iRowOffset=0 and asked for iRowMax=100, to get the next 100 results, you could specify iRowOffset=100&iRowMax=100,
 * @member {Number} iListpresentationRowOffset
 */
ListpresentationRequest.prototype['iListpresentationRowOffset'] = undefined;

/**
 * Set to true if the user chose this Listpresentation as the default one. A single element should be set to true
 * @member {Boolean} bListpresentationDefault
 */
ListpresentationRequest.prototype['bListpresentationDefault'] = undefined;






export default ListpresentationRequest;

