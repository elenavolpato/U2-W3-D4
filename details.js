const url = location.search;
console.log("url", url);
const idDetail = new URLSearchParams(url);
console.log("idDetail", idDetail);

const createDetail = () => {
  const detailsURL = `https://api.pexels.com/v1/photos/${idDetail.get("_id")}`;

  fetch(detailsURL, {
    headers: {
      Authorization: "34esXVvVHizyExlYBG4HqETmNlVd67SDG3z4zZUvVuS0hCDlFzs2kXYO",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error in retrieving details");
      }
    })
    .then((detail) => {
      console.log("hehe", detail);

      const cardDetailEl = document.getElementById("cardDetail");
      cardDetailEl.innerHTML = `
        <div class="row mt-5 justify-content-center "> 
            <div class="col-6 ">
                <div class="card mb-4 shadow-sm">
                    <img src="${detail.src.large}" class="bd-placeholder-img card-img-top" alt="${detail.alt}" />
                    <div class="card-body">
                    <h5 class="card-title">Photographer: ${detail.photographer}</h5>
                    <p class="card-text">
                        ${detail.alt}
                    </p>
                    
                    <div class="d-flex justify-content-between align-items-center">
                        <a class="card-text" href="${detail.photographer_url}">Website</a>
                        <a class="card-text" href="./pexels-start.html">Back home</a>
                    </div>
                </div>
            </div>
        </div>
    
      `;
      const cardEl = document.querySelector(".card");
      cardEl.style = `background-color:${detail.avg_color}`;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

createDetail();
/* 
 <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div> */
