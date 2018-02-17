<?php
function nbDig($n, $d)
{
    $timesOccured = 0;
    for ($i = 0; $i <= $n; $i++) {
        $squaredToArray = str_split($i ** 2);
        foreach ($squaredToArray as $value) {
            if (intval($value) === $d) {
                $timesOccured += 1;
            }
        }
    }
    return $timesOccured;
}
// https://www.codewars.com/kata/count-the-digit/php