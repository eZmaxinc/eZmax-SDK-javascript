/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzmaxinvoicingEzsigndocumentResponse from './CustomEzmaxinvoicingEzsigndocumentResponse';
import CustomEzmaxinvoicingEzsignfolderResponse from './CustomEzmaxinvoicingEzsignfolderResponse';
import CustomEzmaxpricingResponse from './CustomEzmaxpricingResponse';
import EzmaxinvoicingagentResponseCompound from './EzmaxinvoicingagentResponseCompound';
import EzmaxinvoicingcontractResponseCompound from './EzmaxinvoicingcontractResponseCompound';
import EzmaxinvoicingsummaryexternalResponseCompound from './EzmaxinvoicingsummaryexternalResponseCompound';
import EzmaxinvoicingsummaryglobalResponseCompound from './EzmaxinvoicingsummaryglobalResponseCompound';
import EzmaxinvoicingsummaryinternalResponseCompound from './EzmaxinvoicingsummaryinternalResponseCompound';
import EzmaxinvoicinguserResponseCompound from './EzmaxinvoicinguserResponseCompound';

/**
 * The EzmaxinvoicingResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzmaxinvoicingResponseCompoundAllOf
 * @version 1.1.12
 */
class EzmaxinvoicingResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzmaxinvoicingResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzmaxinvoicingResponseCompoundAllOf
     * @param objEzmaxinvoicingcontract {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound} 
     * @param objEzmaxpricing {module:eZmaxAPI/model/CustomEzmaxpricingResponse} 
     * @param a_objEzmaxinvoicingsummaryglobal {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>} 
     * @param a_objEzmaxinvoicingsummaryexternal {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>} 
     * @param a_objEzmaxinvoicingsummaryinternal {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>} 
     * @param a_objEzmaxinvoicingagent {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>} 
     * @param a_objEzmaxinvoicinguser {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>} 
     * @param a_objEzmaxinvoicingezsignfolder {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>} 
     * @param a_objEzmaxinvoicingezsigndocument {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>} 
     */
    constructor(objEzmaxinvoicingcontract, objEzmaxpricing, a_objEzmaxinvoicingsummaryglobal, a_objEzmaxinvoicingsummaryexternal, a_objEzmaxinvoicingsummaryinternal, a_objEzmaxinvoicingagent, a_objEzmaxinvoicinguser, a_objEzmaxinvoicingezsignfolder, a_objEzmaxinvoicingezsigndocument) { 
        
        EzmaxinvoicingResponseCompoundAllOf.initialize(this, objEzmaxinvoicingcontract, objEzmaxpricing, a_objEzmaxinvoicingsummaryglobal, a_objEzmaxinvoicingsummaryexternal, a_objEzmaxinvoicingsummaryinternal, a_objEzmaxinvoicingagent, a_objEzmaxinvoicinguser, a_objEzmaxinvoicingezsignfolder, a_objEzmaxinvoicingezsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzmaxinvoicingcontract, objEzmaxpricing, a_objEzmaxinvoicingsummaryglobal, a_objEzmaxinvoicingsummaryexternal, a_objEzmaxinvoicingsummaryinternal, a_objEzmaxinvoicingagent, a_objEzmaxinvoicinguser, a_objEzmaxinvoicingezsignfolder, a_objEzmaxinvoicingezsigndocument) { 
        obj['objEzmaxinvoicingcontract'] = objEzmaxinvoicingcontract;
        obj['objEzmaxpricing'] = objEzmaxpricing;
        obj['a_objEzmaxinvoicingsummaryglobal'] = a_objEzmaxinvoicingsummaryglobal;
        obj['a_objEzmaxinvoicingsummaryexternal'] = a_objEzmaxinvoicingsummaryexternal;
        obj['a_objEzmaxinvoicingsummaryinternal'] = a_objEzmaxinvoicingsummaryinternal;
        obj['a_objEzmaxinvoicingagent'] = a_objEzmaxinvoicingagent;
        obj['a_objEzmaxinvoicinguser'] = a_objEzmaxinvoicinguser;
        obj['a_objEzmaxinvoicingezsignfolder'] = a_objEzmaxinvoicingezsignfolder;
        obj['a_objEzmaxinvoicingezsigndocument'] = a_objEzmaxinvoicingezsigndocument;
    }

    /**
     * Constructs a <code>EzmaxinvoicingResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingResponseCompoundAllOf} The populated <code>EzmaxinvoicingResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingResponseCompoundAllOf();

            if (data.hasOwnProperty('objEzmaxinvoicingcontract')) {
                obj['objEzmaxinvoicingcontract'] = EzmaxinvoicingcontractResponseCompound.constructFromObject(data['objEzmaxinvoicingcontract']);
            }
            if (data.hasOwnProperty('objEzmaxpricing')) {
                obj['objEzmaxpricing'] = CustomEzmaxpricingResponse.constructFromObject(data['objEzmaxpricing']);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryglobal')) {
                obj['a_objEzmaxinvoicingsummaryglobal'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryglobal'], [EzmaxinvoicingsummaryglobalResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryexternal')) {
                obj['a_objEzmaxinvoicingsummaryexternal'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryexternal'], [EzmaxinvoicingsummaryexternalResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryinternal')) {
                obj['a_objEzmaxinvoicingsummaryinternal'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryinternal'], [EzmaxinvoicingsummaryinternalResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingagent')) {
                obj['a_objEzmaxinvoicingagent'] = ApiClient.convertToType(data['a_objEzmaxinvoicingagent'], [EzmaxinvoicingagentResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicinguser')) {
                obj['a_objEzmaxinvoicinguser'] = ApiClient.convertToType(data['a_objEzmaxinvoicinguser'], [EzmaxinvoicinguserResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingezsignfolder')) {
                obj['a_objEzmaxinvoicingezsignfolder'] = ApiClient.convertToType(data['a_objEzmaxinvoicingezsignfolder'], [CustomEzmaxinvoicingEzsignfolderResponse]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingezsigndocument')) {
                obj['a_objEzmaxinvoicingezsigndocument'] = ApiClient.convertToType(data['a_objEzmaxinvoicingezsigndocument'], [CustomEzmaxinvoicingEzsigndocumentResponse]);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound}
     */
    getObjEzmaxinvoicingcontract() {
        return this.objEzmaxinvoicingcontract;
    }

    /**
     * @param {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound} objEzmaxinvoicingcontract
     */
    setObjEzmaxinvoicingcontract(objEzmaxinvoicingcontract) {
        this['objEzmaxinvoicingcontract'] = objEzmaxinvoicingcontract;
    }
/**
     * @return {module:eZmaxAPI/model/CustomEzmaxpricingResponse}
     */
    getObjEzmaxpricing() {
        return this.objEzmaxpricing;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomEzmaxpricingResponse} objEzmaxpricing
     */
    setObjEzmaxpricing(objEzmaxpricing) {
        this['objEzmaxpricing'] = objEzmaxpricing;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryglobal() {
        return this.a_objEzmaxinvoicingsummaryglobal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>} a_objEzmaxinvoicingsummaryglobal
     */
    setAObjEzmaxinvoicingsummaryglobal(a_objEzmaxinvoicingsummaryglobal) {
        this['a_objEzmaxinvoicingsummaryglobal'] = a_objEzmaxinvoicingsummaryglobal;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryexternal() {
        return this.a_objEzmaxinvoicingsummaryexternal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>} a_objEzmaxinvoicingsummaryexternal
     */
    setAObjEzmaxinvoicingsummaryexternal(a_objEzmaxinvoicingsummaryexternal) {
        this['a_objEzmaxinvoicingsummaryexternal'] = a_objEzmaxinvoicingsummaryexternal;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryinternal() {
        return this.a_objEzmaxinvoicingsummaryinternal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>} a_objEzmaxinvoicingsummaryinternal
     */
    setAObjEzmaxinvoicingsummaryinternal(a_objEzmaxinvoicingsummaryinternal) {
        this['a_objEzmaxinvoicingsummaryinternal'] = a_objEzmaxinvoicingsummaryinternal;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>}
     */
    getAObjEzmaxinvoicingagent() {
        return this.a_objEzmaxinvoicingagent;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>} a_objEzmaxinvoicingagent
     */
    setAObjEzmaxinvoicingagent(a_objEzmaxinvoicingagent) {
        this['a_objEzmaxinvoicingagent'] = a_objEzmaxinvoicingagent;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>}
     */
    getAObjEzmaxinvoicinguser() {
        return this.a_objEzmaxinvoicinguser;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>} a_objEzmaxinvoicinguser
     */
    setAObjEzmaxinvoicinguser(a_objEzmaxinvoicinguser) {
        this['a_objEzmaxinvoicinguser'] = a_objEzmaxinvoicinguser;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>}
     */
    getAObjEzmaxinvoicingezsignfolder() {
        return this.a_objEzmaxinvoicingezsignfolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>} a_objEzmaxinvoicingezsignfolder
     */
    setAObjEzmaxinvoicingezsignfolder(a_objEzmaxinvoicingezsignfolder) {
        this['a_objEzmaxinvoicingezsignfolder'] = a_objEzmaxinvoicingezsignfolder;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>}
     */
    getAObjEzmaxinvoicingezsigndocument() {
        return this.a_objEzmaxinvoicingezsigndocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>} a_objEzmaxinvoicingezsigndocument
     */
    setAObjEzmaxinvoicingezsigndocument(a_objEzmaxinvoicingezsigndocument) {
        this['a_objEzmaxinvoicingezsigndocument'] = a_objEzmaxinvoicingezsigndocument;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound} objEzmaxinvoicingcontract
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['objEzmaxinvoicingcontract'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CustomEzmaxpricingResponse} objEzmaxpricing
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['objEzmaxpricing'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>} a_objEzmaxinvoicingsummaryglobal
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicingsummaryglobal'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>} a_objEzmaxinvoicingsummaryexternal
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicingsummaryexternal'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>} a_objEzmaxinvoicingsummaryinternal
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicingsummaryinternal'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>} a_objEzmaxinvoicingagent
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicingagent'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>} a_objEzmaxinvoicinguser
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicinguser'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>} a_objEzmaxinvoicingezsignfolder
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicingezsignfolder'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>} a_objEzmaxinvoicingezsigndocument
 */
EzmaxinvoicingResponseCompoundAllOf.prototype['a_objEzmaxinvoicingezsigndocument'] = undefined;






export default EzmaxinvoicingResponseCompoundAllOf;

