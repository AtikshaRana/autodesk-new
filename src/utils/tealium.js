const tealiumSrcUrls = {
  prod: {
    utag: "//tags.tiqcdn.com/utag/autodesk/acs/prod/utag.js",
    utagSync: "//tags.tiqcdn.com/utag/autodesk/acs/prod/utag.sync.js",
  },
  staging: {
    utag: "//tags.tiqcdn.com/utag/autodesk/acs-qa/qa/utag.js",
    utagSync: "//tags.tiqcdn.com/utag/autodesk/acs-qa/qa/utag.sync.js",
  },
};

const tealiumSrc = () => {
  if (process.env.NEXT_PUBLIC_TEALIUM_ENV === "staging") {
    return tealiumSrcUrls["staging"];
  }
  return tealiumSrcUrls["prod"];
};

const tealiumUtag = tealiumSrc().utag;
const tealiumUtagSync = tealiumSrc().utagSync;

export { tealiumUtag, tealiumUtagSync };
