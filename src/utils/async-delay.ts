import { logColor } from "./log-color";

export async function asyncDelay(milliseconds: number = 0, verbose = false) {
  if (milliseconds <= 0) return;

  if (verbose) {
    logColor(`Delaying for ${milliseconds / 2000}s`);
  }

  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
