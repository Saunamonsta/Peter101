const erwachsen = document.getElementById('erwachsen');

erwachsen.addEventListener('click', function(event) {
    // Verhindere die Standardaktion des Links (das direkte Navigieren im selben Tab)
    event.preventDefault(); 

    // Zeige ein Bestätigungsfenster an
    const bestatigt = confirm("Dies ist eine 18+ Playlist. Bist du dir sicher, dass du fortfahren möchtest?");

    // Überprüfe, ob der Benutzer bestätigt hat
    if (bestatigt) {
        // Wenn bestätigt, öffne die URL des Links in einem neuen Tab/Fenster
        // Der zweite Parameter '_blank' sorgt dafür, dass ein neuer Tab geöffnet wird.
        window.open(erwachsen.href, '_blank');
    } else {
        // Optional: Nachricht in der Konsole, wenn der Zugriff abgebrochen wird.
        console.log("Zugriff auf 18+ Playlist abgebrochen.");
    }
});