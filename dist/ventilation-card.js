/*! Ventilation Card - animated ventilation card for Home Assistant. MIT License. */
const VENTILATION_CARD_VERSION = '1.0.0';
const I18N = {
 "de": {
  "dayU": "Tage",
  "dec": ",",
  "rpm": "U/min",
  "mn": {
   "tLock": "🔒 Einstellungen (PIN-geschützt)",
   "tOpen": "🔓 Einstellungen (sperrt automatisch nach {n} Minuten)",
   "pin": "PIN eingeben",
   "lockBtn": "Jetzt sperren",
   "lockAct": "Sperren",
   "sAway": "Lüfterstufen Abwesend",
   "sHome": "Lüfterstufen Zuhause",
   "sHigh": "Lüfterstufen Hoch",
   "sFire": "Kamin",
   "sCook": "Dunstabzug",
   "sHeat": "Elbatteri",
   "supply": "Zuluft",
   "extract": "Abluft",
   "runtime": "Laufzeit Kaminmodus",
   "cookMode": "Dunstabzug-Modus",
   "heatSw": "Elbatteri Ein/Aus",
   "temp": "Solltemperatur",
   "aPin": "Flexit Menü PIN prüfen",
   "aLock": "Flexit Menü automatisch sperren"
  },
  "names": {
   "exhaust": "Fortluft",
   "outdoor": "Außenluft",
   "extract": "Abluft",
   "supply": "Zuluft",
   "heater": "Heizregister",
   "eff": "Wirkungsgrad ",
   "rot": "Rotor ",
   "today": "Heizregister heute",
   "yest": "Heizregister gestern",
   "filter": "Filter in Betrieb",
   "rest": "Filterwechsel in ({n} Monaten)"
  }
 },
 "no": {
  "dayU": "dager",
  "dec": ",",
  "rpm": "o/min",
  "mn": {
   "tLock": "🔒 Innstillinger (PIN-beskyttet)",
   "tOpen": "🔓 Innstillinger (låses automatisk etter {n} minutter)",
   "pin": "Skriv inn PIN",
   "lockBtn": "Lås nå",
   "lockAct": "Lås",
   "sAway": "Viftetrinn borte",
   "sHome": "Viftetrinn hjemme",
   "sHigh": "Viftetrinn høy",
   "sFire": "Peis",
   "sCook": "Kjøkkenhette",
   "sHeat": "Elbatteri",
   "supply": "Tilluft",
   "extract": "Avtrekk",
   "runtime": "Varighet peismodus",
   "cookMode": "Kjøkkenhette-modus",
   "heatSw": "Elbatteri på/av",
   "temp": "Settpunkt temperatur",
   "aPin": "Flexit meny PIN-sjekk",
   "aLock": "Flexit meny lås automatisk"
  },
  "names": {
   "exhaust": "Avkast",
   "outdoor": "Uteluft",
   "extract": "Avtrekk",
   "supply": "Tilluft",
   "heater": "Elbatteri",
   "eff": "Virkningsgrad ",
   "rot": "Rotor ",
   "today": "Elbatteri i dag",
   "yest": "Elbatteri i går",
   "filter": "Filter i drift",
   "rest": "Filterbytte om ({n} mnd.)"
  }
 },
 "en": {
  "dayU": "days",
  "dec": ".",
  "rpm": "rpm",
  "mn": {
   "tLock": "🔒 Settings (PIN protected)",
   "tOpen": "🔓 Settings (locks automatically after {n} minutes)",
   "pin": "Enter PIN",
   "lockBtn": "Lock now",
   "lockAct": "Lock",
   "sAway": "Fan levels Away",
   "sHome": "Fan levels Home",
   "sHigh": "Fan levels High",
   "sFire": "Fireplace",
   "sCook": "Cooker hood",
   "sHeat": "Electric heater",
   "supply": "Supply",
   "extract": "Extract",
   "runtime": "Fireplace mode runtime",
   "cookMode": "Cooker hood mode",
   "heatSw": "Electric heater on/off",
   "temp": "Temperature setpoint",
   "aPin": "Flexit menu PIN check",
   "aLock": "Flexit menu auto-lock"
  },
  "names": {
   "exhaust": "Exhaust air",
   "outdoor": "Outdoor air",
   "extract": "Extract air",
   "supply": "Supply air",
   "heater": "Electric heater",
   "eff": "Efficiency ",
   "rot": "Rotor ",
   "today": "Electric heater today",
   "yest": "Electric heater yesterday",
   "filter": "Filter in operation",
   "rest": "Filter change in ({n} months)"
  }
 }
};

