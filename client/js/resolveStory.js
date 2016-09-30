import isMobile from './isMobile'

function resolveStory(story, file = "thumbnail.jpg") {
    if(/mp4$/.test(file) && isMobile()) {
        file += ".jpg";
    }
    return `../media/${story}/${file}`.replace(/\s+/g, "_");
}

export default resolveStory;