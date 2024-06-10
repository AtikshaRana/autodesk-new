const buildFolders = ["us", "gb", "au", "jp", "de", "fr"];

let pattern = buildFolders.map((val) => `${val}/|/${val}/`).join("|");
pattern = `^default/|/default/${pattern}`;

const locale = new RegExp(pattern);

function addPrecedingSlash(str) {
  if (!str) {
    console.warn(
      `WARNING: String in addPrecedingSlash was null.  Check for bad data.`,
    );
    return "/";
  }
  const trimmed = str.trim();
  const isAbsoluteUrl = ["http://", "https://", "mailto:", "#", "tel:"].some(
    (prefix) => trimmed.startsWith(prefix),
  );
  return isAbsoluteUrl || trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function removeTrailingSlash(uri) {
  if (!uri) {
    return "";
  }
  return uri.endsWith("/") ? uri.slice(0, -1) : uri;
}

function addPrecedingAndRemoveTrailingSlashes(str) {
  return addPrecedingSlash(removeTrailingSlash(str));
}

function formatLocalizedLink(link) {
  return link.replace(locale, "/");
}

// Parse a Wistia media URL and return '#wistia_{videoId}'
// Supported URLs:
//   - https://autodesk-construction.wistia.com/medias/{videoId}/
function parseWistiaUrl(url) {
  const regex = /\/medias\/([^\/]+)/;
  const match = url.match(regex);
  if (match && match.length > 1) {
    return `#wistia_${match[1]}`;
  } else {
    return null;
  }
}

function multilinkToUrl({ url, linktype, story } = {}, isInEditor = false) {
  // Handle Wistia URLs
  if (url?.includes("wistia.com")) url = parseWistiaUrl(url);

  // Use story.url or '#' if url is undefined
  url = url || story?.url || "#";
  const formattedUrl = url.startsWith("www")
    ? addPrecedingAndRemoveTrailingSlashes("http://" + url)
    : addPrecedingAndRemoveTrailingSlashes(url);
  const isStory = linktype === "story";
  const sbUrl =
    isStory && story && story.url
      ? addPrecedingAndRemoveTrailingSlashes(story.url)
      : null;

  return (
    formatLocalizedLink(
      isStory && sbUrl
        ? isInEditor
          ? `/editor/?path=${sbUrl}`
          : sbUrl
        : formattedUrl,
    ) || ""
  );
}

export { multilinkToUrl };
