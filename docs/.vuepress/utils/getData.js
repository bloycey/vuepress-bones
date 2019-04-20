export const getSinglePageInfo = (allPages, urlPath) => {
    const singlePage = allPages.filter(
        page => page.path === urlPath
    );
    return singlePage[0].frontmatter;
}

export const getPagesArray = (allPages, urlPath) => {
    const pagesArray = allPages.filter(
        page => page.path.includes(urlPath)
    )
    return pagesArray;
}

