//10.The switch Statement

const language = "bulgarian";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "english":
        console.log("3rd place in number of native speakers");
        break;
    case "hindi":
        console.log("4th place in number of native speakers");
        break;
    case "arabic":
        console.log("5th place in number of native speakers");
        break;
    default:
        console.log("Great language too :D");
}