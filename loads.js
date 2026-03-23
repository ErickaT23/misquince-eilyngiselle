// ===================== LOADS.JS =====================
// 1) Lista de invitados (ejemplo)
const guests = [
  { id: "1", name: "Juan Berganza", passes: 3 },
  { id: "2", name: "Viviana Rodriguez", passes: 2 },
  { id: "3", name: "Irelda Montenegro", passes: 2 },
  { id: "4", name: "Cesar Godoy", passes: 4 },
  { id: "5", name: "Rosa Mélida", passes: 3 },
  { id: "6", name: "Carlos Sagastume", passes: 2 },
  { id: "7", name: "Abner Sagastume", passes: 3 },
  { id: "8", name: "Carlos Esaú Sagastume", passes: 4 },
  { id: "9", name: "Noel Argueta", passes: 1 },
  { id: "10", name: "Lidia Guevara", passes: 6 },
  { id: "11", name: "Kevin Monroy", passes: 2 },
  { id: "12", name: "Wilmer Sagastume", passes: 1 },
  { id: "13", name: "Adelso Argueta", passes: 1 },
  { id: "14", name: "Daniel Dubón", passes: 1 },
  { id: "15", name: "Jose Palma Abrego", passes: 1 },
  { id: "16", name: "Luis Melgar", passes: 1 },
  { id: "17", name: "Mauricio Guevara", passes: 1 },
  { id: "18", name: "Rubelio Argueta", passes: 2 },
  { id: "19", name: "Alex García", passes: 1 },
  { id: "20", name: "José Chavarría", passes: 2 },
  { id: "21", name: "Rudy Montenegro", passes: 4 },
  { id: "22", name: "Rafael Argueta", passes: 2 },
  { id: "23", name: "Maritza Berganza", passes: 1 },
  { id: "24", name: "Elder Sagastume", passes: 3 },
  { id: "25", name: "Elio Berganza", passes: 4 },
  { id: "26", name: "Ricardo Berganza", passes: 2 },
  { id: "27", name: "Jorge Aguirre", passes: 3 },
  { id: "28", name: "Elmer Montenegro", passes: 4 },
  { id: "29", name: "Hugo Montenegro", passes: 2 },
  { id: "30", name: "Alicia Montenegro", passes: 2 },
  { id: "31", name: "Etelvina Montenegro", passes: 1 },
  { id: "32", name: "Fermin Argueta", passes: 2 },
  { id: "33", name: "Ifrán Ayala", passes: 4 },
  { id: "34", name: "Orlida Montenegro", passes: 2 },
  { id: "35", name: "Blanca Montenegro", passes: 1 },
  { id: "36", name: "Héctor Montenegro", passes: 5 },
  { id: "37", name: "Manolo Alvarado", passes: 2 },
  { id: "38", name: "Lucrecia Argueta", passes: 2 },
  { id: "39", name: "Eri Argueta", passes: 5 },
  { id: "40", name: "Jason Sagastume", passes: 2 },
  { id: "41", name: "Elio Manuel Berganza", passes: 2 },
  { id: "42", name: "Gilmer Argueta", passes: 4 },
  { id: "43", name: "Gerlin Berganza", passes: 3 },
  { id: "44", name: "Erick Salazar", passes: 2 },
  { id: "45", name: "Rocio Ordoñez", passes: 1 },
  { id: "46", name: "Dana Molina", passes: 1 },
  { id: "47", name: "Mayra Monroy", passes: 1 },
  { id: "48", name: "Antonella Gasparico", passes: 1 },
  { id: "49", name: "Camila Peraza", passes: 1 },
  { id: "50", name: "Angel Palma", passes: 1 },
  { id: "51", name: "Alejandro Leiva", passes: 1 },
  { id: "52", name: "José Carlos Ordoñez", passes: 1 },
  { id: "53", name: "Carlos Ramirez", passes: 1 },
  { id: "54", name: "Fernando Orellana", passes: 1 },
  { id: "55", name: "Familia Monroy Barrera", passes: 2 },
  { id: "56", name: "Andrea Monroy", passes: 1 },
  { id: "57", name: "Karen Monroy", passes: 1 },
  { id: "58", name: "Familia Monroy Villeda", passes: 3 },
  { id: "59", name: "Familia Montoya Monroy", passes: 5 },
  { id: "60", name: "Estiven Solis", passes: 1 },
  { id: "61", name: "Nora Sandoval", passes: 1 },
  { id: "62", name: "Vilma Garcia", passes: 2 },
  { id: "63", name: "Ivan Salazar", passes: 3 },
  { id: "64", name: "Familia Mendoza Salazar", passes: 3 },
  { id: "65", name: "Luis Contreras", passes: 4 },
  { id: "66", name: "Jorge Salazar", passes: 1 },
  { id: "67", name: "Yesenia y Ana Maria Salazar", passes: 2 },
  { id: "68", name: "Gabriela Salazar Palma", passes: 1 },
  { id: "69", name: "Mercedes Chicas", passes: 1 },
  { id: "70", name: "Familia Padilla Barrera", passes: 4 },
  { id: "71", name: "Familia Barrientos Barrera", passes: 3 },
  { id: "72", name: "Familia Torres Barrera", passes: 3 },
  { id: "73", name: "Familia Barrera Vicente", passes: 2 },
  { id: "74", name: "Familia Barrera Vicente", passes: 2 },
  { id: "75", name: "Ludwin Barrera y Fam.", passes: 4 },
  { id: "76", name: "Wenseslao Barrera", passes: 2 },
  { id: "77", name: "Alba Barrera", passes: 2 },
  { id: "78", name: "Iris Barrera y Fam.", passes: 4 },
  { id: "79", name: "Familia Reyes Orellana", passes: 3 },
  { id: "80", name: "Familia Girón Izquierdo", passes: 4 },
  { id: "81", name: "Jackelin Salazar y Familia", passes: 4 },
  { id: "82", name: "Maritza y Jeny Salazar", passes: 2 },
  { id: "83", name: "Marina Salazar", passes: 1 },
  { id: "84", name: "Jeimy Contreras", passes: 1 },
  { id: "85", name: "Jose Raúl Robles Barrera", passes: 2 },
  { id: "86", name: "Carlos Rodrigo Robles Barrera", passes: 2 },
  { id: "87", name: "Raúl Barrera y Esposa", passes: 2 },
  { id: "88", name: "Mincy Ortiz", passes: 1 },
  { id: "89", name: "Selvin Rosales", passes: 1 },
  { id: "90", name: "Sofia Vivar", passes: 1 },
  { id: "91", name: "Juan Carlos Barrera", passes: 2 },
  { id: "92", name: "Ever Enrique Barrera", passes: 1 },
  { id: "93", name: "Roquelino Reyes", passes: 1 },
];

// Helper: leer parámetros ?id=1
function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

document.addEventListener("DOMContentLoaded", () => {
  const guestId = getQueryParam("id");

  // Si no hay id, no marcamos error: solo no hay invitado
  if (!guestId) {
    window.currentGuest = null;
    return;
  }

  const guest = guests.find((g) => String(g.id) === String(guestId));

  if (guest) {
    window.currentGuest = guest;

    // Si tienes estos elementos en alguna parte, los llena (opcional)
    const guestNameEl = document.getElementById("guest-name");
    const passesEl = document.getElementById("passes");

    if (guestNameEl) guestNameEl.textContent = guest.name;
    if (passesEl) {
      const p = Number(guest.passes || 1);
      passesEl.textContent = `${p} ${p === 1 ? "pase" : "pases"}`;
    }
  } else {
    window.currentGuest = null;

    const guestNameEl = document.getElementById("guest-name");
    if (guestNameEl) guestNameEl.textContent = "Invitado no encontrado";
  }
});