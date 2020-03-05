import { useJokes } from "./JokeDataProvider.js"
import { Joke } from "./Joke.js"

const contentTarget = document.querySelector(".jokeList")

export const JokeList = () => {
    const jokes = useJokes()

    for (const joke of jokes) {
        contentTarget.innerHTML += Joke(joke)
    }
}