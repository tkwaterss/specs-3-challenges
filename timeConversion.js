const humanReadable = (seconds) => {
    let hours = String(Math.floor(seconds/3600)).length === 1 ? `0${String(Math.floor(seconds/3600))}` : String(Math.floor(seconds/3600))
    let minutes = String(Math.floor((seconds - hours * 3600)/60)).length === 1 ? `0${String(Math.floor((seconds - hours * 3600)/60))}` : String(Math.floor((seconds - hours * 3600)/60))
    seconds = String(seconds - (minutes * 60) - (hours * 3600)).length === 1 ? `0${String(seconds - (minutes * 60) - (hours * 3600))}` : String(seconds - (minutes * 60) - (hours * 3600))
    return `${hours}:${minutes}:${seconds}`
}

console.log(humanReadable(59))