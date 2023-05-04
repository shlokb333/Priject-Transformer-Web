function calculate() {
    var types = document.querySelector('input[name="type"]:checked').value;
    var burden = parseInt(document.getElementById("burden").value);

    var voltageRating = parseInt(document.getElementById("voltage-rating").value);

    var classType = parseInt(document.getElementById("class-type").value);

    var a1 = parseInt(document.getElementById("ct-ratio-1").value);
    var a2 = 5;

    var stc = 13.1;
    if (a1 / a2 >= 50 / 5) {
        stc = 26.3;
    }

    var freq = 50; // Hz

    var n2 = 60;

    var currDensity = 1.0; // W/m^2

    var vA = burden / a2; // Volt

    var area = (4.44 * freq * n2 * currDensity) / vA; // m^2

    var n1 = a2 * n2 / a1;

    var crossection = (stc * 1000) / 180;

    var totalCrossection = crossection * n1;

    var diameter = Math.sqrt(crossection * 4 / Math.PI);

    var insulation = 40;

    var internalDiameter = insulation + diameter;

    var height = 30;

    var outerDiameter = (2 * area / height) + internalDiameter;

    var copperCurrentDensity = 1.65;

    var coreSize = outerDiameter * internalDiameter * height;

    var insulationOnCore = 3; // kV

    var crossectionForPrimary = (a1 / copperCurrentDensity);

    var crossectionForSecondary = (a2 / copperCurrentDensity);

    var lengthOfPrimary = (15 * (a1 / a2)) / 100;

    var insulationOnPrimary = (10 / 33) * voltageRating;

    document.getElementById("coresize").innerHTML = "Core Size = " + Math.ceil(outerDiameter) + " mm x "
        + Math.ceil(internalDiameter) + " mm x "
        + Math.ceil(height) + " mm";

    document.getElementById("insulationOnCore").innerHTML = "Insulation on Core = " + Math.round((insulationOnCore + Number.EPSILON) * 100) / 100 + " kV";

    document.getElementById("crossectionForPrimary").innerHTML = "Cross Section for primary = " + Math.round((crossectionForPrimary + Number.EPSILON) * 100) / 100 + " sq mm";

    document.getElementById("n1").innerHTML = "Primary turns = " + n1 + " turns";

    document.getElementById("crossectionForSecondary").innerHTML = "Cross Section for secondary = " + Math.round((crossectionForSecondary + Number.EPSILON) * 100000) / 1000 + " sq mm";

    document.getElementById("n2").innerHTML = "Secondary turns = " + n2 + " turns";

    document.getElementById("lengthOfPrimary").innerHTML = "Length of Primary = " + Math.round((lengthOfPrimary + Number.EPSILON) * 1000) / 100 + " m";

    document.getElementById("insulationOnPrimary").innerHTML = "Insulation On Primary = " + Math.round((insulationOnPrimary + Number.EPSILON) * 100) / 100 + " kV";


    //For 3D Model
    
    
    window.scrollTo(0, 670);

}

function passvalues() {

    var types = document.querySelector('input[name="type"]:checked').value;



    var burden = parseInt(document.getElementById("burden").value);

    var voltageRating = parseInt(document.getElementById("voltage-rating").value);

    var classType = document.getElementById("class-type").value;

    var a1 = parseInt(document.getElementById("ct-ratio-1").value);
    var a2 = 5;

    var stc = 13.1;
    if (a1 / a2 >= 50 / 5) {
        stc = 26.3;
    }

    var freq = 50; // Hz

    var n2 = 60;

    var currDensity = 1.0; // W/m^2

    var vA = burden / a2; // Volt

    var area = (4.44 * freq * n2 * currDensity) / vA; // m^2

    var n1 = a2 * n2 / a1;

    var crossection = (stc * 1000) / 180;

    var totalCrossection = crossection * n1;

    var diameter = Math.sqrt(crossection * 4 / Math.PI);

    var insulation = 40;

    var internalDiameter = insulation + diameter;

    var height = 30;

    var outerDiameter = (2 * area / height) + internalDiameter;

    var copperCurrentDensity = 1.65;

    var coreSize = outerDiameter * internalDiameter * height;

    var insulationOnCore = 3; // kV

    var crossectionForPrimary = (a1 / copperCurrentDensity);

    var crossectionForSecondary = (a2 / copperCurrentDensity);

    var lengthOfPrimary = (15 * (a1 / a2)) / 100;

    var insulationOnPrimary = (10 / 33) * voltageRating;

    // Passing Values to Local Storage
    localStorage.setItem("Type", types);
    localStorage.setItem("VoltRat", voltageRating); //Voltage Rating 
    localStorage.setItem("CTNumerator", a1);
    localStorage.setItem("CTDenominator", a2);
    localStorage.setItem("Burden", burden);
    localStorage.setItem("ClassType", classType);
    localStorage.setItem("STC", stc);
    localStorage.setItem("ID", Math.ceil(internalDiameter));
    localStorage.setItem("OD", Math.ceil(outerDiameter));
    localStorage.setItem("H", Math.ceil(height));
    localStorage.setItem("INSC", insulationOnCore);
    localStorage.setItem("LenOfPrim", Math.round((lengthOfPrimary + Number.EPSILON) * 1000) / 100);
    localStorage.setItem("InsulationOnPrimary", insulationOnPrimary.toPrecision(2));
    localStorage.setItem("PrimaryTurns", n1);
    localStorage.setItem("SecondaryTurns", n2);
    localStorage.setItem("CSP", Math.round((crossectionForPrimary + Number.EPSILON) * 100) / 100);
    localStorage.setItem("CrossForSecondary", Math.round((crossectionForSecondary + Number.EPSILON) * 100000) / 1000);

    return false;
}