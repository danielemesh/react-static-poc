import axios from 'axios'

export default {
  //bundleAnalyzer: true,
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data: photos } = await axios.get('http://jsonplaceholder.typicode.com/photos?albumId=1');
    
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getProps: () => ({
            post,
          }),
        })),
      },
      {
        path     : '/photos',
        component: 'src/containers/Photos',
        getProps : () => ({
          photos
        })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
