

//MF = Magnetic Field | EF = Electric Field | LG = Logic Gates | BB = BreadBoard

function showList() {
  // The Keywords - 30
  var tierOneKW = ['VOLT', 'AMP', 'OHM', 'JOULE', 'HERTZ', 'COULOMB'];
  var tierTwoKW = ['DC', 'AC', 'BATTERY', 'MF', 'EF', 'MOTOR'];
  var tierThreeKW = ['CAPACITOR', 'RESISTOR', 'GROUND', 'CONDUCTOR', 'INSULATOR', 'LG'];
  var tierFourKW = ['DIODE', 'BB', 'TRANSFORMER', 'ATOM', 'ELECTRONS', 'CURRENT'];
  var tierFiveKW = ['PRESSURE', 'ALTERNATOR', 'CHARGE', 'CYCLE', 'CALIBRATION', 'DISCHARGE'];

  //  'wholeTier' will hold the container where list will be displayed.
  var wholeTier = document.getElementsByClassName('wTier');

  // We will first create an element to append it to 'wholeTier'
  var listPart = document.createElement('div');
  listPart.setAttribute('class', 'listPT animated fadeInRight 2s');
  wholeTier.appendChild(listPart);

  // listPT will have 3 children, an <h1>, a <p> & a <div id="listKW">
  var listForKW = document.createElement('div');
  listForKW.setAttribute('id', 'listKW');

  // Now we will define the innerhtml of that element(listPart)
  listPart.innerHTML = '<h1>Keywords To Enter</h1> <p>30 Electrical Terms</p>';

  // Add List To The End Of 'listPT'
  listPart.appendChild(listForKW);

  // Styling 'listPart'
  listPart.style.fontFamily = 'PT Sans';
  listPart.style.color = '#104055';
  listPart.style.textAlign = 'center';
  listPart.style.display = 'flex';
  listPart.style.flexDirection = 'column';
  listPart.style.justifyContent = 'center';
  listPart.style.alignItems = 'center';
  listPart.style.padding = '5px';
}

showList();
