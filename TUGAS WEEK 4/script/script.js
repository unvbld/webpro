        function loadPage(page) {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                document.getElementById("main-content").innerHTML = this.responseText;
            }
            xhttp.open("GET", page, true);
            xhttp.send();
        }

        window.onload = function() {
            // Load default content when page is first loaded (home.html)
            loadPage('./datadiri/home.html');
        }