const UI = {
  de: {
    sections: { general: 'Allgemein', show: 'Anzeige', tune: 'Feineinstellung', colors: 'Farben', names: 'Namen', entities: 'Entities (nur ändern, wenn sie von der Vorgabe abweichen)', menu: 'PIN-Untermenü' },
    labels: {
      language: 'Sprache', theme: 'Darstellung', device_prefix: 'Geräte-Präfix (z. B. flexit_nordic)', name: 'Name des Aggregats',
      show_temps: 'Temperaturen', show_pct: 'Lüfter in %', show_rpm: 'Lüfter U/min', show_eff: 'Wirkungsgrad', show_rot: 'Rotor', show_heater: 'Heizregister-Wert',
      show_heater_symbol: 'Heizregister-Symbol', show_filter_alarm: 'Filter-Alarm', show_frame: 'Rahmen', show_flow: 'Luftstrom-Animation', show_name: 'Name anzeigen',
      show_stats: 'Statistik unter der Karte', show_days: 'Filter in Tagen und Restlaufzeit', show_menu: 'PIN-Untermenü',
      font_scale: 'Schriftgröße (%)', fan_speed: 'Lüfter-Drehung (Sekunden pro Umdrehung)', rotor_speed: 'Rotor-Geschwindigkeit (Sekunden)', filter_months: 'Filterwechsel-Intervall (Monate)', lock_minutes: 'Menü sperrt automatisch nach (Minuten, nur Anzeige)',
      color_exhaust: 'Farbe Fortluft', color_outdoor: 'Farbe Außenluft', color_extract: 'Farbe Abluft', color_supply: 'Farbe Zuluft', color_heater: 'Farbe Heizregister', color_fan: 'Farbe Motoren (aktiv)',
      name_exhaust: 'Name Fortluft', name_outdoor: 'Name Außenluft', name_extract: 'Name Abluft', name_supply: 'Name Zuluft', name_heater: 'Name Heizregister', name_eff: 'Text vor Wirkungsgrad', name_rot: 'Text vor Rotor',
      name_today: 'Zeile „heute"', name_yest: 'Zeile „gestern"', name_filter: 'Zeile Filter', name_rest: 'Zeile Restlaufzeit ({n} = Monate)',
      entity_temp_exhaust: 'Temperatur Fortluft', entity_temp_extract: 'Temperatur Abluft', entity_temp_outdoor: 'Temperatur Außenluft', entity_temp_supply: 'Temperatur Zuluft',
      entity_heater_power: 'Heizregister Leistung (kW oder W)', entity_fan_exhaust_rpm: 'Abluft-Ventilator U/min', entity_fan_exhaust_pct: 'Abluft-Ventilator %', entity_fan_supply_pct: 'Zuluft-Ventilator %', entity_fan_supply_rpm: 'Zuluft-Ventilator U/min',
      entity_efficiency: 'Wirkungsgrad', entity_rotor: 'Rotor-Drehzahl', entity_filter_alarm: 'Filter verschmutzt (binary_sensor)', entity_filter_hours: 'Filter Betriebszeit (Stunden)',
      entity_heater_daily_meter: 'Tageszähler Heizregister (setzt um 0 Uhr zurück, kWh)', entity_heater_yesterday: 'Heizregister gestern (leer = Attribut last_period des Tageszählers)',
      menu_pin_entity: 'Helfer PIN-Eingabe (input_text)', menu_unlocked_entity: 'Helfer Menü entsperrt (input_boolean)',
      menu_fans: 'Lüfterstufen', menu_fire: 'Kamin und Dunstabzug', menu_switches: 'Schalter', menu_temp: 'Solltemperatur', menu_custom: 'Eigene Felder (leerer Entity-Eintrag mit Name = Überschrift)'
    },
    themes: { auto: 'Automatisch (Theme von Home Assistant)', light: 'Hell', dark: 'Dunkel' }
  },
  no: {
    sections: { general: 'Generelt', show: 'Visning', tune: 'Finjustering', colors: 'Farger', names: 'Navn', entities: 'Entiteter (endres bare hvis de avviker fra standard)', menu: 'PIN-undermeny' },
    labels: {
      language: 'Språk', theme: 'Utseende', device_prefix: 'Enhetsprefiks (f.eks. flexit_nordic)', name: 'Navn på aggregatet',
      show_temps: 'Temperaturer', show_pct: 'Vifter i %', show_rpm: 'Vifter o/min', show_eff: 'Virkningsgrad', show_rot: 'Rotor', show_heater: 'Verdi varmebatteri',
      show_heater_symbol: 'Symbol varmebatteri', show_filter_alarm: 'Filteralarm', show_frame: 'Ramme', show_flow: 'Luftstrøm-animasjon', show_name: 'Vis navn',
      show_stats: 'Statistikk under kortet', show_days: 'Filter i dager og gjenstående tid', show_menu: 'PIN-undermeny',
      font_scale: 'Skriftstørrelse (%)', fan_speed: 'Viftedreining (sekunder per omdreining)', rotor_speed: 'Rotorhastighet (sekunder)', filter_months: 'Filterbytte-intervall (måneder)', lock_minutes: 'Menyen låses etter (minutter, bare visning)',
      color_exhaust: 'Farge avkast', color_outdoor: 'Farge uteluft', color_extract: 'Farge avtrekk', color_supply: 'Farge tilluft', color_heater: 'Farge varmebatteri', color_fan: 'Farge motorer (aktive)',
      name_exhaust: 'Navn avkast', name_outdoor: 'Navn uteluft', name_extract: 'Navn avtrekk', name_supply: 'Navn tilluft', name_heater: 'Navn varmebatteri', name_eff: 'Tekst før virkningsgrad', name_rot: 'Tekst før rotor',
      name_today: 'Linje «i dag»', name_yest: 'Linje «i går»', name_filter: 'Linje filter', name_rest: 'Linje gjenstående tid ({n} = måneder)',
      entity_temp_exhaust: 'Temperatur avkast', entity_temp_extract: 'Temperatur avtrekk', entity_temp_outdoor: 'Temperatur uteluft', entity_temp_supply: 'Temperatur tilluft',
      entity_heater_power: 'Effekt varmebatteri (kW eller W)', entity_fan_exhaust_rpm: 'Avtrekksvifte o/min', entity_fan_exhaust_pct: 'Avtrekksvifte %', entity_fan_supply_pct: 'Tilluftsvifte %', entity_fan_supply_rpm: 'Tilluftsvifte o/min',
      entity_efficiency: 'Virkningsgrad', entity_rotor: 'Rotorhastighet', entity_filter_alarm: 'Filter tilsmusset (binary_sensor)', entity_filter_hours: 'Filter driftstid (timer)',
      entity_heater_daily_meter: 'Dagsteller varmebatteri (nullstilles kl. 00, kWh)', entity_heater_yesterday: 'Varmebatteri i går (tom = attributtet last_period fra dagstelleren)',
      menu_pin_entity: 'Hjelper PIN-inntasting (input_text)', menu_unlocked_entity: 'Hjelper meny opplåst (input_boolean)',
      menu_fans: 'Viftetrinn', menu_fire: 'Peis og kjøkkenhette', menu_switches: 'Brytere', menu_temp: 'Settpunkt temperatur', menu_custom: 'Egne felt (tom entitet med navn = overskrift)'
    },
    themes: { auto: 'Automatisk (tema fra Home Assistant)', light: 'Lyst', dark: 'Mørkt' }
  },
  en: {
    sections: { general: 'General', show: 'Display', tune: 'Fine tuning', colors: 'Colors', names: 'Names', entities: 'Entities (only change if they differ from the defaults)', menu: 'PIN submenu' },
    labels: {
      language: 'Language', theme: 'Appearance', device_prefix: 'Device prefix (e.g. flexit_nordic)', name: 'Unit name',
      show_temps: 'Temperatures', show_pct: 'Fans in %', show_rpm: 'Fans rpm', show_eff: 'Efficiency', show_rot: 'Rotor', show_heater: 'Heater value',
      show_heater_symbol: 'Heater symbol', show_filter_alarm: 'Filter alarm', show_frame: 'Frame', show_flow: 'Air flow animation', show_name: 'Show name',
      show_stats: 'Statistics below the card', show_days: 'Filter in days and time remaining', show_menu: 'PIN submenu',
      font_scale: 'Font size (%)', fan_speed: 'Fan rotation (seconds per turn)', rotor_speed: 'Rotor speed (seconds)', filter_months: 'Filter change interval (months)', lock_minutes: 'Menu locks after (minutes, display only)',
      color_exhaust: 'Color exhaust air', color_outdoor: 'Color outdoor air', color_extract: 'Color extract air', color_supply: 'Color supply air', color_heater: 'Color heater', color_fan: 'Color motors (active)',
      name_exhaust: 'Name exhaust air', name_outdoor: 'Name outdoor air', name_extract: 'Name extract air', name_supply: 'Name supply air', name_heater: 'Name heater', name_eff: 'Text before efficiency', name_rot: 'Text before rotor',
      name_today: 'Row "today"', name_yest: 'Row "yesterday"', name_filter: 'Row filter', name_rest: 'Row time remaining ({n} = months)',
      entity_temp_exhaust: 'Temperature exhaust air', entity_temp_extract: 'Temperature extract air', entity_temp_outdoor: 'Temperature outdoor air', entity_temp_supply: 'Temperature supply air',
      entity_heater_power: 'Heater power (kW or W)', entity_fan_exhaust_rpm: 'Extract fan rpm', entity_fan_exhaust_pct: 'Extract fan %', entity_fan_supply_pct: 'Supply fan %', entity_fan_supply_rpm: 'Supply fan rpm',
      entity_efficiency: 'Efficiency', entity_rotor: 'Rotor speed', entity_filter_alarm: 'Filter polluted (binary_sensor)', entity_filter_hours: 'Filter operating time (hours)',
      entity_heater_daily_meter: 'Heater daily meter (resets at midnight, kWh)', entity_heater_yesterday: 'Heater yesterday (empty = last_period attribute of the daily meter)',
      menu_pin_entity: 'Helper PIN entry (input_text)', menu_unlocked_entity: 'Helper menu unlocked (input_boolean)',
      menu_fans: 'Fan levels', menu_fire: 'Fireplace and cooker hood', menu_switches: 'Switches', menu_temp: 'Temperature setpoint', menu_custom: 'Custom fields (empty entity with a name = heading)'
    },
    themes: { auto: 'Automatic (Home Assistant theme)', light: 'Light', dark: 'Dark' }
  }
};

