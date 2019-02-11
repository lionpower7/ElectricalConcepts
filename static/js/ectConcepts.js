
const theMid = document.querySelector('.midPart');
const listPush = document.getElementById('KW_LIST');

theMid.style.display = 'flex';
theMid.style.justifyContent = 'center';
theMid.style.alignItems = 'center';
theMid.style.height = '55vh';
theMid.style.width = '100vw';

listPush.addEventListener('click', showList);

// MF = Magnetic Field | EF = Electric Field | LG = Logic Gates | BB = BreadBoard
// Display All 30 Key Words with the showList function
function showList() {
  // The Keywords - 30
  let tierOneKW = ['VOLT', 'AMP', 'OHM', 'JOULE', 'HERTZ', 'COULOMB'];
  let tierTwoKW = ['DC', 'AC', 'BATTERY', 'MF', 'EF', 'MOTOR'];
  let tierThreeKW = ['CAPACITOR', 'RESISTOR', 'GROUND', 'CONDUCTOR', 'INSULATOR', 'LG'];
  let tierFourKW = ['DIODE', 'BB', 'TRANSFORMER', 'ATOM', 'ELECTRONS', 'CURRENT'];
  let tierFiveKW = ['PRESSURE', 'ALTERNATOR', 'CHARGE', 'CYCLE', 'CALIBRATION', 'DISCHARGE'];

  // Create The List
  const listBox = document.createElement('ol');

  // Create 5 div's inside the ol to seperate the 'tiers'
  const firstSet = document.createElement('div');
  firstSet.id = 'theFirstSet aSet';

  const secondSet = document.createElement('div');
  secondSet.id = 'theSecondSet aSet';

  const thirdSet = document.createElement('div');
  thirdSet.id = 'theThirdSet aSet';

  const fourthSet = document.createElement('div');
  fourthSet.id = 'theFourthSet aSet';

  const fifthSet = document.createElement('div');
  fifthSet.id = 'theFifthSet aSet';

  // Append The Five divs To 'ListBox'  
  listBox.appendChild(firstSet);
  listBox.appendChild(secondSet);
  listBox.appendChild(thirdSet);
  listBox.appendChild(fourthSet);
  listBox.appendChild(fifthSet);

  // 'listBox' Properties + Intro Animation
  listBox.className = 'showKeyWords animated fadeInLeft 2s';

  // 1st Set
  let vt = '<li>' + tierOneKW[0] + '</li>';
  let ap = '<li>' + tierOneKW[1] + '</li>';
  let om = '<li>' + tierOneKW[2] + '</li>';
  let je = '<li>' + tierOneKW[3] + '</li>';
  let hz = '<li>' + tierOneKW[4] + '</li>';
  let cb = '<li>' + tierOneKW[5] + '</li>';

  // Add 1st Set to the First Div
  firstSet.innerHTML = `${vt} ${ap} ${om} ${je} ${hz} ${cb}`;

  firstSet.style.display = 'flex';
  firstSet.style.justifyContent = 'center';
  firstSet.style.width = '100%';
  firstSet.style.textAlign = 'center';

  // 2nd Set
  let dc = '<li>' + tierTwoKW[0] + '</li>';
  let ac = '<li>' + tierTwoKW[1] + '</li>';
  let by = '<li>' + tierTwoKW[2] + '</li>';
  let mf = '<li>' + tierTwoKW[3] + '</li>';
  let ef = '<li>' + tierTwoKW[4] + '</li>';
  let mr = '<li>' + tierTwoKW[5] + '</li>';

  // Add 2nd Set to the Second Div
  secondSet.innerHTML = `${dc} ${ac} ${by} ${mf} ${ef} ${mr}`;

  secondSet.style.display = 'flex';
  secondSet.style.justifyContent = 'center';
  secondSet.style.width = '100%';
  secondSet.style.textAlign = 'center';
  

  // 3rd Set
  let cr = '<li>' + tierThreeKW[0] + '</li>';
  let rr = '<li>' + tierThreeKW[1] + '</li>';
  let gd = '<li>' + tierThreeKW[2] + '</li>';
  let cdr = '<li>' + tierThreeKW[3] + '</li>';
  let ir = '<li>' + tierThreeKW[4] + '</li>';
  let lg = '<li>' + tierThreeKW[5] + '</li>';

  // Add 3rd Set to the third Div
  thirdSet.innerHTML = `${cr} ${rr} ${gd} ${cdr} ${ir} ${lg}`;

  thirdSet.style.display = 'flex';
  thirdSet.style.justifyContent = 'center';
  thirdSet.style.width = '100%';
  thirdSet.style.textAlign = 'center';


  // 4th Set
  let de = '<li>' + tierFourKW[0] + '</li>';
  let bb = '<li>' + tierFourKW[1] + '</li>';
  let tr = '<li>' + tierFourKW[2] + '</li>';
  let am = '<li>' + tierFourKW[3] + '</li>';
  let es = '<li>' + tierFourKW[4] + '</li>';
  let ct = '<li>' + tierFourKW[5] + '</li>';

  // Add 4th Set to the fourth Div
  fourthSet.innerHTML = `${de} ${bb} ${tr} ${am} ${es} ${ct}`;

  fourthSet.style.display = 'flex';
  fourthSet.style.justifyContent = 'center';
  fourthSet.style.width = '100%';
  fourthSet.style.textAlign = 'center';


  // 5th Set
  let pe = '<li>' + tierFiveKW[0] + '</li>';
  let ar = '<li>' + tierFiveKW[1] + '</li>';
  let ce = '<li>' + tierFiveKW[2] + '</li>';
  let cye = '<li>' + tierFiveKW[3] + '</li>';
  let cn = '<li>' + tierFiveKW[4] + '</li>';
  let dse = '<li>' + tierFiveKW[5] + '</li>';

  // Add 5th Set to the 5th Div
  fifthSet.innerHTML = `${pe} ${ar} ${ce} ${cye} ${cn} ${dse}`;

  fifthSet.style.display = 'flex';
  fifthSet.style.justifyContent = 'center';
  fifthSet.style.width = '100%';
  fifthSet.style.textAlign = 'center';

  // Style The List
  lbg = '#fff';
  listBox.style.background = lbg;
  listBox.style.color = 'gray';
  listBox.style.listStyle = 'none';
  listBox.style.height = '90%';
  listBox.style.width = '90%';
  listBox.style.borderRadius = '10px';
  listBox.style.padding = '10px';
  listBox.style.fontFamily = 'Quicksand';
  listBox.style.fontSize = '2.1rem';
  listBox.style.textAlign = 'center';

  // Add The List To The 2nd Section In Our HTML
  theMid.appendChild(listBox);
  
  listPush.style.display = 'none';
}