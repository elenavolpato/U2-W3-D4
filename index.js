//34esXVvVHizyExlYBG4HqETmNlVd67SDG3z4zZUvVuS0hCDlFzs2kXYO

const removeItem = (element) => {
  element.closest(".col-md-4").remove();
};

const createCard = (animal) => {
  const pexelsURL = `https://api.pexels.com/v1/search?query=${animal}`;
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
      let currentAnimal = animal;
      resAnimals = data;
      console.log(currentAnimal, resAnimals);
      const cardsRowEl = document.getElementById("cardsRow");
      cardsRowEl.innerHTML = "";

      resAnimals.photos.forEach((item) => {
        console.log(item);
        cardsRowEl.innerHTML += `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
            <a href="./details.html?_id=${item.id}"><img src="${item.src.medium}" class="bd-placeholder-img card-img-top"alt="${item.alt}" /></a>
            <div class="card-body">
                <a href="./details.html?_id=${item.id}"><h5 class="card-title">${item.photographer}</h5></a>
                <p class="card-text">
                ${item.alt}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class=" btn btn-sm btn-outline-secondary" onclick="removeItem(this)">Hide</button>
                </div>
                <small class="text-muted">${item.id}</small>
                </div>
            </div>
        </div>`;
      });
    })

    .catch((err) => {
      console.log("error:", err);
    });
};

document.getElementById("load-imgs-btn").addEventListener("click", () => {
  createCard("elephant");
});

document.getElementById("load-other-imgs-btn").addEventListener("click", () => {
  createCard("tiger");
});

document.getElementById("search-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("searchField").value;
  createCard(inputValue);
});