const DEF_COLORS = { exhaust: '#A8693A', outdoor: '#3FA34D', extract: '#F2B01E', supply: '#1F5FBF', heater: '#E8612E', fan: '#43A047' };

const entityDefaults = (p) => ({
  temp_exhaust: `sensor.${p}_exhaust_air_temperature`,
  temp_extract: `sensor.${p}_extract_air_temperature`,
  temp_outdoor: `sensor.${p}_outside_air_temperature`,
  temp_supply: `sensor.${p}_supply_air_temperature`,
  heater_power: `sensor.${p}_electric_heater_power`,
  fan_exhaust_rpm: `sensor.${p}_exhaust_air_fan`,
  fan_exhaust_pct: `sensor.${p}_exhaust_air_fan_control_signal`,
  fan_supply_pct: `sensor.${p}_supply_air_fan_control_signal`,
  fan_supply_rpm: `sensor.${p}_supply_air_fan`,
  efficiency: `sensor.${p}_heat_exchanger_efficiency`,
  rotor: `sensor.${p}_heat_exchanger_speed`,
  filter_alarm: `binary_sensor.${p}_air_filter_polluted`,
  filter_hours: `sensor.${p}_air_filter_operating_time`,
  heater_daily_meter: '',
  heater_yesterday: '',
  menu_pin_entity: 'input_text.flexit_pin_eingabe',
  menu_unlocked_entity: 'input_boolean.flexit_menue_entsperrt',
});

/* x/y in percent of the card, g = display group, big = main value, pre = name key shown in front */
const LABELS = [
  { e: 'temp_exhaust', x: 6.47, y: 49.33, g: 'temps', big: 1 },
  { e: 'temp_extract', x: 94.12, y: 49.33, g: 'temps', big: 1 },
  { e: 'temp_outdoor', x: 6.47, y: 87.67, g: 'temps', big: 1 },
  { e: 'temp_supply', x: 94.12, y: 87.67, g: 'temps', big: 1 },
  { e: 'heater_power', x: 79.12, y: 81.33, g: 'heater', big: 1, kind: 'power' },
  { e: 'fan_exhaust_rpm', x: 29.41, y: 9.67, g: 'rpm', big: 0 },
  { e: 'fan_exhaust_pct', x: 29.41, y: 15.33, g: 'pct', big: 1 },
  { e: 'fan_supply_pct', x: 70.59, y: 86.33, g: 'pct', big: 1 },
  { e: 'fan_supply_rpm', x: 70.59, y: 91.33, g: 'rpm', big: 0 },
  { e: 'efficiency', x: 50, y: 14, g: 'eff', big: 1, pre: 'eff' },
  { e: 'rotor', x: 50, y: 89.33, g: 'rot', big: 1, pre: 'rot' },
];
/* invisible click areas over the four house symbols and the two filters */
const HOUSES = [['temp_exhaust', 6.47, 31.67], ['temp_outdoor', 6.47, 70], ['temp_extract', 94.12, 31.67], ['temp_supply', 94.12, 70]];
const FILTERS = [[76.47, 31.67], [22.06, 70]];
const ALARMS = [[76.47, 41], [22.06, 79]];

