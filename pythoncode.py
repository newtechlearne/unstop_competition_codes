def reverse_rows(matrix):
    return [row[::-1] for row in matrix]

# Example usage
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

reversed_matrix = reverse_rows(matrix)
print("Original Matrix:")
for row in matrix:
    print(row)

print("\nReversed Matrix:")
for row in reversed_matrix:
    print(row)  explain code
