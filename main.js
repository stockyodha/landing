
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var sidebarButton = document.getElementById("sidebar-button");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    sidebarButton.style.display = "none";
  } else {
    sidebar.style.display = "none";
    sidebarButton.style.display = "block";
  }
}