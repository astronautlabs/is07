
/**
 * Message that gets sent out as the response to a health (heartbeat) command
 */
export type MessageHealth = {
    
    /**
     * A fixed string showing this is a health message
     */
    message_type : string,
    
    /**
     * Object describing event timing
     */
    timing : {
        
        /**
         * String formatted TAI timestamp (<seconds>:<nanoseconds>) indicating when the message was created
         */
        creation_timestamp : string,
        
        /**
         * String formatted TAI timestamp (<seconds>:<nanoseconds>) copied from the incoming health command
         */
        origin_timestamp : string
    }
};