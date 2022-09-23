// export
 

const favorites = ['id-2', 'id-4'];

const tree = {
  id: 'id-1',
  names: 'a',
  nodes : [
    {
      id: 'id-3',
      names: 'Food',
      nodes: [
        {
          id: 'id-8',
          names: 'Drink',
          nodes: [] 
        },
        {
          id: 'id-4',
          names: 'Carrot',
          nodes: []
        }
      ]  
    },
    {
      id: 'id-7',
      names: 'Water',
      nodes: []
    }
  ]
}

const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(innerNode => markFavorites(innerNode, favorites))
  }
}

console.log(markFavorites(tree, favorites));