import React from 'react'

interface IProps {
  images: any[]
}

const InstagramFeed: React.FC<IProps> = (props: IProps) => (
  <section className="instagram-feed">
    <div>
      {props.images.map((image) => (
        <div key={image.id}>
          <img src={image.display_url} alt="test" />
        </div>
      ))}
    </div>
  </section>
)

export default InstagramFeed
