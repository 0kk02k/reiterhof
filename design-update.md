🎨 Design-Briefing: Bildsektion „Mühlenberg“
Design-Vision:
Die Sektion soll das Gefühl eines liebevoll gepflegten Scrapbooks oder eines hochwertigen Hof-Tagebuchs vermitteln. Wir verzichten auf starre, digitale Raster und setzen stattdessen auf organische Haptik durch Texturen (Leinen), unperfekte Ränder (Büttenpapier/Abrisskanten) und ein lebendiges, asymmetrisches Layout.

1. Der Hintergrund: Die Leinen-Textur
Der Hintergrund darf nicht zu dunkel oder dominant sein, er soll nur unterbewusst wirken.

Farbe: Ein warmer, heller Off-White- oder Hafer-Ton (z.B. Hex-Code #F9F8F5 oder #F2EFE9). Vermeide reines Weiß.

Textur: Nutze ein nahtloses (seamless) Leinen- oder feines Aquarellpapier-Muster.

Umsetzung: Die Textur sollte als Hintergrundbild (PNG/WebP) mit reduzierter Deckkraft (ca. 10-15%) über die Hintergrundfarbe gelegt werden. Alternativ mit dem CSS-Befehl mix-blend-mode: multiply; arbeiten, damit sie sich natürlich mit der Hintergrundfarbe verbindet.

2. Die Bilder: Organische Abrisskanten
Wir wollen keine harten Linien und auch keine perfekten runden Ecken (wie auf dem ursprünglichen Bild). Die Kanten sollen wirken wie hochwertiges, leicht gerissenes Papier oder Büttenpapier.

Maskierung (Das Wichtigste!): Die Bilder werden nicht in Photoshop mit Rändern versehen, sondern im Web per SVG-Maske (CSS: mask-image) in Form gebracht. So können die Bilder im CMS jederzeit getauscht werden, aber die unregelmäßige „Abrisskante“ bleibt erhalten. Tipp für den Entwickler: Erstelle 3-4 verschiedene SVG-Formen mit leicht zittrigen, organischen Rändern, die zufällig auf die Bilder angewendet werden.

Schatten (Tiefenwirkung): Damit die Bilder sich vom Leinenhintergrund abheben, bekommen sie einen sehr weichen, diffusen Schatten.

CSS-Empfehlung: box-shadow: 0px 10px 30px rgba(90, 75, 60, 0.1); (Nutze ein dunkles Braun statt Schwarz für den Schatten, das wirkt natürlicher).

3. Das Layout: Kuratierte Asymmetrie
Schluss mit dem Kachel-Look. Die Bilder sollen wirken, als lägen sie entspannt auf einem Tisch.

Das Grid: Nutze ein CSS-Grid, aber lasse die Bilder über mehrere Spalten und Reihen springen. Einige Bilder sind im Querformat, andere im Hochformat.

Weißraum & Überlagerung: Lass viel Platz zwischen den Bildern (luftig!), aber erlaube an 1-2 Stellen, dass sich Bilder leicht überlappen (z.B. die Ecke des Pferdebildes liegt leicht über dem Rand des Landschaftsbildes). Das bricht die Konstruktion auf.

Rotation: Rotiere die Bilder minimal. Bild A um -1.5 Grad, Bild B um +2 Grad. Das unterstützt den "liegengelassenen" Look enorm.

4. Typografie & Interaktion
Die Texte auf den Bildern (wie im Original) stören die organische Wirkung.

Bildunterschriften: Ziehe die Texte unter oder neben die Bilder. Stelle dir vor, es wären kleine, handgeschriebene Notizen neben den Fotos. Nutze hierfür eine gut lesbare Serifenschrift (z.B. Playfair Display oder Merriweather), um den klassischen Charakter zu betonen.

Hover-Effekt (Beim Drüberfahren mit der Maus):

Kein grelles Aufblinken!

Wenn die Maus über ein Bild fährt, hebt es sich leicht an (der Schatten wird etwas größer und weicher: transform: translateY(-5px);) und das Bild zoomt innerhalb der Abrisskanten-Maske ganz sanft und langsam um 3% heran. Das wirkt extrem edel.