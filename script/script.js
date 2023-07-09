$(document).ready(function() {
    function calculate() {
        const entryVal = parseFloat($('#entry').val());
        const slVal = parseFloat($('#sl').val());
        const riskVal = parseFloat($('#risk').val());
        const rewardVal = parseFloat($('#rewardVal').val());

        if(!isNaN(entryVal) && !isNaN(slVal) && !isNaN(riskVal)) {
            let qtyVal = riskVal/(entryVal-slVal);
            let targetVal  = (entryVal - slVal) * rewardVal + entryVal;
            let totalCost = entryVal * qtyVal;

            $('#targetVal').val('Target : ' + targetVal.toFixed(2));
            $('#netQty').val('Qty : ' + Math.round(Math.abs(qtyVal)));
            $('#netCost').val('Total Cost : ' + Math.abs(totalCost).toFixed(2));
        }else {
            alert('All fields are required!');
        }
    }

    $('#calculateBtn').on('click', function() {
        calculate();
    });

    $('#rewardVal').on('change', function() {
        calculate();
    });

    

    //Reset form
    $('#resetForm').on('click', function() {
        $('#myForm').trigger('reset');
    })
})