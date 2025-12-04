        // Mostra el nom del fitxer seleccionat
        const fileInput = document.getElementById('documents');
        const fileName = document.getElementById('fileName');
        fileInput.addEventListener('change', () => {
            const f = fileInput.files[0];
            fileName.textContent = f ? `Fitxer: ${f.name} (${Math.round(f.size/1024)} KB)` : 'Cap fitxer seleccionat';
        });

        // Comptador de caràcters per al textarea
        const notes = document.getElementById('notes');
        const charCount = document.getElementById('charCount');
        const updateCount = () => { charCount.textContent = `${notes.value.length} / ${notes.maxLength} caràcters`; };
        notes.addEventListener('input', updateCount);
        updateCount();

        // Calcula i mostra l'edat segons la data de naixement
        const birthdate = document.getElementById('birthdate');
        const ageHint = document.getElementById('ageHint');
        function calculateAge(dob) {
            if (!dob) return null;
            const diff = Date.now() - new Date(dob).getTime();
            const age = new Date(diff).getUTCFullYear() - 1970;
            return age;
        }
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

        // Validació simple abans d'enviar (mostra errors nadius si no val)
        const form = document.getElementById('paiForm');
        form.addEventListener('submit', (e) => {
            if (!form.checkValidity()) {
                e.preventDefault();
                form.reportValidity();
            } else {
                e.preventDefault();
                alert('Formulari enviat (simulat). Revisa la consola per a dades.');
                const data = new FormData(form);
                console.log('Form data:');
                for (const [k,v] of data.entries()) console.log(k, v);
            }
        });