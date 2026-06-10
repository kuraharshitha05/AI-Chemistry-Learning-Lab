const quizData = [
  {
    question: 'Which element has the atomic number 6?',
    choices: ['Carbon', 'Oxygen', 'Nitrogen', 'Helium'],
    answer: 'Carbon',
  },
  {
    question: 'What is the chemical formula for water?',
    choices: ['H2O', 'CO2', 'CH4', 'NH3'],
    answer: 'H2O',
  },
  {
    question: 'Which type of bond forms when electrons are shared?',
    choices: ['Ionic', 'Covalent', 'Hydrogen', 'Metallic'],
    answer: 'Covalent',
  },
];

const molecules = [
  {
    id: 'water',
    name: 'Water',
    formula: 'H2O',
    description: 'Water is a polar molecule with two hydrogen atoms bonded to one oxygen atom in a bent shape.',
    atoms: [
      { element: 'O', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.96, y: 0.25, z: 0 },
      { element: 'H', x: -0.96, y: 0.25, z: 0 },
    ],
    bonds: [[0, 1], [0, 2]],
  },
  {
    id: 'carbon-dioxide',
    name: 'Carbon Dioxide',
    formula: 'CO2',
    description: 'Carbon dioxide is a linear molecule with a carbon atom double-bonded to two oxygen atoms.',
    atoms: [
      { element: 'O', x: -1.16, y: 0, z: 0 },
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.16, y: 0, z: 0 },
    ],
    bonds: [[0, 1], [1, 2]],
  },
  {
    id: 'methane',
    name: 'Methane',
    formula: 'CH4',
    description: 'Methane is a tetrahedral hydrocarbon with one carbon atom at the center bonded to four hydrogen atoms.',
    atoms: [
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.95, y: 0.95, z: 0.95 },
      { element: 'H', x: -0.95, y: -0.95, z: 0.95 },
      { element: 'H', x: -0.95, y: 0.95, z: -0.95 },
      { element: 'H', x: 0.95, y: -0.95, z: -0.95 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3], [0, 4]],
  },
  {
    id: 'ammonia',
    name: 'Ammonia',
    formula: 'NH3',
    description: 'Ammonia forms a trigonal pyramidal shape with nitrogen at the center and three hydrogen atoms around it.',
    atoms: [
      { element: 'N', x: 0, y: 0, z: 0 },
      { element: 'H', x: 0.95, y: 0.62, z: 0 },
      { element: 'H', x: -0.95, y: 0.62, z: 0 },
      { element: 'H', x: 0, y: -0.38, z: 0.9 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3]],
  },
  {
    id: 'sodium-chloride',
    name: 'Sodium Chloride',
    formula: 'NaCl',
    description: 'Sodium chloride is a common ionic compound made of sodium and chloride ions.',
    atoms: [
      { element: 'Na', x: 0, y: 0, z: 0 },
      { element: 'Cl', x: 2.4, y: 0, z: 0 },
    ],
    bonds: [[0, 1]],
  },
  {
    id: 'ethanol',
    name: 'Ethanol',
    formula: 'C2H5OH',
    description: 'Ethanol is a common alcohol used in chemistry labs and organic chemistry studies.',
    atoms: [
      { element: 'C', x: -0.5, y: 0, z: 0 },
      { element: 'C', x: 0.5, y: 0, z: 0 },
      { element: 'O', x: 1.4, y: 0.7, z: 0 },
      { element: 'H', x: -1.0, y: 0.9, z: 0 },
      { element: 'H', x: -1.0, y: -0.9, z: 0 },
      { element: 'H', x: 0.5, y: 0, z: 1.0 },
      { element: 'H', x: 0.5, y: 0, z: -1.0 },
      { element: 'H', x: 2.2, y: 0.7, z: 0 },
    ],
    bonds: [[0, 1], [1, 2], [0, 3], [0, 4], [1, 5], [1, 6], [2, 7]],
  },
  {
    id: 'sulfuric-acid',
    name: 'Sulfuric Acid',
    formula: 'H2SO4',
    description: 'Sulfuric acid is a strong acid with two hydroxyl groups and two double-bonded oxygen atoms.',
    atoms: [
      { element: 'S', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.0, y: 0, z: 0 },
      { element: 'O', x: -1.0, y: 0, z: 0 },
      { element: 'O', x: 0, y: 1.0, z: 0 },
      { element: 'O', x: 0, y: -1.0, z: 0 },
      { element: 'H', x: 0, y: 1.7, z: 0 },
      { element: 'H', x: 0, y: -1.7, z: 0 },
    ],
    bonds: [[0, 1], [0, 2], [0, 3], [0, 4], [3, 5], [4, 6]],
  },
  {
    id: 'acetic-acid',
    name: 'Acetic Acid',
    formula: 'CH3COOH',
    description: 'Acetic acid is the main component of vinegar and a key molecule in organic chemistry.',
    atoms: [
      { element: 'C', x: -1.2, y: 0, z: 0 },
      { element: 'C', x: 0, y: 0, z: 0 },
      { element: 'O', x: 1.1, y: 0.7, z: 0 },
      { element: 'O', x: 1.1, y: -0.7, z: 0 },
      { element: 'H', x: -1.8, y: 0.9, z: 0 },
      { element: 'H', x: -1.8, y: -0.9, z: 0 },
      { element: 'H', x: 0, y: 0, z: 1.0 },
      { element: 'H', x: 2.0, y: -0.7, z: 0 },
    ],
    bonds: [[0, 1], [1, 2], [1, 3], [0, 4], [0, 5], [0, 6], [3, 7]],
  },
  {
    id: 'benzene',
    name: 'Benzene',
    formula: 'C6H6',
    description: 'Benzene is an aromatic molecule with a ring of six carbon atoms and six hydrogens.',
    atoms: [
      { element: 'C', x: 1.4, y: 0, z: 0 },
      { element: 'C', x: 0.7, y: 1.2, z: 0 },
      { element: 'C', x: -0.7, y: 1.2, z: 0 },
      { element: 'C', x: -1.4, y: 0, z: 0 },
      { element: 'C', x: -0.7, y: -1.2, z: 0 },
      { element: 'C', x: 0.7, y: -1.2, z: 0 },
      { element: 'H', x: 2.4, y: 0, z: 0 },
      { element: 'H', x: 1.2, y: 2.1, z: 0 },
      { element: 'H', x: -1.2, y: 2.1, z: 0 },
      { element: 'H', x: -2.4, y: 0, z: 0 },
      { element: 'H', x: -1.2, y: -2.1, z: 0 },
      { element: 'H', x: 1.2, y: -2.1, z: 0 },
    ],
    bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11]],
  },
];