const MENU = (p) => {
  const n = `number.${p}_`;
  return [
    { s: 'sAway', n: 'supply', e: n + 'away_supply_fan_setpoint', g: 'fans' }, { n: 'extract', e: n + 'away_extract_fan_setpoint', g: 'fans' },
    { s: 'sHome', n: 'supply', e: n + 'home_supply_fan_setpoint', g: 'fans' }, { n: 'extract', e: n + 'home_extract_fan_setpoint', g: 'fans' },
    { s: 'sHigh', n: 'supply', e: n + 'high_supply_fan_setpoint', g: 'fans' }, { n: 'extract', e: n + 'high_extract_fan_setpoint', g: 'fans' },
    { s: 'sFire', n: 'supply', e: n + 'fireplace_supply_fan_setpoint', g: 'fire' }, { n: 'extract', e: n + 'fireplace_extract_fan_setpoint', g: 'fire' }, { n: 'runtime', e: n + 'fireplace_mode_runtime', g: 'fire' },
    { s: 'sCook', n: 'supply', e: n + 'cooker_hood_supply_fan_setpoint', g: 'fire' }, { n: 'extract', e: n + 'cooker_hood_extract_fan_setpoint', g: 'fire' },
    { s: 'sCook', n: 'cookMode', e: `switch.${p}_cooker_hood_mode`, g: 'sw' },
    { s: 'sHeat', n: 'heatSw', e: `switch.${p}_electric_heater`, g: 'sw', icon: 'mdi:radiator' },
  ];
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const hexc = (c) => String(c).replace('#', '%23');

const pickLang = (cfg, hass) => {
  if (cfg && I18N[cfg.language]) return cfg.language;
  const l = ((hass && (hass.language || (hass.locale && hass.locale.language))) || 'en').toLowerCase();
  if (l.startsWith('de')) return 'de';
  if (l.startsWith('nb') || l.startsWith('nn') || l.startsWith('no')) return 'no';
  return 'en';
};

const fire = (node, type, detail) => node.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));

function buildSvg(c, colors, names) {
  const gray = '%23888';
  const C = { a: hexc(colors.exhaust), u: hexc(colors.outdoor), v: hexc(colors.extract), t: hexc(colors.supply) };
  const fan = Number(c.fan_speed) || 1, rot = Number(c.rotor_speed) || 1;
  let s = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 680 300'><style>.sp{transform-box:fill-box;transform-origin:center;animation:sp ${fan}s linear infinite}.fl{stroke-dasharray:4 12;animation:fl .8s linear infinite}.st{animation:st ${rot}s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}@keyframes fl{to{stroke-dashoffset:-16}}@keyframes st{to{transform:translateY(6px)}}</style><defs>`;
  [['a1', C.a], ['a2', C.u], ['a3', C.v], ['a4', C.t]].forEach((m) => {
    s += `<marker id='${m[0]}' viewBox='0 0 10 10' refX='7' refY='5' markerWidth='3.2' markerHeight='3.2' orient='auto-start-reverse'><path d='M1 1L8 5L1 9' fill='none' stroke='${m[1]}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></marker>`;
  });
  s += `<clipPath id='rc'><rect x='326' y='58' width='28' height='190' rx='3'/></clipPath></defs>`;
  if (c.show_frame !== false) s += `<rect x='84' y='16' width='512' height='272' rx='14' fill='none' stroke='${gray}' stroke-opacity='.5' stroke-dasharray='4 4'/>`;
  s += `<g fill='none' stroke-width='7'><path d='M612 95H532M508 95H354' stroke='${C.v}'/><path d='M326 95H218M182 95H72' stroke='${C.a}'/><path d='M72 210H138M162 210H326' stroke='${C.u}'/><path d='M354 210H462M498 210H524M552 210H612' stroke='${C.t}'/></g>`;
  s += `<rect x='326' y='58' width='28' height='190' rx='3' fill='none' stroke='${gray}' stroke-width='1.5'/>`;
  let st = ''; for (let y = 52; y <= 250; y += 6) st += `M326 ${y}h28`;
  s += `<g clip-path='url(%23rc)'><g class='st' stroke='${gray}' stroke-opacity='.6' stroke-width='1'><path d='${st}'/></g></g>`;
  const flt = (x, y, r) => `<g transform='translate(${x},${y})${r}'><rect x='-12' y='-12' width='24' height='24' rx='3' fill='none' stroke='${gray}' stroke-width='1.5'/><g fill='none' stroke='${gray}' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'><polyline points='-7,-8 7,-4 -7,0'/><polyline points='-7,0 7,4 -7,8'/><line x1='-7' y1='-8' x2='-7' y2='8'/></g></g>`;
  s += flt(520, 95, ' rotate(180)') + flt(150, 210, '');
  const ic = (x, y, col, d, m) => `<g transform='translate(${x},${y}) scale(.9)' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M4 22L20 8L36 22V38H4Z' stroke='${gray}' stroke-width='2'/><rect x='15' y='28' width='10' height='7' stroke='${gray}' stroke-width='1.5'/><path d='${d}' stroke='${col}' stroke-width='3' marker-end='url(%23a${m})'/></g>`;
  s += ic(26, 77, C.a, 'M20 28V1', 1) + ic(26, 192, C.u, 'M-4 32H12', 2) + ic(622, 77, C.v, 'M31 17H24Q20 17 20 21V26', 3) + ic(622, 192, C.t, 'M20 27V21Q20 17 24 17H31', 4);
  s += `<g font-family='sans-serif' font-size='13' font-weight='500' fill='${gray}' text-anchor='middle' dominant-baseline='central'><text x='44' y='128'>${esc(names.exhaust)}</text><text x='44' y='243'>${esc(names.outdoor)}</text><text x='640' y='128'>${esc(names.extract)}</text><text x='640' y='243'>${esc(names.supply)}</text>`;
  if (c.show_heater_symbol !== false) s += `<text x='538' y='229'>${esc(names.heater)}</text>`;
  s += `</g>`;
  if (c.show_name !== false && c.name) s += `<text x='340' y='8' font-family='sans-serif' font-size='14' font-weight='600' fill='${gray}' text-anchor='middle' dominant-baseline='central'>${esc(c.name)}</text>`;
  s += `</svg>`;
  return 'data:image/svg+xml;utf8,' + s;
}

