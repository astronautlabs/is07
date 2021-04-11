
/**
 * Message that gets sent out when the source state changes
 */
export type EventCore = {
    
    /**
     * A fixed string showing this is a state message
     */
    message_type : string,
    
    /**
     * Object describing event identity
     */
    identity : {
        
        /**
         * ID of the source that holds the state that has changed
         */
        source_id : string,
        
        /**
         * ID of the flow carrying the message
         */
        flow_id? : string
    },
    
    /**
     * Object describing event timing
     */
    timing : {
        
        /**
         * String formatted TAI timestamp (<seconds>:<nanoseconds>) indicating when the message was created
         */
        creation_timestamp : string,
        
        /**
         * String formatted TAI timestamp (<seconds>:<nanoseconds>) indicating when the message that triggered this message (if any) was created
         */
        origin_timestamp? : string,
        
        /**
         * String formatted TAI timestamp (<seconds>:<nanoseconds>) indicating when the state change described in the event took or will take place
         */
        action_timestamp? : string
    }
};