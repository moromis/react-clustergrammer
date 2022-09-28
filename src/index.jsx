import _Clustergrammer from 'clustergrammer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Clustergrammer = ({
  width = 800, height = 500, id, ref, ...props
}) => {
  const [mounted, setMounted] = useState(false)

  const draw = () => {
    _Clustergrammer({
      ...props,
      root: `#react-clustergrammer-box-${this.props.id}`,
    });
  }

  useEffect(() => {
    if (!mounted) {
      setMounted(true)
      draw()
    }
  }, [])

  return (
    <div
      id={`react-clustergrammer-box-${this.props.id}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}

Clustergrammer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  id: PropTypes.string,
  ref: PropTypes.any
}

export default Clustergrammer
