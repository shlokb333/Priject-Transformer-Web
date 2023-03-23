function calculate ()
{
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

    document.getElementById("coresize").innerHTML = "Core Size = " + Math.round((coreSize + Number.EPSILON) * 100) / 100 + " cubic mm";

    document.getElementById("insulationOnCore").innerHTML = "Insulation on Core = " + Math.round((insulationOnCore + Number.EPSILON) * 100) / 100 + " kV";

    document.getElementById("crossectionForPrimary").innerHTML = "Cross Section for primary = " + Math.round((crossectionForPrimary + Number.EPSILON) * 100) / 100 + " sq mm";

    document.getElementById("n1").innerHTML = "Primary turns = " + n1 + " turns";

    document.getElementById("crossectionForSecondary").innerHTML = "Cross Section for secondary = " + Math.round((crossectionForSecondary + Number.EPSILON) * 100000) / 1000 + " sq mm";

    document.getElementById("n2").innerHTML = "Secondary turns = " + n2 + " turns";

    document.getElementById("lengthOfPrimary").innerHTML = "Length of Primary = " + Math.round((lengthOfPrimary + Number.EPSILON) * 1000) / 100 + " m";

    document.getElementById("insulationOnPrimary").innerHTML = "Insulation On Primary = " + Math.round((insulationOnPrimary + Number.EPSILON) * 100) / 100 + " kV";
    
    window.scrollTo(0, 670);

}