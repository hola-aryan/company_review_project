const searchCompName = document.getElementById('searchCompName');

const myForm = document.getElementById('my-form-2');

myForm.addEventListener('submit', searchReview);

function searchReview(e) {
  e.preventDefault();

  // Get user input values
  const searchCompNames = searchCompName.value;

  // Simple client-side validation
  if (!searchCompNames) {
    alert('Add Company Name Before Submitting');
    return;
  }
 
  localStorageDataList.innerHTML = ""; // Clear previous data
    axios.get('http://localhost:3000/stockTracker/get-stock')
    .then(res => {
      console.log(res);
      console.log(res.data.stock[2]);
        for (let i = 0; i < res.data.stock.length; i++) {
          showAllUsers(res.data.stock[i]);
        }
    })
    .catch(err => console.log("Error fetching user data in window add event listener"))

}

function showAllUsers(print) {
    
        const content = document.createElement("td");
    
        content.textContent = print;
    
        // tableDataBuy.addEventListener('click', () => deleteElement(print.id));
    
        localStorageDataList.appendChild(content);
    }