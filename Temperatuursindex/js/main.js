function getTIW()
{
    let TempW = document.getElementById('TempWarmte').value;
    let LuchtV = document.getElementById('Luchtvochtigheid').value;
    let sumWarmte = TempW * LuchtV;
    console.log(sumWarmte);
    document.getElementById("TIW").textContent = sumWarmte;
};

function getTIK()
{
  let TempK = document.getElementById('TempKou').value;
  let Windsnelheid = document.getElementById('Windsnelheid').value;
  let sumKou = TempK + Windsnelheid;
  console.log(sumKou);
  document.getElementById("TIK").textContent = "Temperatuursindex ="+sumKou;
}