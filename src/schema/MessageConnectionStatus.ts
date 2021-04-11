
/**
 * Message that indicates the status of the connection between the MQTT client and the broker. If connection status messages are used, the publishing topic is connection specific and must be specified in the connection_status_broker_topic parameter of the MQTT IS-05 transport parameters object. The client must publish this message with the RETAIN flag set, after opening the connection to the broker and before closing the connection normally. The client must also configure a retained Will Message indicating it is disconnected.
 */
export type MessageConnectionStatus = {
    
    /**
     * A fixed string showing this is a connection status message
     */
    message_type : string,
    
    /**
     * A boolean value showing whether the MQTT client is connected to the broker.
     */
    active : boolean
};