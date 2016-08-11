function resolveStory(story, file = "thumbnail.jpg") {
    return `../media/${story}/${file}`.replace(/\s+/g, "_");
}

export default resolveStory;