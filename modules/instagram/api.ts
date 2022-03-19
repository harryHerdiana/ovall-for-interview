import Instagram from 'instagram-web-api'

const client = new Instagram({
  username: process.env.INSTA_USERNAME,
  password: process.env.INSTA_SECRET
})

const replaceBaseUrl = (url: string) =>
  url.replace('instagram.feoh1-1.fna.fbcdn.net', 'scontent.cdninstagram.com')

class InstagramApi {
  public async getImages() {
    try {
      await client.login()
      const response = await client.getPhotosByUsername({
        username: 'ovallskincare'
      })

      return response.user.edge_owner_to_timeline_media.edges.map((edge) => ({
        ...edge.node,
        display_url: replaceBaseUrl(edge.node.display_url)
      }))
    } catch (e) {
      console.log('e', e.message)
      return null
    }
  }
}

export default new InstagramApi()
