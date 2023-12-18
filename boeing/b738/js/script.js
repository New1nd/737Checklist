document.addEventListener('DOMContentLoaded', function () {
    const checklistData = [
        {
            title: "PRE FLIGHT",
            items: [
                {id: 'b738-1', label: "GEAR PINS & COVERS...REMOVED, ABOARD", subtitle: "CHECK", typeItem: "standard"},
                {id: 'b738-2', label: "OXYGEN", subtitle: "TESTED, 100%", typeItem: "standard"},
                {id: 'b738-3', label: "YAW DUMPER", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-4', label: "NAV, TRANS & DISPLAY SWITCHES", subtitle: "NORMAL, AUTO", typeItem: "standard"},
                {id: 'b738-5', label: "EMERGENCY EXIT LIGHT", subtitle: "ARMED", typeItem: "standard"},
                {id: 'b738-6', label: "WINDOW HEAT", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-7', label: "HYDRAULIC PANEL", subtitle: "PUMPS ON, NORMAL", typeItem: "standard"},
                {id: 'b738-8', label: "PRESSURIZATION MODE SELECTOR", subtitle: "AUTO", typeItem: "standard"},
                {id: 'b738-9', label: "FLIGHT INSTRUMENT", subtitle: "HEADING___ ALTIMETER", typeItem: "standard"},
                {id: 'b738-10', label: "SPEED BRAKE", subtitle: "DOWN DETENT", typeItem: "standard"},
                {id: 'b738-11', label: "PARKING BRAKE", subtitle: "SET, NORMAL", typeItem: "standard"},
                {id: 'b738-12', label: "ENGINE START LEVERS", subtitle: "CUTOFF", typeItem: "standard"},
                {id: 'b738-13', label: "PAPERS", subtitle: "ABOARD", typeItem: "standard"},
                {id: 'b738-14', label: "N1 & IAS", subtitle: "CHECKED", typeItem: "standard"},


                // {id: 1, label: "PARKING BRAKE", subtitle: "SET", typeItem: "standard"},
                // {id: 2, label: "BATTERY", subtitle: "GUARD CLOSED", typeItem: "standard"},
                // {id: 3, label: "STANDBY POWER", subtitle: "GUARD CLOSED", typeItem: "standard"},
                // {id: 4, label: "GND PWR AVAIL", subtitle: "GND PWR SWITCH ON", typeItem: "standard"},
                // {id: 5, label: "LIGHTS TEST", subtitle: "PERFORMED", typeItem: "standard"},
                // {id: 6, label: "OXYGEN & MASK", subtitle: "CHECKED", typeItem: "standard"},
                // {id: 7, label: "FIRE WARN TEST", subtitle: "PERFORMED", typeItem: "standard"},
                // {id: 8, label: "APU", subtitle: "START", typeItem: "standard"},
                // {id: 9, label: "APU GEN", subtitle: "ON", typeItem: "standard"},
                // {id: 10, label: "POSITION LIGHTS", subtitle: "STEADY", typeItem: "standard"},
                // {id: 11, label: "LOGO LIGHT", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 12, label: "EMER EXIT LIGHTS", subtitle: "GUARD CLOSED", typeItem: "standard"},
                // {id: 13, label: "PASSENGER SIGNS", subtitle: "ON", typeItem: "standard"},
                // {id: 14, label: "PACKS", subtitle: "AUTO/HIGH", typeItem: "standard"},
                // {id: 15, label: "ISOLATION VALVE", subtitle: "OPEN", typeItem: "standard"},
                // {id: 16, label: "ENG / APU BLEED", subtitle: "ON", typeItem: "standard"},
                // {id: 17, label: "IRS MODE SELECTORS", subtitle: "OFF>NAV", typeItem: "standard"},
                // {id: 18, label: "FMC", subtitle: "SET", typeItem: "standard"},
                //
                // {id: 19, label: "Request Flight-Plan Clearance", typeItem: "italic"},
                //
                // {id: 20, label: "TRANSPONDER", subtitle: "SET", typeItem: "standard"},
                // {id: 21, label: "MCP V2", subtitle: "SET", typeItem: "standard"},
                // {id: 22, label: "MCP HDG / TAKEOFF RWY", subtitle: "SET", typeItem: "standard"},
                // {id: 23, label: "MCP INITIAL ALT", subtitle: "SET", typeItem: "standard"},
                // {id: 24, label: "YAW DAMPER", subtitle: "ON", typeItem: "standard"},
                // {id: 25, label: "WINDOW HEAT", subtitle: "ON", typeItem: "standard"},
                // {id: 26, label: "FLIGHT ALTITUDE", subtitle: "SET", typeItem: "standard"},
                // {id: 27, label: "LANDING ALTITUDE", subtitle: "SET", typeItem: "standard"},
                // {id: 28, label: "FLIGHT DIRECTORS", subtitle: "ON", typeItem: "standard"},
                // {id: 29, label: "LNAV", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 30, label: "VNAV", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 31, label: "MINIMUMS REF", subtitle: "BARO or RADIO", typeItem: "standard"},
                // {id: 32, label: "MINIMUMS", subtitle: "SET", typeItem: "standard"},
                // {id: 33, label: "ALTIMETER REF", subtitle: "IN or HPA", typeItem: "standard"},
                // {id: 34, label: "ALTIMETER", subtitle: "SET", typeItem: "standard"},
                // {id: 35, label: "AUTO BRAKE", subtitle: "RTO", typeItem: "standard"},
                // {id: 36, label: "COM RADIOS", subtitle: "SET", typeItem: "standard"},
                // {id: 37, label: "DOORS", subtitle: "CLOSED", typeItem: "standard"},
            ]
        },
        {
            title: "BEFORE START",
            items: [

                {id: 'b738-15', label: "DOORS", subtitle: "CLOSED", typeItem: "standard"},
                {id: 'b738-16', label: "FLIGHT DECK DOORS", subtitle: "CLOSED AND LOCKED", typeItem: "standard"},
                {id: 'b738-17', label: "WINDOWS", subtitle: "LOCKED", typeItem: "standard"},
                {id: 'b738-18', label: "FUEL", subtitle: "__KG/PUMPS ON", typeItem: "standard"},
                {id: 'b738-19', label: "PASSENGER SIGNS", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-20', label: "AIR CONDITIONING PACKS", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-21', label: "ISOLATION VALVE", subtitle: "OPEN", typeItem: "standard"},
                {id: 'b738-22', label: "MCP", subtitle: "V2__, HEADING__, ALTITUD__", typeItem: "standard"},
                {id: 'b738-23', label: "TAKEOFF SPEED", subtitle: "V1__, VR__, V2__", typeItem: "standard"},
                {id: 'b738-24', label: "CDU PREFLIGHT", subtitle: "COMPLETED", typeItem: "standard"},
                {id: 'b738-25', label: "RUDDER & AILERON TRIM", subtitle: "FREE & ZERO", typeItem: "standard"},
                {id: 'b738-25', label: "RUDDER & AILERON TRIM", subtitle: "FREE & ZERO", typeItem: "standard"},
                {id: 'b738-26', label: "ANTI-COLLISION LIGHT", subtitle: "ON", typeItem: "standard"},

                // {id: 38, label: "Request Pushback & Startup Clearance", typeItem: "italic"},
                //
                // {id: 39, label: "AUTOPILOT DISENGAGE BAR", subtitle: "UP", typeItem: "standard"},
                // {id: 40, label: "AUTOTHROTTLE", subtitle: "ARM", typeItem: "standard"},
                // {id: 41, label: "FUEL PUMPS", subtitle: "ON", typeItem: "standard"},
                // {id: 42, label: "HYDRAULIC PUMPS", subtitle: "ON", typeItem: "standard"},
                // {id: 43, label: "ANTI COLLISION LIGHT", subtitle: "ON", typeItem: "standard"},
                // {id: 44, label: "GROUND EQUIPMENT", subtitle: "REMOVED", typeItem: "standard"},
                // {id: 45, label: "ENGINE AREA", subtitle: "CLEAR", typeItem: "standard"}
            ],
        },
        // {
        //     title: "ENGINE START CHECKLIST",
        //     items: [
        //         // {id: 46, label: "ENGINE DISPLAY", subtitle: "SELECT", typeItem: "standard"},
        //         // {id: 47, label: "PACKS", subtitle: "OFF", typeItem: "standard"},
        //         // {id: 48, label: "ENGINE START SWITCH", subtitle: "GND", typeItem: "standard"},
        //         // {id: 49, label: "ENGINE START LEVER", subtitle: "IDLE AT 25% N2", typeItem: "standard"}
        //     ]
        // },
        {
            title: "BEFORE TAXI",
            items: [
                {id: 'b738-27', label: "GENERATORS", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-28', label: "PROBE HEAT", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-29', label: "ANTI-ICE", subtitle: "AS REQUIRED", typeItem: "standard"},
                {id: 'b738-30', label: "AIR COND PACKS", subtitle: "AUTO", typeItem: "standard"},
                {id: 'b738-31', label: "ISOLATION VALVE", subtitle: "AUTO", typeItem: "standard"},
                {id: 'b738-32', label: "ENGINE START SWITCHES", subtitle: "CONT", typeItem: "standard"},
                {id: 'b738-33', label: "AUTO BRAKES", subtitle: "RTO", typeItem: "standard"},
                {id: 'b738-34', label: "FLIGHT CONTROLS", subtitle: "CHECKED", typeItem: "standard"},
                {id: 'b738-35', label: "ENGINE START LEVERS", subtitle: "IDLE DETENT", typeItem: "standard"},
                {id: 'b738-36', label: "GROUND EQUIPMENT", subtitle: "CLEAR", typeItem: "standard"},
                {id: 'b738-37', label: "RECALL", subtitle: "CHECKED", typeItem: "standard"},
                // {id: 50, label: "GENERATORS 1 & 2", subtitle: "ON", typeItem: "standard"},
                // {id: 51, label: "PROBE HEAT", subtitle: "ON", typeItem: "standard"},
                // {id: 52, label: "WING ANTI ICE", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 53, label: "ENGINE ANTI ICE", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 54, label: "PACKS", subtitle: "AUTO", typeItem: "standard"},
                // {id: 55, label: "ISOLATION VALVE", subtitle: "AUTO", typeItem: "standard"},
                // {id: 56, label: "APU BLEED", subtitle: "OFF", typeItem: "standard"},
                // {id: 57, label: "APU", subtitle: "OFF", typeItem: "standard"},
                // {id: 58, label: "ENGINE START SWITCHES", subtitle: "CONT", typeItem: "standard"},
                // {id: 59, label: "FLAPS", subtitle: "SET FOR T/O", typeItem: "standard"},
                // {id: 60, label: "ELEVATOR TRIM", subtitle: "SET FOR T/O", typeItem: "standard"},
                // {id: 61, label: "FLIGHT CONTROLS", subtitle: "CHECK", typeItem: "standard"},
                // {id: 62, label: "RECALL", subtitle: "CHECK", typeItem: "standard"},
                //
                // {id: 63, label: "Request Taxi Clearance", typeItem: "italic"},
                //
                // {id: 64, label: "TAXI LIGHTS", subtitle: "ON", typeItem: "standard"},
                // {id: 65, label: "RWY TURNOFF LIGHTS", subtitle: "AS REQUIRED", typeItem: "standard"},
            ]
        },
        {
            title: "BEFORE TAKEOFF",
            items: [
                {id: 'b738-38', label: "CABIN NOTIFICATION", subtitle: "COMPLETED", typeItem: "standard"},
                {id: 'b738-39', label: "MCP", subtitle: "CHECKED", typeItem: "standard"},
                {id: 'b738-40', label: "TRANSPONDER", subtitle: "ON, SET, TA/RA", typeItem: "standard"},
                {id: 'b738-41', label: "STAB TRIM", subtitle: "___UNITS", typeItem: "standard"},
                {id: 'b738-42', label: "FLAPS", subtitle: "___, GREEN LIGHT, DETENT", typeItem: "standard"},
                {id: 'b738-43', label: "RECALL", subtitle: "CHECK", typeItem: "standard"},
                // {id: 66, label: "FUEL FLOW", subtitle: "RESET, then RATE", typeItem: "standard"},
                // {id: 67, label: "CENTER FUEL PUMPS", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 68, label: "ANTI-ICE", subtitle: "AS REQUIRED", typeItem: "standard"},
                // {id: 69, label: "FLIGHT INSTRUMENTS", subtitle: "CHECK", typeItem: "standard"},
                // {id: 70, label: "ENGINE INSTRUMENTS", subtitle: "CHECK", typeItem: "standard"},
                // {id: 71, label: "TAKE-OFF DATA", subtitle: "(V1,VR,V2) CHECK", typeItem: "standard"},
                //
                // {id: 72, label: "Request Take-Off Clearance", typeItem: "italic"},
                //
                // {id: 73, label: "LANDING LIGHTS", subtitle: "ON", typeItem: "standard"},
                // {id: 74, label: "STROBE LIGHT", subtitle: "ON", typeItem: "standard"},
                // {id: 75, label: "TAXI LIGHTS", subtitle: "OFF", typeItem: "standard"},
                // {id: 76, label: "TRANSPONDER", subtitle: "TA/RA", typeItem: "standard"},
                // {id: 77, label: "TFC", subtitle: "PUSH ON", typeItem: "standard"},
                // {id: 78, label: "CLOCK", subtitle: "START", typeItem: "standard"}
            ]
        },
        {
            title: "AFTER TAKE-OFF",
            items: [
                {id: 'b738-44', label: "ENGINE BLEEDS", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-45', label: "PACKS", subtitle: "AUTO", typeItem: "standard"},
                {id: 'b738-46', label: "LANDING LIGHTS", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-47', label: "LANDING GEAR", subtitle: "UP & OFF", typeItem: "standard"},
                {id: 'b738-48', label: "FLAPS", subtitle: "UP, NO LIGHTS", typeItem: "standard"},
                {id: 'b738-49', label: "ALTIMETERS", subtitle: "STD SET, X-CHECKED", typeItem: "standard"},

                // {id: 79, label: "POSITIVE RATE OF CLIMB", subtitle: "GEAR UP", typeItem: "standard"},
                // {id: 80, label: "AUTO-BRAKE", subtitle: "OFF", typeItem: "standard"},
                // {id: 81, label: "ENGINE START SWITCHES", subtitle: "OFF", typeItem: "standard"},
                // {id: 82, label: "GEAR LEVER", subtitle: "OFF", typeItem: "standard"},
                // {id: 83, label: "RWY TURN-OFF LIGHTS", subtitle: "OFF", typeItem: "standard"},
            ]
        },
        // {
        //     title: "CLIMB AND CRUISE CHECKLIST",
        //     items: [
        //         // {id: 84, label: "CMD A or B", subtitle: "ENGAGE", typeItem: "standard"},
        //         //
        //         // {id: 85, label: "Passing Transition Altitude", typeItem: "italic"},
        //         //
        //         // {id: 86, label: "ALTIMETER", subtitle: "SET STD", typeItem: "standard"},
        //         // {id: 87, label: "BELOW 10'000FT", subtitle: "MAX 250 KIAS", typeItem: "standard"},
        //         //
        //         // {id: 88, label: "Passing 10'000 FT", typeItem: "italic"},
        //         //
        //         // {id: 89, label: "ALTIMETER", subtitle: "SET STD", typeItem: "standard"},
        //         // {id: 90, label: "LANDING LIGHTS", subtitle: "OFF", typeItem: "standard"},
        //         // {id: 91, label: "FASTEN SEAT BELTS", subtitle: "AS REQUIRED", typeItem: "standard"},
        //         //
        //         // {id: 92, label: "Cruise", typeItem: "italic"},
        //         //
        //         // {id: 93, label: "ENGINE & INSTRUMENTS", subtitle: "MONITOR", typeItem: "standard"},
        //         // {id: 94, label: "FUEL QUANTITY", subtitle: "CHECK", typeItem: "standard"},
        //     ]
        // },

        {
            title: "DECENT",
            items: [

                {id: 'b738-50', label: "PRESSURIZATION", subtitle: "LAND ALT___", typeItem: "standard"},
                {id: 'b738-51', label: "AUTOBRAKE", subtitle: "___", typeItem: "standard"},
                {id: 'b738-52', label: "LANDING DATA", subtitle: "VREF___, MINIMUMS___", typeItem: "standard"},
                {id: 'b738-53', label: "N1, IAS", subtitle: "CHECKED", typeItem: "standard"},
                {id: 'b738-55', label: "APPROACH BRIEFING", subtitle: "COMPLETED", typeItem: "standard"},
                {id: 'b738-56', label: "RECALL", subtitle: "CHECKED", typeItem: "standard"},
                // { id: 95, label: "Before Top Of Descent", typeItem: "italic" },
                //
                // { id: 96, label: "ATIS / AIRPORT INFO", subtitle: "CHECK", typeItem: "standard" },
                // { id: 97, label: "ALTIMETER", subtitle: "CHECK", typeItem: "standard" },
                // { id: 98, label: "RADIOS", subtitle: "SET", typeItem: "standard" },
                // { id: 99, label: "RESET MCP ALTITUDE", subtitle: "CHECK", typeItem: "standard" },
                // { id: 100, label: "VREF", subtitle: "SET", typeItem: "standard" },
                // { id: 101, label: "LOCALIZER FREQ", subtitle: "SET", typeItem: "standard" },
                // { id: 102, label: "IS LOC COURSE", subtitle: "SET", typeItem: "standard" },
                //
                // { id: 103, label: "Descent", typeItem: "italic" },
                //
                // { id: 104, label: "ANTI-ICE", subtitle: "AS REQUIRED", typeItem: "standard" },
                // { id: 105, label: "LANDING ALTITUDE", subtitle: "CHECK", typeItem: "standard" },
                // { id: 106, label: "RECALL", subtitle: "CHECK", typeItem: "standard" },
                // { id: 107, label: "RADIO ALT / BARO MIN", subtitle: "SET", typeItem: "standard" },
                // { id: 108, label: "AUTO BRAKE", subtitle: "AS REQUIRED", typeItem: "standard" },
                //
                // { id: 109, label: "Passing Transition Altitude", typeItem: "italic" },
                //
                // { id: 110, label: "ALTIMETER", subtitle: "RESET TO LOCAL", typeItem: "standard" },
                //
                // { id: 111, label: "Below 10'000 FT", typeItem: "italic" },
                //
                // { id: 110, label: "SPEED", subtitle: "MAX 250 KIAS", typeItem: "standard" },
                // { id: 111, label: "LANDING LIGHTS", subtitle: "ON", typeItem: "standard" },
                // { id: 112, label: "PASSENGER SIGNS", subtitle: "ON", typeItem: "standard" },
            ]
        },
        {
            title: "APPROACH",
            items: [

                {id: 'b738-57', label: "PASSENGER SIGNS", subtitle: "ON", typeItem: "standard"},
                {id: 'b738-58', label: "ALTIMETERS", subtitle: "___Mb SET, X-CHECKED", typeItem: "standard"},
                // { id: 113, label: "ALTIMETER", subtitle: "CHECK", typeItem: "standard" },
                // { id: 114, label: "LOCALIZER FREQUENCY", subtitle: "CHECK", typeItem: "standard" },
                // { id: 115, label: "LOCALIZER COURSE", subtitle: "CHECK", typeItem: "standard" },
                // { id: 116, label: "APP", subtitle: "ARM", typeItem: "standard" },
                // { id: 117, label: "GLIDESLOPE ALIVE", subtitle: "GEAR DOWN", typeItem: "standard" },
                // { id: 118, label: "FLAPS", subtitle: "15", typeItem: "standard" },
                // { id: 119, label: "SPEED BRAKE", subtitle: "ARM", typeItem: "standard" },
                // { id: 120, label: "2ND AUTOPILOT", subtitle: "ARM", typeItem: "standard" },
                // { id: 121, label: "ENGINE START SWITCHES", subtitle: "CONT", typeItem: "standard" },
                // { id: 122, label: "LANDING FLAPS", subtitle: "SET", typeItem: "standard" },
            ]
        },
        {
            title: "LANDING CHECKLIST",
            items: [
                {id: 'b738-59', label: "CABIN NOTIFICATION", subtitle: "COMPLETED", typeItem: "standard"},
                {id: 'b738-60', label: "ENGINE START SWITCHES", subtitle: "CONT", typeItem: "standard"},
                {id: 'b738-61', label: "SPEED BRAKE", subtitle: "ARMED, GREEN LIGHT", typeItem: "standard"},
                {id: 'b738-62', label: "LANDING GEAR", subtitle: "DOWN, 3 GREEN", typeItem: "standard"},
                {id: 'b738-63', label: "FLAPS", subtitle: "___, GREEN LIGHT", typeItem: "standard"},
                // { id: 123, label: "GO-AROUND ALTITUDE", subtitle: "SET", typeItem: "standard" },
                // { id: 124, label: "RWY TURN-OFF LIGHTS", subtitle: "ON", typeItem: "standard" },
                // { id: 125, label: "LANDING GEAR", subtitle: "CHECK DOWN", typeItem: "standard" },
                // { id: 126, label: "AUTOPILOT", subtitle: "AS REQUIRED", typeItem: "standard" },
                // { id: 127, label: "AUTO-THRUST", subtitle: "AS REQUIRED", typeItem: "standard" }
            ]
        },
        {
            title: "SHUTDOWN",
            items: [
                {id: 'b738-64', label: "IRS MODE SELECTORS", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-65', label: "FUEL PUMPS", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-66', label: "FASTEN BELTS", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-67', label: "WINDOW HEAT", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-68', label: "PROBE HEAT", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-69', label: "ANTI-ICE", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-70', label: "ANTI-ICE", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-71', label: "HYDRAULIC PANEL", subtitle: "SET", typeItem: "standard"},
                {id: 'b738-72', label: "AIR COND", subtitle: "AS REQUIRED", typeItem: "standard"},
                {id: 'b738-73', label: "EXTERIOR LIGHT", subtitle: "AS REQUIRED", typeItem: "standard"},
                {id: 'b738-74', label: "ENGINE START SWITCHES", subtitle: "AUTO", typeItem: "standard"},
                {id: 'b738-75', label: "ENGINE START SWITCHES", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-76', label: "AUTO BRAKE", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-77', label: "FLAPS", subtitle: "UP, NO LIGHTS", typeItem: "standard"},
                {id: 'b738-78', label: "PARKING BRAKE", subtitle: "AS REQUIRED", typeItem: "standard"},
                {id: 'b738-79', label: "ENGINE START LEVERS", subtitle: "CUTOFF", typeItem: "standard"},
                {id: 'b738-80', label: "TRANSPONDER", subtitle: "STBY", typeItem: "standard"},
                {id: 'b738-81', label: "WEATHER RADAR", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-82', label: "* INSTRUMENT LIGHTS", subtitle: "OFF", typeItem: "standard"},
                // { id: 128, label: "THRUST REVERSE", subtitle: "ENGAGE", typeItem: "standard" },
                // { id: 129, label: "AUTOPILOT", subtitle: "OFF", typeItem: "standard" },
                // { id: 130, label: "AUTOTHRUST", subtitle: "OFF", typeItem: "standard" },
                // { id: 131, label: "AT 60 KTS", subtitle: "REV THRUST TO IDLE", typeItem: "standard" },
                // { id: 132, label: "AT 30 KTS", subtitle: "AUTO-BRAKE DISENGAGE", typeItem: "standard" }
            ]
        },
        // {
        //     title: "AFTER LANDING CHECKLIST",
        //     items: [
        //         // { id: 133, label: "TRANSPONDER", subtitle: "AS REQUIRED", typeItem: "standard" },
        //         // { id: 134, label: "FLAPS", subtitle: "RETRACT", typeItem: "standard" },
        //         // { id: 135, label: "SPEED BRAKE", subtitle: "DOWN", typeItem: "standard" },
        //         // { id: 136, label: "LANDING LIGHTS", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 137, label: "POSITION LIGHTS", subtitle: "STEADY", typeItem: "standard" },
        //         // { id: 138, label: "TAXI LIGHTS", subtitle: "ON", typeItem: "standard" },
        //         // { id: 139, label: "ANTI ICE", subtitle: "AS REQUIRED", typeItem: "standard" },
        //         // { id: 140, label: "APU", subtitle: "START", typeItem: "standard" },
        //         // { id: 141, label: "PROBE HEAT", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 142, label: "ENGINE START SWITCHES", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 143, label: "AUTO-BRAKE", subtitle: "OFF", typeItem: "standard" },
        //         //
        //         // { id: 144, label: "Taxi To Gate", typeItem: "italic" },
        //         //
        //         // { id: 145, label: "RWY TURNOFF LIGHTS", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 146, label: "APU GEN", subtitle: "ON", typeItem: "standard" },
        //         // { id: 147, label: "TAXI LIGHTS", subtitle: "OFF", typeItem: "standard" },
        //     ]
        // },
        // {
        //     title: "PARKING / SHUTDOWN CHECKLIST",
        //     items: [
        //         // { id: 148, label: "PARKING BRAKES", subtitle: "SET", typeItem: "standard" },
        //         // { id: 149, label: "ENGINE START LEVERS", subtitle: "CUTOFF", typeItem: "standard" },
        //         // { id: 150, label: "GROUND OPERATIONS", subtitle: "AS REQUIRED", typeItem: "standard" },
        //         // { id: 151, label: "PASSENGER SIGNS", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 152, label: "APU BLEED AIR", subtitle: "ON", typeItem: "standard" },
        //         // { id: 153, label: "ANTI COLLISION LIGHT", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 154, label: "FUEL PUMPS", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 155, label: "ANTI-ICE", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 156, label: "HYDRAULIC PUMPS", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 157, label: "ISOLATION VALVE", subtitle: "OPEN", typeItem: "standard" },
        //         // { id: 158, label: "FLIGHT DIRECTOR", subtitle: "OFF", typeItem: "standard" },
        //         // { id: 159, label: "GND POWER", subtitle: "ESTABLISH", typeItem: "standard" },
        //         // { id: 160, label: "DOORS", subtitle: "OPEN", typeItem: "standard" }
        //     ]
        // },
        {
            title: "SECURE",
            items: [
                {id: 'b738-83', label: "EMERGENCY EXIT LIGHT", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-84', label: "PACKS", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-85', label: "APU/GROUND POWER", subtitle: "OFF", typeItem: "standard"},
                {id: 'b738-86', label: "BATTERY (after APU shutdown 60 sec delay)", subtitle: "OFF", typeItem: "standard"},
                // { id: 161, label: "IRS MODE SELECTORS", subtitle: "OFF", typeItem: "standard" },
                // { id: 162, label: "APU", subtitle: "OFF", typeItem: "standard" },
                // { id: 163, label: "EMERGENCY EXIT LIGHTS", subtitle: "OFF", typeItem: "standard" },
                // { id: 164, label: "WINDOW HEAT", subtitle: "OFF", typeItem: "standard" },
                // { id: 165, label: "PACKS", subtitle: "OFF", typeItem: "standard" },
                // { id: 166, label: "STANDBY POWER", subtitle: "OFF", typeItem: "standard" },
                // { id: 167, label: "BATTERY", subtitle: "OFF", typeItem: "standard" }
            ]
        },
        // {
        //     title: "AIRPORT BAR CHECKLIST",
        //     items: [
        //         { id: 168, label: "ORDER DRINK", subtitle: "CHECK", typeItem: "standard" }
            // ]
        // }
    ];

    // Функция для создания HTML-элементов чеклиста
    function createChecklistElement(checklist) {
        const checklistElement = document.createElement("div");
        checklistElement.className = "block-item";

        const titleElement = document.createElement("div");
        titleElement.className = "block-item__title";
        titleElement.textContent = checklist.title;
        checklistElement.appendChild(titleElement);

        const contentElement = document.createElement("div");
        contentElement.className = "block-item__content";

        checklist.items.forEach(item => {
            if (item.typeItem === 'italic') {
                var italicClassSpan = 'italic';
            }

            const itemElement = document.createElement("div");
            itemElement.className = "block-item__content__item";
            itemElement.setAttribute("data-id-item-checklist", item.id);

            const checkboxLabel = document.createElement("label");
            if (item.typeItem !== 'italic') {
                checkboxLabel.className = "custom-checkbox";
                const checkboxInput = document.createElement("input");
                checkboxInput.type = "checkbox";

                checkboxInput.setAttribute("data-id", item.id);
                checkboxLabel.appendChild(checkboxInput);
            } else {
                checkboxLabel.style.width = '100%';
                checkboxLabel.style.textAlign = 'center';
            }

            checkboxLabel.innerHTML += `<span class="` + italicClassSpan + `">${item.label}</span>`;
            itemElement.appendChild(checkboxLabel);

            if (item.typeItem === "standard") {
                const dottedElement = document.createElement("div");
                dottedElement.className = "dotted";
                itemElement.appendChild(dottedElement);

                const subtitleElement = document.createElement("div");
                subtitleElement.className = "subtitle";
                subtitleElement.textContent = item.subtitle;
                itemElement.appendChild(subtitleElement);
            }

            contentElement.appendChild(itemElement);
        });

        checklistElement.appendChild(contentElement);

        return checklistElement;
    }

    // Разделение данных на левую и правую колонки
    const leftColumnData = checklistData.slice(0, Math.ceil(checklistData.length / 2));
    const rightColumnData = checklistData.slice(Math.ceil(checklistData.length / 2));

    // Добавление элементов в HTML
    const leftColumn = document.getElementById("leftColumn");
    leftColumnData.forEach(checklist => {
        leftColumn.appendChild(createChecklistElement(checklist));
    });

    const rightColumn = document.getElementById("rightColumn");
    rightColumnData.forEach(checklist => {
        rightColumn.appendChild(createChecklistElement(checklist));
    });


    setTimeout(function () {

        var checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                var blockItem = this.closest('.block-item__content__item');
                if (this.checked) {
                    blockItem.classList.add('checked');
                } else {
                    blockItem.classList.remove('checked');
                }
            });
        });

        const checklist = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

        checklist.forEach(function (checkbox) {
            checkbox.addEventListener('change', function (event) {
                const itemId = event.target.dataset.id;
                const isChecked = event.target.checked;
                localStorage.setItem(itemId, isChecked);
            });
        });

        // Загрузка состояний чекбоксов из local storage при загрузке страницы
        function loadChecklistState() {
            var checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

            checkboxes.forEach(function (checkbox) {
                var item = checkbox.closest('.block-item__content__item');
                const itemId = checkbox.dataset.id;
                const isChecked = localStorage.getItem(itemId) === 'true';
                checkbox.checked = isChecked;

                if (isChecked) {
                    item.classList.add('checked');
                } else {
                    item.classList.remove('checked');
                }
            });
        }

        document.getElementById('clearLocalStorageButton').addEventListener('click', function () {
            localStorage.clear();

            loadChecklistState();

            alert('Checklist is clear');
        });

        loadChecklistState();
    }, 1000)
});