getRandomMeal()

async function getRandomMeal(){
    const randomMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

    console.log(randomMeal)
}

async function getMealById(id) {
    const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

}

async function getMealsBySeatch(term) {
    const meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)

}