// JavaScript Document
    // Mettre à jour la valeur courante affichée
    function updateRotationSpeed(value) {
        document.getElementById('currentRotationSpeed').innerText = value;
    }
    function updateMaxFeed(value) {
    document.getElementById('currentMaxFeed').textContent = value;
}
    // Ajoute la fonction generateGUID pour créer un GUID aléatoire
    function generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const version = "10.0.0"; // Version actuelle du script
    document.addEventListener('DOMContentLoaded', function() { // Attend que tout le contenu de la page soit chargé
    // Mise à jour de la version dans le footer
    document.getElementById('version').textContent = version;
    // Ajout de la date dans le footer
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);
    dateElement.textContent = `${formattedDate}`;
    // Liste des champs à réinitialiser
        const fieldsToReset = ['shaftDiameter', 'toolMaterial'];
        
    // Pour chaque champ à réinitialiser
    fieldsToReset.forEach(field => {
        // Récupère l'élément de sélection par son identifiant
        const selectElement = document.getElementById(field);
        // Réinitialise la sélection du champ à aucune option choisie
        selectElement.selectedIndex = -1;
    });
});  

  const FzValues = {
    "1": { "200": 0.004, "250": 0.005, "350": 0.006, "300": 0.008, "201.01": 0.008, "120": 0.004, "120.01": 0.003 },
    "2": { "200": 0.012, "250": 0.012, "350": 0.013, "300": 0.028, "201.01": 0.028, "120": 0.008, "120.01": 0.006 },
    "2.5": { "200": 0.012, "250": 0.012, "350": 0.013, "300": 0.028, "201.01": 0.028, "120": 0.008, "120.01": 0.006 },
    "3": { "200": 0.016, "250": 0.016, "350": 0.018, "300": 0.038, "201.01": 0.038, "120": 0.013, "120.01": 0.008 },
    "3.175": { "200": 0.016, "250": 0.016, "350": 0.018, "300": 0.038, "201.01": 0.038, "120": 0.013, "120.01": 0.008 },
    "4": { "200": 0.018, "250": 0.02, "350": 0.02, "300": 0.048, "201.01": 0.048, "120": 0.018, "120.01": 0.013 },
    "5": { "200": 0.012, "250": 0.012, "350": 0.013, "300": 0.028, "201.01": 0.028, "120": 0.008, "120.01": 0.006 },
    "6": { "150": 0.022, "250": 0.024, "350": 0.027, "300": 0.078, "201.01": 0.078, "120": 0.023, "120.01": 0.018 },
    "8": { "200": 0.031, "250": 0.033, "350": 0.04, "300": 0.088, "201.01": 0.088, "120": 0.028, "120.01": 0.023 }
    // Ajoutez d'autres valeurs en conséquence
  };

  const materialCoefficients = {
    "1": { "200": 0.2, "250": 0.5, "350": 0.5, "300": 0.5, "201.01": 0.5, "120": 0.2, "120.01": 0.1 },
    "2": { "200": 0.2, "250": 0.5, "350": 0.5, "300": 0.5, "201.01": 0.5, "120": 0.2, "120.01": 0.1 },
    "2.5": { "200": 0.2, "250": 0.5, "350": 0.5, "300": 0.5, "201.01": 0.5, "120": 0.2, "120.01": 0.1 },
    "3": { "200": 0.4, "250": 0.5, "350": 0.5, "300": 0.5, "201.01": 0.5, "120": 0.4, "120.01": 0.1 },
    "3.175": { "200": 0.4, "250": 0.5, "350": 0.5, "300": 0.5, "201.01": 0.5, "120": 0.4, "120.01": 0.1 },
    "4": { "200": 0.5, "250": 0.8, "350": 0.8, "300": 0.8, "201.01": 0.8, "120": 0.5, "120.01": 0.2 },
    "5": { "200": 0.5, "250": 1, "350": 1, "300": 1, "201.01": 1, "120": 0.5, "120.01": 0.25 },
    "6": { "200": 1, "250": 1, "350": 1, "300": 1, "201.01": 1, "120": 1, "120.01": 0.35 },
    "8": { "200": 1, "250": 1, "350": 1, "300": 1, "201.01": 1, "120": 1, "120.01": 0.35 }
    // Ajoutez d'autres valeurs en conséquence
  };

  let fz = null;

