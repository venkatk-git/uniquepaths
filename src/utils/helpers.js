export function findUniquePaths(m, n) {
  const paths = [];

  function helper(path, x, y) {
    if (x === m - 1 && y === n - 1) {
      paths.push([...path, [x, y]]);
      return;
    }

    path.push([x, y]);

    if (x + 1 < m) helper(path, x + 1, y);

    if (y + 1 < n) helper(path, x, y + 1);

    path.pop();
  }

  helper([], 0, 0);

  return paths;
}
