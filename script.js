// 3D Card Tilt Effect
const card = document.getElementById('owner3DCard');

if (card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
}


// Tab Filter
function filterServices(category, event) {

  const tabs = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  event.target.classList.add('active');

  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {

    if (
      category === 'all' ||
      card.getAttribute('data-cat') === category
    ) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }

  });
}


// Auto Select Service
function selectService(serviceName) {

  const select = document.getElementById('custService');

  for (let i = 0; i < select.options.length; i++) {

    if (select.options[i].value.includes(serviceName)) {
      select.selectedIndex = i;
      break;
    }

  }

  document.getElementById('book')
    .scrollIntoView({ behavior: 'smooth' });
}


// WhatsApp Booking
function handleWhatsAppBooking(e) {

  e.preventDefault();

  const salonWhatsAppNumber = "919876543210";

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const service = document.getElementById('custService').value;
  const date = document.getElementById('custDate').value;
  const time = document.getElementById('custTime').value;
  const address = document.getElementById('custAddress').value.trim();

  const message =
`🌸 *New Home Salon Appointment Request* 🌸

👤 *Client Name:* ${name}
📞 *Phone Number:* ${phone}
💄 *Selected Service:* ${service}
📅 *Date:* ${date}
⏰ *Time:* ${time}
📍 *Address:* ${address}

_Please confirm my booking slot. Thank you!_`;

  const whatsappURL =
    `https://wa.me/${salonWhatsAppNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
}


// Mobile Navigation
function toggleMobileNav() {

  const links = document.querySelector('.nav-links');

  links.classList.toggle('mobile-open');

}