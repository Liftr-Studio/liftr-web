import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
  contentWrapper,
  imageWrapper,
  isFlipped,
  wrapper,
} from "./Media.module.css"

const Media = ({ children, flip, image }) => {
  const classes = classNames(
    wrapper,
    {
      [ isFlipped ]: flip,
    }
  )

  return (
    <div className={classes}>
      <div className={imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={contentWrapper}>
        {children}
      </div>
    </div>
  )
}

Media.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  flip: PropTypes.bool,
  image: PropTypes.string.isRequired,
}

Media.defaultProps = {
  flip: false,
}

export { Media }
