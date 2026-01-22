//34esXVvVHizyExlYBG4HqETmNlVd67SDG3z4zZUvVuS0hCDlFzs2kXYO
let animal = "tiger";
const pexelsURL = `https://api.pexels.com/v1/search?query=${animal}`;

const createCard = () => {
  let resAnimals = [];
  fetch(pexelsURL, {
    headers: {
      Authorization: "34esXVvVHizyExlYBG4HqETmNlVd67SDG3z4zZUvVuS0hCDlFzs2kXYO",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error getting images from Pexels");
      }
    })
    .then((data) => {
      resAnimals = data;
      console.log(resAnimals);

      const cardsRowEl = document.getElementById("cardsRow");
      resAnimals.photos.forEach((item) => {
        cardsRowEl.innerHTML += `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <img src="${item.src.medium}" class="bd-placeholder-img card-img-top" />
            <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>`;
      });
    })

    .catch((err) => {
      console.log("error:", err);
    });
};

createCard();
