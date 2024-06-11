// This util file helps resolve links to drafted
// stories when fetching published stories from Storyblok.

function resolvePublishedStoryLinks(draftStories, publishedStories) {
  let resolvedLinksCount = 0;

  publishedStories.map((publishedStory) => {
    const draftStory = draftStories.find(
      (draftStory) => draftStory.uuid === publishedStory.uuid
    );

    if (draftStory) {
      publishedStory.content?.body?.forEach((publishedStoryBlok) => {
        publishedStoryBlok.cta?.forEach((publishedCta) => {
          if (publishedCta.linkUrl?.linktype === "story") {
            draftStory.content?.body?.forEach((draftStoryBlok) => {
              draftStoryBlok.cta?.forEach((draftCta) => {
                if (
                  draftCta.linkUrl?.linktype === "story" &&
                  draftCta.linkUrl.id === publishedCta.linkUrl.id
                ) {
                  publishedCta.linkUrl = draftCta.linkUrl;
                  console.log(
                    `- link ${draftCta.linkUrl.story.full_slug} resolved`
                  );
                  resolvedLinksCount++;
                }
              });
            });
          }
        });
      });
    }

    return publishedStory;
  });

  console.log(
    `${resolvedLinksCount} link${resolvedLinksCount > 1 ? "s" : ""} resolved 🔗`
  );
  return publishedStories;
}

function getLinkedStoryIds(stories) {
  const linkedStoryIds = stories.reduce((acc, curr) => {
    curr?.content?.body?.forEach((blok) => {
      blok?.cta?.forEach((cta) => {
        if (
          cta?.linkUrl?.linktype === "story" &&
          cta?.linkUrl?.cached_url &&
          !cta?.linkUrl?.story
        ) {
          console.log(`- link to draft story found in ${curr.full_slug}`);
          if (acc.indexOf(curr.uuid) === -1) acc.push(curr.uuid);
        }
      });
    });

    return acc;
  }, []);

  return linkedStoryIds;
}

export { getLinkedStoryIds, resolvePublishedStoryLinks };
