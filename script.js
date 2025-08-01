const menuItems = [
  { name: "Paneer Tikka", category: "veg" },
  { name: "Chicken Biryani", category: "nonveg" },
  { name: "Veg Lasagna", category: "veg" },
  { name: "Grilled Fish", category: "nonveg" },
  { name: "Chef's Special Pasta", category: "special" },
];

const menuContainer = document.getElementById("menu-items");

function displayMenu(items) {
  menuContainer.innerHTML = items.map(item => `<div class="menu-card">${item.name}</div>`).join("");
}

function filterMenu(category) {
  if (category === 'all') {
    displayMenu(menuItems);
  } else {
    displayMenu(menuItems.filter(item => item.category === category));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");
  const confirmation = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const datetime = document.getElementById("datetime").value;

    if (name && email && datetime) {
      confirmation.textContent = `Thank you, ${name}! Your table has been booked for ${new Date(datetime).toLocaleString()}. A confirmation has been sent to ${email}.`;
      form.reset();
    } else {
      confirmation.textContent = "Please fill in all the fields.";
      confirmation.style.color = "red";
    }
  });
});

window.onload = () => displayMenu(menuItems);