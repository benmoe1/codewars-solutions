import numbers
def f(n):
    if isinstance(n, numbers.Integral) and n > 0:
        return (n * (n+1)) / 2
    return None
      #https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers
