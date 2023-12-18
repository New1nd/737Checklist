document.addEventListener('DOMContentLoaded', function () {
    const checklistData = [
        {
            title: "COCKPIT PREPARATION",
            items: [
                {id: 'a320-1', label: "GEAR PING and COVERS", subtitle: "REMOVED", typeItem: "standard"},
                {id: 'a320-2', label: "FUEL QUANTITY", subtitle: "___KG", typeItem: "standard"},
                {id: 'a320-3', label: "SEAT BELTS", subtitle: "ON", typeItem: "standard"},
                {id: 'a320-4', label: "ADIRS", subtitle: "NAV", typeItem: "standard"},
                {id: 'a320-5', label: "BARO REF", subtitle: "____", typeItem: "standard"},

            ]
        },
        {
            title: "BEFORE START",
            items: [
                {id: 'a320-6', label: "PARKING BRAKE", subtitle: "SET", typeItem: "standard"},
                {id: 'a320-7', label: "T.O. SPEEDS & THRUST", subtitle: "____", typeItem: "standard"},
                {id: 'a320-8', label: "WINDOWS", subtitle: "CLOSED", typeItem: "standard"},
                {id: 'a320-9', label: "BEACON", subtitle: "ON", typeItem: "standard"},
            ]
        },
        {
            title: "AFTER START",
            items: [
                {id: 'a320-10', label: "ANTI ICE", subtitle: "____", typeItem: "standard"},
                {id: 'a320-11', label: "ECAM STATUS", subtitle: "CHECKED", typeItem: "standard"},
                {id: 'a320-12', label: "PITCH TRIM", subtitle: "__%", typeItem: "standard"},
                {id: 'a320-13', label: "RUDDER TRIM", subtitle: "NEUTRAL", typeItem: "standard"},
            ]
        },
        {
            title: "TAXI",
            items: [
                {id: 'a320-14', label: "FLIGHT CONTROL", subtitle: "CHECKED", typeItem: "standard"},
                {id: 'a320-15', label: "FLAPS SETTING", subtitle: "CONF __", typeItem: "standard"},
                {id: 'a320-16', label: "RADAR & PRED W/S", subtitle: "ON & AUTO", typeItem: "standard"},
                {id: 'a320-17', label: "ENG MODE SEL", subtitle: "____", typeItem: "standard"},
                {id: 'a320-18', label: "ECAM MEMO", subtitle: "TO NO BLUE", typeItem: "standard"},
                {id: 'a320-19', label: "ECAM MEMO", subtitle: "TO NO BLUE", typeItem: "standard"},

                {id: 'a320-20', label: "AUTO BRK MAX", subtitle: "", typeItem: "italic"},
                {id: 'a320-21', label: "SIGNS ON", subtitle: "", typeItem: "italic"},
                {id: 'a320-22', label: "CABIN READY", subtitle: "", typeItem: "italic"},
                {id: 'a320-23', label: "SPLRS ARM", subtitle: "", typeItem: "italic"},
                {id: 'a320-24', label: "FLAPS TO", subtitle: "", typeItem: "italic"},
                {id: 'a320-25', label: "TO CONFIG NORM", subtitle: "", typeItem: "italic"},
            ]
        },
        {
            title: "LINE UP",
            items: [
                {id: 'a320-27', label: "T.O RWY", subtitle: "___", typeItem: "standard"},
                {id: 'a320-28', label: "TCAS", subtitle: "TA/RA", typeItem: "standard"},
                {id: 'a320-29', label: "PACKS 1 & 2", subtitle: "___", typeItem: "standard"},
            ]
        },
        {
            title: "<< DEPARTURE CHANGE >>",
            items: [
                {id: 'a320-30', label: "RWY & SID", subtitle: "____", typeItem: "standard"},
                {id: 'a320-31', label: "FLAPS SETTING", subtitle: "CONF____", typeItem: "standard"},
                {id: 'a320-32', label: "T.0 SPEEDS & THRUST", subtitle: "___", typeItem: "standard"},
                {id: 'a320-33', label: "FCU ALT", subtitle: "___", typeItem: "standard"},
            ]
        },
        {
            title: "APPROACH",
            items: [
                {id: 'a320-34', label: "BARO REF", subtitle: "____", typeItem: "standard"},
                {id: 'a320-35', label: "SEAT BELTS", subtitle: "ON", typeItem: "standard"},
                {id: 'a320-36', label: "MINIMUM", subtitle: "___", typeItem: "standard"},
                {id: 'a320-37', label: "AUTO BRAKE", subtitle: "___", typeItem: "standard"},
                {id: 'a320-38', label: "ENG MODE SEL", subtitle: "___", typeItem: "standard"},
            ]
        },
        {
            title: "LANDING",
            items: [
                {id: 'a320-39', label: "ECAM MEMO", subtitle: "LGD NO BLUE", typeItem: "standard"},
                {id: 'a320-40', label: "LDG GEAR DN", subtitle: "ON", typeItem: "italic"},
                {id: 'a320-41', label: "SIGNS ON", subtitle: "ON", typeItem: "italic"},
                {id: 'a320-42', label: "CABIN READY", subtitle: "", typeItem: "italic"},
                {id: 'a320-43', label: "SPLRS ARM", subtitle: "", typeItem: "italic"},
                {id: 'a320-44', label: "FLAPS SET", subtitle: "", typeItem: "italic"},
            ]
        },
        {
            title: "AFTER LANDING",
            items: [
                {id: 45, label: "RADAR & PRED W/S", subtitle: "OFF", typeItem: "standard"},
            ]
        },
        {
            title: "PARKING",
            items: [
                {id: 'a320-46', label: "PARK BRK OR CHOCKS", subtitle: "SET", typeItem: "standard"},
                {id: 'a320-47', label: "ENGINES", subtitle: "OFF", typeItem: "standard"},
                {id: 'a320-48', label: "WING LIGHTS", subtitle: "OFF", typeItem: "standard"},
                {id: 'a320-49', label: "FUEL PUPMS", subtitle: "OFF", typeItem: "standard"},
            ]
        },
        {
            title: "SECURING THE AIRCRAFT",
            items: [
                {id: 'a320-50', label: "OXYGEN", subtitle: "OFF", typeItem: "standard"},
                {id: 'a320-51', label: "EMER EXIT LT", subtitle: "OFF", typeItem: "standard"},
                {id: 'a320-52', label: "EFBs", subtitle: "OFF", typeItem: "standard"},
                {id: 'a320-53', label: "BATTERIES", subtitle: "OFF", typeItem: "standard"},
            ]
        },
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