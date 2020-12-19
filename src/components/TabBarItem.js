import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { withRouter } from 'react-router-native';

import Theme from '../Theme';

class TabBarItem extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  };

  render() {
    const selected = this.props.history.location.pathname.startsWith(
      this.props.route
    );

    const labelStyles = {};
    if (selected) {
      labelStyles.fontWeight = '700';
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.redirect_();
        }}>
        <styles.Host style={this.props.style}>
          <styles.Icon
            name={this.props.icon}
            size={19}
            color={Theme.Colors.SoftWhite}
          />
          <styles.Label style={labelStyles}>{this.props.label}</styles.Label>
        </styles.Host>
      </TouchableWithoutFeedback>
    );
  }

  redirect_() {
    this.props.history.push(this.props.route);
  }
}

const styles = {
  Host: styled(View)`
    align-items: center;
    display: flex;
    flex-direction: column;
  `,

  Icon: styled(FontAwesome5)``,

  Label: styled(Text)`
    color: ${Theme.Colors.SoftWhite};
    font-size: ${Theme.Fonts.NavBarItem.Size};
    margin-top: 10px;
  `,
};

export default withRouter(TabBarItem);