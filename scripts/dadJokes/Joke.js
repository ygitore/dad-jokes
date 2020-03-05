export const Joke = joke => {
    return `
        <section class="joke">
            <header class="joke__question">
                ${joke.question}
            </header>
            <p class="joke__answer">
                ${joke.answer}
            </p>
        </section>
    `
}