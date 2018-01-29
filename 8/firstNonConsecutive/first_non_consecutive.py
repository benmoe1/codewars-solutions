"""
Checks for non consecutive integers
"""


def first_non_consecutive(arr):
    """
    takes an array of integer and returns first non consecutive integer
    or , if consecutive, string "consecutive"
    """

    for index in range(len(arr) - 1):
        if arr[index] + 1 != arr[index + 1]:
            return arr[index + 1]
    return 'consecutive'


print(first_non_consecutive([1, 2, 3, 4, 5, 6, 7, 8, 12]))  # 12
print(first_non_consecutive([1, 2, 3, 4, 5, 6, 7, 8]))  # "consecutive"
