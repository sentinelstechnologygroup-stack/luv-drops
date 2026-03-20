const isNode = typeof window === "undefined";

const fallbackStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const storage = isNode ? fallbackStorage : window.localStorage;

const toSnakeCase = (str) => str.replace(/([A-Z])/g, "_$1").toLowerCase();

const getAppParamValue = (
  paramName,
  { defaultValue = undefined, removeFromUrl = false } = {}
) => {
  if (isNode) return defaultValue ?? null;

  const storageKey = `app_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (removeFromUrl) {
    urlParams.delete(paramName);
    const newUrl = `${window.location.pathname}${
      urlParams.toString() ? `?${urlParams.toString()}` : ""
    }${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  if (searchParam) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  const storedValue = storage.getItem(storageKey);
  return storedValue || null;
};

export const appParams = {
  ref: getAppParamValue("ref"),
  source: getAppParamValue("source"),
  campaign: getAppParamValue("campaign"),
  fromUrl: isNode ? "" : window.location.href,
};