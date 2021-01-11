/* ---------------------------------------------- */
/*            CODE EXPLAINED TUTORIALS            */
/*         www.youtube.com/CodeExplained          */
/* ---------------------------------------------- */
const country_name = document.querySelector("IN")
const total_cases = document.querySelector(".total_cases .value")
const new_total_cases = document.querySelector(".total_cases .new-value")
const recovered = document.querySelector("recovered .value")
const new_recovered = document.querySelector("new_recovered .value")
const deaths = document.querySelector("deaths .value")
const new_deaths = document.querySelector("new_deaths .value")

let country_code = function geoplugin_countryCode() {};
//console.log(country_code);
let user_country;
if(country_code = 'IN'){
	user_country = "India";
}
console.log(user_country);
let app_data = [],
	cases_list =[],
	recovered_list =[],
	death_list = [],
	dates_list = [];
	/* ---------------------------------------------- */
/*                API URL AND KEY                 */
/* ---------------------------------------------- */
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e108e5d99emsh48509a9db16048bp149fdcjsn96811bc8f447",
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
