
/**
 * Describes external Receiver transport parameters defined for IS-07 NMOS Event & Tally specification. The constraints in this schema are minimum constraints, but may be further constrained at the constraints endpoint.
 */
export type ReceiverTransportParamsExt = {
    
    /**
     * the URL for the Events API resource for the associated source
     */
    ext_is_07_rest_api_url? : string | null,
    
    /**
     * ID of the related source
     */
    ext_is_07_source_id? : string | null
};