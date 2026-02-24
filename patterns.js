// PATRONES DE EXTRACCIÓN MÉDICA
// Soporte para múltiples versiones: V 1.1 (Estricto) y V 1.2 (Flexible)

// ==========================================
// VERSIÓN 1.1 - Patrones Estrictos (Originales)
// ==========================================
const PATTERNS_V1_1 = {
    // ============== HEMOGRAMA ==============
    hemograma: {
        hemoglobina: /HEMOGLOBINA\s*[hi]*\s*(\d+\.?\d*)\s*g\/dL/i,
        hematocrito: /HEMATOCRITO\s*[hi]*\s*(\d+\.?\d*)\s*%/i,
        leucocitos: /RECUENTO DE LEUCOCITOS\s*[hi]*\s*(\d+\.?\d*)\s*10\^3\/uL/i,
        neutrofilos_porcentaje: /NEUTROFILOS\s*%\s*[hi]*\s*(\d+\.?\d*)\s*%/i,
        linfocitos_porcentaje: /LINFOCITOS\s*%\s*[hi]*\s*(\d+\.?\d*)\s*%/i,
        plaquetas: /RECUENTO DE PLAQUETAS\s*[hi]*\s*(\d+)\s*10\^3\/uL/i,
        vcm: /VCM-?\s*VOLUMEN\s+CORPUSCULAR\s+MEDIO\s\D*(\d+\.?\d*)\s*fL/i,
        chcm: /CHCM\s*-\s*CONC\.\s*Hb\s*CORPUSCULAR\s*MEDIA\s\D*(\d+\.?\d*)\s*g\/dL/i,
        rdw: /RDW\s*[i]?\s\D*(\d+\.?\d*)\s*%/i,
        reticulocitos: /RETICULOCITOS\s\D*(\d+\.?\d*)\s*%/i,
        neutrofilos_absoluto: /NEUTROFILOS\s\D*(\d+\.?\d*)\s*10\^3\/uL/i,
        linfocitos_absoluto: /LINFOCITOS\s\D*(\d+\.?\d*)\s*10\^3\/uL/i
    },

    // ============== FUNCIÓN RENAL ==============
    renal: {
        creatinina: /CREATININA\s*[hi]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        vfg: /VFG\s\D*(\d+\.?\d*)\s*mL\/min/i,
        bun: /NITROGENO UREICO \(BUN\)\s*[hi]*\s*(\d+\.?\d*)\s*mg%/i,
        urea: /UREA\s*[hi]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        sodio: /ELECTROLITO SODIO\s*[hi]*\s*(\d+\.?\d*)\s*mEq\/L/i,
        potasio: /ELECTROLITO POTASIO\s*[hi]*\s*(\d+\.?\d*)\s*mEq\/L/i,
        cloro: /ELECTROLITO CLORO\s*[hi]*\s*(\d+\.?\d*)\s*mEq\/L/i,
        fosforo: /FOSFORO SERICO\s*[hi]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        calcio: /CALCIO\s*[hi]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        magnesio: /MAGNESIO\s*[hi]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        acido_urico: /ACIDO\s+URICO\s\D*(\d+\.?\d*)\s*mg\/dL/i
    },

    // ============== FUNCIÓN HEPÁTICA ==============
    hepatico: {
        bilirrubina_total: /(?:Bilirrubina Total|BILIRRUBINA TOTAL)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        bilirrubina_directa: /(?:Bilirrubina Directa|BILIRRUBINA DIRECTA)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        got_asat: [
            /ASPARTATO AMINO TRANSFERASA[\s\S]*?\(ASAT\/GOT\)[\s\S]*?(\d+\.?\d*)\s*U\/L/i,
            /Transaminasa GOT\/ASAT\s*\*?\s*(\d+\.?\d*)\s*U\/L/i,
            /(?:GOT|ASAT)\s*\*?\s*(\d+\.?\d*)\s*U\/L/i
        ],
        gpt_alt: [
            /ALANINA AMINO TRANSFERASA[\s\S]*?\(ALAT\/GPT\)[\s\S]*?[hi]*\s*(\d+\.?\d*)\s*U\/L/i,
            /Transaminasa GPT\/\s?ALT\s*\*?\s*(\d+\.?\d*)\s*U\/L/i,
            /(?:GPT|ALT)\s*[hi]*\s*(\d+\.?\d*)\s*U\/L/i
        ],
        fosfatasa_alcalina: /(?:Fosfatasa Alcalina|FOSFATASAS ALCALINAS)\s*[hi*]*\s*(\d+\.?\d*)\s*U\/L/i,
        ggt: [
            /Gamma Glutamiltranspeptidasa\s*\*?\s*(\d+\.?\d*)\s*U\/L/i,
            /GAMAGLUTAMIL TRANSFERASA \(GGT\)\s*[hi]*\s*(\d+\.?\d*)\s*U\/L/i
        ],
        amilasa: /AMILASA\s*[hi]*\s*(\d+\.?\d*)\s*U\/L/i,
        lipasa: /LIPASA\s*[hi]*\s*(\d+\.?\d*)\s*U\/L/i
    },

    // ============== NUTRICIONAL ==============
    nutricional: {
        proteinas: /(?:Proteínas|PROTEINAS TOTALES)\s*[hi*]*\s*(\d+\.?\d*)\s*g\/dL/i,
        albumina: /(?:Albúmina|ALBUMINA)\s*[hi*]*\s*(\d+\.?\d*)\s*g\/dL/i,
        prealbumin: /(?:Prealbúmina|Prealbumina|PRE-ALBUMINA)\s*[hi*]*\s*(\d+\.?\d*)/i,
        colesterol_total: /(?:Colesterol Total|COLESTEROL TOTAL)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        ldl: /(?:Colesterol LDL|LDL)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        hdl: /(?:Colesterol HDL|HDL)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i
    },

    // ============== PCR Y MARCADORES ==============
    pcr: {
        pcr: [
            /PROTEINA\s+C\s+REACTIVA\s*\(?CRP\)?\s*[hi*]*\s*(\d+\.?\d*)\s+mg\/L/i,
            /Proteína\s+C\s+Reactiva\s*\*?\s*(\d+\.?\d*)\s+mg\/L/i
        ],
        procalcitonina: /Procalcitonina\s*\*?\s*(\d+\.?\d*)\s+ng\/mL/i,
        vhs: /(?:VHS|Velocidad\s+de\s+Sedimentación)\s*\*?\s*(\d+\.?\d*)\s*mm\/hr?/i
    },

    // ============== COAGULACIÓN ==============
    coagulacion: {
        inr: /INR\s*[hi]*\s*(\d+\.?\d*)/i,
        tiempo_protrombina: /TIEMPO DE PROTROMBINA\s*[hi]*\s*(\d+\.?\d*)\s*Segundos/i,
        porcentaje_tp: /%\s*TP\s*[hi]*\s*(\d+\.?\d*)\s*%/i,
        ttpa: /TIEMPO DE TROMBOPLASTINA PARCIAL\s+ACTIVADO\s*[hi]*\s*(\d+\.?\d*)\s*Segundos/i
    },

    // ============== GASES ==============
    gases: {
        ph: /\bpH\s*[hi]*\s*(\d+\.?\d*)/i,
        pco2: /PCO2[\s\S]*?(\d+\.?\d*)\s+mmHg/i,
        hco3: /HCO3[\s\S]*?(\d+\.?\d*)\s+mmol\/L/i,
        saturacion_o2: /%\s+Saturación\s+O2[\s\S]*?(\d+\.?\d*)\s+%/i
    },

    // ============== FECHAS ==============
    fechas: {
        patrones: [
            /Recepcion\s+muestra\s*:\s*(\d{2}[-\/]\d{2}[-\/]\d{4})/i,
            /Fecha\s+(\d{2}\/\d{2}\/\d{4})/i,
            /Toma Muestra:\s*(\d{2}\/\d{2}\/\d{4})/i,
            /Fecha\/Hora de T\. muestra\s*:\s*(\d{2}\/\d{2}\/\d{4})/i,
            /^(\d{2}\/\d{2}\/\d{4})/m,
            /(\d{2}\/\d{2}\/\d{4})/
        ]
    }
};


