import { Component } from "react";
import "./index.css";

const reviewsList = [
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/wade-warren-img.png",
    username: "Wade Warren",
    companyName: "Rang",
    description:
      "The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    username: "Adrian Williams",
    companyName: "WheelO",
    description:
      "Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    username: "Sherry Johnson",
    companyName: "MedX",
    description:
      "I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png",
    username: "Ronald Jones",
    companyName: "Infinos Tech",
    description:
      "I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.",
  },
];

let IndexId = 0;

class Review extends Component {
  state = {
    initialReview: reviewsList[IndexId],
  };

  leftSlider = () => {
    if (IndexId > 0) {
      IndexId -= 1;
      this.setState({
        initialReview: reviewsList[IndexId],
      });
    }
  };

  rightSlider = () => {
    if (IndexId < reviewsList.length - 1) {
      IndexId += 1;
      this.setState({
        initialReview: reviewsList[IndexId],
      });
    }
  };

  render() {
    const { initialReview } = this.state;
    const { imgUrl, username, companyName, description } = initialReview;
    return (
      <div className="container">
        <div className="review-card">
          <h1>Reviews</h1>

          <div className="reviw-flex-card">
            <button
              type="button"
              className="arrow-btn"
              onClick={this.leftSlider}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>

            <div className="review-content">
              <img src={imgUrl} alt={username} />
              <h1>{username}</h1>
              <b>{companyName}</b>
              <p>{description}</p>
            </div>
            <button
              type="button"
              className="arrow-btn"
              onClick={this.rightSlider}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Review;
