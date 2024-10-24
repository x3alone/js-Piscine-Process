let data = [];
let filteredData = [];
let endPage = 20;
let counterPage = 1;
let sortBy = "name";
let sortOrder = "asc";

export const loadData = (heroes) => {
  data = heroes;
  filteredData = heroes;
  fillTable();
  switchPage();
  search();
  getIdForSort();
};

export const getData = async () => {
  try {
    const response = await fetch(
      "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    loadData(json);
  } catch (error) {
    console.error("There was a problem fetching the data:", error);
  }
};

const fillTable = () => {
  const table = document.getElementById("mytable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";
  let start = (counterPage - 1) * endPage;
  let end = start + endPage;
  if (end > data.length) {
    end = data.length;
  }
  for (let i = start; i < end; i++) {
    const element = data[i];
    const row = document.createElement("tr");

    let powerstatsHTML = "";
    const powerstatKeys = [
      "combat",
      "durability",
      "intelligence",
      "power",
      "speed",
      "strength",
    ];
    for (let key of powerstatKeys) {
      powerstatsHTML += `<td>${element.powerstats[key] || "N/A"}</td>`;
    }

    row.innerHTML = `
            <td><img src="${element.images.xs}" alt="${
      element.name
    } Icon" /></td>
            <td>${element.name}</td>
            <td>${element.biography.fullName || "N/A"}</td>
            ${powerstatsHTML}
            <td>${element.appearance.race || "N/A"}</td>
         <td>${
           element.appearance.gender === null
             ? "N/A"
             : element.appearance.gender
         }</td>

            <td>${element.appearance.height.join(", ")}</td>
            <td>${element.appearance.weight.join(", ")}</td>
            <td>${element.biography.placeOfBirth || "N/A"}</td>
            <td>${element.biography.alignment || "N/A"}</td>
        `;
    tbody.appendChild(row);
  }
};

const switchPage = () => {
  const pageSizeSelect = document.getElementById("pages");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  pageSizeSelect.addEventListener("change", (e) => {
    endPage = e.target.value === "all" ? data.length : parseInt(e.target.value);
    fillTable();
  });

  prevButton.addEventListener("click", () => {
    if (counterPage > 1) {
      counterPage--;
      fillTable();
    }
  });

  nextButton.addEventListener("click", () => {
    if (counterPage < Math.ceil(data.length / endPage)) {
      counterPage++;
      fillTable();
    }
  });
};

const search = () => {
  const input = document.getElementById("searchInput");
  input.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    data = filteredData.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm)
    );
    counterPage = 1;
    fillTable();
  });
};

const getIdForSort = () => {

  const idsValue = [
    "name",
    "full_name",
    "race",
    "combat",
    "durability",
    "intelligence",
    "power",
    "speed",
    "strength",
    "gender",
    "alignment",
    "birth",
    "height",
    "weight",
  ];
  idsValue.forEach((value) => {
    const id = document.getElementById(value);
    if (id) {
      id.style.cursor = "pointer";
      id.addEventListener("click", () => {
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
        sortBy = value;
     
        sortData();
        fillTable();
      });
    }

  });
};

const sortData = () => {

  data.sort((a, b) => {
    let first, second;
    switch (sortBy) {
      case "name":
        first = a.name || "N/A";
        second = b.name || "N/A";
        break;
      case "full_name":
        first = a.biography.fullName || "N/A";
        second = b.biography.fullName || "N/A";
        break;
      case "race":
        first = a.appearance.race || "N/A";
        second = b.appearance.race || "N/A";
        break;
      case "combat":
        first = a.powerstats.combat || "N/A";
        second = b.powerstats.combat || "N/A";
        break;
      case "durability":
        first = a.powerstats.durability || "N/A";
        second = b.powerstats.durability || "N/A";
        break;
      case "intelligence":
        first = a.powerstats.intelligence || "N/A";
        second = b.powerstats.intelligence || "N/A";
        break;
      case "power":
        first = a.powerstats.power || "N/A";
        second = b.powerstats.power || "N/A";
        break;
      case "speed":
        first = a.powerstats.speed || "N/A";
        second = b.powerstats.speed || "N/A";
        break;
      case "strength":
        first = a.powerstats.strength || "N/A";
        second = b.powerstats.strength || "N/A";
        break;
      case "gender":
        first =
          a.appearance.gender !== "-"
            ? a.appearance.gender.toLowerCase()
            : "N/A";
        second =
          b.appearance.gender !== "-"
            ? b.appearance.gender.toLowerCase()
            : "N/A";
        break;
      case "height":
        let feetA =
          a.appearance.height[0] !== "-"
            ? parseInt(a.appearance.height[0].split("'")[0]) * 12
            : "N/A";
        let inchesA =
          a.appearance.height[0] !== "-"
            ? parseInt(a.appearance.height[0].split("'")[1]) || 0
            : 0;
        first = feetA !== "N/A" ? feetA + inchesA : "N/A";

        let feetB =
          b.appearance.height[0] !== "-"
            ? parseInt(b.appearance.height[0].split("'")[0]) * 12
            : "N/A";
        let inchesB =
          b.appearance.height[0] !== "-"
            ? parseInt(b.appearance.height[0].split("'")[1]) || 0
            : 0;
        second = feetB !== "N/A" ? feetB + inchesB : "N/A";
        break;
      case "weight":
        first =
          a.appearance.weight[0].split(" ")[0] !== "-"
            ? parseInt(a.appearance.weight[0].split(" ")[0]) || "N/A"
            : "N/A";
        second =
          b.appearance.weight[0].split(" ")[0] !== "-"
            ? parseInt(b.appearance.weight[0].split(" ")[0]) || "N/A"
            : "N/A";
        break;
      case "birth":
        first =
          a.biography.placeOfBirth !== "-" ? a.biography.placeOfBirth : "N/A";
        second =
          b.biography.placeOfBirth !== "-" ? b.biography.placeOfBirth : "N/A";
        break;
      case "alignment":
        first = a.biography.alignment !== "-" ? a.biography.alignment : "N/A";
        second = b.biography.alignment !== "-" ? b.biography.alignment : "N/A";

      default:
        break;
    }
    if (first === "N/A" && second === "N/A") return 0;
    if (first === "N/A") return 1;
    if (second === "N/A") return -1;

    if (first < second) return sortOrder === "asc" ? -1 : 1;
    if (first > second) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};
