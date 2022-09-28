import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _Clustergrammer from './clustergrammer';

// const Clustergrammer = ({
//   width = 800, height = 500, id, ref, ...props
// }) => {
//   const [mounted, setMounted] = useState(false)

//   const draw = () => {
//     _Clustergrammer({
//       ...props,
//       root: `#react-clustergrammer-box-${this.props.id}`,
//     });
//   }

//   useEffect(() => {
//     if (!mounted) {
//       setMounted(true)
//       draw()
//     }
//   }, [])

//   return (
//     <div
//       id={`react-clustergrammer-box-${this.props.id}`}
//       style={{ width: `${width}px`, height: `${height}px` }}
//     />
//   )
// }

// Clustergrammer.propTypes = {
//   width: PropTypes.number,
//   height: PropTypes.number,
//   id: PropTypes.string,
//   ref: PropTypes.any
// }

// export default Clustergrammer

export default class Clustergrammer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    id: PropTypes.string,
    ref: PropTypes.any
  };

  static defaultProps = {
    width: 800,
    height: 500,
  };

  draw = () => {
    const { width, height, ...clustergrammerProps } = this.props;
    _Clustergrammer({
      ...clustergrammerProps,
      root: `#react-clustergrammer-box-${this.props.id}`,
    });
  }

  componentDidMount() {
    this.draw();
  }

  render() {
    const { width, height, id, ref } = this.props

    return (
      <div
        id={`react-clustergrammer-box-${this.props.id}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    )
  }
}
