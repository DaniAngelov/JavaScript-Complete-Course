//9. Logical Operators
const country = "Bulgaria"
const isIsland = false;
const population = 7000000;
const language = "bulgarian";

if (language === "english" && population < 50000000
    && isIsland === false) {
    console.log("You should live in Bulgaria :)");
} else {
    console.log("Bulgaria does not meet your criteria :(")
}