const THEMES = {
  dark: ['#1c1c1c', '#e1e1e1', '#9b9b9b', 'rgba(225,225,225,.12)'],
  light: ['#ffffff', '#212121', '#727272', 'rgba(0,0,0,.12)'],
};

class VentilationCard extends HTMLElement {
  static getConfigElement() { return document.createElement('ventilation-card-editor'); }
  static getStubConfig() { return { device_prefix: 'flexit_nordic', name: 'Flexit Nordic' }; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._cfg = null;
    this._hass = null;
    this._built = false;
    this._kids = [];
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._cfg = { ...config };
    this._built = false;
    if (this._hass) this._build();
  }

  set hass(h) {
    this._hass = h;
    if (!this._cfg) return;
    if (!this._built) this._build();
    this._update();
  }

  getCardSize() { return 6; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: 'auto' }; }

  _lang() { return pickLang(this._cfg, this._hass); }
  _ent(key) {
    const c = this._cfg;
    const k = 'entity_' + key;
    if (c[k] !== undefined && c[k] !== null) return c[k];
    if (c[key] !== undefined && (key === 'menu_pin_entity' || key === 'menu_unlocked_entity')) return c[key];
    return entityDefaults(c.device_prefix || 'flexit_nordic')[key] || '';
  }
  _show(g, def = true) { const v = this._cfg['show_' + g]; return v === undefined ? def : !!v; }
  _names() {
    const L = I18N[this._lang()].names, c = this._cfg;
    const o = (k, ck) => (c['name_' + ck] !== undefined && c['name_' + ck] !== '' ? c['name_' + ck] : L[k]);
    return {
      exhaust: o('exhaust', 'exhaust'), outdoor: o('outdoor', 'outdoor'), extract: o('extract', 'extract'), supply: o('supply', 'supply'),
      heater: o('heater', 'heater'), eff: o('eff', 'eff'), rot: o('rot', 'rot'), today: o('today', 'today'), yest: o('yest', 'yest'),
      filter: o('filter', 'filter'), rest: o('rest', 'rest'),
    };
  }
  _colors() {
    const c = this._cfg, o = {};
    Object.keys(DEF_COLORS).forEach((k) => { o[k] = c['color_' + k] || DEF_COLORS[k]; });
    return o;
  }

  _fontStyle(big) {
    const f = (Number(this._cfg.font_scale) || 100) / 100;
    const a = big ? 2.3 : 1.9, mn = big ? 9 : 8, mx = big ? 18 : 15, r = (n) => Math.round(n * 100) / 100;
    return `clamp(${r(mn * f)}px,${r(a * f)}cqw,${r(mx * f)}px)`;
  }

  _build() {
    this._built = true;
    this._statSig = null;
    this._lockEl = null;
    this._openEl = null;
    this._buildId = (this._buildId || 0) + 1;
    const c = this._cfg, names = this._names(), colors = this._colors();
    const theme = c.theme === 'dark' || c.theme === 'light' ? THEMES[c.theme] : null;
    const themeCss = theme
      ? `--ha-card-background:${theme[0]};--card-background-color:${theme[0]};--primary-text-color:${theme[1]};--secondary-text-color:${theme[2]};--divider-color:${theme[3]};--state-icon-color:${theme[2]};--paper-item-icon-color:${theme[2]};`
      : '';
    let h = `<style>
      :host{display:block}
      ha-card{${themeCss}overflow:hidden}
      .wrap{position:relative;container-type:inline-size;width:100%}
      .wrap img.bg{display:block;width:100%;height:auto}
      .l{position:absolute;transform:translate(-50%,-50%);white-space:nowrap;cursor:pointer;color:var(--primary-text-color)}
      .l.big{font-weight:500}
      .l.small{color:var(--secondary-text-color)}
      .hit{position:absolute;transform:translate(-50%,-50%);cursor:pointer}
      .alert{position:absolute;transform:translate(-50%,-50%);color:var(--error-color,#db4437);--mdc-icon-size:20px;display:none;pointer-events:none}
      .hs{position:absolute;left:79.12%;top:70%;width:4.41%;transform:translate(-50%,-50%);pointer-events:none}
      .hs rect,.hs polyline{stroke:#888}
      .hs.on rect,.hs.on polyline{stroke:var(--hs-color)}
      .flow{position:absolute;left:0;top:0;width:100%;height:auto;pointer-events:none}
      .flow path{fill:none;stroke:#fff;stroke-opacity:.6;stroke-width:2;stroke-dasharray:4 12;animation:fl .8s linear infinite;animation-play-state:paused}
      .flow path.run{animation-play-state:running}
      @keyframes fl{to{stroke-dashoffset:-16}}
      .fm{position:absolute;width:12.35%;transform:translate(-50%,-50%);pointer-events:none;overflow:visible}
      .fm g{stroke:#888;fill:none;stroke-width:1.3;stroke-linejoin:round}
      .fm .sp{transform-box:fill-box;transform-origin:center;animation:sp ${Number(c.fan_speed) || 1}s linear infinite;animation-play-state:paused}
      .fm.on g{stroke:var(--fan-color)}
      .fm.on .sp{animation-play-state:running}
      @keyframes sp{to{transform:rotate(360deg)}}
      .stats{padding:4px 16px 8px}
      .sr{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-top:1px solid var(--divider-color);cursor:pointer;color:var(--primary-text-color)}
      .sr:first-child{border-top:none}
      .sr .k{display:flex;gap:12px;align-items:center}
      .sr ha-icon{color:var(--state-icon-color,var(--secondary-text-color))}
      .sr .v{font-weight:500}
      .menu>*{display:block;margin-top:8px}
    </style><ha-card><div class="wrap" style="--fs:1;--hs-color:${esc(colors.heater)};--fan-color:${esc(colors.fan)}">`;
    h += `<img class="bg" alt="" src="${esc(buildSvg(c, colors, names))}">`;
    if (c.show_flow !== false) {
      h += `<svg class="flow" viewBox="0 0 680 300"><path id="fl0" d="M612 95H532M508 95H354M326 95H218M182 95H72"/><path id="fl1" d="M72 210H138M162 210H326M354 210H462M498 210H524M552 210H612"/></svg>`;
    }
    [[200, 95, 0], [480, 210, 180]].forEach((m, i) => {
      h += `<svg class="fm" id="fm${i}" viewBox="-42 -42 84 84" style="left:${(m[0] / 6.8).toFixed(2)}%;top:${(m[1] / 3).toFixed(2)}%"><g transform="rotate(${m[2]})"><line x1="0" y1="-40" x2="0" y2="-33" stroke-dasharray="2 2" stroke-width="1"/><rect x="-5" y="-33" width="10" height="10" rx="1"/><circle r="18"/><polygon points="-9,0 8,-10 8,10"/><circle cx="-13" cy="15" r="6.5"/><circle class="sp" cx="-13" cy="15" r="3.2" stroke-dasharray="14 6"/></g></svg>`;
    });
    if (this._show('heater_symbol')) {
      const col = esc(colors.heater);
      h += `<svg class="hs" id="hs" viewBox="-15 -11 30 22"><rect x="-14" y="-10" width="28" height="20" rx="2" fill="none" stroke-width="1.5"/><polyline points="-11,0 -8,-6 -4,6 0,-6 4,6 8,-6 11,0" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
    LABELS.forEach((l, i) => {
      if (!this._show(l.g)) return;
      h += `<div class="l ${l.big ? 'big' : 'small'}" data-i="${i}" style="left:${l.x}%;top:${l.y}%;font-size:${this._fontStyle(l.big)}"></div>`;
    });
    if (this._show('temps')) {
      HOUSES.forEach((o, i) => { h += `<div class="hit" data-h="${i}" style="left:${o[1]}%;top:${o[2]}%;width:8%;height:15%"></div>`; });
    }
    if (this._show('filter_alarm')) {
      FILTERS.forEach((o, i) => { h += `<div class="hit" data-f="${i}" style="left:${o[0]}%;top:${o[1]}%;width:6%;height:10%"></div>`; });
      ALARMS.forEach((o, i) => { h += `<ha-icon class="alert" data-a="${i}" icon="mdi:alert-circle" style="left:${o[0]}%;top:${o[1]}%"></ha-icon>`; });
    }
    h += `</div>`;
    if (this._show('stats')) h += `<div class="stats" id="stats"></div>`;
    h += `</ha-card><div class="menu" id="menu"></div>`;
    this.shadowRoot.innerHTML = h;

    const root = this.shadowRoot;
    root.querySelectorAll('.l').forEach((el) => el.addEventListener('click', () => this._more(this._ent(LABELS[el.dataset.i].e))));
    root.querySelectorAll('[data-h]').forEach((el) => el.addEventListener('click', () => this._more(this._ent(HOUSES[el.dataset.h][0]))));
    root.querySelectorAll('[data-f]').forEach((el) => el.addEventListener('click', () => this._more(this._ent('filter_alarm'))));

    this._kids = [];
    if (this._show('menu', false)) this._buildMenu(this._buildId);
  }

  _more(entityId) { if (entityId) fire(this, 'hass-more-info', { entityId }); }

  async _buildMenu(id) {
    const c = this._cfg, L = I18N[this._lang()], mn = L.mn, p = c.device_prefix || 'flexit_nordic';
    const B = this._ent('menu_unlocked_entity'), TX = this._ent('menu_pin_entity');
    const mins = Number(c.lock_minutes) || 5;
    const rows = [{ type: 'button', name: mn.lockBtn, icon: 'mdi:lock', action_name: mn.lockAct, tap_action: { action: 'perform-action', perform_action: 'input_boolean.turn_off', target: { entity_id: B } } }];
    let cur = null;
    MENU(p).forEach((m) => {
      const on = (m.g === 'fans' && c.menu_fans !== false) || (m.g === 'fire' && c.menu_fire !== false) || (m.g === 'sw' && c.menu_switches !== false);
      if (!on) return;
      if (m.s && m.s !== cur) { cur = m.s; rows.push({ type: 'section', label: mn[m.s] }); }
      const o = { entity: m.e, name: mn[m.n] };
      if (m.icon) o.icon = m.icon;
      rows.push(o);
    });
    (Array.isArray(c.menu_custom) ? c.menu_custom : []).forEach((r) => {
      if (!r) return;
      if (!r.entity) { if (r.name) rows.push({ type: 'section', label: r.name }); return; }
      const o = { entity: r.entity }; if (r.name) o.name = r.name; rows.push(o);
    });
    const locked = { type: 'entities', title: mn.tLock, show_header_toggle: false, entities: [{ entity: TX, name: mn.pin, icon: 'mdi:lock' }] };
    const inner = [{ type: 'entities', title: mn.tOpen.replace('{n}', mins), show_header_toggle: false, entities: rows }];
    if (c.menu_temp !== false) inner.push({ type: 'tile', entity: `climate.${p}`, name: mn.temp, features: [{ type: 'target-temperature' }], features_position: 'bottom' });
    const open = inner.length > 1 ? { type: 'vertical-stack', cards: inner } : inner[0];
    let helpers;
    try { helpers = await window.loadCardHelpers(); } catch (e) { return; }
    const mk = (cfg) => {
      const el = helpers.createCardElement(cfg);
      if (this._hass) el.hass = this._hass;
      return el;
    };
    if (id !== this._buildId) return;
    const box = this.shadowRoot.getElementById('menu');
    if (!box) return;
    this._lockEl = mk(locked);
    this._openEl = mk(open);
    this._lockKey = B;
    box.appendChild(this._lockEl);
    box.appendChild(this._openEl);
    this._kids = [this._lockEl, this._openEl];
    this._update();
  }

  _num(id) {
    const s = this._hass.states[id];
    if (!s) return null;
    const v = parseFloat(s.state);
    return Number.isFinite(v) ? v : null;
  }
  _fmt(id, digits) {
    const s = this._hass.states[id];
    if (!s || s.state === 'unavailable' || s.state === 'unknown') return '–';
    if (typeof this._hass.formatEntityState === 'function') {
      try { return this._hass.formatEntityState(s); } catch (e) { /* fall through */ }
    }
    return s.state + (s.attributes.unit_of_measurement ? ' ' + s.attributes.unit_of_measurement : '');
  }
  _n2(v, d) {
    const L = I18N[this._lang()];
    const t = v.toFixed(d);
    return L.dec === ',' ? t.replace('.', ',') : t;
  }

  _update() {
    if (!this._built || !this._hass) return;
    const root = this.shadowRoot, L = I18N[this._lang()], names = this._names();
    root.querySelectorAll('.l').forEach((el) => {
      const l = LABELS[el.dataset.i], id = this._ent(l.e);
      let txt;
      if (l.kind === 'power') {
        const s = this._hass.states[id], v = this._num(id);
        if (v === null) txt = '–';
        else {
          const u = ((s.attributes.unit_of_measurement) || 'kW').toLowerCase();
          txt = Math.round(u === 'w' ? v : v * 1000) + ' W';
        }
      } else {
        txt = this._fmt(id);
        if (l.g === 'rpm') txt = txt.replace(/rpm/i, L.rpm);
      }
      el.textContent = (l.pre ? names[l.pre] : '') + txt;
    });
    [['fan_exhaust_rpm', 'fan_exhaust_pct'], ['fan_supply_rpm', 'fan_supply_pct']].forEach((keys, i) => {
      const fm = root.getElementById('fm' + i);
      if (!fm) return;
      const vals = keys.map((k) => this._num(this._ent(k)));
      const run = vals.some((v) => v !== null && v > 0);
      fm.classList.toggle('on', run);
      const fl = root.getElementById('fl' + i);
      if (fl) fl.classList.toggle('run', run);
    });
    const hs = root.getElementById('hs');
    if (hs) {
      const v = this._num(this._ent('heater_power'));
      hs.classList.toggle('on', v !== null && v > 0);
    }
    const al = this._hass.states[this._ent('filter_alarm')];
    root.querySelectorAll('.alert').forEach((el) => { el.style.display = al && al.state === 'on' ? 'block' : 'none'; });

    const st = root.getElementById('stats');
    if (st) {
      const rows = [];
      const meter = this._ent('heater_daily_meter');
      if (meter) {
        const v = this._num(meter);
        rows.push({ icon: 'mdi:lightning-bolt', name: names.today, val: v === null ? '–' : this._n2(v, 2) + ' kWh', id: meter });
        const ye = this._ent('heater_yesterday');
        let yv = null;
        if (ye) yv = this._num(ye);
        else { const m = this._hass.states[meter]; if (m && m.attributes.last_period !== undefined) { const x = parseFloat(m.attributes.last_period); yv = Number.isFinite(x) ? x : null; } }
        rows.push({ icon: 'mdi:history', name: names.yest, val: yv === null ? '–' : this._n2(yv, 2) + ' kWh', id: ye || meter });
      }
      const hrsId = this._ent('filter_hours'), hrs = this._num(hrsId);
      if (this._show('days')) {
        const months = Number(this._cfg.filter_months) || 12;
        rows.push({ icon: 'mdi:air-filter', name: names.filter, val: hrs === null ? '–' : Math.round(hrs / 24) + ' ' + L.dayU, id: hrsId });
        rows.push({ icon: 'mdi:calendar-clock', name: names.rest.replace('{n}', months), val: hrs === null ? '–' : Math.max(Math.round((months * 730 - hrs) / 24), 0) + ' ' + L.dayU, id: hrsId });
      } else {
        rows.push({ icon: 'mdi:air-filter', name: names.filter, val: hrs === null ? '–' : Math.round(hrs) + ' h', id: hrsId });
      }
      const sig = JSON.stringify(rows);
      if (sig !== this._statSig) {
        this._statSig = sig;
        st.innerHTML = rows.map((r, i) => `<div class="sr" data-r="${i}"><span class="k"><ha-icon icon="${r.icon}"></ha-icon>${esc(r.name)}</span><span class="v">${esc(r.val)}</span></div>`).join('');
        st.querySelectorAll('.sr').forEach((el) => el.addEventListener('click', () => this._more(rows[el.dataset.r].id)));
      }
    }

    if (this._lockEl) {
      const b = this._hass.states[this._lockKey];
      const open = b && b.state === 'on';
      this._lockEl.style.display = open ? 'none' : 'block';
      this._openEl.style.display = open ? 'block' : 'none';
    }
    this._kids.forEach((k) => { k.hass = this._hass; });
  }
}

const EDITOR_SECTIONS = (c, lang) => {
  const U = UI[lang];
  const sel = (arr) => ({ select: { mode: 'dropdown', options: arr } });
  const bool = (n) => ({ name: n, selector: { boolean: {} } });
  const text = (n) => ({ name: n, selector: { text: {} } });
  const ent = (n, dom) => ({ name: n, selector: { entity: dom ? { domain: dom } : {} } });
  return [
    { id: 'general', title: U.sections.general, schema: [
      { name: 'language', selector: sel([{ value: 'de', label: 'Deutsch' }, { value: 'no', label: 'Norsk' }, { value: 'en', label: 'English' }]) },
      { name: 'theme', selector: sel(['auto', 'light', 'dark'].map((v) => ({ value: v, label: U.themes[v] }))) },
      text('device_prefix'), text('name'),
    ] },
    { id: 'show', title: U.sections.show, schema: ['show_temps', 'show_pct', 'show_rpm', 'show_eff', 'show_rot', 'show_heater', 'show_heater_symbol', 'show_filter_alarm', 'show_frame', 'show_flow', 'show_name', 'show_stats', 'show_days', 'show_menu'].map(bool) },
    { id: 'tune', title: U.sections.tune, schema: [
      { name: 'font_scale', selector: { number: { min: 70, max: 160, step: 5, mode: 'slider' } } },
      { name: 'fan_speed', selector: { number: { min: 0.2, max: 4, step: 0.1, mode: 'box' } } },
      { name: 'rotor_speed', selector: { number: { min: 0.2, max: 4, step: 0.1, mode: 'box' } } },
      { name: 'filter_months', selector: { number: { min: 1, max: 36, step: 1, mode: 'slider' } } },
      { name: 'lock_minutes', selector: { number: { min: 1, max: 30, step: 1, mode: 'slider' } } },
    ] },
    { id: 'colors', title: U.sections.colors, schema: ['color_exhaust', 'color_outdoor', 'color_extract', 'color_supply', 'color_heater', 'color_fan'].map(text) },
    { id: 'names', title: U.sections.names, schema: ['name_exhaust', 'name_outdoor', 'name_extract', 'name_supply', 'name_heater', 'name_eff', 'name_rot', 'name_today', 'name_yest', 'name_filter', 'name_rest'].map(text) },
    { id: 'entities', title: U.sections.entities, collapsed: true, schema: [
      ent('entity_temp_exhaust', 'sensor'), ent('entity_temp_extract', 'sensor'), ent('entity_temp_outdoor', 'sensor'), ent('entity_temp_supply', 'sensor'),
      ent('entity_heater_power', 'sensor'), ent('entity_fan_exhaust_rpm', 'sensor'), ent('entity_fan_exhaust_pct', 'sensor'), ent('entity_fan_supply_pct', 'sensor'), ent('entity_fan_supply_rpm', 'sensor'),
      ent('entity_efficiency', 'sensor'), ent('entity_rotor', 'sensor'), ent('entity_filter_alarm', 'binary_sensor'), ent('entity_filter_hours', 'sensor'),
      ent('entity_heater_daily_meter', 'sensor'), ent('entity_heater_yesterday', 'sensor'),
    ] },
    { id: 'menu', title: U.sections.menu, collapsed: true, schema: [
      ent('menu_pin_entity', 'input_text'), ent('menu_unlocked_entity', 'input_boolean'),
      bool('menu_fans'), bool('menu_fire'), bool('menu_switches'), bool('menu_temp'),
      { name: 'menu_custom', selector: { object: { multiple: true, label_field: 'name', fields: { entity: { label: 'Entity', selector: { entity: {} } }, name: { label: 'Name', selector: { text: {} } } } } } },
    ] },
  ];
};

class VentilationCardEditor extends HTMLElement {
  constructor() { super(); this._config = {}; this._forms = []; this._lang = 'en'; }
  setConfig(config) {
    this._config = { ...config };
    if (this._forms.length) this._push(); else this._render();
  }
  set hass(h) {
    this._hass = h;
    const l = pickLang(this._config, h);
    if (l !== this._lang || !this._forms.length) { this._lang = l; this._render(); }
    this._forms.forEach((f) => { f.hass = h; });
  }
  _data() {
    const d = { ...this._config };
    ['show_temps', 'show_pct', 'show_rpm', 'show_eff', 'show_rot', 'show_heater', 'show_heater_symbol', 'show_filter_alarm', 'show_frame', 'show_flow', 'show_name', 'show_stats', 'show_days',
      'menu_fans', 'menu_fire', 'menu_switches', 'menu_temp'].forEach((k) => { if (d[k] === undefined) d[k] = true; });
    if (d.show_menu === undefined) d.show_menu = false;
    if (d.theme === undefined) d.theme = 'auto';
    if (d.language === undefined) d.language = this._lang;
    if (d.font_scale === undefined) d.font_scale = 100;
    if (d.fan_speed === undefined) d.fan_speed = 1;
    if (d.rotor_speed === undefined) d.rotor_speed = 1;
    if (d.filter_months === undefined) d.filter_months = 12;
    if (d.lock_minutes === undefined) d.lock_minutes = 5;
    return d;
  }
  _push() { const d = this._data(); this._forms.forEach((f) => { f.data = d; }); }
  _render() {
    this._forms = [];
    this.innerHTML = '';
    const U = UI[this._lang];
    EDITOR_SECTIONS(this._config, this._lang).forEach((sec) => {
      const wrap = document.createElement(sec.collapsed ? 'details' : 'div');
      wrap.style.margin = '12px 0';
      const head = document.createElement(sec.collapsed ? 'summary' : 'h4');
      head.textContent = sec.title;
      head.style.cssText = 'font-weight:600;margin:8px 0;cursor:' + (sec.collapsed ? 'pointer' : 'default');
      wrap.appendChild(head);
      const f = document.createElement('ha-form');
      f.schema = sec.schema;
      f.data = this._data();
      f.hass = this._hass;
      f.computeLabel = (s) => U.labels[s.name] || s.name;
      f.addEventListener('value-changed', (ev) => {
        ev.stopPropagation();
        const v = { ...ev.detail.value }, out = {};
        const dflt = { show_menu: false, theme: 'auto', font_scale: 100, fan_speed: 1, rotor_speed: 1, filter_months: 12, lock_minutes: 5 };
        Object.keys(v).forEach((k) => {
          if (v[k] === '' || v[k] === undefined || v[k] === null) return;
          if ((/^show_/.test(k) || /^menu_(fans|fire|switches|temp)$/.test(k)) && !(k in dflt) && v[k] === true) return;
          if (k in dflt && v[k] === dflt[k]) return;
          out[k] = v[k];
        });
        this._config = out;
        fire(this, 'config-changed', { config: { type: 'custom:ventilation-card', ...out } });
      });
      wrap.appendChild(f);
      this.appendChild(wrap);
      this._forms.push(f);
    });
  }
}

if (!customElements.get('ventilation-card')) customElements.define('ventilation-card', VentilationCard);
if (!customElements.get('ventilation-card-editor')) customElements.define('ventilation-card-editor', VentilationCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'ventilation-card',
  name: 'Ventilation Card',
  description: 'Animated ventilation card (Flexit Nordic): temperatures, fans, rotor, heater, filter statistics and PIN-protected settings.',
  preview: false,
  documentationURL: 'https://github.com/mic-chr/ventilation-card',
});
console.info(`%c VENTILATION-CARD %c ${VENTILATION_CARD_VERSION} `, 'color:white;background:#1F5FBF;font-weight:700', 'color:#1F5FBF;background:white');
