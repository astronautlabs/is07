
/**
 * Message that gets sent out when the device start a shutdown or reboot process
 */
export type MessageShutdownReboot = {
    
    /**
     * A fixed string showing this is a reboot or a shutdown message
     */
    message_type : string,
    
    /**
     * Object describing event identity
     */
    identity : {
        
        /**
         * ID of the source which identifies the emitter of the event
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
        creation_timestamp : string
    }
};