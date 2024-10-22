function calculateFinances() {
    let curr_sp = parseFloat(document.getElementById("curr_sp").value); // current spent
    let payment = parseFloat(document.getElementById("payment").value); // payments
    let subs = parseFloat(document.getElementById("subs").value); // subscriptions
    let dayCount = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(); // automatically get the last day of the current month
    let currDay = new Date().getDate(); // automatically get the current day of the month
    let wage = parseFloat(document.getElementById("wage").value); // monthly income
    let saveGoal = parseFloat(document.getElementById("saveGoal").value); // saving goal
    let debt = parseFloat(document.getElementById("debt").value); // debts
    let perc = parseFloat(document.getElementById("perc").value); // saving account percentage

    let oneTime_sp = payment + subs;

    let max_sp = wage - saveGoal - debt;
    let recurr_sp = curr_sp - oneTime_sp;
    let totRecurr_sp = recurr_sp * dayCount / currDay;
    let tot_sp = totRecurr_sp + oneTime_sp + debt;
    let save = wage - tot_sp;
    let fac = save / saveGoal;
    let mustSave = perc / 100 * tot_sp;
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
