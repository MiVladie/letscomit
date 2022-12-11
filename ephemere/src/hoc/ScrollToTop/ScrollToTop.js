import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) 
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);