const atomColors = {
  H: '#ffffff',
  C: '#b5b5b5',
  O: '#ff6b6b',
  N: '#6bb8ff',
  S: '#ffd966',
  Na: '#8cd3ff',
  Cl: '#6dff9e',
};

let moleculeRotation = { x: -0.4, y: 0.5 };
let isDragging = false;
let dragStart = null;
let currentMolecule = molecules[0];

function setupMolecules() {
  const select = document.querySelector('#molecule-select');
  const canvas = document.querySelector('#molecule-canvas');
  const nameNode = document.querySelector('#molecule-name');
  const formulaNode = document.querySelector('#molecule-formula');
  const descriptionNode = document.querySelector('#molecule-description');

  if (!select || !canvas || !nameNode || !formulaNode || !descriptionNode) return;

  molecules.forEach(molecule => {
    const option = document.createElement('option');
    option.value = molecule.id;
    option.textContent = molecule.name;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    currentMolecule = molecules.find(item => item.id === select.value) || molecules[0];
    updateMoleculeDetails(nameNode, formulaNode, descriptionNode);
    renderMolecule(canvas, currentMolecule);
  });

  canvas.addEventListener('pointerdown', event => {
    isDragging = true;
    dragStart = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener('pointermove', event => {
    if (!isDragging || !dragStart) return;
    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;
    dragStart = { x: event.clientX, y: event.clientY };
    moleculeRotation.y += deltaX * 0.005;
    moleculeRotation.x += deltaY * 0.005;
    renderMolecule(canvas, currentMolecule);
  });

  canvas.addEventListener('pointerup', event => {
    isDragging = false;
    dragStart = null;
    canvas.releasePointerCapture(event.pointerId);
  });

  canvas.addEventListener('pointerleave', () => {
    isDragging = false;
    dragStart = null;
  });

  updateMoleculeDetails(nameNode, formulaNode, descriptionNode);
  renderMolecule(canvas, currentMolecule);
}

function updateMoleculeDetails(nameNode, formulaNode, descriptionNode) {
  nameNode.textContent = currentMolecule.name;
  formulaNode.textContent = `Formula: ${currentMolecule.formula}`;
  descriptionNode.textContent = currentMolecule.description;
}

function project(point, width, height) {
  const zOffset = 4;
  const perspective = 300;
  const x = point.x;
  const y = point.y;
  const z = point.z + zOffset;
  const scale = perspective / (perspective + z);
  return {
    x: x * scale * 120 + width / 2,
    y: -y * scale * 120 + height / 2,
    z: z,
  };
}

function rotatePoint(point, rotation) {
  const cosY = Math.cos(rotation.y);
  const sinY = Math.sin(rotation.y);
  const cosX = Math.cos(rotation.x);
  const sinX = Math.sin(rotation.x);

  const x1 = cosY * point.x + sinY * point.z;
  const z1 = -sinY * point.x + cosY * point.z;
  const y1 = point.y;

  const y2 = cosX * y1 - sinX * z1;
  const z2 = sinX * y1 + cosX * z1;

  return { x: x1, y: y2, z: z2 };
}

function renderMolecule(canvas, molecule) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const projected = molecule.atoms.map(atom => {
    const rotated = rotatePoint(atom, moleculeRotation);
    return { atom, screen: project(rotated, width, height) };
  });

  projected.sort((a, b) => b.screen.z - a.screen.z);

  // Draw bonds
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
  molecule.bonds.forEach(([start, end]) => {
    const a = projected[start].screen;
    const b = projected[end].screen;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  });

  // Draw atoms
  projected.forEach(({ atom, screen }) => {
    const radius = atom.element === 'H' ? 16 : atom.element === 'O' ? 24 : atom.element === 'C' ? 22 : 20;
    const color = atomColors[atom.element] || '#c3c3c3';

    ctx.beginPath();
    const gradient = ctx.createRadialGradient(screen.x - radius * 0.2, screen.y - radius * 0.2, radius * 0.2, screen.x, screen.y, radius);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.2, color);
    gradient.addColorStop(1, color);
    ctx.fillStyle = gradient;
    ctx.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(0,0,0,0.85)';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(atom.element, screen.x, screen.y);
  });
}

