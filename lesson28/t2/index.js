export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(innerNode => markFavorites(innerNode, favorites))
  }
}