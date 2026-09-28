const NAV_TIMEOUT_MS = 30_000;
const SETTLE_MS = 1_500;

/**
 * Navigates and waits for the `load` event rather than Playwright's `networkidle`.
 * Real-world sites (analytics beacons, chat widgets, ad pixels, WordPress heartbeat)
 * routinely keep at least one request in flight forever, so `networkidle` reliably
 * times out on live sites even though the page has visually finished loading. `load`
 * plus a fixed settle delay is far more robust for this tool's purposes.
 */
const RETRYABLE_ERROR_PATTERN = /ERR_NETWORK_CHANGED|ERR_NAME_NOT_RESOLVED|ERR_CONNECTION_(RESET|REFUSED|CLOSED)|ERR_TIMED_OUT/;

export async function gotoSettled(page, url, { timeout = NAV_TIMEOUT_MS, settleMs = SETTLE_MS, retries = 2 } = {}) {
  for (let attempt = 0; ; attempt++) {
    try {
      const response = await page.goto(url, { waitUntil: 'load', timeout });
      await page.waitForTimeout(settleMs);
      return response;
    } catch (error) {
      const retryable = RETRYABLE_ERROR_PATTERN.test(error.message);
      if (!retryable || attempt >= retries) throw error;
      await page.waitForTimeout(1000 * (attempt + 1));
    }
  }
}