function setupQuiz() {
  const quizForm = document.querySelector('#quiz-form');
  const quizQuestion = document.querySelector('#quiz-question');
  const quizChoices = document.querySelector('#quiz-choices');
  const quizResult = document.querySelector('#quiz-result');
  const currentIndex = Number(localStorage.getItem('quizIndex') || '0');

  if (!quizForm || !quizQuestion || !quizChoices || !quizResult) return;

  let index = currentIndex;

  function renderQuestion() {
    const item = quizData[index];
    quizQuestion.textContent = item.question;
    quizChoices.innerHTML = item.choices
      .map(
        (choice, idx) =>
          `<label class="choice"><input type="radio" name="answer" value="${choice}" ${idx === 0 ? 'checked' : ''}> ${choice}</label>`
      )
      .join('');
    quizResult.textContent = '';
  }

  quizForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(quizForm);
    const answer = formData.get('answer');
    const item = quizData[index];

    if (answer === item.answer) {
      quizResult.textContent = 'Correct! Great job.';
      quizResult.className = 'result';
    } else {
      quizResult.textContent = `Incorrect. The correct answer is ${item.answer}.`;
      quizResult.className = 'result';
    }
  });

  document.querySelector('#next-question')?.addEventListener('click', () => {
    index = (index + 1) % quizData.length;
    localStorage.setItem('quizIndex', String(index));
    renderQuestion();
  });

  renderQuestion();
}

function setupTutor() {
  const promptArea = document.querySelector('#tutor-prompt');
  const responseArea = document.querySelector('#tutor-response');
  const tutorForm = document.querySelector('#tutor-form');

  if (!promptArea || !responseArea || !tutorForm) return;

  tutorForm.addEventListener('submit', event => {
    event.preventDefault();
    const question = promptArea.value.trim();
    if (!question) return;

    responseArea.textContent = 'Thinking...';

    setTimeout(() => {
      responseArea.textContent = getTutorResponse(question);
    }, 400);
  });
}

function getTutorResponse(question) {
  const normalized = question.toLowerCase();

  if (normalized.includes('water') || normalized.includes('h2o')) {
    return 'Water is H2O: two hydrogen atoms bonded to one oxygen atom by polar covalent bonds. It is a great solvent because of its polarity.';
  }

  if (normalized.includes('atom') || normalized.includes('element')) {
    return 'An atom is the smallest unit of matter that retains the properties of an element. It is made of protons, neutrons, and electrons.';
  }

  if (normalized.includes('bond')) {
    return 'Chemical bonds hold atoms together. Covalent bonds share electrons, ionic bonds transfer electrons, and hydrogen bonds are weaker attractions between polar molecules.';
  }

  return 'Chemistry is the study of matter and how it changes. Try asking about elements, molecules, bonding, or reactions for a more specific answer.';
}

window.addEventListener('DOMContentLoaded', () => {
  setupQuiz();
  setupTutor();
  setupMolecules();
});