function getElementValueById(elementId) {
  return parseFloat(document.getElementById(elementId).value);
}

function updatefz() {
  const selectedDiameter = getElementValueById("toolDiameter");
  const selectedVc = getElementValueById("vc");

  if (!isNaN(parseFloat(document.getElementById("manualFz").value))) {
    fz = parseFloat(document.getElementById("manualFz").value);
  } else if (FzValues[selectedDiameter] && FzValues[selectedDiameter][selectedVc] !== undefined) {
    fz = FzValues[selectedDiameter][selectedVc];
  }

  const fzDisplay = fz !== null ? fz.toFixed(3) : "Indisponible";
  document.getElementById("fz").textContent = `fz: ${fzDisplay} mm/dent`;
}

updatefz();

const elementsToWatch = ["toolDiameter", "vc"];
elementsToWatch.forEach(elementId => {
  document.getElementById(elementId).addEventListener("change", updatefz);
});

document.getElementById("manualFz").addEventListener("input", function () {
  const inputValue = parseFloat(this.value);

  if (!isNaN(inputValue) && inputValue >= 0) {
    fz = inputValue;
  } else {
    fz = null;
    this.value = "";
  }

  updatefz();
});
    
    // Déclarer la variable ap avec une portée globale
let ap;

function updateAp() {
    const selectedDiameter = document.getElementById("toolDiameter").value;
    const selectedVc = document.getElementById("vc").value;

    // Vérifier si les valeurs sélectionnées existent dans le tableau
    if (materialCoefficients[selectedDiameter] && materialCoefficients[selectedDiameter][selectedVc] !== undefined) {
        const coefficient = materialCoefficients[selectedDiameter][selectedVc];
        ap = (coefficient * selectedDiameter).toFixed(2); // Assigner la valeur à la variable ap

        // Mettre à jour l'élément HTML avec la nouvelle valeur d'ap
        document.getElementById("ap").textContent = `ap: ${ap} mm`;
    } else {
        // Si les valeurs ne sont pas trouvées, afficher un message d'indisponibilité
        document.getElementById("ap").textContent = "Profondeur de coupe: Indisponible";
        ap = undefined; // Réinitialiser la variable si la valeur n'est pas disponible
    }
}

// Appeler manuellement updateAp pour l'initialisation
updateAp();

// À ce stade, la variable ap contient la dernière valeur mise à jour par updateAp
// Vous pouvez l'utiliser dans d'autres parties de votre code.


