import { CommandHealth } from "./CommandHealth";
import { CommandSubscription } from "./CommandSubscription";
/**
 * Allowed commands (communication from the receiver to the sender)
 */
export type Command = CommandHealth | CommandSubscription;