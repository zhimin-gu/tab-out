function getDuplicateTabIds(tabs) {
  const seenUrls = new Set();
  const duplicateIds = [];

  for (const tab of tabs) {
    if (!tab || !tab.url) continue;

    if (seenUrls.has(tab.url)) {
      if (tab.id !== undefined) {
        duplicateIds.push(tab.id);
      }
    } else {
      seenUrls.add(tab.url);
    }
  }

  return duplicateIds;
}
