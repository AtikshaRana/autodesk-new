function triggerMutinyConversion(conversionName) {
  if (!window) return;

  window.mutiny = window?.mutiny || [];
  window?.mutiny?.client?.trackConversion({ name: conversionName });
}

function composeTrackingAttr({ analytics, product }) {
  const attributes = {};

  if (analytics) attributes["data-analytics"] = analytics;
  attributes["data-product"] = product || "Generic";

  return attributes;
}

export { composeTrackingAttr, triggerMutinyConversion };
