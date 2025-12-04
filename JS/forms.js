// Exemples d'accés al formulari i elements (similars als que vas mostrar)
// Access via collections
console.log(document.forms); // HTMLCollection de formularis
console.log(document.forms[0]); // primer formulari de la pàgina
console.log(document.forms[0].elements); // col·lecció d'elements
// Mostra el primer element i posa-li un valor
if (document.forms[0] && document.forms[0].elements[0]) {
    console.log(document.forms[0].elements[0]);
    document.forms[0].elements[0].value = 'Goofy';
}

// Altres maneres d'obtenir el formulari / elements
const formById = document.getElementById('paiForm');
const formsByTag = document.getElementsByTagName('form');
const inputsByTag = document.getElementsByTagName('input');
console.log('formById:', formById);
console.log('formsByTag[0]:', formsByTag[0]);
console.log('inputsByTag[0]:', inputsByTag[0]);

// Si volem treballar amb camps per id/nombre
const form = formById; // treballarem amb aquesta referència
if (!form) {
    console.warn('No s ha trobat el formulari `paiForm`. Assegura`t que existeix a HTML/forms.html');
}

// ---- Funcions d'utilitat específiques per al formulari PAI ----
// 1) Llegir valors senzills i grups (checkboxes / radios)
function getSelectedSubjects() {
    // name="subjects" és un grup de checkboxes
    return Array.from(form.querySelectorAll('input[name="subjects"]:checked')).map(i => i.value);
}

function getSelectedMode() {
    return form.querySelector('input[name="mode"]:checked')?.value || null;
}

// 2) Mostrar resum ràpid del formulari
function printFormSummary() {
    if (!form) return;
    const data = new FormData(form);
    console.log('--- Resum formulari (FormData) ---');
    for (const [k, v] of data.entries()) {
        console.log(k, v);
    }
    console.log('Subjects seleccionats:', getSelectedSubjects());
    console.log('Mode seleccionat:', getSelectedMode());
}

// 3) Validació addicional: exemple per telèfon
const phone = form?.querySelector('#phone');
function validatePhoneNumber() {
    if (!phone) return true;
    const pattern = /^[0-9\-\s\+]{7,20}$/;
    if (!pattern.test(phone.value) && phone.value.trim() !== '') {
        phone.setCustomValidity('Introdueix un telèfon vàlid: números, espais, guions o +');
        return false;
    }
    phone.setCustomValidity('');
    return true;
}

// 4) Handlers per a inputs interessants (fitxer, textarea, birthdate)
const fileInput = document.getElementById('documents');
const fileName = document.getElementById('fileName');
if (fileInput && fileName) {
    fileInput.addEventListener('change', () => {
        const f = fileInput.files[0];
        fileName.textContent = f ? `Fitxer: ${f.name} (${Math.round(f.size/1024)} KB)` : 'Cap fitxer seleccionat';
    });
}

const notes = document.getElementById('notes');
const charCount = document.getElementById('charCount');
if (notes && charCount) {
    const updateCount = () => { charCount.textContent = `${notes.value.length} / ${notes.maxLength} caràcters`; };
    notes.addEventListener('input', updateCount);
    updateCount();
}

const birthdate = document.getElementById('birthdate');
const ageHint = document.getElementById('ageHint');
function calculateAge(dob) {
    if (!dob) return null;
    const diff = Date.now() - new Date(dob).getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    return age;
}
if (birthdate && ageHint) {
    birthdate.addEventListener('change', () => {
        const age = calculateAge(birthdate.value);
        ageHint.textContent = age !== null ? `edat: ${age} anys` : 'edat: —';
        if (age !== null && age < 16) {
            ageHint.textContent += ' — Nota: si ets menor de 16, fa falta autorització dels tutors.';
            ageHint.style.color = 'crimson';
        } else {
            ageHint.style.color = '';
        }
    });
}

// 5) Enviar: validacions i ús de FormData
if (form) {
    form.addEventListener('submit', (e) => {
        // Validacions addicionals
        const phoneOk = validatePhoneNumber();
        if (!phoneOk) {
            e.preventDefault();
            phone.reportValidity();
            return;
        }

        if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
            return;
        }

        // Simulem enviament i mostrem les dades per la consola
        e.preventDefault();
        alert('Formulari enviat (simulat). Revisa la consola per a dades.');
        printFormSummary();
    });

    // Reset: restablim indicadors visuals
    form.addEventListener('reset', () => {
        setTimeout(() => {
            if (fileName) fileName.textContent = 'Cap fitxer seleccionat';
            if (charCount) charCount.textContent = `0 / ${notes?.maxLength || 0} caràcters`;
            if (ageHint) ageHint.textContent = 'edat: —';
        }, 0); // després del reset DOM
    });
}

// 6) Ús de document.getElementsByTagName i getElementsByName (exemples similars als teus)
const allForms = document.getElementsByTagName('form');
const allInputs = document.getElementsByTagName('input');
console.log('allForms[0]:', allForms[0]);
console.log('allInputs[0]:', allInputs[0]);

