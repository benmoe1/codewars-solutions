<?
function odd_or_even(array $a): string
{
    $array_sum = array_reduce($a, function ($carry, $item) {
        $carry += $item;
        return $carry;
    });

    if ($array_sum % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
// http://www.codewars.com/kata/5949481f86420f59480000e7/train/php
