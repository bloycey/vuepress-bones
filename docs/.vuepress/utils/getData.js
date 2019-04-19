export const getSinglePageInfo = (allPages, urlPath) => {
    const singlePage = allPages.filter(
        page => page.path === urlPath
    );
    return singlePage[0].frontmatter;
}