const namedSubjects = document.getElementsByName('subjects'); // NodeList per name
console.log('namedSubjects (by name):', namedSubjects);

// Exemple: establir un valor per a un element mitjançant el nom
if (form && form.elements['preferredName']) {
    form.elements['preferredName'].value = 'Jana';
}

// Pots afegir més snippets aquí per manipular el formulari segons necessitis
// (p. ex. previsualitzar imatges amb FileReader, enviar AJAX amb fetch(), etc.)

// ----------------------------
// Exemples didàctics extrets del PDF
// ----------------------------

// 1) Exemple bàsic: formulari HTML automàticament disponible a document.forms
console.log('\n--- Exemple didàctic: document.forms i elements ---');
if (document.forms && document.forms.length > 0) {
    const f0 = document.forms[0];
    console.log('Primer formulari (document.forms[0]):', f0);
    console.log('Primer element del primer formulari:', f0.elements[0]);
    const lastIndex = f0.elements.length - 1;
    console.log('Últim element del primer formulari:', f0.elements[lastIndex]);
}

// 2) Accés mitjançant l'atribut name (evita dependre de l'índex)
// Exemple: si tens <form name="formulari_1">, pots fer document.formulari_1
console.log('\n--- Accés per name ---');
if (window.formulari_1) {
    console.log('Formulari amb name formulari_1 (document.formulari_1):', document.formulari_1);
}

// 3) Accés via id (recomanat en la majoria de casos)
console.log('\n--- Accés per id ---');
const formByIdExample = document.getElementById('paiForm');
const firstInputById = document.getElementById('fullName');
console.log('getElementById(paiForm):', formByIdExample);
console.log('getElementById(fullName):', firstInputById);

// 4) Obtenir el valor dels camps (text i textarea)
console.log('\n--- Llegir valors de camps de text / textarea ---');
if (firstInputById) console.log('Valor fullName (per id):', firstInputById.value);
if (document.getElementById('notes')) console.log('Valor notes (textarea):', document.getElementById('notes').value);

// També es pot accedir per name via el formulari: form.elements['firstname'].value
if (form && form.elements['fullName']) {
    console.log('Valor fullName (per form.elements):', form.elements['fullName'].value);
}

// 5) Radiobuttons: iterar amb getElementsByName
console.log('\n--- Radiobuttons (exemple: mode / pregunta) ---');
const radios = document.getElementsByName('mode');
if (radios && radios.length) {
    for (let i = 0; i < radios.length; i++) {
        console.log(`Radio ${i}: value=${radios[i].value} checked=${radios[i].checked}`);
    }
    // Determinar quin està seleccionat
    const selectedRadio = Array.from(radios).find(r => r.checked);
    console.log('Mode seleccionat (buscar checked):', selectedRadio?.value || '(cap)');
}

// 6) Checkboxes: comprovar .checked
console.log('\n--- Checkboxes (subjects) ---');
const subjectBoxes = document.getElementsByName('subjects');
if (subjectBoxes && subjectBoxes.length) {
    for (let i = 0; i < subjectBoxes.length; i++) {
        console.log(`Checkbox ${i}: value=${subjectBoxes[i].value} checked=${subjectBoxes[i].checked}`);
    }
}

// 7) Select: obtenir selectedIndex, options, value i text
console.log('\n--- Select (course) ---');
const courseSelect = document.getElementById('course');
if (courseSelect) {
    const idx = courseSelect.selectedIndex;
    console.log('selectedIndex:', idx);
    if (idx >= 0) {
        console.log('Opció seleccionada (text):', courseSelect.options[idx].text);
        console.log('Opció seleccionada (value):', courseSelect.options[idx].value);
    }
    // També: valor directe
    console.log('Valor directe de select (courseSelect.value):', courseSelect.value);
}

// 8) Establir focus en el primer camp del formulari per usabilitat
console.log("\n--- Focus d'usabilitat ---");
if (firstInputById && typeof firstInputById.focus === 'function') {
    // no forcés el focus si la pàgina està en un context no interactiu; només mostrem l'intent
    try {
        firstInputById.focus();
        console.log('Focus posat a #fullName');
    } catch (err) {
        console.log('Focus no permès en aquest context:', err);
    }
}

// 9) Exemple complet: llegir tots els valors principals i construir un objecte JavaScript
console.log('\n--- Construir objecte resum del formulari ---');
function buildFormObject() {
    if (!form) return null;
    const obj = {
        fullName: form.elements['fullName']?.value || '',
        preferredName: form.elements['preferredName']?.value || '',
        email: form.elements['email']?.value || '',
        phone: form.elements['phone']?.value || '',
        birthdate: form.elements['birthdate']?.value || '',
        course: form.elements['course']?.value || '',
        subjects: getSelectedSubjects(),
        mode: getSelectedMode(),
        notes: form.elements['notes']?.value || ''
    };
    return obj;
}

console.log('Objecte resum del formulari:', buildFormObject());

// Fi dels exemples didàctics