// ==========================================
// VERSIÓN 1.2 - Patrones Flexibles (Nuevos)
// ==========================================
const PATTERNS_V1_2 = {
    // ============== HEMOGRAMA ==============
    hemograma: {
        hemoglobina: /HEMOGLOBINA\s*[hi*]*\s*(\d+\.?\d*)\s*g\/dL/i,
        hematocrito: /HEMATOCRITO\s*[hi*]*\s*(\d+\.?\d*)\s*%/i,
        leucocitos: /(?:RECUENTO\s+(?:DE\s+)?LEUCOCITOS|LEUCOCITOS)\s*[hi*]*\s*(\d+\.?\d*)\s*(?:10\^3|10e3)\/uL/i,
        neutrofilos_porcentaje: /NEUTROFILOS\s*%\s*[hi*]*\s*(\d+\.?\d*)\s*%/i,
        linfocitos_porcentaje: /LINFOCITOS\s*%\s*[hi*]*\s*(\d+\.?\d*)\s*%/i,
        plaquetas: /RECUENTO\s+(?:DE\s+)?PLAQUETAS\s*[hi*]*\s*(\d+)\s*(?:10\^3|10e3)\/uL/i,
        vcm: /VCM-?\s*VOLUMEN\s+CORPUSCULAR\s+MEDIO\s\D*(\d+\.?\d*)\s*fL/i,
        chcm: /CHCM\s*-\s*CONC\.\s*Hb\s*CORPUSCULAR\s*MEDIA\s\D*(\d+\.?\d*)\s*g\/dL/i,
        rdw: /RDW\s*[i]?\s\D*(\d+\.?\d*)\s*%/i,
        reticulocitos: /RETICULOCITOS\s\D*(\d+\.?\d*)\s*%/i,
        neutrofilos_absoluto: /NEUTROFILOS\s*[hi*]*\s*(\d+\.?\d*)\s*(?:10\^3|10e3)\/uL/i,
        linfocitos_absoluto: /LINFOCITOS\s*[hi*]*\s*(\d+\.?\d*)\s*(?:10\^3|10e3)\/uL/i
    },

    // ============== FUNCIÓN RENAL ==============
    renal: {
        creatinina: /CREATININA(?:\s+EN\s+SUERO|:\s*)?\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        vfg: /VFG(?:\s+FEMENINO)?:\s*(\d+\.?\d*)\s*mL\/min/i,
        bun: /BUN:?\s*[hi*]*\s*(\d+\.?\d*)\s*mg(?:%|\/dl)?/i,
        urea: /UREA:?\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        sodio: /(?:ELECTROLITO\s+)?SODIO\s*[hi*]*\s*(\d+\.?\d*)\s*(?:mEq\/L|mmol\/l)/i,
        potasio: /(?:ELECTROLITO\s+)?POTASIO\s*[hi*]*\s*(\d+\.?\d*)\s*(?:mEq\/L|mmol\/l)/i,
        cloro: /(?:ELECTROLITO\s+)?CLORO\s*[hi*]*\s*(\d+\.?\d*)\s*(?:mEq\/L|mmol\/l)/i,
        fosforo: /FOSFORO\s*(?:SERICO)?:?\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        calcio: /CALCIO:?\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        magnesio: /MAGNESIO:?\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        acido_urico: /ACIDO\s+URICO:?\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i
    },

    // ====== ORINA ======
    orina: {
        rac: /RAC:\s+([hi]?\s*\d+\.?\d*)\s+mg\/grs/i,
        microalbuminuria: /MICROALBUMINURIA:\s+([hi]?\s*\d+\.?\d*)\s+mg\/l/i,
        creatinina_orina: /CREATININA EN ORINA:\s+([hi]?\s*\d+\.?\d*)\s+mg\/dl/i
    },

    // ============== FUNCIÓN HEPÁTICA ==============
    hepatico: {
        bilirrubina_total: /(?:Bilirrubina Total|BILIRRUBINA TOTAL:?)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        bilirrubina_directa: /(?:Bilirrubina Directa|BILIRRUBINA DIRECTA:?)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/dL/i,
        got_asat: [
            /ASPARTATO AMINO TRANSFERASA[\s\S]*?\(ASAT\/GOT\)[\s\S]*?(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
            /Transaminasa GOT\/ASAT\s*\*?\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
            /(?:GOT|ASAT|G\.O\.T:)\s*\*?\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i
        ],
        gpt_alt: [
            /ALANINA AMINO TRANSFERASA[\s\S]*?\(ALAT\/GPT\)[\s\S]*?[hi]*\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
            /Transaminasa GPT\/\s?ALT\s*\*?\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
            /(?:GPT|ALT|G\.P\.T:)\s*[hi]*\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i
        ],
        fosfatasa_alcalina: /(?:Fosfatasa Alcalina|FOSFATASAS ALCALINAS|FOSFATASA ALCALINA:?)\s*[hi*]*\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
        ggt: [
            /Gamma Glutamiltranspeptidasa\s*\*?\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
            /(?:GAMAGLUTAMIL TRANSFERASA \(GGT\)|GGT)\s*[hi]*\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i
        ],
        amilasa: /AMILASA:?\s*[hi]*\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
        lipasa: /LIPASA:?\s*[hi]*\s*(\d+\.?\d*)\s*(?:U\/L|UI\/l)/i,
        ldh: /LACTATO DESHIDROGENASA \(LDH\)\s+([hi]?\s*\d+\.?\d*)\s+UI\/l/i
    },

    // ============== NUTRICIONAL ==============
    nutricional: {
        proteinas: /(?:Proteínas|PROTEINAS TOTALES:?)\s*[hi*]*\s*(\d+\.?\d*)\s*g\/dL/i,
        albumina: /(?:Albúmina|ALBUMINA:?)\s*[hi*]*\s*(\d+\.?\d*)\s*g\/dL/i,
        prealbumin: /(?:Prealbúmina|Prealbumina|PRE-ALBUMINA)\s*[hi*]*\s*(\d+\.?\d*)/i,
        colesterol_total: /(?:Colesterol Total|COLESTEROL TOTAL:?)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/d[lL]/i,
        ldl: /(?:Colesterol LDL|LDL|COLESTEROL LDL:?)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/d[lL]/i,
        hdl: /(?:Colesterol HDL|HDL|COLESTEROL HDL:?)\s*[hi*]*\s*(\d+\.?\d*)\s*mg\/d[lL]/i,
        hba1c: /HEMOGLOBINA GLICOSILADA \(HbA1c\):\s*([hi]?\s*\d+\.?\d*)\s*%/i,
        trigliceridos: /TRIGLICERIDOS:\s*([hi]?\s*\d+\.?\d*)\s*mg\/dl/i
    },

    // ============== PCR Y MARCADORES ==============
    pcr: PATTERNS_V1_1.pcr, // Sin cambios mayores detectados

    // ============== COAGULACIÓN ==============
    coagulacion: {
        inr: /INR\s*[hi*]*\s*(\d+\.?\d*)/i,
        tiempo_protrombina: /TIEMPO DE PROTROMBINA\s*[hi*]*\s*(\d+\.?\d*)\s*Segundos/i,
        porcentaje_tp: /%\s*TP\s*[hi*]*\s*(\d+\.?\d*)\s*%/i,
        ttpa: /TIEMPO DE TROMBOPLASTINA PARCIAL\s+ACTIVADO\s*[hi*]*\s*(\d+\.?\d*)\s*Segundos/i
    },

    // ============== GASES ==============
    gases: {
        ph: /\bpH\s*[hi*]*\s*(\d+\.?\d*)/i,
        pco2: /PCO2[\s\S]*?(\d+\.?\d*)\s+mmHg/i,
        hco3: /HCO3[\s\S]*?(\d+\.?\d*)\s+mmol\/L/i,
        saturacion_o2: /%\s+Saturación\s+O2[\s\S]*?(\d+\.?\d*)\s+%/i
    },

    // ============== FECHAS ==============
    fechas: PATTERNS_V1_1.fechas
};


// Inicialización global
window.EXTRACTION_PATTERNS = PATTERNS_V1_2; // Por defecto V 1.2

// Función para buscar con múltiples patrones (común a ambas versiones)
function buscarConPatrones(texto, patrones) {
    if (patrones instanceof RegExp) {
        patrones = [patrones];
    }
    for (let patron of patrones) {
        let coincidencia = texto.match(patron);
        if (coincidencia) {
            return coincidencia;
        }
    }
    return null;
}

// Función común para extraer valor
function extraerValor(texto, patron) {
    let coincidencia = buscarConPatrones(texto, patron);
    return coincidencia ? coincidencia[1] : null;
}

// Función para cambiar la versión de patrones
function setExtractionVersion(version) {
    if (version === '1.1') {
        window.EXTRACTION_PATTERNS = PATTERNS_V1_1;
        console.log('Cambiado a patrones V 1.1 (Estricto)');
    } else {
        window.EXTRACTION_PATTERNS = PATTERNS_V1_2;
        console.log('Cambiado a patrones V 1.2 (Flexible)');
    }
}

// Exportar globalmente
window.buscarConPatrones = buscarConPatrones;
window.extraerValor = extraerValor;
window.setExtractionVersion = setExtractionVersion;
