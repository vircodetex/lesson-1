import React from "react";
import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/c89/hat-1422640.jpg",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/193/jacket-1476507.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/f23/blue-suede-shoes-1-1478929.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/f4a/dancing-women-1431085.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/74a/man-silhouette-1525996.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