// Ajouter des écouteurs d'événements pour détecter les changements dans les sélections
document.getElementById("toolDiameter").addEventListener("change", updateAp);
document.getElementById("vc").addEventListener("change", updateAp);

    // Ajoute un écouteur d'événements sur le clic du bouton "generateJSON"
    document.getElementById('generateJSON').addEventListener('click', function() {
        // La fonction sera déclenchée lorsque le bouton sera cliqué
        // et exécutera les actions associées à la génération du fichier JSON.
        // Récupérer les valeurs du formulaire
        const toolMaterial = document.getElementById('toolMaterial').value;
        const toolDiameter = parseFloat(document.getElementById('toolDiameter').value);
        const shaftDiameter = parseFloat(document.getElementById('shaftDiameter').value);
        const numberOfFlutes = parseInt(document.querySelector('input[name="numberOfFlutes"]:checked').value);
        const vc = parseFloat(document.getElementById('vc').value);
        const currentRotationSpeed = parseInt(document.getElementById('currentRotationSpeed').innerText);
        const currentMaxFeed = parseInt(document.getElementById('currentMaxFeed').innerText);
        const overAllLength = parseFloat(document.getElementById('overAllLength').value);
        const lengthBelow = parseFloat(document.getElementById('lengthBelow').value);
        const shoulderLength = parseFloat(document.getElementById('shoulderLength').value);
        const lengthOfCut = parseFloat(document.getElementById('lengthOfCut').value);
        const CSP = document.querySelector('input[name="CSP"]:checked').value === 'true';
        const HAND = document.querySelector('input[name="HAND"]:checked').value === 'true';
        const GUID = generateGUID();
        
        // Calculer la vitesse de rotation
        let n = (1000 * vc) / (Math.PI * toolDiameter);

        // Utiliser currentRotationSpeed si n dépasse sa valeur
        n = Math.min(n, currentRotationSpeed);
        
        // Calculer la vitesse d’avance
        let vf = n * fz * numberOfFlutes;
        vf = Math.min(vf, currentMaxFeed);
        
        // Calculer la nouvelle vitesse de coupe (vc)
        const newVc = (Math.PI * toolDiameter * n) / 1000;
        
        // Créez la description en utilisant ces valeurs
        const toolDescription = `D${toolDiameter}Z${numberOfFlutes}LU${lengthOfCut}`;
        
        // Créer un objet avec les valeurs du formulaire
        const formData = {
            // Section des détails de l'outil
            "BMC": toolMaterial,
            "description": toolDescription, // Description de l'outil
            "geometry": {
                "CSP": CSP, // coupe au centre (true/false)
                "DC": parseFloat(toolDiameter), // Diamètre de l'outil de coupe
                "HAND": HAND, // Orientation de la coupe (true/false)
                "LB": parseFloat(lengthBelow), // Longueur en dessous du porte outil
                "LCF": parseFloat(lengthOfCut), // Longueur de coupe LU
                "NOF": parseInt(numberOfFlutes), // Nombre de dents
                "OAL": parseFloat(overAllLength), // Longueur totale
                "SFDM": parseFloat(shaftDiameter), // Diamètre de la queue
                "shoulder-length": parseFloat(shoulderLength), // Longueur de l'épaulement
            },
            "guid": generateGUID(), // Génération du GUID pour l'outil
            "post-process": {
                // Détails du post-traitement de l'outil
                "break-control": false, // Contrôle de la pause
                "comment": "", // Commentaire
                "diameter-offset": 1, // Décalage du diamètre
                "length-offset": 1, // Décalage de la longueur
                "live": false, // Mode en direct
                "manual-tool-change": true, // Changement d'outil manuel
                "number": 1, // Numéro
                "turret": 0 // Tourelle
            },
            "product-id": `${numberOfFlutes}F${toolDiameter}mm`,
            "product-link": "",
            "start-values": {
                "presets": [
                    {
                        "f_n": null,
                        "f_z": null,
                        "guid": generateGUID(),
                        "n": n,
                        "n_ramp": 5000,
                        "name": "Default preset",
                        "tool-coolant": "disabled",
                        "use-stepdown": "true",
                        "use-stepover": false,
                        "v_c": newVc,
                        "v_f": vf,
                        "v_f_leadIn": (vf*0.75),
                        "v_f_leadOut":(vf*0.75),
                        "v_f_plunge": "333",
                        "v_f_ramp": (vf*0.75),
                        "stepdown": ap
                    }
                ]
            },
            "type": "flat end mill",
            "unit": "millimeters",
            "vendor": ""
        };
        const data = [formData]; // Mettre les données dans un objet 'data'
        const jsonData = {
            "data": data,
            "version": 15
        };
        // Convertir l'objet en chaîne JSON
        const toolJSON = JSON.stringify(jsonData, null, 2);
        // Créer un objet Blob avec la chaîne JSON
        const blob = new Blob([toolJSON], { type: 'application/json' });
        // Créer un élément <a> pour le téléchargement du fichier JSON
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'toolData.json';
        link.click();
    });

    function calculate() {
        // Récupérer les valeurs du formulaire
        const vc = parseFloat(document.getElementById('vc').value);
        const toolDiameter = parseFloat(document.getElementById('toolDiameter').value);
        const numberOfFlutes = parseInt(document.querySelector('input[name="numberOfFlutes"]:checked').value);
        const maxSpeed = parseInt(document.getElementById('rotationSpeedSlider').max);
        const currentMaxFeed = parseInt(document.getElementById('currentMaxFeed').innerText);
        const currentRotationSpeed = parseInt(document.getElementById('currentRotationSpeed').innerText);
        
        // Calculer la vitesse de rotation
        let n = (1000 * vc) / (Math.PI * toolDiameter);

        // Utiliser currentRotationSpeed si n dépasse sa valeur
        n = Math.min(n, currentRotationSpeed);

        // Calculer la vitesse d’avance
        let vf = n * fz * numberOfFlutes;
        vf = Math.min(vf, currentMaxFeed);

        // Calculer le ratio de réduction
        const ratio = currentMaxFeed / (n * fz * numberOfFlutes);
        //const ratio = currentMaxFeed / ((1000 * vc) / (Math.PI * toolDiameter) * fz * numberOfFlutes);
        
        // Adapter la vitesse de rotation
        //Si le ratio est inférieur à 1, le bloc if est exécuté et la vitesse de rotation est ajustée. Si le ratio est égal ou supérieur à 1, le bloc if n'est pas exécuté, et la vitesse de rotation reste inchangée
        if (ratio < 1) {
            n = n * ratio;
        }
        // Calculer la nouvelle vitesse de coupe (vc)
        const newVc = (Math.PI * toolDiameter * n) / 1000;
        
       // Afficher les résultats
const resultTable = `
<h1 class="margSize">Résultats</h1>
    <table id="resultTable">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Théorique</th>
                <th>Retenu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="size">Vitesse</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Vitesse de broche (n) :</td>
                <td>${((1000 * vc) / (Math.PI * toolDiameter)).toFixed(0)} <span class="unit">tr/min</span></td>
                <td class="highlighted">${n.toFixed(0)} <span class="unit">tr/min</span></td>
            </tr>
            <tr>
                <td>Vitesse de coupe (Vc) :</td>
                <td>${vc.toFixed(0)} <span class="unit">m/min</span></td>
                <td class="highlighted">${newVc.toFixed(0)} <span class="unit">m/min</span></td>
            </tr>
            <tr>
                <td class="size">Avance</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
                <td>Avance en matière X et Y (vf) :</td>
                <td>${Math.round(currentRotationSpeed * fz * numberOfFlutes)} <span class="unit">mm/min</span></td>
                <td class="highlighted">${Math.round((ratio >= 1) ? vf : currentMaxFeed)} <span class="unit">mm/min</span></td>
            </tr>
            <tr>
                <td class="size">Avance verticale</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Avance en matière Z :</td>
                <td>&nbsp;</td>
                <td class="highlighted">${(vf / 2).toFixed(0)} <span class="unit">mm/min</span></td>
            </tr>
            <tr>
                <td class="size">Profondeur</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Profondeur de passe (ap) :</td>
                <td>${ap} <span class="unit">mm</span></td>
                <td class="highlighted">${ap} <span class="unit">mm</span></td>
            </tr>
            <tr>
                <td>Réduire la vitesse de broche :</td>
                <td colspan="2" class="highlighted center">${ratio >= 1 ? 'Aucune réduction' : (100 - (ratio * 100)).toFixed(1) + '%'}</td>
            </tr>
        </tbody>
    </table>
`;

document.getElementById('result').innerHTML = resultTable;

const style = `
    #resultTable {
            width: 100%;
            margin: 20px auto;
            border-collapse: collapse;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }

        #resultTable th, #resultTable td {
            padding: 12px;
            border-bottom: 1px solid #ddd;
        }

        #resultTable th {
            background-color: #4E4E4E;
            color: #fff;
        }

        .highlighted {
            color: green;
            font-weight: bold;
        }

        .size {
            color: #434343;
            font-weight: bold;
            font-size: 1rem;
        }

        #resultTable td.size {
            background-color: #eee;
        }

        .center {
            text-align: center;
        }
        .unit {
        font-size: 0.8em; /* Réduire la taille des unités à 80% */
}
`;

        const styleElement = document.createElement('style');
        styleElement.innerHTML = style;
        document.head.appendChild(styleElement);
    }