import { EventCore } from "./EventCore";
import { Number } from "./Number";
/**
 * Describes an event with Number payload
 */
export type EventNumber = EventCore & {
    
    /**
     * Event type
     */
    event_type : string,
    payload : Number
};