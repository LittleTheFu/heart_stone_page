import React, { PropTypes } from 'react';
import { Spin, Card } from 'antd';
import styles from './CardBack.less';

class CardBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: props.imgUrl,
                   isLoading: true,
                   doClick: props.doClick,
                 };
  }

  handleImageLoaded() {
    this.setState({ isLoading: false });
  }

  handleImageErrored() {
    this.setState({ url: 'http://placehold.it/307x465',
                    isLoading: false });
  }

  handleHoverIn() {
    if( this.props.anmUrl ) {
      this.setState( { url: this.props.anmUrl } );
    }
  }

  handleHoverOut() {
    if( this.props.imgUrl ) {
      this.setState( { url: this.props.imgUrl } );
    }
  }

  render() {
    return (
      <div className={styles.lay}>
        <Spin tip="Loading..." spinning={this.state.isLoading}>
          <img alt="cardback"
            src={this.state.url}
            width="100%"
            height="100%"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
            onMouseEnter={this.handleHoverIn.bind(this)}
            onMouseLeave={this.handleHoverOut.bind(this)}
          />
        </Spin>
        <div className={styles.name}>
          <h3>{this.props.name}</h3>
        </div>
    </div>
    )
  }
};

CardBack.propTypes = {
  imgUrl: '',
  name: '',
  doClick: PropTypes.func,
};

export default CardBack;