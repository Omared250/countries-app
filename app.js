async function getCountries() {
    const url = "https://restcountries.eu/rest/v2/lang/en";

    const response = await fetch(url);
    const { countries } = await response.json();
    return countries;
}

export {getCountries};