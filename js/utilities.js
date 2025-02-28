function openModal() {
  let modal = document.getElementById("donationModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex"); // Ensure flex is applied
}

function closeModal() {
  let modal = document.getElementById("donationModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex"); // Remove flex to avoid issues
}