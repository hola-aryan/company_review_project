const searchCompName = document.getElementById('searchCompName');
console.log("Script 2 running");
const localStorageDataList = document.getElementById('localStorageData');
const myForm2 = document.getElementById('my-form-2');

myForm2.addEventListener('submit', searchReview);

function searchReview(e) {
console.log("search function running");

  e.preventDefault();

  // Get user input values
  const searchCompNames = searchCompName.value;

  // Simple client-side validation
  if (!searchCompNames) {
    alert('Add Company Name Before Submitting');
    return;
  }
 
  localStorageDataList.innerHTML = ""; // Clear previous data
  axios.get(`http://localhost:2500/reviewsController/get-reviews?search=${searchCompNames}`)
    .then(res => {
      console.log(res);
      let avgrating = 0;

        for (let i = 0; i < res.data.review.length; i++) {
          showAllUsers(res.data.review[i]);
          avgrating += res.data.review[i].rating;
        }
        avgrating/=res.data.review.length;
        showAvgRating("Average Rating = "+avgrating+"★");
    })
    .catch(err => console.log("Error fetching user data in window add event listener"))
}

function showAllUsers(print) {
    // Show all users running
    const content = document.createElement("h3");
    content.textContent = print.compName+" => "+ print.pros+" => "+ print.cons;
    // tableDataBuy.addEventListener('click', () => deleteElement(print.id));
    localStorageDataList.appendChild(content);
  }
function showAvgRating(print){
    const content = document.createElement("h3");
    content.textContent = print;
    localStorageDataList.appendChild(content);
    
}