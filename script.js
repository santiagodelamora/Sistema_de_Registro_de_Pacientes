const patients = [
  {
    name: "Mariana Lopez",
    age: 34,
    reason: "Control general",
    status: "En espera",
    lastVisit: "22 sep 2026",
  },
  {
    name: "Carlos Mendoza",
    age: 48,
    reason: "Revision de laboratorio",
    status: "En consulta",
    lastVisit: "18 sep 2026",
  },
  {
    name: "Andrea Ruiz",
    age: 27,
    reason: "Seguimiento",
    status: "Seguimiento",
    lastVisit: "12 sep 2026",
  },
  {
    name: "Jorge Salgado",
    age: 61,
    reason: "Presion arterial",
    status: "En espera",
    lastVisit: "9 sep 2026",
  },
];

const appointments = [
  {
    time: "09:00",
    patient: "Mariana Lopez",
    type: "Primera valoracion",
    doctor: "Dra. Alejandra Soto",
  },
  {
    time: "10:30",
    patient: "Carlos Mendoza",
    type: "Resultados",
    doctor: "Dr. Raul Jimenez",
  },
  {
    time: "12:00",
    patient: "Andrea Ruiz",
    type: "Seguimiento",
    doctor: "Dra. Alejandra Soto",
  },
];

const metrics = [
  {
    label: "Pacientes activos",
    value: "128",
    detail: "Datos de muestra",
  },
  {
    label: "Citas de hoy",
    value: "16",
    detail: "Agenda provisional",
  },
  {
    label: "Expedientes pendientes",
    value: "7",
    detail: "Sin backend aun",
  },
  {
    label: "Estado",
    value: "UI",
    detail: "Frontend listo para integrar",
  },
];

const pageTitles = {
  dashboard: "Inicio",
  patients: "Pacientes",
  appointments: "Citas",
  records: "Expedientes",
};

const statusClasses = {
  "En espera": "waiting",
  "En consulta": "active",
  Seguimiento: "follow",
};

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderMetrics() {
  const container = document.querySelector("#metricsGrid");

  container.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <p>${metric.detail}</p>
        </article>
      `,
    )
    .join("");
}

function renderPatientsTable() {
  const tbody = document.querySelector("#patientRows");

  tbody.innerHTML = patients
    .map(
      (patient) => `
        <tr>
          <td><strong>${patient.name}</strong></td>
          <td>${patient.age}</td>
          <td>${patient.reason}</td>
          <td><span class="status ${statusClasses[patient.status]}">${patient.status}</span></td>
          <td>${patient.lastVisit}</td>
        </tr>
      `,
    )
    .join("");
}

function renderPatientCards() {
  const container = document.querySelector("#patientCards");

  container.innerHTML = patients
    .map(
      (patient) => `
        <article class="patient-card">
          <div class="patient-card-header">
            <div class="avatar">${getInitials(patient.name)}</div>
            <span class="status ${statusClasses[patient.status]}">${patient.status}</span>
          </div>
          <div>
            <strong>${patient.name}</strong>
            <p>${patient.age} anos - ${patient.reason}</p>
          </div>
          <small>Ultima visita: ${patient.lastVisit}</small>
        </article>
      `,
    )
    .join("");
}

function renderAppointments() {
  const timeline = document.querySelector("#appointmentList");
  const cards = document.querySelector("#appointmentCards");

  timeline.innerHTML = appointments
    .map(
      (appointment) => `
        <article class="timeline-item">
          <div class="time-badge">${appointment.time}</div>
          <div>
            <strong>${appointment.patient}</strong>
            <p>${appointment.type}</p>
            <small>${appointment.doctor}</small>
          </div>
        </article>
      `,
    )
    .join("");

  cards.innerHTML = appointments
    .map(
      (appointment) => `
        <article class="appointment-card">
          <time>${appointment.time}</time>
          <div>
            <strong>${appointment.patient}</strong>
            <p>${appointment.type}</p>
            <small>${appointment.doctor}</small>
          </div>
        </article>
      `,
    )
    .join("");
}

function setActiveView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewId);
  });

  document.querySelector("#pageTitle").textContent = pageTitles[viewId];
  closeSidebar();
}

function openSidebar() {
  document.querySelector("#sidebar").classList.add("open");
  document.querySelector("#backdrop").classList.add("show");
}

function closeSidebar() {
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#backdrop").classList.remove("show");
}

function initNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setActiveView(button.dataset.view));
  });

  document.querySelector("#menuButton").addEventListener("click", openSidebar);
  document.querySelector("#backdrop").addEventListener("click", closeSidebar);
}

renderMetrics();
renderPatientsTable();
renderPatientCards();
renderAppointments();
initNavigation();
