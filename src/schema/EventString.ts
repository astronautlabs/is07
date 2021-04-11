import { EventCore } from "./EventCore";
/**
 * Describes an event with string payload
 */
export type EventString = EventCore & {
    
    /**
     * Event type
     */
    event_type : string,
    
    /**
     * String payload
     */
    payload : {
        
        /**
         * String value
         */
        value : string
    }
};