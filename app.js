
document.getElementById('output').style.visibility = 'hidden';

 document.getElementById('units').addEventListener('change', function(ev) {
    console.log(ev.target.value);
    let units = document.getElementById('unitInput').value;
    if (units === '') {
        document.getElementById('unitInput').addEventListener('input', function(e) {
            e.preventDefault(); 
            showValues(ev.target.value, e.target.value)
        })
    } else {
        console.log(units)
        showValues(ev.target.value, units)
    }

    function showValues(measure, units) {
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('lbOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('gramsOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('ozOutput').parentElement.parentElement.style.display = 'block';
        document.getElementById('kgOutput').parentElement.parentElement.style.display = 'block';
        if (measure === 'grams') {
            document.getElementById('lbOutput').innerHTML = units * 0.00220462;
            document.getElementById('gramsOutput').parentElement.parentElement.style.display = 'none';
            document.getElementById('kgOutput').innerHTML = units/1000;
            document.getElementById('ozOutput').innerHTML = units*0.03527396195;
        } else if (measure === 'pounds') {
            document.getElementById('lbOutput').parentElement.parentElement.style.display = 'none';
            document.getElementById('gramsOutput').innerHTML = units/0.0022046;
            document.getElementById('kgOutput').innerHTML = units/2.2046;
            document.getElementById('ozOutput').innerHTML = units*16;
        } else if (measure === 'kilograms') {
            document.getElementById('lbOutput').innerHTML = units * 2.2046;
            document.getElementById('gramsOutput').innerHTML = units * 1000;
            document.getElementById('kgOutput').parentElement.parentElement.style.display = 'none';
            document.getElementById('ozOutput').innerHTML = units*35.274;
        } else if (measure === 'ounces'){
            document.getElementById('lbOutput').innerHTML = units * 0.0625;
            document.getElementById('gramsOutput').innerHTML = units * 28.3495;
            document.getElementById('kgOutput').innerHTML = units * 0.0283495;
            document.getElementById('ozOutput').parentElement.parentElement.style.display = 'none';
        }
    }

})



