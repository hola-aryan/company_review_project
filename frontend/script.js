var compName = document.getElementById('compName');
var pros = document.getElementById('pros');
var cons = document.getElementById('cons');

var rating; 
function setVal(val){
    rating= val;
}

var myForm = document.getElementById('my-form');

myForm.addEventListener('submit', addReview);

function addReview(e) {
  e.preventDefault();

  // Get user input values
  const compNames = compName.value;
  const pross = pros.value;
  const conss = cons.value;
  const ratings = rating;


  // Simple client-side validation
  if (!compNames || !pross || !conss || !ratings) {
    alert('Please fill in all fields');
    return;
  }

  axios.post('http://localhost:2500/reviewsController/add-review', {
    compName : compNames,
    pros : pross,
    cons : conss,
    rating : ratings 
  })
    .then(res => {
      console.log(res);
      // displayData();
      // Optionally update UI or provide feedback to the user upon successful submission
    })
    .catch(err => {
      console.log(err);
      // Provide user-friendly error message or feedback
      alert('Error submitting data. Please try again.');
    })
    .finally(() => {
      // Reset form fields after request (whether success or failure)
      compName.value = "";
      cons.value = "";
      pros.value = "";
    });
}