// BrightPath Academy interactions
// IMPORTANT: Replace this with the academy's real WhatsApp number in international format,
// without +, spaces, or dashes. Example for India: 919876543210.
const WHATSAPP_NUMBER = "919876543210";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// WhatsApp links. Replace WHATSAPP_NUMBER above before publishing.
const whatsappMessage = encodeURIComponent("Hello BrightPath Academy! I would like to know more about your courses and admission process.");
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
document.getElementById("heroWhatsapp").href = whatsappUrl;
document.getElementById("contactWhatsapp").href = whatsappUrl;

// Update footer year automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Demo admission form: validates inputs and opens the visitor's email app.
// This does NOT save submissions to a database or send an email automatically.
const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!enquiryForm.checkValidity()) {
    enquiryForm.reportValidity();
    return;
  }

  const formData = new FormData(enquiryForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const course = String(formData.get("course") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // Replace this placeholder with the real admissions email before using the site.
  const admissionsEmail = "info@brightpathacademy.in";
  const subject = encodeURIComponent(`Admission enquiry: ${course}`);
  const body = encodeURIComponent(
    `Hello BrightPath Academy,\n\nI would like to enquire about admission.\n\nName: ${name}\nPhone: ${phone}\nCourse: ${course}\nMessage: ${message || "No additional message"}\n\nPlease contact me.`
  );

  formMessage.textContent = "Opening your email app with the enquiry details. Please send the email to complete your enquiry.";
  window.location.href = `mailto:${admissionsEmail}?subject=${subject}&body=${body}`;
});
