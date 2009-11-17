<?php

session_start();
if (!empty($_POST['name'])) {
  $_SESSION['name'] = $_POST['name'];
  header('Location: index.php');
}
else if (!empty($_GET['action']) && $_GET['action'] == 'quit') {
  unset($_SESSION['name']);
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Kompetencia tesztek</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

  <link rel="stylesheet" href="stylesheets/style.css" type="text/css" media="screen" />
</head>

<body>
<h1>Kompetencia tesztek</h1>
<?php if (empty($_SESSION['name'])): ?>
<form action="" method="post">
<p>Kérjük adja meg a nevét: <input type="text" name="name" id="name" /> <input type="submit" value="ok" /></p>
</form>
<?php else: ?>
<p>Üdvözöljük, <?php echo $_SESSION['name']; ?>! Kérjük válasszon az alábbi tesztek közül.</p>
<ul>
  <li><a href="performance-expectation.html">teljesítmény-elvárás</a></li>
  <li><a href="image_ordering.html">képrendezés</a></li>
  <li><a href="square_puzzle.html">négyzetkirakás</a></li>
  <li><a href="road_planning.html">útvonaltervezés</a></li>
  <li><a href="missing_numbers.html">hiányzó szám</a></li>
  <li><a href="missing_picture.html">hiányzó ábra</a></li>
  <li><a href="odd_word_out.html">kakukktojás</a></li>
  <li><a href="e_accents.html">e-betűk</a></li>
  <li><a href="second_jumps.html">figyelem - vigilancia</a></li>
</ul>
<p><a href="?action=quit">Kilépés</a></p>
<?php endif; ?>
</body>
</html>
