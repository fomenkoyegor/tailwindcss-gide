let page = 0;
let url = "https://api.unsplash.com";
let clientId =
  "1dcac9804322f89a7f23a5f6ec79d9a295a721a562e21d8f7cedb815a9f0aa89";
let getPhotos = async () => {
  page++;
  let result = await fetch(`${url}/photos/?page=${page}&client_id=${clientId}`);
  return await result.json();
};
let photosBlock = document.querySelector("#photos-block");
let ancorScroll = document.querySelector(".ancor-scroll");
let redirectOriginSource = (links) => {
  window.open(links.html, "_blank");
};
let renderPhotos = async () => {
  let photos = await getPhotos();
  photos.forEach((photo) => {
    let card = document.createElement("div");
    card.classList.value =
      "bg-black hover:scale-110 transition ease-in-out delay-150 rounded";
    card.addEventListener("click", () => redirectOriginSource(photo.links));
    card.innerHTML = `
    <picture>
      <source 
        srcset="${photo.urls.small}" 
        media="(min-width: 600px)"
      >
        <img
          alt='${photo.id}'
          class="object-cover h-48 w-full cursor-pointer"   
          src="${photo.urls.full}"
        />
    </picture>         
    `;
    photosBlock.append(card);
  });
};
let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        renderPhotos();
      }
    });
  },
  { threshold: 0.5 }
);

(async () => {
  renderPhotos();
  observer.observe(ancorScroll);
})();
