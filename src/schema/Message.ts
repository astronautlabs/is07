import { Event } from "./Event";
import { MessageConnectionStatus } from "./MessageConnectionStatus";
import { MessageHealth } from "./MessageHealth";
import { MessageShutdownReboot } from "./MessageShutdownReboot";
/**
 * Allowed messages (communication from the sender to the receiver)
 */
export type Message = Event | MessageConnectionStatus | MessageHealth | MessageShutdownReboot;