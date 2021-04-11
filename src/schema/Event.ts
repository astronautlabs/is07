import { EventBoolean } from "./EventBoolean";
import { EventNumber } from "./EventNumber";
import { EventString } from "./EventString";
import { EventObject } from "./EventObject";
/**
 * Message that gets sent out when the source state changes
 */
export type Event = EventBoolean | EventNumber | EventString | EventObject;