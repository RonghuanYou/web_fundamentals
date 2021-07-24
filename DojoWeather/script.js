// clicking a city will triger an alert
function displayAlert(){
    alert("Loading weather report...")
}

function dismissCookie(){
    var cookieContainerTag = document.querySelector(".cookie-container")
    cookieContainerTag.remove()
}

// CHALLENGE PART
function celsiusToFahrenheit(highTagIdentity, lowTagIdentity){
    // return low and high temperature in Fahrenheit type
    var todayHighTempF = 0, todayLowTempF = 0;
    highSpanTag = document.querySelector(highTagIdentity)
    todayHighTempF = Math.round(parseInt(highSpanTag.innerHTML) * (9/5) + 32)

    lowSpanTag = document.querySelector(lowTagIdentity)
    todayLowTempF = Math.round((parseInt(lowSpanTag.innerHTML) * (9/5) + 32))
    return [todayHighTempF, todayLowTempF]
}


function fahrenheitToCelsius(highTagIdentity, lowTagIdentity){
    // return low and high temperature in Celsius type
    var todayHighTempC = 0, todayLowTempC = 0;
    highSpanTag = document.querySelector(highTagIdentity)
    todayHighTempC = Math.round((parseInt(highSpanTag.innerHTML) - 32) * (5/9))

    lowSpanTag = document.querySelector(lowTagIdentity)
    todayLowTempC = Math.round((parseInt(lowSpanTag.innerHTML) - 32) * (5/9))
    return [parseInt(todayHighTempC), parseInt(todayLowTempC)]
}

function displayChange(highLowArr){
    highSpanTag.innerHTML = highLowArr[0] + "°"
    lowSpanTag.innerHTML = highLowArr[1] + "°"
}


function changeTempType(element){
    if (element.value == "°C"){
        highLowArr = fahrenheitToCelsius(".today-high", ".today-low")
        displayChange(highLowArr)

        highLowArr = fahrenheitToCelsius(".tomorrow-high", ".tomorrow-low")
        displayChange(highLowArr)

        highLowArr = fahrenheitToCelsius(".friday-high", ".friday-low")
        displayChange(highLowArr)

        highLowArr = fahrenheitToCelsius(".saturday-high", ".saturday-low")
        displayChange(highLowArr)
    } else if (element.value === "°F"){
        highLowArr = celsiusToFahrenheit(".today-high", ".today-low")
        displayChange(highLowArr)

        highLowArr = celsiusToFahrenheit(".tomorrow-high", ".tomorrow-low")
        displayChange(highLowArr)

        highLowArr = celsiusToFahrenheit(".friday-high", ".friday-low")
        displayChange(highLowArr)

        highLowArr = celsiusToFahrenheit(".saturday-high", ".saturday-low")
        displayChange(highLowArr)
    }
}

