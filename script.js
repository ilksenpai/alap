function calculateFinances() {
    let curr_sp = 18159.32; // current spent -- kredi kartı ekstresinde bugün için yazan miktar
    let payment = 1746.65 + 5589.64 + 800.40; // taksit olarak ödenen miktarlar
    let subs = 76.99 + 134.99 + 237.4 + 305.99; // abonelikler -- netflix, spotify vb gibi
    let oneTime_sp = payment + subs; // taksit maksit (tek seferlik harcamalar)
    let dayCount = 31; // o ay kaç çekiyosa o
    let currDay = 22; // current day
    let wage = 30000; // aylık gelir
    let saveGoal = 5000; // aylık biriktirme hedefi
    let debt = 450 + 200 + 300; // millete olan borçlar
    let perc = 0.05; // birikim hesabı %si

    let max_sp = wage - saveGoal - debt;

    let recurr_sp = curr_sp - oneTime_sp;

    let totRecurr_sp = recurr_sp * dayCount / currDay;

    let tot_sp = totRecurr_sp + oneTime_sp + debt;

    let save = wage - tot_sp;

    let fac = save / saveGoal;

    let mustSave = perc * tot_sp;

    let save_sp = tot_sp + mustSave;

    document.getElementById("total_spending").innerHTML = `Total Spending Prediction: ${tot_sp.toFixed(2)} TL`;
    document.getElementById("total_saving").innerHTML = `Total Saving Prediction: ${save.toFixed(2)} TL, which is ${fac.toFixed(1)} times the saving goal!`;
    document.getElementById("saving_account").innerHTML = `Saving Account Prediction: ${mustSave.toFixed(2)} TL`;

    if (tot_sp > max_sp) {
        document.getElementById("result").innerHTML = `<span style="color:red;">You have been cursed by ALAP!</span>`;
    } else {
        document.getElementById("result").innerHTML = `<span style="font-weight:bold;">You have been blessed by ALAP!</span>`;
    }
}
