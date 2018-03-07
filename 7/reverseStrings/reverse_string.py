def string_reverse(string):
    """
    takes a string as parameter and returns the string reversed
    """
    string_arr = list(string)
    str_arr_reversed = ''.join(string_arr[::-1])
    return str_arr_reversed


print(string_reverse("hello"))  #olleh
