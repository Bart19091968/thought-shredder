export const STORM_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900' preserveAspectRatio='xMidYMid slice'>
  <defs>
    <linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='%231a1e2e'/><stop offset='25%' stop-color='%23262d3f'/>
      <stop offset='45%' stop-color='%23343248'/><stop offset='60%' stop-color='%233d3a52'/>
      <stop offset='75%' stop-color='%23454238'/><stop offset='100%' stop-color='%232a3328'/>
    </linearGradient>
    <linearGradient id='field' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='%23283020'/><stop offset='100%' stop-color='%231d2518'/>
    </linearGradient>
    <filter id='b1'><feGaussianBlur stdDeviation='30'/></filter>
    <filter id='b2'><feGaussianBlur stdDeviation='50'/></filter>
  </defs>
  <rect width='1440' height='900' fill='url(%23sky)'/>
  <rect y='580' width='1440' height='320' fill='url(%23field)'/>
  <ellipse cx='300' cy='600' rx='800' ry='40' fill='%23252d1f' opacity='0.5'/>
  <ellipse cx='200' cy='120' rx='280' ry='90' fill='%231e2233' filter='url(%23b1)'/>
  <ellipse cx='600' cy='80' rx='350' ry='110' fill='%23252840' filter='url(%23b1)'/>
  <ellipse cx='1000' cy='100' rx='300' ry='85' fill='%231c2030' filter='url(%23b1)'/>
  <ellipse cx='1300' cy='140' rx='250' ry='95' fill='%23222638' filter='url(%23b1)'/>
  <ellipse cx='400' cy='200' rx='400' ry='70' fill='%232a2d42' filter='url(%23b2)' opacity='0.6'/>
  <ellipse cx='900' cy='180' rx='350' ry='80' fill='%23282b3e' filter='url(%23b2)' opacity='0.5'/>
  <ellipse cx='720' cy='350' rx='500' ry='120' fill='%23504838' filter='url(%23b2)' opacity='0.15'/>
  <line x1='300' y1='250' x2='290' y2='450' stroke='%23ffffff' stroke-width='0.5' opacity='0.04'/>
  <line x1='500' y1='200' x2='492' y2='420' stroke='%23ffffff' stroke-width='0.5' opacity='0.05'/>
  <line x1='800' y1='230' x2='793' y2='440' stroke='%23ffffff' stroke-width='0.5' opacity='0.04'/>
  <line x1='1100' y1='210' x2='1094' y2='430' stroke='%23ffffff' stroke-width='0.5' opacity='0.03'/>
</svg>`;

export const PEACE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900' preserveAspectRatio='xMidYMid slice'>
  <defs>
    <linearGradient id='psky' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='%2387CEEB'/><stop offset='30%' stop-color='%23A8DAEF'/>
      <stop offset='55%' stop-color='%23C8E6F5'/><stop offset='70%' stop-color='%23E0F0E8'/>
      <stop offset='100%' stop-color='%2390C48A'/>
    </linearGradient>
    <linearGradient id='pf' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='%2378B060'/><stop offset='50%' stop-color='%2368A050'/>
      <stop offset='100%' stop-color='%235A9042'/>
    </linearGradient>
    <radialGradient id='sun' cx='75%25' cy='15%25' r='20%25'>
      <stop offset='0%' stop-color='%23FFF8E1' stop-opacity='0.8'/>
      <stop offset='50%' stop-color='%23FFF3C4' stop-opacity='0.3'/>
      <stop offset='100%' stop-color='%23FFF3C4' stop-opacity='0'/>
    </radialGradient>
    <filter id='pb'><feGaussianBlur stdDeviation='20'/></filter>
  </defs>
  <rect width='1440' height='900' fill='url(%23psky)'/>
  <rect width='1440' height='900' fill='url(%23sun)'/>
  <rect y='530' width='1440' height='370' fill='url(%23pf)'/>
  <ellipse cx='400' cy='540' rx='600' ry='60' fill='%2370B858' opacity='0.7'/>
  <ellipse cx='1100' cy='555' rx='500' ry='45' fill='%2365A84D' opacity='0.6'/>
  <ellipse cx='250' cy='100' rx='120' ry='40' fill='white' opacity='0.6' filter='url(%23pb)'/>
  <ellipse cx='700' cy='80' rx='150' ry='45' fill='white' opacity='0.5' filter='url(%23pb)'/>
  <ellipse cx='1150' cy='120' rx='100' ry='35' fill='white' opacity='0.5' filter='url(%23pb)'/>
  <rect x='695' y='380' width='18' height='160' rx='4' fill='%23654321'/>
  <rect x='700' y='400' width='8' height='140' rx='2' fill='%23553318' opacity='0.5'/>
  <ellipse cx='704' cy='340' rx='80' ry='70' fill='%234A8C3F'/>
  <ellipse cx='680' cy='320' rx='55' ry='55' fill='%23559B45'/>
  <ellipse cx='730' cy='310' rx='60' ry='50' fill='%234F9540'/>
  <ellipse cx='704' cy='290' rx='45' ry='40' fill='%2360A855'/>
  <ellipse cx='688' cy='350' rx='40' ry='35' fill='%23438035'/>
  <ellipse cx='750' cy='545' rx='90' ry='12' fill='%23000000' opacity='0.08'/>
  <circle cx='300' cy='590' r='3' fill='%23FFEB3B' opacity='0.6'/>
  <circle cx='500' cy='610' r='2.5' fill='%23FF9800' opacity='0.5'/>
  <circle cx='900' cy='585' r='3' fill='%23FFEB3B' opacity='0.5'/>
  <circle cx='1100' cy='600' r='2' fill='%23FFC107' opacity='0.6'/>
  <circle cx='600' cy='620' r='2' fill='white' opacity='0.5'/>
  <circle cx='800' cy='605' r='2.5' fill='%23FFEB3B' opacity='0.4'/>
</svg>`;

export function getStormBgUrl(): string {
  return `url("data:image/svg+xml,${encodeURIComponent(STORM_SVG)}")`;
}

export function getPeaceBgUrl(): string {
  return `url("data:image/svg+xml,${encodeURIComponent(PEACE_SVG)}")`;
}
