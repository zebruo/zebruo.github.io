function selectMaterial(btn) {
    document.querySelectorAll('.material-card').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var sel = document.getElementById('vc');
    sel.value = btn.getAttribute('data-vc');
    sel.dispatchEvent(new Event('change'));
}

function selectDiameter(btn) {
    document.querySelectorAll('#diameterGroup .pill-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var sel = document.getElementById('toolDiameter');
    sel.value = btn.getAttribute('data-val');
    sel.dispatchEvent(new Event('change'));
}

function selectPill(btn, groupId, radioId) {
    document.querySelectorAll('#' + groupId + ' .pill-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById(radioId).checked = true;
}

function updateSlider(id, value) {
    document.getElementById(id).textContent = value;
}

// Ajoute la fonction generateGUID pour créer un GUID aléatoire
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const FzValues = {
    "1": {
        "150": 0.003,
        "200": 0.004,
        "250": 0.005,
        "350": 0.006,
        "300": 0.008,
        "201.01": 0.006,
        "120": 0.004,
        "120.01": 0.003
    },
    "2": {
        "150": 0.010,
        "200": 0.012,
        "250": 0.012,
        "350": 0.013,
        "300": 0.028,
        "201.01": 0.020,
        "120": 0.008,
        "120.01": 0.006
    },
    "2.5": {
        "150": 0.010,
        "200": 0.012,
        "250": 0.012,
        "350": 0.013,
        "300": 0.028,
        "201.01": 0.020,
        "120": 0.008,
        "120.01": 0.006
    },
    "3": {
        "150": 0.013,
        "200": 0.016,
        "250": 0.016,
        "350": 0.018,
        "300": 0.038,
        "201.01": 0.028,
        "120": 0.013,
        "120.01": 0.008
    },
    "3.175": {
        "150": 0.013,
        "200": 0.016,
        "250": 0.016,
        "350": 0.018,
        "300": 0.038,
        "201.01": 0.028,
        "120": 0.013,
        "120.01": 0.008
    },
    "4": {
        "150": 0.015,
        "200": 0.018,
        "250": 0.02,
        "350": 0.02,
        "300": 0.048,
        "201.01": 0.035,
        "120": 0.018,
        "120.01": 0.013
    },
    "5": {
        "150": 0.016,
        "200": 0.020,
        "250": 0.022,
        "350": 0.024,
        "300": 0.063,
        "201.01": 0.045,
        "120": 0.020,
        "120.01": 0.015
    },
    "6": {
        "150": 0.018,
        "200": 0.022,
        "250": 0.024,
        "350": 0.027,
        "300": 0.078,
        "201.01": 0.055,
        "120": 0.023,
        "120.01": 0.018
    },
    "8": {
        "150": 0.025,
        "200": 0.031,
        "250": 0.033,
        "350": 0.04,
        "300": 0.088,
        "201.01": 0.065,
        "120": 0.028,
        "120.01": 0.023
    }
};

const materialCoefficients = {
    "1": {
        "150": 0.2,
        "200": 0.2,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.2,
        "120.01": 0.1
    },
    "2": {
        "150": 0.2,
        "200": 0.2,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.2,
        "120.01": 0.1
    },
    "2.5": {
        "150": 0.2,
        "200": 0.2,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.2,
        "120.01": 0.1
    },
    "3": {
        "150": 0.3,
        "200": 0.4,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.4,
        "120.01": 0.1
    },
    "3.175": {
        "150": 0.3,
        "200": 0.4,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.4,
        "120.01": 0.1
    },
    "4": {
        "150": 0.4,
        "200": 0.5,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.5,
        "120.01": 0.2
    },
    "5": {
        "150": 0.4,
        "200": 0.5,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.5,
        "120.01": 0.25
    },
    "6": {
        "150": 0.4,
        "200": 0.5,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.5,
        "120.01": 0.3
    },
    "8": {
        "150": 0.4,
        "200": 0.5,
        "250": 0.5,
        "350": 0.5,
        "300": 0.5,
        "201.01": 0.5,
        "120": 0.5,
        "120.01": 0.3
    }
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
    const manualApValue = parseFloat(document.getElementById("manualAp").value);

    if (!isNaN(manualApValue) && manualApValue > 0) {
        ap = manualApValue.toFixed(2);
    } else if (materialCoefficients[selectedDiameter] && materialCoefficients[selectedDiameter][selectedVc] !== undefined) {
        const coefficient = materialCoefficients[selectedDiameter][selectedVc];
        ap = (coefficient * parseFloat(selectedDiameter)).toFixed(2);
    } else {
        ap = undefined;
    }

    document.getElementById("ap").textContent = ap !== undefined ? `ap: ${ap} mm` : "Profondeur de passe: Indisponible";
}

updateAp();

document.getElementById("toolDiameter").addEventListener("change", updateAp);
document.getElementById("vc").addEventListener("change", updateAp);

document.getElementById("manualAp").addEventListener("input", function () {
    const inputValue = parseFloat(this.value);
    if (!isNaN(inputValue) && inputValue > 0) {
        ap = inputValue.toFixed(2);
    } else {
        ap = undefined;
        this.value = "";
    }
    updateAp();
});

// Ajoute un écouteur d'événements sur le clic du bouton "generateJSON"
document.getElementById('generateJSON').addEventListener('click', function () {
    // La fonction sera déclenchée lorsque le bouton sera cliqué
    // et exécutera les actions associées à la génération du fichier JSON.
    // Récupérer les valeurs du formulaire
    const toolMaterial = document.getElementById('toolMaterial').value;
    const toolDiameter = parseFloat(document.getElementById('toolDiameter').value);
    const shaftDiameter = parseFloat(document.getElementById('shaftDiameter').value);
    const numberOfFlutes = parseInt(document.querySelector('input[name="numberOfFlutes"]:checked').value);
    const vc = parseFloat(document.getElementById('vc').value);
    const currentRotationSpeed = parseInt(document.getElementById('currentRotationSpeed').textContent);
    const currentMaxFeed = parseInt(document.getElementById('currentMaxFeed').textContent);
    const currentZFeed = parseInt(document.getElementById('currentZFeed').textContent);
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

    // Calculer la vitesse d'avance
    let vf = n * fz * numberOfFlutes;
    vf = Math.min(vf, currentMaxFeed);

    // Calculer la nouvelle vitesse de coupe (vc)
    const newVc = (Math.PI * toolDiameter * n) / 1000;

    // Créez la description en utilisant ces valeurs
    const lcfPart = isNaN(lengthOfCut) ? '' : `LU${lengthOfCut}`;
    const toolDescription = `D${toolDiameter}Z${numberOfFlutes}${lcfPart}`;

    // Créer un objet avec les valeurs du formulaire
    const formData = {
        "BMC": toolMaterial,
        "description": toolDescription,
        "geometry": {
            "CSP": CSP,
            "DC": parseFloat(toolDiameter),
            "HAND": HAND,
            "LB": parseFloat(lengthBelow),
            "LCF": parseFloat(lengthOfCut),
            "NOF": parseInt(numberOfFlutes),
            "OAL": parseFloat(overAllLength),
            "SFDM": parseFloat(shaftDiameter),
            "shoulder-length": parseFloat(shoulderLength),
        },
        "guid": GUID,
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
            "presets": [{
                "f_n": null,
                "f_z": null,
                "guid": generateGUID(),
                "n": n,
                "n_ramp": 5000,
                "name": "Default preset",
                "tool-coolant": "disabled",
                "use-stepdown": true,
                "use-stepover": false,
                "v_c": newVc,
                "v_f": vf,
                "v_f_leadIn": (vf * 0.75),
                "v_f_leadOut": (vf * 0.75),
                "v_f_plunge": Math.min(Math.round(vf / 2), currentZFeed),
                "v_f_ramp": (vf * 0.75),
                "stepdown": parseFloat(ap)
            }]
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
    const blob = new Blob([toolJSON], {
        type: 'application/json'
    });
    // Créer un élément <a> pour le téléchargement du fichier JSON
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'toolData.json';
    link.click();
});

function calculate() {
    const vc = parseFloat(document.getElementById('vc').value);
    const toolDiameter = parseFloat(document.getElementById('toolDiameter').value);
    const numberOfFlutes = parseInt(document.querySelector('input[name="numberOfFlutes"]:checked').value);
    const currentMaxFeed = parseInt(document.getElementById('currentMaxFeed').textContent);
    const currentRotationSpeed = parseInt(document.getElementById('currentRotationSpeed').textContent);
    const currentZFeed = parseInt(document.getElementById('currentZFeed').textContent);

    // n théorique puis limité par la broche
    const n_theoretical = (1000 * vc) / (Math.PI * toolDiameter);
    const n = Math.min(n_theoretical, currentRotationSpeed);
    const newVc = (Math.PI * toolDiameter * n) / 1000;

    // vf théorique (depuis n théorique) puis retenu (limité par la machine)
    const vf_theoretical = n_theoretical * fz * numberOfFlutes;
    const vf = Math.min(n * fz * numberOfFlutes, currentMaxFeed);

    // fz effectif si l'avance max machine est atteinte
    const fz_eff = vf / (n * numberOfFlutes);

    // avance en Z plafonnée par la limite Z machine
    const vf_z = Math.min(Math.round(vf / 2), currentZFeed);
    const zLimited = Math.round(vf / 2) > currentZFeed;

    const nLimited = n_theoretical > currentRotationSpeed;
    const vfLimited = (n * fz * numberOfFlutes) > currentMaxFeed;

    const vcEfficiency = Math.round((n / n_theoretical) * 100);
    const spindleHeavilyCapped = nLimited && vcEfficiency < 65;
    const rubbingRisk = vfLimited && (fz_eff < fz * 0.5);
    const doubleLimited = nLimited && vfLimited;

    let warnings = ``;
    if (nLimited) {
        warnings += `<tr><td colspan="3" class="data"><span class="warn-sign">[!]</span> Broche plafonnée - n cible :<span class="text-bold colData">${n_theoretical.toFixed(0)} tr/min</span>, effectif : <span class="text-bold colData">${n.toFixed(0)} tr/min</span></td></tr>`;
    }
    if (spindleHeavilyCapped) {
        warnings += `<tr><td colspan="3" class="warn"><span class="warn-sign">[!]</span> Broche très limitante (${vcEfficiency}% de la vc optimale) - envisagez un diamètre plus grand ou une matière avec une vc plus basse.</td></tr>`;
    }
    if (vfLimited) {
        warnings += `<tr><td colspan="3" class="data"><span class="warn-sign">[!]</span> Avance max machine atteinte - fz effectif : <span class="text-bold colData">${fz_eff.toFixed(3)} mm/dent</span> au lieu de <span class="text-bold colData">${fz} mm/dent</span></td></tr>`;
    }
    if (rubbingRisk) {
        warnings += `<tr><td colspan="3" class="warn"><span class="warn-sign">[!]</span> Risque de frottement - fz effectif (${fz_eff.toFixed(3)} mm/dent) inférieur à 50% du recommandé. Augmentez la broche ou réduisez l'avance max.</td></tr>`;
    }
    if (doubleLimited) {
        warnings += `<tr><td colspan="3" class="warn"><span class="warn-sign">[!]</span> Double limitation machine - broche ET avance plafonnées simultanément, conditions de coupe fortement dégradées.</td></tr>`;
    }
    if (zLimited) {
        warnings += `<tr><td colspan="3" class="data"><span class="warn-sign">[!]</span> Avance Z plafonnée à <span class="text-bold colData">${currentZFeed} mm/min</span> (vf/2 cible :<span class="text-bold colData">${Math.round(vf / 2)} mm/min</span>)</td></tr>`;
    }

    // Mise à jour des 3 grandes cartes
    document.getElementById('resN').textContent = n.toFixed(0);
    document.getElementById('resVf').textContent = Math.round(vf).toString();
    document.getElementById('resAp').textContent = ap !== undefined ? ap : '—';
    document.getElementById('resultsModal').style.display = 'flex';

    const resultTable = `
    <table id="resultTable">
        <tbody>
            <tr>
                <td>&nbsp;</td>
                <td class="size">Cible (sans limite)</td>
                <td class="size">Effectif (machine réelle)</td>
            </tr>
            <tr>
                <td class="size">Vitesse</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Vitesse de broche (n) :</td>
                <td><span class="unit">${n_theoretical.toFixed(0)} tr/min</span></td>
                <td class="highlighted">${n.toFixed(0)} <span class="unit">tr/min</span></td>
            </tr>
            <tr>
                <td>Vitesse de coupe (vc) :</td>
                <td><span class="unit">${vc.toFixed(0)} m/min</span></td>
                <td class="highlighted">${newVc.toFixed(0)} <span class="unit">m/min</span></td>
            </tr>
            <tr>
                <td>Efficacité de coupe :</td>
                <td>&nbsp;</td>
                <td class="${vcEfficiency < 65 ? 'warn' : 'highlighted'}">${vcEfficiency} <span class="unit">%</span></td>
            </tr>
            <tr>
                <td class="size">Avance</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Vitesse d'avance en X et Y (vf)</td>
                <td><span class="unit">${Math.round(vf_theoretical)} mm/min</span></td>
                <td class="highlighted">${Math.round(vf)} <span class="unit">mm/min</span></td>
            </tr>
            <tr>
                <td>Vitesse d'avance en Z</td>
                <td><span class="unit">${Math.round(vf / 2)} mm/min</span></td>
                <td class="highlighted">${vf_z} <span class="unit">mm/min</span></td>
            </tr>
            ${warnings}
            <tr>
                <td colspan="3" class="data">Profondeur de passe ap : <span class="text-bold colData">${ap}</span> <span class="unit text-bold colData">mm</span></td>
            </tr>
            <tr>
                <td colspan="3" class="data">Ø = <span class="text-bold colData">${toolDiameter}</span> <span class="unit text-bold colData">mm</span></td>
            </tr>
            <tr>
                <td colspan="3" class="data">fz = <span class="text-bold colData">${fz}</span> <span class="unit text-bold colData">mm/dent</span></td>
            </tr>
            <tr>
                <td colspan="3" class="data">Z = <span class="text-bold colData">${numberOfFlutes}</span></td>
            </tr>
        </tbody>
    </table>
`;

    document.getElementById('result').innerHTML = resultTable;
}

function closeResultsModal(event) {
    if (!event || event.target === document.getElementById('resultsModal')) {
        document.getElementById('resultsModal').style.display = 'none';
    }
}